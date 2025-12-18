/**
 * Landing Page Template 4 - Blog Article Layout
 * This template is designed for blog/article pages with sidebar navigation
 */

export interface BlogArticleHeader {
  logoUrl?: string;
  logoText?: string;
  navLinks: {
    text: string;
    link: string;
  }[];
  signInLink: string;
  getStartedLink: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  link: string;
  isActive?: boolean;
}

export interface BlogArticleContent {
  publishedDate?: string;
  title: string;
  author?: string;
  authorLink?: string;
  readTime?: string;
  featuredImage?: string;
  sections: BlogArticleSection[];
}

export interface BlogArticleSection {
  id: string;
  heading?: string;
  content: string[];
  listItems?: string[];
  subSections?: BlogArticleSubSection[];
}

export interface BlogArticleSubSection {
  heading: string;
  content: string[];
  listItems?: string[];
}

export interface BlogArticleAd {
  logoUrl?: string;
  title: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    borderColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export interface BlogArticleFooter {
  columns: FooterColumn[];
  newsletter: {
    title: string;
    description: string;
    signUpButtonText: string;
  };
  language: string;
  copyright: string;
  companyInfo: string;
  vatInfo?: string;
  socialLinks: {
    x?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    linkColor?: string;
  };
}

export interface FooterColumn {
  title: string;
  links: {
    text: string;
    link: string;
  }[];
}

export interface ChatWidget {
  enabled: boolean;
  message: string;
  logoUrl?: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface ProductDemoSection {
  title?: string;
  heading: string;
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export interface Template4Data {
  header: BlogArticleHeader;
  tableOfContents: TableOfContentsItem[];
  content: BlogArticleContent;
  ad: BlogArticleAd;
  productDemo?: ProductDemoSection;
  footer: BlogArticleFooter;
  chatWidget: ChatWidget;
  shareLinks: {
    x?: string;
    facebook?: string;
    linkedin?: string;
    reddit?: string;
    whatsapp?: string;
  };
}

