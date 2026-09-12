import React, { useEffect } from 'react';
import { X, CheckCircle, Cpu, Layers, ExternalLink, Calendar, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': project.accentColor }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span 
              className="modal-category-pill" 
              style={{ 
                color: project.accentColor, 
                borderColor: `${project.accentColor}50`, 
                backgroundColor: `${project.accentColor}15` 
              }}
            >
              {project.category}
            </span>
            <span className="modal-subtitle-text">{project.subtitle}</span>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn" 
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Title */}
        <h3 className="modal-title text-white font-bold">{project.title}</h3>
        <p className="modal-tagline">{project.tagline}</p>

        {/* Tech Stack Pills */}
        <div className="modal-tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-body-divider" />

        {/* Detailed Description */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <Layers size={17} style={{ color: project.accentColor }} />
            <span>Project Overview</span>
          </h4>
          <p className="modal-desc-text">{project.description}</p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <Cpu size={17} style={{ color: project.accentColor }} />
            <span>Key Architectural Highlights &amp; Accomplishments</span>
          </h4>
          <ul className="modal-highlights-list">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="modal-highlight-item">
                <CheckCircle size={15} className="item-icon" style={{ color: project.accentColor }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <Tag size={17} style={{ color: project.accentColor }} />
            <span>Key Deliverables</span>
          </h4>
          <div className="modal-deliverables-grid">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="deliverable-card">
                <span className="deliverable-num">0{idx + 1}</span>
                <span className="deliverable-text">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary btn-sm justify-center">
            Close Overview
          </button>
          <a href="#contact" onClick={onClose} className="btn btn-primary btn-sm justify-center">
            Inquire About This Project
          </a>
        </div>
      </div>
    </div>
  );
}
