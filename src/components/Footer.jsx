import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { InstagramIcon } from './InstagramIcon';

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
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                  Patient Counselling Address
                </strong>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {siteConfig.contact.address}, {siteConfig.contact.addressLine2}
                </a>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#8C9FA8', marginTop: '0.15rem' }}>
                  In-person patient counselling &amp; consultation
                </span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Clinical Lead</strong>
                <span>{siteConfig.contact.leadPharmacist.name}</span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Telephone &amp; WhatsApp</strong>
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  style={{ color: '#FFFFFF', textDecoration: 'none', display: 'block' }}
                >
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={siteConfig.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#A5C4D4',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    marginTop: '0.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'color 150ms',
                  }}
                  aria-label="Instagram profile @montelukastman"
                >
                  <InstagramIcon size={15} />
                  <span>{siteConfig.contact.socialMedia.handle}</span>
                </a>
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
