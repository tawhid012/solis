import React from 'react';
import { ContactSection } from '../sections/ContactSection';
import { TrustStrip } from '../components/TrustStrip';
import { FileText } from 'lucide-react';

export function ContactPage({ navigate }) {
  return (
    <main id="main-content">
      {/* Header */}
      <section className="section-compact section-warm">
        <div className="container">
          <div className="container-editorial">
            <span className="brand-eyebrow">Visit &amp; Consult</span>
            <h1>Contact Solis Healthcare &amp; Meds</h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              Our registered pharmacists are available during all dispensary hours to fulfill prescriptions, answer medication inquiries, and provide clinical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <TrustStrip />

      {/* Split Editorial Contact Section & Clean Form */}
      <ContactSection />

      {/* Prescription Dispensing Protocol Notice */}
      <section className="section-compact section-warm" style={{ borderTop: '1px solid var(--divider)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <FileText size={20} style={{ color: 'var(--solis-teal)' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--solis-navy-dark)' }}>
                Prescription Dispensing Requirements
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
              When visiting Solis Healthcare &amp; Meds to fill prescription medications, please ensure you present:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--solis-teal)', borderRadius: '50%' }} />
                <span>Original valid physical prescription signed by a registered medical practitioner.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--solis-teal)', borderRadius: '50%' }} />
                <span>Patient name, age, issuance date, and prescribing doctor's license details clearly legible.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--solis-teal)', borderRadius: '50%' }} />
                <span>List of any known drug allergies or existing concurrent therapies for our pharmacist&apos;s review.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
