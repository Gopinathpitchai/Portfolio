import React from 'react';
import { GraduationCap, Calendar, Award, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My academic path through computer applications, foundational sciences, and software development.
          </p>
        </div>

        {/* Illuminated Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" />

          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Node Icon */}
              <div className="timeline-node">
                <div className="timeline-node-inner">
                  <GraduationCap size={15} />
                </div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-content-card glass-card">
                <div className="timeline-card-header">
                  <div className="degree-title-group">
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <div className="timeline-institution">
                      <Building size={13} className="inst-icon flex-shrink-0" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="timeline-badges-group">
                    <span className="timeline-period-badge">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </span>
                    <span className={`timeline-grade-badge ${item.badge.includes('8.1') ? 'highlight' : ''}`}>
                      <Award size={12} />
                      <span>{item.grade}</span>
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
