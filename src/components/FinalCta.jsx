import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function FinalCta({ navigate }) {
  const handleVisit = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  const handleDirections = (e) => {
    e.preventDefault();
    if (siteConfig.contact.googleMapsUrl) {
      window.open(siteConfig.contact.googleMapsUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/contact#location');
    }
  };

  return (
    <section className="closing-cta-section">
      <div className="container">
        <div className="closing-cta-inner">
          <span className="brand-eyebrow">
            Solis Healthcare &amp; Meds
          </span>

          <h2 className="closing-cta-title">
            Looking for trusted healthcare essentials?
          </h2>

          <p className="closing-cta-desc">
            Visit Solis Healthcare &amp; Meds for quality medicines, healthcare products, and professional pharmacist support whenever you need reliable guidance.
          </p>

          <div className="closing-cta-actions">
            <a
              href="/contact"
              onClick={handleVisit}
              className="btn btn-primary"
            >
              <span>Visit Solis</span>
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              onClick={handleDirections}
              className="btn btn-secondary"
            >
              <MapPin size={16} />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
