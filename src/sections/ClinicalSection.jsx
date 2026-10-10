import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { getAssetUrl } from '../utils/assets';

export function ClinicalSection({ navigate }) {
  const handleClinicalClick = (e) => {
    e.preventDefault();
    navigate('/clinical-support');
  };

  const handleSpeakClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <section id="clinical-support" className="section section-warm">
      <div className="container">
        <div className="clinical-split">
          {/* Left Side: Large Authentic Healthcare Consultation Photo */}
          <div className="clinical-photo-frame">
            <img
              src={getAssetUrl('images/pharmacist_consultation.jpg')}
              alt="Registered clinical pharmacist counselling an adult patient on medication usage"
              width="640"
              height="720"
              loading="lazy"
            />
          </div>

          {/* Right Side: Editorial Narrative + Row-Based Services */}
          <div className="clinical-editorial-content">
            <span className="chapter-badge">04 / Clinical Practice</span>
            <h2 className="clinical-headline">More than medicines.</h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.85rem', backgroundColor: 'var(--solis-teal-50)', border: '1px solid var(--solis-teal-100)', borderRadius: 'var(--radius-pill)', margin: '0.75rem 0 1.25rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--solis-teal)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--solis-navy-dark)' }}>
                Led by {siteConfig.contact.leadPharmacist.name} &bull; {siteConfig.contact.leadPharmacist.title}
              </span>
            </div>
            <p className="clinical-substatement">
              Professional guidance when it matters. At Solis, professional pharmacy care goes beyond dispensing boxes — our qualified pharmacists help you understand your medicines and use them safely.
            </p>

            {/* Simple Service Rows with Dividers (Zero Cards) */}
            <div className="clinical-services-rows">
              {siteConfig.clinicalSupport.services.map((service) => (
                <div key={service.title} className="clinical-service-row">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                onClick={handleSpeakClick}
                className="btn btn-primary"
              >
                <span>Speak With Our Team</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="/clinical-support"
                onClick={handleClinicalClick}
                className="btn btn-secondary"
              >
                <span>Clinical Support Details</span>
              </a>
            </div>

            <p className="clinical-boundary-note">
              {siteConfig.clinicalSupport.boundaries}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
