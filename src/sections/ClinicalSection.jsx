import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

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
              src="/images/pharmacist_consultation.jpg"
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
