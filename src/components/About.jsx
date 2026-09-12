import React from 'react';
import { 
  User, 
  Code2, 
  Layers, 
  Database, 
  Sparkles, 
  CheckCircle, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Phone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, highlights } = portfolioData;

  const iconMap = {
    Layout: <Code2 size={22} className="highlight-icon cyan" />,
    Layers: <Layers size={22} className="highlight-icon purple" />,
    Database: <Database size={22} className="highlight-icon emerald" />,
    Sparkles: <Sparkles size={22} className="highlight-icon amber" />
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={13} />
            <span>Discover My Journey</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Gopinath P</span>
          </h2>
          <p className="section-subtitle">
            A developer who bridges creative frontend experiences with reliable database and enterprise logic.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Bio Card */}
          <div className="about-narrative-col">
            <div className="glass-card about-card">
              {/* About Profile Header with Photo */}
              <div className="about-profile-header">
                <div className="about-avatar-ring">
                  <img src="/profile.jpg" alt="Gopinath P" className="about-avatar-img" />
                </div>
                <div className="about-header-meta">
                  <h3 className="about-name-label">{personal.name}</h3>
                  <span className="about-role-label">{personal.role}</span>
                  <div className="about-edu-tag">
                    <GraduationCap size={13} className="text-cyan flex-shrink-0" />
                    <span>MCA Scholar &bull; Kalasalingam University</span>
                  </div>
                </div>
              </div>

              <h3 className="about-card-title">
                Passionate Developer &amp; Future-Ready MCA Scholar
              </h3>
              <p className="about-paragraph">
                I am a motivated computer science graduate and fresher equipped with hands-on understanding 
                of modern frontend technologies including <strong>React.js</strong> and <strong>React Native</strong>. 
                My technical foundation spans across <strong>JavaScript, Python, and Java</strong>, paired with 
                practical knowledge of both relational (MySQL, PostgreSQL) and document-oriented databases (MongoDB, Firebase).
              </p>
              <p className="about-paragraph">
                Beyond standard web development, I hold an enthusiasm for <strong>Enterprise Resource Planning (ERP)</strong> systems. 
                Having engineered customized ERP workflows with modular DocTypes, I understand how software creates tangible business 
                impact by streamlining data flows and operational efficiency.
              </p>
              <p className="about-paragraph">
                Currently advancing my academic pursuits through a <strong>Master of Computer Applications (MCA)</strong> at 
                <strong> Kalasalingam University</strong> (2025–2027) following a distinguished <strong>8.1 CGPA in BCA</strong>, 
                I am actively seeking software development roles and internships where I can contribute immediately.
              </p>

              {/* Personal Quick Info Table */}
              <div className="about-info-grid">
                <div className="info-item">
                  <span className="info-key">Name:</span>
                  <span className="info-val">{personal.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-key">Education:</span>
                  <span className="info-val">MCA (2025–2027)</span>
                </div>
                <div className="info-item">
                  <span className="info-key">Location:</span>
                  <span className="info-val">Madurai, Tamil Nadu</span>
                </div>
                <div className="info-item">
                  <span className="info-key">Specialty:</span>
                  <span className="info-val">React &amp; React Native</span>
                </div>
                <div className="info-item">
                  <span className="info-key">Email:</span>
                  <a href={`mailto:${personal.email}`} className="info-val email-val hover:text-cyan transition-colors">
                    {personal.email}
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-key">Phone:</span>
                  <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="info-val hover:text-cyan transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Engineering Pillars */}
          <div className="about-highlights-col">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="glass-card highlight-card">
                  <div className="highlight-icon-wrapper">
                    {iconMap[item.icon] || <Sparkles size={22} />}
                  </div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
