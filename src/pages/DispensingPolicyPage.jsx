import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function DispensingPolicyPage() {
  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="eyebrow">
              <span>Patient Safety Protocol</span>
            </div>
            <h1>Dispensing &amp; Pharmacy Policy</h1>
            <p className="lead">
              Ethical dispensing protocols, storage standards, and quality verification standards at Solis.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-text">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
            <h3>1. Prescription Verification Standard</h3>
            <p>
              Under our clinical dispensing standards, every prescription submitted to Solis is scrutinized by a registered pharmacist for therapeutic dosage accuracy, potential contraindications, frequency, and patient age parameters.
            </p>

            <h3>2. Temperature-Sensitive Medicines (Cold Chain)</h3>
            <p>
              Refrigerated pharmaceuticals, including insulins, monoclonal antibodies, and select injectables, are stored in temperature-logged medical refrigerators maintained strictly between 2°C and 8°C. Once dispensed, our team instructs the patient or caregiver on temperature-safe transit protocols.
            </p>

            <h3>3. Antibiotic Stewardship</h3>
            <p>
              In alignment with international healthcare stewardship guidelines against antimicrobial resistance, Solis never dispenses systemic antibiotics without a valid prescription indicating appropriate indication and duration.
            </p>

            <h3>4. Return &amp; Exchange Policy on Medicines</h3>
            <p>
              To guarantee that no medication dispensed from Solis has ever been exposed to unverified temperature or environmental hazards outside our control, medicines once dispensed cannot be accepted for return or resale. This standard protects every patient who relies on our pharmacy for guaranteed product safety.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
