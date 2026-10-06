import React from 'react';
import { ArrowRight } from 'lucide-react';

export function AboutSection({ navigate }) {
  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  return (
    <section id="about" className="section section-white">
      <div className="container">
        {/* Top Editorial Split Statement */}
        <div className="about-editorial-grid">
          <div>
            <span className="chapter-badge">01 / Our Philosophy</span>
            <h2 className="about-statement">
              Healthcare, made more accessible.
            </h2>
          </div>

          <div className="about-narrative">
            <p className="lead">
              Solis Healthcare &amp; Meds is your trusted destination for healthcare essentials, generic medicines, surgical products, injectables, life-saving drugs, cosmetics and OTC products — all under one roof.
            </p>
            <p>
              With a focus on affordability, quality and professional care, we strive to make essential healthcare accessible to everyone. Every medicine is dispensed and every patient is counselled by a qualified, registered pharmacist.
            </p>
            <div style={{ paddingTop: '0.75rem' }}>
              <a
                href="/about"
                onClick={handleLearnMore}
                className="btn btn-secondary"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Supporting Editorial Visual & Brand Pullquote */}
        <div className="about-editorial-visual">
          <div className="about-visual-frame">
            <img
              src="/images/healthcare_still_life.jpg"
              alt="Curated medicines, amber apothecary bottles, and healthcare essentials"
              width="680"
              height="480"
              loading="lazy"
            />
          </div>

          <div>
            <blockquote className="about-pullquote">
              &ldquo;Quality should never be out of reach.&rdquo;
            </blockquote>
            <p style={{ marginTop: '1.75rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              From everyday therapies to critical prescription treatments, we bridge the gap between pharmaceutical excellence and everyday household affordability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
