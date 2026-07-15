import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import './ForBusinesses.css';

const points = [
  {
    h: 'A listing in your market',
    p: 'Your business appears in the directory for your vertical and the areas you serve, reviewed by a human before it goes live.',
  },
  {
    h: 'Quote requests, routed to you',
    p: 'When homeowners in your area request your kind of work, the request can be routed to your business, exclusively, not auctioned.',
  },
  {
    h: 'Free to be listed',
    p: 'Submitting your business costs nothing. Paid placement and per-lead pricing exist only when you explicitly opt in, with no surprises.',
  },
];

const ForBusinesses: React.FC = () => {
  const introRef = useReveal<HTMLDivElement>();
  const pointsRef = useReveal<HTMLDivElement>();

  return (
    <section className="section forbiz-section" id="for-businesses">
      <div className="container forbiz-grid">
        <div className="forbiz-intro" ref={introRef}>
          <h2 className="heading-lg">
            Built for the businesses <span className="accent">doing the work</span>.
          </h2>
          <p className="body-lg">
            The platform only works if the plumber, the roofer, and the installer
            on the other end win too. Here is the deal, plainly.
          </p>
          <a className="btn btn-primary forbiz-cta" href="/list-your-business">
            List your business <ArrowRight size={18} />
          </a>
        </div>

        <div className="forbiz-points" ref={pointsRef}>
          {points.map((pt) => (
            <div key={pt.h} className="forbiz-point">
              <h3>{pt.h}</h3>
              <p>{pt.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
