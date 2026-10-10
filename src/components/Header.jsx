import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function Header({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus close button for keyboard navigation
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Brand Logo - Official Solis Horizontal Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className="header-brand"
              aria-label="Solis Healthcare & Meds Home"
            >
              <img
                src={siteConfig.brand.logos.horizontal}
                alt="Solis Healthcare & Meds"
                className="header-logo-img"
                width="170"
                height="64"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-desktop" aria-label="Main Navigation">
              {siteConfig.navigation.header.map((item) => {
                const isActive =
                  item.href === '/'
                    ? currentPath === '/'
                    : currentPath === item.href || (item.href.startsWith('/#') && currentPath === '/');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`nav-link ${isActive && !item.href.startsWith('/#') ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href="/contact"
                onClick={(e) => handleNavClick('/contact', e)}
                className="btn btn-primary header-cta-desktop"
                style={{ minHeight: '42px', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              >
                <span>Visit Solis</span>
                <ArrowRight size={14} />
              </a>

              {/* Mobile Menu Toggle Button (>= 44px) */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile Navigation"
        aria-modal="true"
      >
        <div className="mobile-drawer-header">
          <img
            src={siteConfig.brand.logos.horizontal}
            alt="Solis Healthcare & Meds"
            className="mobile-drawer-logo"
            width="135"
            height="51"
          />
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Menu Navigation">
          {siteConfig.navigation.header.map((item) => {
            const isActive =
              item.href === '/'
                ? currentPath === '/'
                : currentPath === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="/contact"
            onClick={(e) => handleNavClick('/contact', e)}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <span>Visit Solis</span>
            <ArrowRight size={15} />
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.65rem', marginTop: '0.85rem', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <a href={`tel:${siteConfig.contact.phoneHref}`} style={{ color: 'var(--solis-navy-dark)', fontWeight: 600, textDecoration: 'none' }}>
              Call: {siteConfig.contact.phone}
            </a>
            <span style={{ color: 'var(--divider)' }}>&bull;</span>
            <span style={{ color: 'var(--text-secondary)' }}>{siteConfig.contact.address}</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            {siteConfig.contact.leadPharmacist.name} &bull; Clinical Pharmacist on duty
          </div>
        </div>
      </div>
    </>
  );
}
