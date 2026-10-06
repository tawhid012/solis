import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="eyebrow">
              <span>Legal &amp; Compliance</span>
            </div>
            <h1>Privacy Policy</h1>
            <p className="lead">
              How Solis Healthcare &amp; Meds protects your personal health and contact data.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-text">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
            <h3>1. Patient Confidentiality</h3>
            <p>
              At Solis Healthcare &amp; Meds, we uphold strict standards of patient confidentiality. Any prescription data, medical records, or consultation notes shared with our registered pharmacists are handled in accordance with professional healthcare ethics and applicable data protection legislation.
            </p>

            <h3>2. Information We Collect</h3>
            <p>
              We collect information strictly necessary to safely fulfill medical orders, verify prescription authenticity, check for drug-drug interactions, and communicate about medication availability:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <li>Patient name, age, and contact information.</li>
              <li>Doctor's prescription details, dosage instructions, and diagnosis codes if indicated.</li>
              <li>Patient drug allergy history and concurrent medical therapies provided during counselling.</li>
            </ul>

            <h3>3. How Information Is Used</h3>
            <p>
              Your healthcare data is utilized exclusively for clinical pharmacy verification, inventory dispensing, safe medication review, and regulatory record keeping. We never sell, rent, or monetize patient information.
            </p>

            <h3>4. Data Security</h3>
            <p>
              Physical and digital records are safeguarded with stringent access controls, restricting data access strictly to licensed pharmacy staff responsible for your clinical care.
            </p>

            <h3>5. Contact for Inquiries</h3>
            <p>
              For questions regarding our privacy practices, please contact our administrative desk at {siteConfig.contact.email} or speak directly with our registered pharmacist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
