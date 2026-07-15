import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  const reduce = useReducedMotion();
  return (
    <section className="section how-section" id="how">
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="how-header"
        >
          <h2 className="heading-lg">How the platform works</h2>
        </motion.div>

        <div className="how-steps">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              className="how-step"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="how-k">{s.k}</span>
              <h3 className="heading-md">{s.h}</h3>
              <p>{s.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
