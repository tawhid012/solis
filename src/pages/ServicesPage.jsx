import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { FinalCta } from '../components/FinalCta';
import { TrustStrip } from '../components/TrustStrip';

export function ServicesPage({ navigate }) {
  const handleContact = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <main id="main-content">
      {/* Header */}
      <section className="section-compact section-warm">
        <div className="container">
          <div className="container-editorial">
            <span className="brand-eyebrow">Healthcare Products &amp; Dispensing</span>
            <h1>Everything You Need, Under One Roof.</h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              A comprehensive healthcare inventory spanning quality generics, surgical supplies, injectables, life-saving formulations, dermatological care, and everyday wellness essentials.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <TrustStrip />

      {/* Dispensing Notice */}
      <section className="section-compact section-white" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="dispensing-notice-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
              <AlertCircle size={18} style={{ color: 'var(--solis-teal)' }} />
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--solis-navy-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Prescription Dispensing Protocol
              </strong>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Scheduled prescription drugs, injectables, and antibiotics are dispensed strictly upon receipt of an authentic, valid doctor prescription. Our pharmacists verify all prescriptions before dispensing.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Catalogue Showcase */}
      <section className="section section-white">
        <div className="container">
          <div className="catalogue-items-list" style={{ borderTop: '1px solid var(--divider)' }}>
            {siteConfig.categories.map((item) => (
              <div key={item.id} className="catalogue-item-row">
                <span className="catalogue-item-num">{item.number}</span>
                <div className="catalogue-item-header">
                  <span className="catalogue-item-badge">
                    {item.badge}
                  </span>
                  <h3 className="catalogue-item-title">{item.title}</h3>
                </div>
                <div className="catalogue-item-body">
                  <p className="catalogue-item-desc" style={{ marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  <ul className="catalogue-item-highlights">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="catalogue-item-bullet" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="services-inquiry-box">
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--solis-navy-dark)', marginBottom: '0.5rem' }}>
                Have a question about medicine availability?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Contact our registered pharmacist team for direct stock confirmation or dosage inquiries.
              </p>
            </div>
            <a href="/contact" onClick={handleContact} className="btn btn-primary">
              <span>Inquire With Pharmacist</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta navigate={navigate} />
    </main>
  );
}
