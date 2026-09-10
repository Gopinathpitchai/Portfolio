import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`Copied ${key} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('🎉 Thank you! Your message has been recorded.');
      
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Fallback gracefully
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in collaborating, hiring for frontend development, or discussing software projects? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Reach Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon cyan">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email Me</span>
                <a href={personal.social.email} className="contact-card-val">
                  {personal.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personal.email, 'Email')}
                className="contact-copy-btn"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedKey === 'Email' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon emerald">
                <Phone size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Call / WhatsApp</span>
                <a href={personal.social.phone} className="contact-card-val">
                  {personal.phone}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personal.phone, 'Phone number')}
                className="contact-copy-btn"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedKey === 'Phone number' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-icon purple">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Location / Address</span>
                <span className="contact-card-val static">
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="glass-card status-card">
              <div className="status-header">
                <div className="status-dot-wrap">
                  <span className="status-dot" />
                </div>
                <h4 className="status-heading">Current Availability</h4>
              </div>
              <p className="status-text">
                Actively seeking <strong>Frontend &amp; Software Engineering roles</strong>, internships, and technical opportunities.
                Open to relocation and remote positions.
              </p>
              <div className="response-time">
                <Clock size={14} />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-col">
            <div className="glass-card form-card">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-subtitle">Leave your inquiry or role description below.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Frontend Developer Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-glow w-full submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
