/**
 * Landing Page Template 1 - Static Data
 * This data structure is designed to be easily replaced with dynamic data later
 */

export interface HeroSection {
  companyName: string;
  headline: string;
  highlightedText: string;
  subheadline: string;
  ctaButton: {
    text: string;
    link: string;
  };
  graphicBackgroundImage?: string;
  companyLogo?: string;
}

export interface Feature {
  id: string;
  icon: string; // Icon name or component identifier
  iconColor: string; // Tailwind color class
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  companyName: string;
  companyTagline: string;
  companyLogo: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  readMoreLink: string;
}

export interface LandingPageData {
  hero: HeroSection;
  intro: {
    title: string;
    description: string;
    ctaButton: {
      text: string;
      link: string;
    };
  };
  features: {
    title: string;
    items: Feature[];
    ctaButton: {
      text: string;
      link: string;
    };
  };
  caseStudies: {
    title: string;
    items: CaseStudy[];
  };
  marketingSection: {
    title: string;
    subtitle: string;
    ctaButton: {
      text: string;
      link: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
    ctaButton: {
      text: string;
      link: string;
    };
  };
  footer: {
    socialLinks: {
      linkedin: string;
      facebook: string;
      instagram: string;
    };
    navLinks: {
      about: string;
      blog: string;
      privacy: string;
    };
    copyright: string;
  };
  colors?: {
    header?: {
      backgroundColor?: string;
      textColor?: string;
    };
    hero?: {
      backgroundColor?: string;
      textColor?: string;
      highlightedTextColor?: string;
      ctaButtonColor?: string;
      ctaButtonHoverColor?: string;
    };
    intro?: {
      backgroundColor?: string;
      textColor?: string;
    };
    features?: {
      backgroundColor?: string;
      textColor?: string;
    };
    caseStudies?: {
      backgroundColor?: string;
      textColor?: string;
    };
    marketing?: {
      backgroundColor?: string;
      textColor?: string;
    };
    blog?: {
      backgroundColor?: string;
      textColor?: string;
    };
    footer?: {
      backgroundColor?: string;
      textColor?: string;
    };
  };
  logos?: {
    header?: string;
  };
}

export const template1Data: LandingPageData = {
  hero: {
    companyName: "General Motors",
    headline: "Hey General Motors,",
    highlightedText: "75% Higher Conversion Rates!",
    subheadline: "Boost Your Business by Reaching Local Customers with\nUse 'Near Me' Searches To\nYour Advantage.",
    ctaButton: {
      text: "Start My Free Trial",
      link: "#",
    },
    graphicBackgroundImage: "https://lscdn.blob.core.windows.net/content/c/smart-pm/img/client-logo-bg.png",
    companyLogo: "https://lscdn.blob.core.windows.net/content/c/smart-pm/img/general_motors.png",
  },
  intro: {
    title: "Hey General Motors,",
    description:
      "Are you looking for one ultimate solution to ignite your business's potential? With ProManage.biz, you can conquer the hyperlocal marketing realm. Streamline all your Google listings in one dashboard. Our core features include direct API integration with leading search engines and custom microsites for each location. NAP consistency and BVN tracking. We also offer reputation management, AI-assisted review responses, duplicate listing audit, and CRM integration. ALL FOR ZERO MEDIA COST!",
    ctaButton: {
      text: "Talk To Us",
      link: "#",
    },
  },
  features: {
    title: "What we do?",
    items: [
      {
        id: "1",
        icon: "search-chart",
        iconColor: "bg-yellow-500",
        title: "Simple Google Business Optimization",
        description:
          "Enjoy a centralized dashboard to manage multilocal listings. Update them simultaneously in just a few clicks to always stay on point and on-brand.",
      },
      {
        id: "2",
        icon: "lightbulb-heart",
        iconColor: "bg-teal-500",
        title: "Become a Reliable & Loved Brand",
        description:
          "Build trust and reliability with your audience by demonstrating a commitment to customer satisfaction and quality service.",
      },
      {
        id: "3",
        icon: "trending-up",
        iconColor: "bg-orange-500",
        title: "Conquer Google Snack Pack",
        description:
          "The dashboard helps you create posts, events, and offers and respond to messages from multiple platforms for customer engagement with less effort.",
      },
      {
        id: "4",
        icon: "phone-call",
        iconColor: "bg-pink-500",
        title: "Prompt More Calls, Clicks & Store Visits",
        description:
          "Accurate and up-to-date information, including business hours, name, phone number, and address (NAP) increases visibility leading to more calls and clicks.",
      },
      {
        id: "5",
        icon: "star-message",
        iconColor: "bg-blue-500",
        title: "Superior Review Management",
        description:
          "Be equipped with AI technology to perform sentiment analysis and valuable insights into customer feedback.",
      },
      {
        id: "6",
        icon: "check-document",
        iconColor: "bg-purple-500",
        title: "Increased Brand Credibility",
        description:
          "Maintain consistent & accurate business information across all online directories.",
      },
    ],
    ctaButton: {
      text: "Get in Touch",
      link: "#",
    },
  },
  caseStudies: {
    title: "Our Case Studies",
    items: [
      {
        id: "1",
        title: "Aster Pharmacy's Journey to Successful Hyperlocal Marketing",
        companyName: "Aster Pharmacy",
        companyTagline: "We'll Treat You Well",
        companyLogo: "",
        description:
          "When Aster Pharmacy opened in India in February 2021, it had rapid expansion plans. However, it required physical outlets and a solid hyperlocal marketing strategy to achieve growth. Targeting prospective local customers who conducted online searches for 'pharmacies near me' could quickly increase footfall/ inquiries and its customer base. Unfortunately, Aster's hyperlocal marketing process was fraught with issues like a limited online presence, poor listing rankings, a limited number of reviews, etc. The brand lacked a primary means to resolve these problems.",
        ctaText: "View Full Case Study",
        ctaLink: "#",
      },
    ],
  },
  marketingSection: {
    title: "Hyperlocal Marketing Software for Marketers",
    subtitle: "Learn how to Use 'Near Me' Searches To Your Advantage.",
    ctaButton: {
      text: "Request a Demo",
      link: "#",
    },
  },
  blog: {
    title: "Blogs",
    subtitle: "We would like to share with you knowledge, experiences and latest news",
    posts: [
      {
        id: "1",
        title: "Top 7 Hyperlocal Search Ranking Tricks You Need to Know in 2022",
        description:
          "Here are the top 7 GMB and SEO tips to rank higher on hyperlocal searches and establish an authority in your business' locality... Businesses know the benefits of...",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*rEZkgd5rrnl-CGvA.png",
        readMoreLink: "#",
      },
      {
        id: "2",
        title: "How to Increase Google Reviews for your Business Organically",
        description:
          "Learn 7 effective ways on how to increase Google reviews and build a deeper and wider customer base for your business. What's the one thing people will...",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*3pyj1VUwJGqKIDlJoPA9Tg.png",
        readMoreLink: "#",
      },
      {
        id: "3",
        title: "How to Leverage Google My Business (GMB) and Optimise it for Better Footfalls",
        description:
          "Learn how to increase your hyperlocal discovery and search traffic with 8 quick and actionable steps for GMB optimisation. 50% of people who do a hyperloc...",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*rMrUZTNSIusQZE33.png",
        readMoreLink: "#",
      },
      {
        id: "4",
        title: "9 Essential GMB Optimisations to Rank Higher in Hyperlocal Discovery",
        description:
          "They say first impressions matter. When people search online for a general store or medical store 'near me, they expect crystal clear information - the hours of...",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*A8zl_DE39hsxB_a2.png",
        readMoreLink: "#",
      },
      {
        id: "5",
        title: "Google E.A.T and Hyperlocal Discovery: Everything you Need to Know",
        description:
          "E-A-T is a guiding principle to evaluate the page quality of websites. Here is everything you need to do to incorporate E-A-T for your business website Assume..",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*oulxtSVZbOIalmGlmEWxoA.png",
        readMoreLink: "#",
      },
      {
        id: "6",
        title: "Can Competitors Edit My Google Business Listing?",
        description:
          '"Can competitors edit my google business listing?" Find out the answer along with how you can protect your profile in this article. Yes, not just competitors but...',
        imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*BRk0FehgN1h9uqh5XkP2bQ.png",
        readMoreLink: "#",
      },
    ],
    ctaButton: {
      text: "Request A Demo",
      link: "#",
    },
  },
  footer: {
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
    navLinks: {
      about: "#",
      blog: "#",
      privacy: "#",
    },
    copyright: "© 2023 Copyright promanage.biz All Rights Reserved.",
  },
};

