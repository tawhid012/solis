import React from 'react';
import { UserCheck, MessageCircle, HeartHandshake, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function PharmacistSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="pharmacist-quote-box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div className="eyebrow" style={{ marginBottom: 0 }}>
              <UserCheck size={16} />
              <span>Registered Healthcare Professionals</span>
            </div>
            <span className="badge badge-teal">Qualified Pharmacist On Duty</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', marginBottom: '1.25rem' }}>
            {siteConfig.pharmacistCare.headline}
          </h2>

          <p className="pharmacist-quote-text">
            &ldquo;{siteConfig.pharmacistCare.quote}&rdquo;
          </p>

          <p style={{ maxWidth: '780px', marginBottom: '2rem' }}>
            {siteConfig.pharmacistCare.subheading}
          </p>

          <div className="pharmacist-pillars-grid">
            {siteConfig.pharmacistCare.pillars.map((pillar) => (
              <div key={pillar.title} className="pharmacist-pillar-item">
                <h5>{pillar.title}</h5>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
