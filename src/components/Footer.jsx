import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-icon">&lt;/&gt;</span>
              <span className="footer-brand-name">Gopinath P</span>
            </div>
            <p className="footer-tagline">
              Frontend &amp; Software Developer specializing in React.js, React Native, and Enterprise Systems.
            </p>
            <div className="footer-location-tag">
              <MapPin size={14} className="flex-shrink-0 text-cyan" />
              <span>Madurai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills &amp; Tech</a></li>
              <li><a href="#projects">Key Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Direct Reach Col */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Direct Reach</h4>
            <div className="footer-contact-items">
              <a href={personal.social.email} className="footer-contact-link">
                <Mail size={15} className="flex-shrink-0 text-cyan" />
                <span className="break-all">{personal.email}</span>
              </a>
              <a href={personal.social.phone} className="footer-contact-link">
                <Phone size={15} className="flex-shrink-0 text-emerald" />
                <span>{personal.phone}</span>
              </a>
            </div>
            <div className="footer-btn-wrap">
              <button onClick={onOpenResume} className="btn btn-secondary btn-sm w-full sm:w-auto justify-center">
                View Formatted Resume
              </button>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>Gopinath P</strong>. Designed &amp; Developed with React &amp; Tailwind CSS.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
