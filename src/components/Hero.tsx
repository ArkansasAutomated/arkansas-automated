import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onOpenQuiz?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img src="/hero-bg.png" alt="AI Network" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Floating Orbs for extra heat */}
      <motion.div 
        className="glow-cyan" 
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="glow-purple" 
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="glow-cyan" 
        style={{ top: '40%', right: '30%', width: '150px', height: '150px' }}
        animate={{
          y: [0, -30, 0],
          x: [0, -40, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-badge"
          >
            <Zap className="hero-badge-icon" size={16} />
            <span>The Future of Arkansas Business</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-xl hero-title"
          >
            Automate <br />
            <span className="text-gradient">Arkansas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="body-lg hero-subtitle"
          >
            We build custom AI agents and automation systems that help Arkansas businesses scale faster, cut costs, and dominate their local markets. Don't get left behind.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-actions"
          >
            <button className="btn btn-primary btn-glow" onClick={onOpenQuiz}>
              Build Your Agent <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              See How It Works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
