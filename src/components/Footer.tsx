import React from 'react';
import { Zap } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Zap className="icon-cyan" size={24} />
              <span>Arkansas Automated</span>
            </div>
            <p className="footer-desc">
              Building custom AI and automation solutions for Arkansas businesses to scale effortlessly.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Solutions</h4>
              <a href="#">AI Agents</a>
              <a href="#">Workflow Automation</a>
              <a href="#">Data Integration</a>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Case Studies</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arkansas Automated. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
