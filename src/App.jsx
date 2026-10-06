import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClinicalSupportPage } from './pages/ClinicalSupportPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DispensingPolicyPage } from './pages/DispensingPolicyPage';
import { siteConfig } from './data/siteConfig';
import { BASE_PATH } from './utils/assets';

function normalizePath(rawPath) {
  let path = rawPath || '/';
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length);
  }
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path || '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (href) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const rootUrl = BASE_PATH ? `${BASE_PATH}/` : '/';
      if (currentPath !== '/') {
        window.history.pushState(null, '', rootUrl);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    const target = normalizePath(href);
    if (target === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const fullUrl = BASE_PATH ? `${BASE_PATH}${target}` : target;
    window.history.pushState(null, '', fullUrl);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO Titles based on route
  useEffect(() => {
    switch (currentPath) {
      case '/about':
        document.title = 'About Us | Solis Healthcare & Meds';
        break;
      case '/services':
        document.title = 'Healthcare Products & Services | Solis Healthcare & Meds';
        break;
      case '/clinical-support':
        document.title = 'Clinical Pharmacy Support | Solis Healthcare & Meds';
        break;
      case '/contact':
        document.title = 'Contact & Visit | Solis Healthcare & Meds';
        break;
      case '/privacy':
        document.title = 'Privacy Policy | Solis Healthcare & Meds';
        break;
      case '/terms':
        document.title = 'Terms & Conditions | Solis Healthcare & Meds';
        break;
      case '/dispensing-policy':
        document.title = 'Dispensing Policy | Solis Healthcare & Meds';
        break;
      default:
        document.title = 'Solis Healthcare & Meds | Affordable, Quality Healthcare & Medicines';
        break;
    }
  }, [currentPath]);

  // Page Routing Switch
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/services':
        return <ServicesPage navigate={navigate} />;
      case '/clinical-support':
        return <ClinicalSupportPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/dispensing-policy':
        return <DispensingPolicyPage />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="solis-app">
      <Header currentPath={currentPath} navigate={navigate} />
      {renderCurrentPage()}
      <Footer navigate={navigate} />
    </div>
  );
}
