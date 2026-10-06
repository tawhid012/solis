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
          <div style={{ borderLeft: '3px solid var(--solis-teal)', padding: '1.25rem 2rem', backgroundColor: 'var(--bg-warm)' }}>
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
              <div key={item.id} className="catalogue-item-row" style={{ padding: '2.5rem 0' }}>
                <span className="catalogue-item-num" style={{ fontSize: '1.35rem' }}>{item.number}</span>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--solis-teal)', display: 'block', marginBottom: '0.25rem' }}>
                    {item.badge}
                  </span>
                  <h3 className="catalogue-item-title" style={{ fontSize: '1.6rem' }}>{item.title}</h3>
                </div>
                <div>
                  <p className="catalogue-item-desc" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--solis-teal)', borderRadius: '50%' }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--solis-navy-dark)', marginBottom: '0.5rem' }}>
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
