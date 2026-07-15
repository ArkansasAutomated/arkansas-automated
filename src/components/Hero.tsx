import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="hero-section">
      <nav className="hero-nav container" aria-label="Main">
        <a className="hero-brand" href="/">
          Arkansas <span className="accent">Automated</span>
        </a>
        <div className="hero-nav-links">
          <a href="#markets">Live markets</a>
          <a href="#how">How it works</a>
          <a className="btn btn-primary hero-nav-cta" href="/list-your-business">
            List your business
          </a>
        </div>
      </nav>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 className="heading-xl hero-title" {...enter(0.05)}>
            The automated local platform for <span className="accent">Arkansas</span>.
          </motion.h1>

          <motion.p className="body-lg hero-subtitle" {...enter(0.18)}>
            We build and operate local directories that turn search demand into
            real quote requests for Arkansas businesses.
          </motion.p>

          <motion.div className="hero-actions" {...enter(0.3)}>
            <a className="btn btn-primary" href="#markets">
              Explore live markets <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="/list-your-business">
              List your business
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
