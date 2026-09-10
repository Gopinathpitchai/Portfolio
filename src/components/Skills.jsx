import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Users, 
  Sparkles, 
  CheckCircle2,
  Atom,
  Smartphone,
  Layers,
  Palette,
  Cpu,
  Coffee,
  Server,
  Flame,
  GitBranch,
  Laptop,
  Workflow,
  Binary
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillsCategories, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Atom size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Code2': return <Code2 size={20} />;
      case 'Palette': return <Palette size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      case 'Binary': return <Binary size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Coffee': return <Coffee size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Flame': return <Flame size={20} />;
      case 'GitBranch': return <GitBranch size={20} />;
      case 'Laptop': return <Laptop size={20} />;
      case 'Workflow': return <Workflow size={20} />;
      default: return <CheckCircle2 size={20} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of my technical toolkit, programming competencies, and collaboration strengths.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-tabs">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <span>{cat.name}</span>
                <span className="tab-count">
                  {cat.id === 'all' ? skills.length : skills.filter(s => s.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-card skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-card-header">
                <div className="skill-icon-box" style={{ color: skill.color, borderColor: `${skill.color}40`, backgroundColor: `${skill.color}15` }}>
                  {getSkillIcon(skill.icon)}
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
                <div className="skill-percent-val" style={{ color: skill.color }}>
                  {skill.percent}%
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-bar"
                  style={{ 
                    width: `${skill.percent}%`,
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    boxShadow: `0 0 10px ${skill.color}50`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Skill Highlight Banner */}
        <div className="skills-bottom-banner glass-card">
          <div className="banner-icon-side">
            <Workflow size={28} className="text-gradient" />
          </div>
          <div className="banner-text-side">
            <h4 className="banner-title">ERP &amp; Full-Stack Architecture Focus</h4>
            <p className="banner-desc">
              Trained in combining client-side agility with robust database transactions. Experienced in structuring custom DocTypes, complex SQL aggregations, and REST/NoSQL integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
