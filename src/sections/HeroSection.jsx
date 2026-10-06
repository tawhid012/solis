import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroSection({ navigate }) {
  const handleVisitClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  return (
    <section className="hero-editorial">
      <div className="container">
        <div className="hero-editorial-top">
          <span className="brand-eyebrow">
            Solis Healthcare &amp; Meds
          </span>

          <h1 className="hero-editorial-title">
            Reimagining Healthcare with Affordable, High-Quality Medicines.
          </h1>

          <p className="hero-editorial-lead">
            Essential medicines, healthcare products and professional pharmacist support — brought together with quality and affordability at the heart of everything we do.
          </p>

          <div className="hero-editorial-ctas">
            <a
              href="/contact"
              onClick={handleVisitClick}
              className="btn btn-primary"
            >
              <span>Visit Solis</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="/services"
              onClick={handleServicesClick}
              className="btn btn-secondary"
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* Large Editorial Pharmacy Campaign Photograph */}
        <div className="hero-editorial-photo">
          <img
            src="/images/hero_pharmacy.jpg"
            alt="Modern quiet-luxury interior of Solis Healthcare & Meds pharmacy"
            width="1280"
            height="720"
            loading="eager"
          />
        </div>

        <div className="hero-photo-caption">
          <span>Solis Dispensary &amp; Consultation Space</span>
          <span>Registered Pharmacist Supervision</span>
        </div>
      </div>
    </section>
  );
}
