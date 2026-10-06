import React from 'react';

export function QualitySection() {
  return (
    <section className="quality-navy-section">
      <div className="container">
        <div className="quality-navy-inner">
          <span className="brand-eyebrow brand-eyebrow-white">
            Uncompromising Standards
          </span>

          <h2 className="quality-navy-title">
            Quality is not optional.
          </h2>

          <p className="quality-navy-lead">
            Every product is selected with careful attention to quality, safety, and responsible healthcare. We never compromise on product provenance, temperature stability, or dispensing accuracy.
          </p>

          <div className="quality-indicators">
            <div className="quality-indicator-item">
              <span className="quality-indicator-dot" />
              <span>Assured Quality</span>
            </div>
            <div className="quality-indicator-item">
              <span className="quality-indicator-dot" />
              <span>Patient Safety</span>
            </div>
            <div className="quality-indicator-item">
              <span className="quality-indicator-dot" />
              <span>Ethical Responsibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
