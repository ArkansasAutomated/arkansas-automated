import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
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
          <h1 className="heading-xl hero-title enter">
            The automated local platform for <span className="accent">Arkansas</span>.
          </h1>

          <p className="body-lg hero-subtitle enter enter-2">
            We build and operate local directories that turn search demand into
            real quote requests for Arkansas businesses.
          </p>

          <div className="hero-actions enter enter-3">
            <a className="btn btn-primary" href="#markets">
              Explore live markets <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="/list-your-business">
              List your business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
