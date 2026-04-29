import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Cpu, Cloud, Database, Code, Zap, Globe } from 'lucide-react';
import './Trust.css';

const techStack = [
  { icon: <Cpu size={24} />, name: 'LLM Agents' },
  { icon: <Cloud size={24} />, name: 'Cloud Infra' },
  { icon: <Database size={24} />, name: 'Vector DBs' },
  { icon: <Code size={24} />, name: 'Custom APIs' },
  { icon: <Zap size={24} />, name: 'Real-time Webhooks' },
  { icon: <Globe size={24} />, name: 'Omnichannel' },
];

const Trust: React.FC = () => {
  return (
    <section className="section trust-section" id="trust">
      <div className="container">
        
        {/* Infinite Marquee */}
        <div className="marquee-container">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
          <motion.div 
            className="marquee-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the list for seamless loop */}
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="marquee-item">
                <span className="marquee-icon">{tech.icon}</span>
                <span className="marquee-text">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="trust-grid">
          <motion.div 
            className="trust-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="trust-badge">
              <Shield size={16} /> Local Partner
            </div>
            <h2 className="heading-lg trust-title">
              Built for <br />
              <span className="text-gradient">Arkansas.</span>
            </h2>
            <p className="body-lg trust-desc">
              We aren't a faceless Silicon Valley agency. We are based right here in Arkansas, building custom automation tools for local businesses that want a competitive edge.
            </p>
            <button className="btn btn-primary btn-glow mt-4">
              Book a Strategy Call
            </button>
          </motion.div>

          <motion.div 
            className="trust-testimonial glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#00F0FF" color="#00F0FF" />
              ))}
            </div>
            <blockquote className="testimonial-quote">
              "Arkansas Automated completely transformed how we handle customer intake. We're booking 3x more appointments without adding any front-desk staff. It feels like magic."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar bg-gradient">AR</div>
              <div>
                <div className="author-name">Alex R.</div>
                <div className="author-role">Local Business Owner</div>
              </div>
            </div>
            
            {/* Enhanced Glow */}
            <motion.div 
              className="trust-glow"
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
