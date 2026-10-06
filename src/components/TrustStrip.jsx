import React from 'react';

export function TrustStrip() {
  return (
    <section className="trust-line-section" aria-label="Brand Pillars">
      <div className="container">
        <ul className="trust-line-list">
          <li className="trust-line-item">
            <span className="trust-line-dot" />
            <span>Qualified Pharmacists</span>
          </li>
          <li className="trust-line-item">
            <span className="trust-line-dot" />
            <span>Quality-Assured Products</span>
          </li>
          <li className="trust-line-item">
            <span className="trust-line-dot" />
            <span>Affordable Healthcare</span>
          </li>
          <li className="trust-line-item">
            <span className="trust-line-dot" />
            <span>Wide Product Range</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
