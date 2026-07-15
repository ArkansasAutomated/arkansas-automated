import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  const reduce = useReducedMotion();
  return (
    <section className="section forbiz-section" id="for-businesses">
      <div className="container forbiz-grid">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="forbiz-intro"
        >
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
        </motion.div>

        <div className="forbiz-points">
          {points.map((pt, i) => (
            <motion.div
              key={pt.h}
              className="forbiz-point"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{pt.h}</h3>
              <p>{pt.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
