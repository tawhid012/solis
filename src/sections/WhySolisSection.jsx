import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function WhySolisSection() {
  return (
    <section id="why-solis" className="section section-white">
      <div className="container">
        <div style={{ maxWidth: '640px' }}>
          <span className="chapter-badge">03 / Core Commitments</span>
          <h2>Why families choose Solis.</h2>
          <p className="lead" style={{ marginTop: '0.75rem' }}>
            Built on pharmaceutical rigor, patient dignity, and transparent pricing.
          </p>
        </div>

        {/* Large-Number Principles Grid (Zero Cards) */}
        <div className="principles-grid">
          {siteConfig.whyChooseUs.map((pillar) => (
            <div key={pillar.number} className="principle-item">
              <span className="principle-large-num">{pillar.number}</span>
              <h3 className="principle-title">{pillar.title}</h3>
              <p className="principle-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
