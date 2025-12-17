export interface Company {
  id: string;
  name: string;
  logo: string;
  initials: string;
  tagline: string;
  industry: string;
  headquarters: string;
  employees: string;
  website: string;
  about: string;
  coverImage: string;
  followers: number;
}

export interface CompanyPost {
  companyId: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  isSponsored?: boolean;
}

export const companies: Company[] = [
  {
    id: "apple",
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    initials: "AP",
    tagline: "Think Different",
    industry: "Consumer Electronics",
    headquarters: "Cupertino, California",
    employees: "164,000+",
    website: "apple.com",
    about: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue and the world's most valuable company.",
    coverImage: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1200&h=400&fit=crop",
    followers: 18500000,
  },
  {
    id: "google",
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    initials: "GO",
    tagline: "Organize the world's information",
    industry: "Internet & Technology",
    headquarters: "Mountain View, California",
    employees: "190,000+",
    website: "google.com",
    about: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, and e-commerce.",
    coverImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=400&fit=crop",
    followers: 32400000,
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    initials: "MS",
    tagline: "Empowering every person and organization",
    industry: "Computer Software",
    headquarters: "Redmond, Washington",
    employees: "221,000+",
    website: "microsoft.com",
    about: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's best-known software products are Windows, Microsoft 365, and Azure.",
    coverImage: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1200&h=400&fit=crop",
    followers: 21800000,
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    initials: "TCS",
    tagline: "Building on Belief",
    industry: "IT Services & Consulting",
    headquarters: "Mumbai, India",
    employees: "614,000+",
    website: "tcs.com",
    about: "Tata Consultancy Services is an Indian multinational information technology services and consulting company. It is part of the Tata Group and operates in 150 locations across 46 countries.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
    followers: 12300000,
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    initials: "IN",
    tagline: "Navigate your next",
    industry: "IT Services & Consulting",
    headquarters: "Bengaluru, India",
    employees: "335,000+",
    website: "infosys.com",
    about: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop",
    followers: 8700000,
  },
];

export const companyPosts: CompanyPost[] = [
  {
    companyId: "apple",
    timeAgo: "1h",
    content: "🍎 Introducing iPhone 16 Pro — the most powerful iPhone ever.\n\nWith the all-new A18 Pro chip and Apple Intelligence, experience photography and videography like never before.\n\nPre-order now and be part of the future. #iPhone16Pro #AppleIntelligence",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=500&fit=crop",
    likes: 45230,
    comments: 3421,
    reposts: 8934,
    isSponsored: true,
  },
  {
    companyId: "google",
    timeAgo: "3h",
    content: "🚀 Google Cloud Next '24 is here!\n\nJoin us as we unveil groundbreaking AI innovations, new Gemini capabilities, and enterprise solutions that will transform your business.\n\nRegister now for free → cloud.google.com/next\n\n#GoogleCloudNext #AI #CloudComputing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    likes: 28760,
    comments: 1892,
    reposts: 5673,
    isSponsored: true,
  },
  {
    companyId: "microsoft",
    timeAgo: "4h",
    content: "💼 Transform your workplace with Microsoft Copilot.\n\nAI-powered assistance across Word, Excel, PowerPoint, and Teams. Boost productivity by 40% and focus on what matters most.\n\nStart your free trial today → microsoft.com/copilot\n\n#MicrosoftCopilot #AI #Productivity",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=500&fit=crop",
    likes: 31450,
    comments: 2156,
    reposts: 6234,
    isSponsored: true,
  },
  {
    companyId: "tcs",
    timeAgo: "6h",
    content: "🌟 TCS recognized as a Leader in Gartner Magic Quadrant for IT Services!\n\nOur commitment to innovation and customer success continues to drive excellence across industries.\n\nDiscover how we can transform your digital journey → tcs.com/services\n\n#TCS #DigitalTransformation #ITServices",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    likes: 15670,
    comments: 987,
    reposts: 2345,
    isSponsored: true,
  },
  {
    companyId: "infosys",
    timeAgo: "8h",
    content: "🎓 Infosys Springboard: Free digital learning for everyone!\n\nAccess 1000+ courses in AI, Cloud, Cybersecurity, and more. Upskill today and shape tomorrow.\n\nJoin 10M+ learners → infosys.com/springboard\n\n#Infosys #DigitalLearning #CareerGrowth #FreeEducation",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    likes: 12340,
    comments: 756,
    reposts: 1890,
    isSponsored: true,
  },
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find((company) => company.id === id);
};

export const getPostsByCompanyId = (companyId: string): CompanyPost[] => {
  return companyPosts.filter((post) => post.companyId === companyId);
};
