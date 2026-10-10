import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { InstagramIcon } from '../components/InstagramIcon';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <div className="contact-editorial-grid">
          {/* Left Column: Editorial Information */}
          <div className="contact-left-col">
            <span className="chapter-badge">06 / Visit &amp; Inquire</span>
            <h2>Let&apos;s take care of what matters.</h2>
            <p className="contact-left-intro">
              Whether you need to confirm medication availability, understand a prescription, or speak with a registered clinical pharmacist, our team is here to assist.
            </p>

            <div className="contact-details-rows">
              <div className="contact-detail-row">
                <div className="contact-detail-label">Visit Us</div>
                <div className="contact-detail-val">
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {siteConfig.contact.address}, {siteConfig.contact.addressLine2}
                  </a>
                </div>
                <div className="contact-detail-sub">
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--solis-teal)', textDecoration: 'none', fontWeight: 500 }}
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-label">Call Us</div>
                <div className="contact-detail-val">
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    style={{ color: 'var(--solis-navy-dark)', textDecoration: 'none' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="contact-detail-sub">Direct pharmacy dispensary line</div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-label">WhatsApp</div>
                <div className="contact-detail-val">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--solis-teal)', textDecoration: 'none' }}
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
                <div className="contact-detail-sub">Direct message for availability &amp; inquiries</div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-label">Social Media</div>
                <div className="contact-detail-val">
                  <a
                    href={siteConfig.contact.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--solis-navy-dark)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                    aria-label="Instagram profile @montelukastman"
                  >
                    <InstagramIcon size={16} style={{ color: 'var(--solis-teal)' }} />
                    <span>{siteConfig.contact.socialMedia.handle}</span>
                  </a>
                </div>
                <div className="contact-detail-sub">Follow for clinical insights &amp; community updates</div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-label">Lead Clinical Pharmacist</div>
                <div className="contact-detail-val" style={{ fontWeight: 600 }}>
                  {siteConfig.contact.leadPharmacist.name}
                </div>
                <div className="contact-detail-sub">
                  {siteConfig.contact.leadPharmacist.title} &bull; Medication safety &amp; patient counselling
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-label">Dispensary Hours</div>
                <div className="contact-detail-val">{siteConfig.contact.hours.weekdays}</div>
                <div className="contact-detail-sub">
                  Sunday: {siteConfig.contact.hours.sunday} &bull; Registered pharmacist on duty
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Form */}
          <div>
            {submitted ? (
              <div style={{ backgroundColor: 'var(--bg-warm)', border: '1px solid var(--divider)', padding: '2.5rem 1.75rem', textAlign: 'center', borderRadius: 'var(--radius-sm)' }}>
                <CheckCircle2 size={36} style={{ color: 'var(--solis-teal)', margin: '0 auto 1rem' }} />
                <h3 style={{ color: 'var(--solis-navy-dark)', marginBottom: '0.75rem' }}>Message Received</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Thank you for reaching out. Our registered pharmacist team will review your inquiry.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', message: '' });
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-editorial">
                <h3 style={{ fontSize: '1.35rem', color: 'var(--solis-navy-dark)', marginBottom: '0.25rem' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  Leave a message for our dispensary team.
                </p>

                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact">Phone or Email</label>
                  <input
                    id="contact"
                    type="text"
                    required
                    placeholder="e.g. phone number or email"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="How may our pharmacist assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>
                  <span>Send Message</span>
                  <ArrowRight size={15} />
                </button>

                <p style={{ fontSize: '0.785rem', color: 'var(--text-muted)', lineHeight: '1.5', marginTop: '0.5rem' }}>
                  Note: Scheduled prescription drugs require presenting a valid physical doctor prescription at the pharmacy counter.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
