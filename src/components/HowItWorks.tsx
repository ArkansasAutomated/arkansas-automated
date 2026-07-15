import React from 'react';
import { useReveal } from '../lib/useReveal';
import './HowItWorks.css';

const steps = [
  {
    k: 'Rank',
    h: 'We build sites that rank locally',
    p: 'Every vertical gets a dedicated, fast local site built around what homeowners actually search: the service, the city, the neighborhood.',
  },
  {
    k: 'Capture',
    h: 'Homeowners request quotes',
    p: 'Visitors describe the job once. The request is free for them, with no obligation, and it lands in one central pipeline with full attribution.',
  },
  {
    k: 'Route',
    h: 'Requests reach local businesses',
    p: 'Each request is routed to a listed local business that can actually take the work in that area. No reselling to national lead farms.',
  },
];

const HowItWorks: React.FC = () => {
  const headRef = useReveal<HTMLDivElement>();
  const stepsRef = useReveal<HTMLDivElement>();

  return (
    <section className="section how-section" id="how">
      <div className="container">
        <div className="how-header" ref={headRef}>
          <h2 className="heading-lg">How the platform works</h2>
        </div>

        <div className="how-steps" ref={stepsRef}>
          {steps.map((s) => (
            <div key={s.k} className="how-step">
              <span className="how-k">{s.k}</span>
              <h3 className="heading-md">{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
