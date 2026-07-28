import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './OnboardPage.css';

/**
 * "List your business" — posts to the hub's onboarding endpoint.
 *
 * Contract (fort-smith-pros src/routes/api/public/onboard.ts):
 *  POST text/plain (CORS-safelisted, no preflight; this origin is allowlisted)
 *  {type:"business_onboarding", businessName, category, contactName, email,
 *   phone?, website?, address?, neighborhoods?, description?, sourcePath}
 * The hub writes a PENDING claims row; a human reviews before anything
 * publishes. Nothing here promises otherwise.
 */
const ONBOARD_ENDPOINT = 'https://fortsmithdirectory.com/api/public/onboard';

// Mirrors the hub's categories table (slug -> label). Slugs must match.
const CATEGORIES: Array<{ slug: string; label: string }> = [
  { slug: 'roofing', label: 'Roofing' },
  { slug: 'hvac', label: 'HVAC / Heating & Air' },
  { slug: 'driveway-sealing', label: 'Driveway Sealing & Asphalt' },
  { slug: 'furniture-assembly', label: 'Furniture Assembly' },
  { slug: 'home-staging', label: 'Home Staging' },
  { slug: 'smart-home', label: 'Smart Home Installation' },
  { slug: 'garage', label: 'Garage & Storage Systems' },
  { slug: 'professional-organizing', label: 'Professional Organizing' },
  { slug: 'weddings', label: 'Weddings & Events' },
  { slug: 'moving', label: 'Moving' },
  { slug: 'dumpster-rental', label: 'Dumpster Rental' },
  { slug: 'storage', label: 'Storage' },
  { slug: 'water-damage', label: 'Water Damage Restoration' },
  { slug: 'foundation-repair', label: 'Foundation Repair' },
  { slug: 'mold-remediation', label: 'Mold Remediation' },
  { slug: 'contractors', label: 'General Contractor / Other' },
];

type Status = 'idle' | 'sending' | 'done' | 'error';

const OnboardPage: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const clean = (k: string) => {
      const v = fd.get(k);
      return typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined;
    };

    const businessName = clean('businessName');
    const category = clean('category');
    const contactName = clean('contactName');
    const email = clean('email');
    if (!businessName || !category || !contactName || !email) {
      setFieldError('Business name, category, contact name, and email are required.');
      return;
    }
    setFieldError(null);
    setStatus('sending');

    const areas = clean('areas');
    try {
      // text/plain on purpose: CORS-safelisted content type, no preflight.
      const res = await fetch(ONBOARD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          type: 'business_onboarding',
          businessName,
          category,
          contactName,
          email,
          phone: clean('phone'),
          website: clean('website'),
          address: clean('address'),
          neighborhoods: areas
            ? areas.split(',').map((s) => s.trim()).filter(Boolean).slice(0, 12)
            : undefined,
          description: clean('description'),
          sourcePath: window.location.pathname,
        }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="onboard-page">
      <nav className="onboard-nav container" aria-label="Main">
        <a className="onboard-brand" href="/">
          Arkansas <span className="accent">Automated</span>
        </a>
        <a className="onboard-back" href="/">
          <ArrowLeft size={16} /> Back to the platform
        </a>
      </nav>

      <div className="container onboard-wrap">
        <header className="onboard-header">
          <h1 className="heading-lg">List your business</h1>
          <p className="body-lg">
            Tell us about your business once. A human reviews every submission
            before anything is published, and listing costs nothing.
          </p>
        </header>

        {status === 'done' ? (
          <div className="onboard-success panel">
            <h2 className="heading-md">Submission received.</h2>
            <p>
              We review every listing by hand, so nothing goes live instantly.
              You will hear from us at the email you provided, usually within a
              couple of business days.
            </p>
            <a className="btn btn-secondary" href="/">
              Back to the platform
            </a>
          </div>
        ) : (
          <form className="onboard-form panel" onSubmit={handleSubmit} noValidate>
            <div className="of-row">
              <div className="of-field">
                <label htmlFor="businessName">Business name *</label>
                <input id="businessName" name="businessName" type="text" required maxLength={160} />
              </div>
              <div className="of-field">
                <label htmlFor="category">Category *</label>
                <select id="category" name="category" required defaultValue="">
                  <option value="" disabled>
                    Choose a category
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="of-row">
              <div className="of-field">
                <label htmlFor="contactName">Contact name *</label>
                <input id="contactName" name="contactName" type="text" required maxLength={120} />
              </div>
              <div className="of-field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required maxLength={160} />
              </div>
            </div>

            <div className="of-row">
              <div className="of-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" maxLength={40} />
              </div>
              <div className="of-field">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="url" maxLength={200} placeholder="https://" />
              </div>
            </div>

            <div className="of-field">
              <label htmlFor="address">Business address</label>
              <input id="address" name="address" type="text" maxLength={240} />
            </div>

            <div className="of-field">
              <label htmlFor="areas">Areas served</label>
              <input
                id="areas"
                name="areas"
                type="text"
                maxLength={400}
                placeholder="e.g. Fort Smith, Barling, Van Buren"
              />
              <p className="of-help">Comma-separated cities or neighborhoods.</p>
            </div>

            <div className="of-field">
              <label htmlFor="description">What does your business do?</label>
              <textarea id="description" name="description" rows={4} maxLength={1200} />
            </div>

            {fieldError && <p className="of-error">{fieldError}</p>}
            {status === 'error' && (
              <p className="of-error">
                We could not send your submission. Please try again in a moment.
              </p>
            )}

            <button className="btn btn-primary of-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting…' : 'Submit for review'}
            </button>
            <p className="of-note">
              Free to submit. Reviewed by a human before publishing. Your
              information is used to build your listing, never sold.
            </p>
          </form>
        )}
      </div>
    </main>
  );
};

export default OnboardPage;
