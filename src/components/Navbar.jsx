import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-avatar-box">
            <img src="/profile.jpg" alt="Gopinath P" className="brand-avatar-img" />
            <span className="brand-status-dot" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Gopinath P</span>
            <span className="brand-tag">React Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && <span className="active-pill" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action CTA Buttons */}
        <div className="navbar-actions">
          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm resume-btn"
            title="View & Print Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm hire-btn">
            <Send size={14} />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div>
              {/* Drawer Header */}
              <div className="mobile-menu-header">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-cyan overflow-hidden">
                    <img src="/profile.jpg" alt="Gopinath P" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-white text-sm">Gopinath P</span>
                    <span className="text-cyan text-xs font-mono">React Developer</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-menu-close"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <ul className="mobile-nav-list">
                <li>
                  <a
                    href="#hero"
                    onClick={handleNavClick}
                    className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                  >
                    Home
                  </a>
                </li>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="mobile-menu-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary w-full justify-center"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="btn btn-primary w-full justify-center"
              >
                <Send size={16} />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
