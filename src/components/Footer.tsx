import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              Arkansas <span className="accent">Automated</span>
            </div>
            <p className="footer-desc">
              The automated local platform for Arkansas: local directories that
              connect homeowners with local businesses.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Live markets</h4>
              <a href="https://fortsmithdirectory.com" target="_blank" rel="noopener noreferrer">
                Fort Smith Directory
              </a>
              <a href="https://smarthomenwa.com" target="_blank" rel="noopener noreferrer">
                Smart Home NWA
              </a>
              <a href="https://goodgarageco.com" target="_blank" rel="noopener noreferrer">
                Good Garage Co.
              </a>
              <a href="https://www.nwaautomated.com" target="_blank" rel="noopener noreferrer">
                NWA Automated
              </a>
            </div>
            <div className="link-column">
              <h4>Platform</h4>
              <a href="/#how">How it works</a>
              <a href="/#for-businesses">For businesses</a>
              <a href="/list-your-business">List your business</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arkansas Automated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
