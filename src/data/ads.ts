export type JourneyStage = "unware" | "ware" | "consideration" | "opputunerry" | "customer";

export type AdType = "single" | "carousel";

export type AdCreative = {
  id: string;
  companyId: string;
  stage: JourneyStage;
  type: AdType;
  images: string[];
  landingUrl: string;
  ctaLabel: string;
};

export const adsByCompanyId: Record<string, AdCreative[]> = {
  apple: [
    {
      id: "apple-unware-1",
      companyId: "apple",
      stage: "unware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=500&fit=crop"],
      landingUrl: "https://www.apple.com/iphone/",
      ctaLabel: "Learn more",
    },
    {
      id: "apple-ware-1",
      companyId: "apple",
      stage: "ware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=800&h=500&fit=crop"],
      landingUrl: "https://www.apple.com/iphone/",
      ctaLabel: "See highlights",
    },
    {
      id: "apple-consideration-1",
      companyId: "apple",
      stage: "consideration",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://www.apple.com/iphone/",
      ctaLabel: "See models",
    },
    {
      id: "apple-opputunerry-1",
      companyId: "apple",
      stage: "opputunerry",
      type: "single",
      images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop"],
      landingUrl: "https://www.apple.com/shop/buy-iphone",
      ctaLabel: "Buy now",
    },
    {
      id: "apple-customer-1",
      companyId: "apple",
      stage: "customer",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://support.apple.com/",
      ctaLabel: "Get support",
    },
  ],
  google: [
    {
      id: "google-unware-1",
      companyId: "google",
      stage: "unware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"],
      landingUrl: "https://cloud.google.com/",
      ctaLabel: "Explore Google Cloud",
    },
    {
      id: "google-ware-1",
      companyId: "google",
      stage: "ware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=500&fit=crop"],
      landingUrl: "https://cloud.google.com/",
      ctaLabel: "See solutions",
    },
    {
      id: "google-consideration-1",
      companyId: "google",
      stage: "consideration",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://cloud.google.com/products",
      ctaLabel: "Compare products",
    },
    {
      id: "google-opputunerry-1",
      companyId: "google",
      stage: "opputunerry",
      type: "single",
      images: ["https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=500&fit=crop"],
      landingUrl: "https://cloud.google.com/products/ai",
      ctaLabel: "Get started",
    },
    {
      id: "google-customer-1",
      companyId: "google",
      stage: "customer",
      type: "single",
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"],
      landingUrl: "https://cloud.google.com/support",
      ctaLabel: "Contact support",
    },
  ],
  microsoft: [
    {
      id: "microsoft-unware-1",
      companyId: "microsoft",
      stage: "unware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=500&fit=crop"],
      landingUrl: "https://www.microsoft.com/microsoft-copilot",
      ctaLabel: "Try Copilot",
    },
    {
      id: "microsoft-ware-1",
      companyId: "microsoft",
      stage: "ware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop"],
      landingUrl: "https://www.microsoft.com/microsoft-copilot",
      ctaLabel: "Watch demo",
    },
    {
      id: "microsoft-consideration-1",
      companyId: "microsoft",
      stage: "consideration",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://www.microsoft.com/microsoft-365/business",
      ctaLabel: "See plans",
    },
    {
      id: "microsoft-opputunerry-1",
      companyId: "microsoft",
      stage: "opputunerry",
      type: "single",
      images: ["https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop"],
      landingUrl: "https://www.microsoft.com/microsoft-365",
      ctaLabel: "Start trial",
    },
    {
      id: "microsoft-customer-1",
      companyId: "microsoft",
      stage: "customer",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://www.microsoft.com/microsoft-365",
      ctaLabel: "Upgrade now",
    },
  ],
  tcs: [
    {
      id: "tcs-unware-1",
      companyId: "tcs",
      stage: "unware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop"],
      landingUrl: "https://www.tcs.com/",
      ctaLabel: "Discover services",
    },
    {
      id: "tcs-ware-1",
      companyId: "tcs",
      stage: "ware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"],
      landingUrl: "https://www.tcs.com/services",
      ctaLabel: "View offerings",
    },
    {
      id: "tcs-consideration-1",
      companyId: "tcs",
      stage: "consideration",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://www.tcs.com/what-we-do",
      ctaLabel: "Explore use-cases",
    },
    {
      id: "tcs-opputunerry-1",
      companyId: "tcs",
      stage: "opputunerry",
      type: "single",
      images: ["https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"],
      landingUrl: "https://www.tcs.com/contact-us",
      ctaLabel: "Talk to sales",
    },
    {
      id: "tcs-customer-1",
      companyId: "tcs",
      stage: "customer",
      type: "single",
      images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"],
      landingUrl: "https://www.tcs.com/insights",
      ctaLabel: "Read insights",
    },
  ],
  infosys: [
    {
      id: "infosys-unware-1",
      companyId: "infosys",
      stage: "unware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop"],
      landingUrl: "https://www.infosys.com/",
      ctaLabel: "Visit Infosys",
    },
    {
      id: "infosys-ware-1",
      companyId: "infosys",
      stage: "ware",
      type: "single",
      images: ["https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop"],
      landingUrl: "https://www.infosys.com/services.html",
      ctaLabel: "See services",
    },
    {
      id: "infosys-consideration-1",
      companyId: "infosys",
      stage: "consideration",
      type: "carousel",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
      ],
      landingUrl: "https://www.infosys.com/industries.html",
      ctaLabel: "Browse industries",
    },
    {
      id: "infosys-opputunerry-1",
      companyId: "infosys",
      stage: "opputunerry",
      type: "single",
      images: ["https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop"],
      landingUrl: "https://www.infosys.com/contact.html",
      ctaLabel: "Contact us",
    },
    {
      id: "infosys-customer-1",
      companyId: "infosys",
      stage: "customer",
      type: "single",
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"],
      landingUrl: "https://www.infosys.com/insights.html",
      ctaLabel: "Customer stories",
    },
  ],
};


