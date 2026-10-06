import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { FinalCta } from '../components/FinalCta';
import { TrustStrip } from '../components/TrustStrip';

export function ClinicalSupportPage({ navigate }) {
  const handleSpeakWithTeam = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <main id="main-content">
      {/* Header */}
      <section className="section-compact section-warm">
        <div className="container">
          <div className="container-editorial">
            <span className="brand-eyebrow">Clinical Pharmacy Practice</span>
            <h1>More Than Medicines. Professional Healthcare Support.</h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              Our registered pharmacists bridge the gap between physician prescriptions and your daily life, offering medication review, dosage counselling, and safety guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <TrustStrip />

      {/* Split Section with Authentic Consultation Photography */}
      <section className="section section-white">
        <div className="container">
          <div className="clinical-split">
            <div className="clinical-photo-frame">
              <img
                src="/images/pharmacist_consultation.jpg"
                alt="Registered clinical pharmacist counselling an adult patient"
                width="640"
                height="720"
                loading="lazy"
              />
            </div>

            <div className="clinical-editorial-content">
              <span className="brand-eyebrow">The Clinical Role</span>
              <h2 className="clinical-headline">
                Why Clinical Pharmacist Guidance Matters
              </h2>
              <p className="clinical-substatement">
                Modern pharmacotherapy is complex. Patients frequently take multiple medications prescribed by different physicians, increasing the risk of adverse drug interactions and improper administration.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                At Solis, our registered clinical pharmacists evaluate whether you understand when to take each dose, whether it should be taken with meals, how it may interact with daily supplements, and what side effects to monitor.
              </p>

              <div>
                <a
                  href="/contact"
                  onClick={handleSpeakWithTeam}
                  className="btn btn-primary"
                >
                  <span>Speak With Our Pharmacist</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Clinical Service Rows with Hairline Dividers */}
          <div style={{ marginTop: 'clamp(4rem, 7vw, 6.5rem)', paddingTop: 'clamp(3rem, 5vw, 4.5rem)', borderTop: '1px solid var(--divider)' }}>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="brand-eyebrow">Patient Services</span>
              <h2>Key Clinical Support Pillars</h2>
            </div>

            <div className="catalogue-items-list" style={{ borderTop: '1px solid var(--divider)' }}>
              {siteConfig.clinicalSupport.services.map((item, idx) => (
                <div key={item.title} className="catalogue-item-row" style={{ padding: '2rem 0' }}>
                  <span className="catalogue-item-num">0{idx + 1}</span>
                  <h3 className="catalogue-item-title">{item.title}</h3>
                  <p className="catalogue-item-desc">{item.description}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2rem', backgroundColor: 'var(--bg-warm)', borderLeft: '3px solid var(--solis-teal)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <AlertCircle size={18} style={{ color: 'var(--solis-teal)' }} />
                <h4 style={{ fontSize: '0.95rem', color: 'var(--solis-navy-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Scope of Clinical Practice
                </h4>
              </div>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                {siteConfig.clinicalSupport.boundaries}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta navigate={navigate} />
    </main>
  );
}
