/**
 * Landing Page Template 5 - Event Landing Page
 * This template is designed for event/conference landing pages
 */

export interface EventHeader {
  logoUrl?: string;
  logoText?: string;
  userName?: string;
  buttons: {
    learnMore: {
      text: string;
      link: string;
    };
    register: {
      text: string;
      link: string;
    };
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export interface TeamMember {
  name: string;
  title: string;
  avatarUrl: string;
}

export interface EventHero {
  logos: {
    primary: {
      imageUrl: string;
      alt: string;
    };
    secondary?: {
      imageUrl: string;
      alt: string;
    };
  };
  location: string;
  dates: string;
  greeting: string;
  highlightedName?: string;
  boothInfo: string;
  boothNumber: string;
  description: string;
  topics: string[];
  ctaButton: {
    text: string;
    link: string;
  };
  teamMembers: TeamMember[];
  resortImageUrl: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    highlightedTextColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export interface MarketplaceMap {
  title: string;
  mapImageUrl: string;
  boothNumber: string;
  boothLocation?: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface EventFooter {
  text: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface Template5Data {
  header: EventHeader;
  hero: EventHero;
  marketplaceMap: MarketplaceMap;
  footer: EventFooter;
}




