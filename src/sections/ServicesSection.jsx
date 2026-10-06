import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function ServicesSection({ navigate }) {
  const handleAllServices = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  const featured = siteConfig.categories[0];
  const otherCategories = siteConfig.categories.slice(1);

  return (
    <section id="services" className="section section-sage">
      <div className="container">
        {/* Editorial Catalogue Header */}
        <div className="catalogue-header">
          <div>
            <span className="chapter-badge">02 / Products &amp; Dispensing</span>
            <h2>Everything You Need, Under One Roof.</h2>
          </div>
          <div>
            <a
              href="/services"
              onClick={handleAllServices}
              className="btn btn-secondary"
            >
              <span>Explore All Categories</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Desktop Feature Spotlight / Mobile Clean Accent */}
        <div className="catalogue-feature-row">
          <div>
            <span className="catalogue-feature-badge">
              Primary Focus • Category {featured.number}
            </span>
            <h3 className="catalogue-feature-title">
              {featured.title}
            </h3>
            <p className="lead" style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
              {featured.description}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {featured.highlights.map((point, index) => (
                <li key={index} style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--solis-teal)', borderRadius: '50%', flexShrink: 0 }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: 'clamp(1.5rem, 3.5vw, 2.75rem)', border: '1px solid var(--divider)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--solis-teal)', display: 'block', marginBottom: '0.65rem' }}>
              Therapeutic Equivalence
            </span>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--solis-navy-dark)', marginBottom: '0.85rem', lineHeight: '1.3' }}>
              Identical active ingredients. Substantial family savings.
            </h4>
            <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
              Bioequivalent generic drugs undergo strict testing to ensure they deliver identical clinical efficacy, safety, and performance as original brand formulations at a fraction of the cost.
            </p>
          </div>
        </div>

        {/* Compact Vertical Catalogue List with Thin Dividers */}
        <div className="catalogue-items-list" style={{ borderTop: '1px solid var(--divider)' }}>
          {otherCategories.map((item) => (
            <div key={item.id} className="catalogue-item-row">
              <span className="catalogue-item-num">{item.number}</span>
              <h4 className="catalogue-item-title">{item.title}</h4>
              <p className="catalogue-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
