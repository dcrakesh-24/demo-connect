/**
 * Landing Page Template 6 - Event Landing Page (Lovable Style)
 * This template is designed for event/conference landing pages with modern UI
 */

export interface Template6Header {
  logoUrl?: string;
  logoText: string;
  navLinks: {
    about: { text: string; href: string };
    booth: { text: string; href: string };
    team: { text: string; href: string };
  };
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    logoGradientFrom?: string;
    logoGradientTo?: string;
  };
}

export interface Template6Hero {
  badge: string;
  highlightedName?: string;
  greeting: string;
  description: string;
  boothInfo: string;
  topics: string[];
  eventDate: string;
  eventYear: string;
  venueName: string;
  venueLocation: string;
  boothNumber: string;
  boothLocation: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
  socialProof: string;
  resortImageUrl: string;
  teamMembers: {
    name: string;
    title: string;
    avatarUrl?: string;
  }[];
  colors?: {
    backgroundColor?: string;
    badgeColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    highlightedTextColor?: string;
  };
}

export interface Template6Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Template6Features {
  badge: string;
  title: string;
  description: string;
  features: Template6Feature[];
  colors?: {
    backgroundColor?: string;
    badgeColor?: string;
  };
}

export interface Template6BoothMap {
  badge: string;
  title: string;
  description: string;
  locationDetails: {
    title: string;
    description: string;
  };
  directions: {
    title: string;
    description: string;
  };
  ctaButton: {
    text: string;
    link: string;
  };
  mapImageUrl: string;
  boothNumber: string;
  colors?: {
    backgroundColor?: string;
    badgeColor?: string;
  };
}

export interface Template6TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface Template6Team {
  badge: string;
  title: string;
  description: string;
  members: Template6TeamMember[];
  colors?: {
    backgroundColor?: string;
    badgeColor?: string;
  };
}

export interface Template6CTA {
  title: string;
  description: string;
  benefits: string[];
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
  trustText: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface Template6FindUs {
  title: string;
  imageUrl: string;
  colors?: {
    backgroundColor?: string;
  };
}

export interface Template6Footer {
  logoText: string;
  description: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  productLinks: {
    features?: string;
    pricing?: string;
    integrations?: string;
    caseStudies?: string;
  };
  companyLinks: {
    about?: string;
    careers?: string;
    blog?: string;
    press?: string;
  };
  contactLinks: {
    email?: string;
    support?: string;
    documentation?: string;
  };
  legalLinks: {
    privacy?: string;
    terms?: string;
    cookie?: string;
  };
  copyright: string;
  colors?: {
    backgroundColor?: string;
    borderColor?: string;
  };
}

export interface Template6Data {
  header: Template6Header;
  hero: Template6Hero;
  features: Template6Features;
  boothMap: Template6BoothMap;
  team: Template6Team;
  cta: Template6CTA;
  findUs: Template6FindUs;
  footer: Template6Footer;
}

