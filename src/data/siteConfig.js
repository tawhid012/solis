/**
 * Centralized Site Configuration for Solis Healthcare & Meds
 * 
 * Update client business details, contact information, hours,
 * and navigation in this single file. No hardcoded contact info
 * is scattered throughout the application.
 */

import { getAssetUrl } from '../utils/assets';

export const siteConfig = {
  brand: {
    name: "Solis Healthcare & Meds",
    shortName: "Solis",
    tagline: "Reimagining Healthcare with Affordable, High-Quality Medicines",
    mission: "Making quality healthcare and essential medicines accessible to every family with qualified pharmacist care.",
    promise: "Affordable Healthcare • Assured Quality Standards • Qualified Pharmacists",
    description: "A trusted healthcare destination for affordable generic medicines, surgical supplies, injectables, life-saving drugs, cosmetics, and OTC products, backed by qualified registered pharmacists.",
    establishedBadge: "Registered Pharmacy Care",
    logos: {
      horizontal: getAssetUrl("Horizontal.png"),
      monochrome: getAssetUrl("Monochrome.png"),
      icon: getAssetUrl("Icon.png"),
    },
  },

  // Contact Information — Client Placeholders (No Fake Data)
  contact: {
    businessName: "Solis Healthcare & Meds",
    // Configurable placeholders clearly marked for the client
    address: "[BUSINESS ADDRESS TO BE CONFIGURED]",
    addressLine2: "[CITY, STATE / REGION, POSTAL CODE]",
    addressNote: "Official pharmacy premises address will be updated upon final registration.",
    
    phone: "[PHONE NUMBER]",
    phoneSecondary: null,
    
    whatsapp: "[WHATSAPP NUMBER]",
    
    email: "[EMAIL ADDRESS]",
    
    hours: {
      weekdays: "[MON – SAT: 8:00 AM – 10:00 PM]",
      sunday: "[SUN: 9:00 AM – 8:00 PM]",
      emergencyNotice: "Emergency prescription dispensing subject to pharmacist availability and regulations.",
      pharmacistSchedule: "Qualified registered pharmacist on duty during all operating hours."
    },
    
    googleMapsUrl: null, // Will connect directly to Google Maps when coordinates/address are provided
    directionsNote: "Turn-by-turn directions and store location map will be linked once the physical premises address is configured.",
  },

  // Navigation Links
  navigation: {
    header: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Why Solis", href: "/#why-solis" },
      { name: "Clinical Support", href: "/clinical-support" },
      { name: "Contact", href: "/contact" },
    ],
    footerQuickLinks: [
      { name: "Home", href: "/" },
      { name: "About Solis", href: "/about" },
      { name: "Products & Services", href: "/services" },
      { name: "Clinical Support", href: "/clinical-support" },
      { name: "Contact & Visit", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Dispensing Policy", href: "/dispensing-policy" },
    ],
  },

  // 4 Core Trust Strip Points
  trustStrip: [
    {
      id: "affordable",
      number: "01",
      title: "Affordable Healthcare",
      description: "Fair, transparent pricing on essential generic medicines and daily health products.",
    },
    {
      id: "quality",
      number: "02",
      title: "Quality-Assured Products",
      description: "Direct sourcing from verified distributors with strict cold-chain and storage safety.",
    },
    {
      id: "pharmacists",
      number: "03",
      title: "Qualified Pharmacists",
      description: "Prescriptions dispensed, verified, and counselled by registered clinical pharmacists.",
    },
    {
      id: "range",
      number: "04",
      title: "Wide Product Range",
      description: "From daily OTC essentials and generics to life-saving drugs under one roof.",
    },
  ],

  // 6 Product & Service Categories (Informational — no fake prices or ecommerce cart)
  categories: [
    {
      id: "generic-medicines",
      number: "01",
      title: "Generic Medicines",
      badge: "Affordable Bioequivalents",
      description: "High-quality, bioequivalent medicines covering core therapeutic areas. Ensuring that chronic and acute treatments remain financially accessible without compromising therapeutic effectiveness.",
      highlights: [
        "Cardiovascular, diabetic, and respiratory therapies",
        "Rigorous verification of pharmaceutical bioequivalence",
        "Substantial cost savings for long-term patient regimens",
      ],
    },
    {
      id: "surgical-products",
      number: "02",
      title: "Surgical Products",
      badge: "Clinical-Grade",
      description: "A comprehensive range of sterile medical supplies, advanced wound-care dressings, surgical disposables, and monitoring equipment for home recovery and clinical applications.",
      highlights: [
        "Sterile bandages, gauze, and modern wound management",
        "Disposables, catheters, and surgical sundries",
        "Diagnostic aids: BP monitors, glucometers, and oximeters",
      ],
    },
    {
      id: "injectables",
      number: "03",
      title: "Injectables",
      badge: "Cold-Chain Integrity",
      description: "Critical parenteral medications, vaccines, and therapeutic injectables preserved under continuous temperature-monitored cold chain conditions until dispensing.",
      highlights: [
        "Prescription-only ampoules, vials, and prefilled syringes",
        "Strict compliance with cold-chain storage parameters",
        "Dispensed solely with verified physician prescriptions",
      ],
    },
    {
      id: "life-saving-drugs",
      number: "04",
      title: "Life-Saving Drugs",
      badge: "Specialized Care",
      description: "Emergency pharmaceuticals, intensive care medications, oncology, and specialty formulations maintained for critical patient care with verified pedigree.",
      highlights: [
        "Specialized therapeutic and critical-care formulations",
        "Direct procurement from accredited pharmaceutical channels",
        "Expedited assistance for vital healthcare regimens",
      ],
    },
    {
      id: "cosmetics",
      number: "05",
      title: "Cosmetics & Dermatology",
      badge: "Skin Health",
      description: "Clinically formulated dermatological care, therapeutic skincare, hypoallergenic baby care, and dermatologist-recommended personal wellness products.",
      highlights: [
        "Medicated sunscreens, moisturizers, and barrier creams",
        "Gentle, hypoallergenic skincare for sensitive skin",
        "Dermatologist-recommended formulations",
      ],
    },
    {
      id: "otc-products",
      number: "06",
      title: "OTC Healthcare Products",
      badge: "Everyday Wellness",
      description: "Trusted over-the-counter essentials including pain relief, digestive wellness, oral care, nutritional supplements, and everyday first-aid necessities.",
      highlights: [
        "Immune support vitamins and essential minerals",
        "First aid antiseptics, analgesics, and relief aids",
        "Family wellness and personal hygiene supplies",
      ],
    },
  ],

  // Why Families Choose Solis (4 Pillars)
  whyChooseUs: [
    {
      number: "01",
      title: "Affordable for Every Family",
      tagline: "Fair Healthcare Pricing",
      description: "We make quality healthcare more accessible and within reach. By focusing on cost-effective generic alternatives and fair pricing, we help reduce the financial burden of essential treatments.",
      detail: "Patients can manage continuous therapy regimens affordably without sacrificing pharmaceutical efficacy or safety.",
    },
    {
      number: "02",
      title: "Wide Range of Medicines",
      tagline: "All Under One Roof",
      description: "From everyday generic medicines to essential surgical supplies, injectables, and specialized life-saving medications, find what you need in one dependable location.",
      detail: "Eliminating the frustration of travelling between multiple shops to fill complex family prescriptions.",
    },
    {
      number: "03",
      title: "Assured Quality Standards",
      tagline: "Safety, Efficacy & Reliability",
      description: "Every product is sourced through verified channels and stored under strict temperature and hygiene standards. We never compromise on product integrity or provenance.",
      detail: "Continuous cold-chain monitoring and strict shelf-life management ensure medications perform as formulated.",
    },
    {
      number: "04",
      title: "Qualified Registered Staff",
      tagline: "Licensed Pharmacists on Duty",
      description: "Every medicine is dispensed and every patient is counselled by a qualified, registered pharmacist. We offer patient-first guidance rather than transactional sales.",
      detail: "Receive personalized answers regarding dosing schedules, drug interactions, and proper medicine storage.",
    },
  ],

  // Clinical Pharmacy Support (Core Differentiator)
  clinicalSupport: {
    headline: "More Than Medicines. Professional Healthcare Support.",
    subheading: "At Solis, healthcare goes beyond dispensing medicines. Our qualified pharmacists are available to provide medication guidance, patient counselling, and clinical support to help you understand your medicines and use them responsibly.",
    services: [
      {
        title: "Medication Counselling",
        description: "Clear, patient-friendly guidance on why each medicine was prescribed, how to take it correctly, optimal timing with food, and what to expect during your course of treatment.",
      },
      {
        title: "Medication Review",
        description: "A structured review of all your current prescriptions and OTC items to identify duplicate therapies, potential drug-drug interactions, or adverse timing conflicts.",
      },
      {
        title: "Patient Guidance & Education",
        description: "Practical advice on using inhalers, insulin pens, glucometers, eye drops, and special delivery devices with confidence and proper technique.",
      },
      {
        title: "Responsible Medicine Use",
        description: "Education on the importance of completing antibiotic courses, avoiding inappropriate self-medication, and understanding expiration and safe home storage.",
      },
    ],
    boundaries: "Note: Solis pharmacists offer clinical medication guidance and adherence support. Our pharmacists do not diagnose conditions, prescribe prescription-only medications without physician orders, or replace physician consultations.",
  },

  // Pharmacist Care Section
  pharmacistCare: {
    headline: "Professional Guidance, When It Matters.",
    subheading: "Every medicine deserves the right guidance. Our qualified, registered pharmacists help patients understand their medicines and use them responsibly.",
    quote: "A medicine is only as effective as how well it is taken. Clear pharmacist counselling bridges the gap between the doctor's prescription and safe recovery at home.",
    pillars: [
      {
        title: "Registered Pharmacists",
        text: "Licensed healthcare professionals with dedicated university training in pharmaceutical sciences, pharmacology, and patient care.",
      },
      {
        title: "Patient-Centered Dialogue",
        text: "We take the time to answer your questions in plain, reassuring language without rushing your visit.",
      },
      {
        title: "Adherence Support",
        text: "Helping patients with chronic illnesses like diabetes and hypertension maintain consistent, safe treatment regimens.",
      },
    ],
  },

  // Quality & Trust Section
  qualitySection: {
    headline: "Quality is not optional.",
    subheading: "In healthcare, precision and integrity are non-negotiable standards. Here is how Solis safeguards your health.",
    principles: [
      {
        title: "Quality-Focused Sourcing",
        description: "Medications and surgical supplies are acquired exclusively from authorized pharmaceutical distributors with verified provenance.",
      },
      {
        title: "Responsible Dispensing",
        description: "Double-check verification protocols to ensure the right drug, right strength, and right dosage instructions for every patient.",
      },
      {
        title: "Professional Counselling",
        description: "Every dispensing interaction is accompanied by clear, respectful communication to prevent misunderstandings.",
      },
      {
        title: "Patient-First Care",
        description: "Prioritizing your well-being, budget, and long-term recovery with genuine empathy and professional ethics.",
      },
    ],
  },

  // Final CTA Section
  finalCta: {
    headline: "Looking for Trusted Healthcare Essentials?",
    subheading: "Visit Solis Healthcare & Meds for quality medicines, healthcare products, and professional pharmacist support.",
    primaryButton: "Contact Solis",
    secondaryButton: "Get Directions",
  },

  // Responsible Healthcare Disclaimer
  disclaimer: "Dispensing of scheduled medicines is subject to a valid prescription from a registered medical practitioner in accordance with local regulations. Information on this website is for informational and educational awareness only and is not intended to substitute for medical diagnosis, advice, or treatment by a licensed physician. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition.",
};
