import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FinalCta } from '../components/FinalCta';
import { TrustStrip } from '../components/TrustStrip';

export function AboutPage({ navigate }) {
  return (
    <main id="main-content">
      {/* Editorial Header */}
      <section className="section-compact section-warm">
        <div className="container">
          <div className="container-editorial">
            <span className="brand-eyebrow">About Solis Healthcare &amp; Meds</span>
            <h1>Healthcare, Made More Accessible.</h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              A trusted pharmacy destination committed to delivering affordable, high-quality medicines and compassionate clinical guidance to every family.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <TrustStrip />

      {/* Narrative & Visual */}
      <section className="section section-white">
        <div className="container">
          <div className="about-editorial-grid">
            <div>
              <span className="brand-eyebrow">Our Founding Mission</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.5rem' }}>
                Bridging Essential Medicines &amp; Human Guidance
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="lead">
                  At Solis Healthcare &amp; Meds, we believe that when a patient walks into a pharmacy, they are seeking more than a product off a shelf — they are seeking clarity, reassurance, and dependable care for themselves or a loved one.
                </p>
                <p>
                  Modern healthcare can be confusing and financially draining. Escalating medication prices frequently force patients to interrupt essential chronic therapies. Solis was established to challenge that reality by providing bioequivalent, high-quality generic alternatives alongside specialized clinical supplies at fair, transparent prices.
                </p>
                <p>
                  Every member of our pharmacy staff operates with an uncompromising patient-first standard: every prescription is carefully reviewed, and every patient receives clear, dignified counselling on how to use their medicines responsibly.
                </p>
              </div>
            </div>

            <div>
              <div className="hero-editorial-photo">
                <img
                  src="/images/hero_pharmacy.jpg"
                  alt="Modern European apothecary interior of Solis Healthcare"
                  width="720"
                  height="480"
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--divider)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--solis-teal)', display: 'block', marginBottom: '0.5rem' }}>
                  Ethical Governance
                </span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  All medicines are obtained directly from accredited manufacturers and authorized distributors, stored under continuous temperature and humidity controls.
                </p>
              </div>
            </div>
          </div>

          {/* Operational Benchmarks (Clean Large Number List) */}
          <div style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', borderTop: '1px solid var(--divider)' }}>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="brand-eyebrow">Dispensing Integrity</span>
              <h2>How We Uphold Pharmacy Standards</h2>
            </div>

            <div className="principles-grid" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
              <div className="principle-item">
                <span className="principle-large-num">01</span>
                <h3 className="principle-title">Prescription Verification</h3>
                <p className="principle-desc">
                  Every doctor prescription is systematically verified for therapeutic appropriateness, dosage correctness, patient age, and potential adverse interactions.
                </p>
              </div>

              <div className="principle-item">
                <span className="principle-large-num">02</span>
                <h3 className="principle-title">Batch &amp; Expiry Control</h3>
                <p className="principle-desc">
                  Automated batch monitoring ensures full traceability and that no product approaching threshold stability is dispensed.
                </p>
              </div>

              <div className="principle-item">
                <span className="principle-large-num">03</span>
                <h3 className="principle-title">Respectful Consultation</h3>
                <p className="principle-desc">
                  Health concerns are personal and sensitive. We maintain patient confidentiality and offer a calm, respectful consultation atmosphere.
                </p>
              </div>

              <div className="principle-item">
                <span className="principle-large-num">04</span>
                <h3 className="principle-title">Continuous Education</h3>
                <p className="principle-desc">
                  Our clinical staff stays updated on current therapeutic protocols and public health directives to provide modern, evidence-based guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta navigate={navigate} />
    </main>
  );
}
