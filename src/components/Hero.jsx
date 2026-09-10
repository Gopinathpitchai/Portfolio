import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const { personal, stats } = portfolioData;

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const currentRole = personal.rolesList[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.rolesList.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, isDeleting ? displayedText.length - 1 : displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.rolesList]);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-pill hero-badge">
            <span className="status-dot" />
            <span>Open for Opportunities &bull; Fresher / Graduate</span>
          </div>

          {/* Main Hero Title */}
          <h1 className="hero-title">
            Transforming Ideas Into Clean Web &amp; Mobile Reality
            <br />
            <span className="hero-name-row">
              I am <span className="text-gradient">{personal.name}</span>
            </span>
          </h1>

          {/* Typewriter Role Line */}
          <div className="hero-typewriter-container">
            <span className="typewriter-prefix">&gt; </span>
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          {/* Bio statement */}
          <p className="hero-bio">
            {personal.bio}
          </p>

          {/* Call-to-action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary btn-glow">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <Download size={18} />
              <span>Resume Preview</span>
            </button>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Quick Contact Chips with Copy Action */}
          <div className="hero-contact-chips">
            <div 
              className="contact-chip"
              onClick={() => copyToClipboard(personal.email, 'Email')}
              title="Click to copy email"
            >
              <Mail size={15} className="chip-icon" />
              <span className="chip-label">{personal.email}</span>
              {copiedField === 'Email' ? (
                <Check size={14} className="copy-icon success" />
              ) : (
                <Copy size={14} className="copy-icon" />
              )}
            </div>

            <div 
              className="contact-chip"
              onClick={() => copyToClipboard(personal.phone, 'Phone number')}
              title="Click to copy phone"
            >
              <Phone size={15} className="chip-icon" />
              <span className="chip-label">{personal.phone}</span>
              {copiedField === 'Phone number' ? (
                <Check size={14} className="copy-icon success" />
              ) : (
                <Copy size={14} className="copy-icon" />
              )}
            </div>

            <div className="contact-chip static-chip" title="Location">
              <MapPin size={15} className="chip-icon" />
              <span className="chip-label">Madurai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual - Portrait & Config */}
        <div className="hero-visual">
          <div className="hero-card-mesh">
            <div className="profile-glass-card">
              <div className="card-top-bar">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="card-tab-switch">
                  <span className="card-tag active">gopinath.profile</span>
                </div>
              </div>

              {/* Portrait & Profile Presentation */}
              <div className="hero-portrait-showcase">
                <div className="portrait-image-wrapper">
                  <div className="portrait-glow-ring" />
                  <img 
                    src="/profile.jpg" 
                    alt="Gopinath P - Frontend Developer" 
                    className="hero-portrait-img"
                  />
                  <div className="portrait-status-badge">
                    <span className="status-dot" />
                    <span>MCA Candidate &bull; Kalasalingam University</span>
                  </div>
                </div>

                <div className="card-code-preview compact">
                  <div className="code-line">
                    <span className="c-keyword">const</span> <span className="c-var">dev</span> = &#123; <span className="c-prop">name</span>: <span className="c-string">"Gopinath P"</span>, <span className="c-prop">cgpa</span>: <span className="c-number">8.1</span>, <span className="c-prop">stack</span>: <span className="c-string">"React / Native"</span> &#125;;
                  </div>
                </div>
              </div>

              {/* Floating micro-badges */}
              <div className="floating-badge badge-react">
                <Code2 size={16} />
                <span>React.js + Native</span>
              </div>
              <div className="floating-badge badge-bca">
                <Sparkles size={16} />
                <span>8.1 CGPA Distinction</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value text-gradient">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sub">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
