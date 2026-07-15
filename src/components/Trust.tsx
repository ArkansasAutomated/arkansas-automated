import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Trust.css';

const Trust: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="section trust-section" id="trust">
      <div className="container trust-grid">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-lg">
            Built in <span className="accent">Arkansas</span>, run in the open.
          </h2>
          <p className="body-lg trust-desc">
            Arkansas Automated is not a faceless lead broker. We operate every
            property you see above, and the properties link back here. What we
            promise is what the platform actually does today, nothing more.
          </p>
        </motion.div>

        <motion.div
          className="trust-list"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trust-item">
            <h3>Real, live properties</h3>
            <p>
              Every market on this page is live and taking requests. Click
              through and check for yourself; that is the point of the links.
            </p>
          </div>
          <div className="trust-item">
            <h3>Human-reviewed listings</h3>
            <p>
              Business submissions are reviewed before anything is published.
              No auto-published listings, no scraped directory filler.
            </p>
          </div>
          <div className="trust-item">
            <h3>Homeowners pay nothing</h3>
            <p>
              Quote requests are free and carry no obligation. Requests go to
              local businesses that can take the job, never to marketing lists.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
