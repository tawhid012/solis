import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function Footer({ navigate }) {
  const handleNavClick = (href, e) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Row */}
        <div className="footer-main-row">
          {/* Brand Column */}
          <div className="footer-brand-wrap">
            <div className="footer-logo-box">
              <img
                src={siteConfig.brand.logos.horizontal}
                alt="Solis Healthcare & Meds"
                className="footer-logo-img"
                width="170"
                height="64"
              />
            </div>
            <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.95rem', lineHeight: '1.65', maxWidth: '340px' }}>
              Essential medicines, healthcare products, and professional registered pharmacist care — with quality and affordability at the heart of everything we do.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              {siteConfig.navigation.footerQuickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => handleNavClick(item.href, e)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Pharmacy Contact Column */}
          <div>
            <div className="footer-col-title">Pharmacy Visit</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-inverse-muted)', fontSize: '0.925rem', lineHeight: '1.55' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Premises</strong>
                {siteConfig.contact.address}
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Dispensary Hours</strong>
                {siteConfig.contact.hours.weekdays}
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Telephone</strong>
                {siteConfig.contact.phone}
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Healthcare Disclaimer */}
        <div className="footer-disclaimer-row">
          <p className="footer-disclaimer-text">
            <strong>Responsible Healthcare Notice:</strong> {siteConfig.disclaimer}
          </p>
        </div>

        {/* Clean Legal Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            {siteConfig.navigation.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                style={{ color: '#8C9FA8', transition: 'color 150ms' }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
