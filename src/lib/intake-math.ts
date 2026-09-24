/**
 * Intake arithmetic for the marketing page calculator.
 * Mirrors the free worksheet: revenue and gross-profit ceilings,
 * not a forecast. The management fee is a flat $3,000. Ad spend is extra.
 */

export const MANAGEMENT_FEE = 3000;

export type IntakeInput = {
  jobValue: number | null;
  closeRatePct: number | null;
  lifetimeJobs: number | null;
  monthlyAdSpend: number | null;
  marginPct: number | null;
};

export type IntakeResult = {
  issues: string[];
  /** Lifetime revenue expected from one lead, if the inputs held. */
  revenuePerLead: number | null;
  /** Lifetime gross profit expected from one lead. Null until margin is set. */
  profitPerLead: number | null;
  /** First-job gross profit × close rate. The worksheet's conservative example. */
  firstJobAllowableCpl: number | null;
  /** Closed jobs whose revenue equals the fee plus ad spend. */
  jobsToCoverRevenue: number | null;
  /** Closed jobs whose gross profit equals the fee plus ad spend. */
  jobsToCoverProfit: number | null;
  /** True when the revenue job count was rounded up. */
  jobsRounded: boolean;
  monthTotal: number | null;
  feeOnlyJobs: number | null;
};

function finite(n: number | null): n is number {
  return n !== null && Number.isFinite(n);
}

/** Blank stays null. Strips currency marks and commas. */
export function parseIntakeNumber(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const n = Number(trimmed.replace(/[$,%\s,]/g, ""));
  if (!Number.isFinite(n)) return null;
  return n;
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function intakeMath(input: IntakeInput): IntakeResult {
  const issues: string[] = [];
  const { jobValue, closeRatePct, lifetimeJobs, monthlyAdSpend, marginPct } = input;

  if (finite(jobValue) && jobValue <= 0) issues.push("Average job value has to be above zero.");
  if (finite(lifetimeJobs) && lifetimeJobs <= 0) issues.push("Lifetime jobs has to be above zero.");
  if (finite(monthlyAdSpend) && monthlyAdSpend < 0) issues.push("Monthly ad spend can't be negative.");
  if (finite(closeRatePct) && closeRatePct > 100) issues.push("Close rate can't be over 100%.");
  if (finite(closeRatePct) && closeRatePct <= 0) issues.push("Close rate has to be above zero.");
  if (finite(closeRatePct) && closeRatePct > 0 && closeRatePct <= 1) {
    issues.push("Close rate looks like a fraction. Enter 25 for 25%.");
  }
  if (finite(marginPct) && marginPct > 100) issues.push("Gross margin can't be over 100%.");
  if (finite(marginPct) && marginPct <= 0) issues.push("Gross margin has to be above zero, or leave it blank.");

  const closeOk = finite(closeRatePct) && closeRatePct > 1 && closeRatePct <= 100;
  const jobOk = finite(jobValue) && jobValue > 0;
  const lifeOk = finite(lifetimeJobs) && lifetimeJobs > 0;
  const marginOk = marginPct === null || (finite(marginPct) && marginPct > 0 && marginPct <= 100);
  const spendOk = finite(monthlyAdSpend) && monthlyAdSpend >= 0;

  const close = closeOk ? closeRatePct / 100 : null;
  const margin = marginPct !== null && finite(marginPct) && marginPct > 0 && marginPct <= 100 ? marginPct / 100 : null;

  let revenuePerLead: number | null = null;
  let profitPerLead: number | null = null;
  let firstJobAllowableCpl: number | null = null;
  if (jobOk && lifeOk && close !== null && marginOk && !issues.some((i) => i.startsWith("Close"))) {
    revenuePerLead = jobValue * lifetimeJobs * close;
    if (margin !== null) {
      profitPerLead = jobValue * margin * lifetimeJobs * close;
      firstJobAllowableCpl = jobValue * margin * close;
    }
  }

  const monthTotal = spendOk ? MANAGEMENT_FEE + monthlyAdSpend : null;
  let jobsToCoverRevenue: number | null = null;
  let jobsToCoverProfit: number | null = null;
  let jobsRounded = false;
  let feeOnlyJobs: number | null = null;

  if (jobOk) {
    const feeJobs = MANAGEMENT_FEE / jobValue;
    feeOnlyJobs = Math.ceil(feeJobs - 1e-9);
    if (monthTotal !== null) {
      const exact = monthTotal / jobValue;
      jobsToCoverRevenue = Math.ceil(exact - 1e-9);
      jobsRounded = Math.abs(exact - jobsToCoverRevenue) > 1e-9;
      if (margin !== null) {
        const profitPerJob = jobValue * margin;
        if (profitPerJob > 0) jobsToCoverProfit = Math.ceil(monthTotal / profitPerJob - 1e-9);
      }
    }
  }

  return {
    issues,
    revenuePerLead,
    profitPerLead,
    firstJobAllowableCpl,
    jobsToCoverRevenue,
    jobsToCoverProfit,
    jobsRounded,
    monthTotal,
    feeOnlyJobs,
  };
}
