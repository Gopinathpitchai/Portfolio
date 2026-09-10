import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const { personal, education, projects, skills } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Hidden on print) */}
        <div className="resume-modal-topbar no-print">
          <div className="resume-topbar-left">
            <span className="resume-doc-title">Resume Document &bull; Gopinath P</span>
          </div>
          <div className="resume-topbar-actions">
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close resume">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="printable-resume-paper">
          {/* Header */}
          <header className="resume-header">
            <div className="resume-header-avatar-wrap">
              <img src="/profile.jpg" alt="Gopinath P" className="resume-avatar-img" />
            </div>
            <div className="resume-header-left">
              <h1 className="resume-name">{personal.name}</h1>
              <p className="resume-target-role">Frontend &amp; Software Engineer</p>
            </div>
            <div className="resume-header-right">
              <div className="resume-contact-line">
                <Phone size={13} />
                <span>{personal.phone}</span>
              </div>
              <div className="resume-contact-line">
                <Mail size={13} />
                <span>{personal.email}</span>
              </div>
              <div className="resume-contact-line">
                <MapPin size={13} />
                <span>29/107, North Street, Keelamatayan, Madurai</span>
              </div>
            </div>
          </header>

          <hr className="resume-rule" />

          {/* About Me / Summary */}
          <section className="resume-sec">
            <h2 className="resume-sec-heading">ABOUT ME</h2>
            <p className="resume-sec-body">
              {personal.bio}
            </p>
          </section>

          {/* Education */}
          <section className="resume-sec">
            <h2 className="resume-sec-heading">EDUCATION</h2>
            <div className="resume-edu-list">
              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span className="edu-title">MASTER OF COMPUTER APPLICATIONS (MCA)</span>
                  <span className="edu-time">2025 – 2027</span>
                </div>
                <div className="edu-sub">Kalasalingam University &bull; Pursuing</div>
              </div>

              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span className="edu-title">BACHELOR OF COMPUTER APPLICATIONS (BCA)</span>
                  <span className="edu-time">2022 – 2025</span>
                </div>
                <div className="edu-sub">Kalasalingam University &bull; <strong>CGPA: 8.1</strong></div>
              </div>

              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span className="edu-title">HIGHER SECONDARY EDUCATION (HSE)</span>
                  <span className="edu-time">2021 – 2022</span>
                </div>
                <div className="edu-sub">GHSS Athoor &bull; Percentage: 59%</div>
              </div>
            </div>
          </section>

          {/* Project Experience */}
          <section className="resume-sec">
            <h2 className="resume-sec-heading">PROJECT EXPERIENCE</h2>
            <div className="resume-proj-list">
              {projects.map((proj) => (
                <div key={proj.id} className="resume-proj-item">
                  <div className="resume-proj-head">
                    <span className="proj-name">{proj.title.toUpperCase()}</span>
                    <span className="proj-tech">[{proj.technologies.join(', ')}]</span>
                  </div>
                  <p className="proj-summary">
                    {proj.description}
                  </p>
                  <ul className="proj-bullets">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Breakdown */}
          <section className="resume-sec">
            <h2 className="resume-sec-heading">SKILLS &amp; PROFICIENCIES</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-col">
                <strong>Frontend Development:</strong> React.js, React Native, JavaScript (ES6), HTML5, CSS3
              </div>
              <div className="resume-skill-col">
                <strong>Programming Languages:</strong> Python, SQL, Java
              </div>
              <div className="resume-skill-col">
                <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase (NoSQL)
              </div>
              <div className="resume-skill-col">
                <strong>Tools &amp; Frameworks:</strong> Git, GitHub, VS Code, ERP Frameworks &amp; DocTypes
              </div>
              <div className="resume-skill-col full-span">
                <strong>Soft Skills:</strong> Problem Solving, Critical Thinking, Time Management, Team Collaboration, Quick Learner
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
