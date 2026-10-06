import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function TermsPage() {
  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="eyebrow">
              <span>Terms of Service</span>
            </div>
            <h1>Terms &amp; Conditions</h1>
            <p className="lead">
              Terms governing the use of this website and interactions with Solis Healthcare &amp; Meds.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-text">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
            <h3>1. Informational Purpose</h3>
            <p>
              The content presented on this website is for general informational and educational awareness regarding pharmacy services, generic medicine concepts, and healthcare essentials. Nothing contained on this website constitutes direct medical diagnosis or a medical treatment prescription.
            </p>

            <h3>2. Physician Relationship</h3>
            <p>
              Consulting our registered pharmacists is designed to complement, not replace, your relationship with your primary medical doctor or specialist. Always consult your prescribing physician regarding medical symptoms or when initiating/modifying any therapeutic regimen.
            </p>

            <h3>3. Dispensing Compliance</h3>
            <p>
              Dispensing of all prescription medicines, scheduled narcotics, antibiotics, and injectables is subject to applicable pharmacy acts, statutory regulations, and the presentation of a valid doctor prescription. Solis Healthcare &amp; Meds reserves the right to decline dispensing where a prescription cannot be verified.
            </p>

            <h3>4. Product Availability</h3>
            <p>
              Products and therapeutic categories referenced on this site reflect general inventory scope and do not guarantee instant on-shelf availability of every brand at any particular moment. Please verify specific stock with our pharmacy counter.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
