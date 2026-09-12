import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Check, 
  Workflow, 
  Bot, 
  Bus, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'manufacturing-erp':
        return <Workflow size={28} className="project-feature-icon cyan" />;
      case 'healthcare-ai-chatbot':
        return <Bot size={28} className="project-feature-icon purple" />;
      case 'smart-bus-tracking':
        return <Bus size={28} className="project-feature-icon emerald" />;
      default:
        return <Layers size={28} className="project-feature-icon" />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={13} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Key <span className="text-gradient">Projects &amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            Real-world implementations spanning enterprise ERP workflows, hackathon conversational AI, and cross-platform mobile apps.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card project-card"
              style={{ '--proj-accent': project.accentColor }}
            >
              {/* Card Accent Top Glow */}
              <div 
                className="card-accent-line"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              {/* Card Header */}
              <div className="project-card-top">
                <div 
                  className="project-icon-box" 
                  style={{ 
                    borderColor: `${project.accentColor}40`, 
                    backgroundColor: `${project.accentColor}15` 
                  }}
                >
                  {getProjectIcon(project.id)}
                </div>
                <div className="project-meta">
                  <span className="project-category-badge" style={{ color: project.accentColor }}>
                    {project.category}
                  </span>
                  <span className="project-subtitle-badge">{project.subtitle}</span>
                </div>
              </div>

              {/* Project Title & Short Description */}
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>

              {/* Key Bullet Highlights */}
              <div className="project-highlights-preview">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="preview-bullet">
                    <span className="bullet-dot" style={{ backgroundColor: project.accentColor }} />
                    <span className="bullet-text">{h}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Pills */}
              <div className="project-tech-pills">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer Action */}
              <div className="project-card-footer">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm w-full project-btn"
                >
                  <span>View Full Architecture</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
