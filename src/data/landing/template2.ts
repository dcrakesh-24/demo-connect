/**
 * Landing Page Template 2 - Static Data
 * Personalized Demo/Landing Page Template
 * This data structure is designed to be easily replaced with dynamic data later
 */

export interface PersonalizedHeader {
  userName: string;
  logo: {
    imageUrl: string;
    alt: string;
  };
  buttons: {
    learnMore: {
      text: string;
      link: string;
    };
    bookCall: {
      text: string;
      link: string;
    };
  };
}

export interface PersonalizedHero {
  logos: {
    primary: {
      imageUrl: string;
      alt: string;
    };
    secondary: {
      imageUrl: string;
      alt: string;
    };
  };
  greeting: string;
  description: string;
  graphicImageUrl?: string;
}

export interface UsefulInfoCard {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  label: string;
  icon?: string;
}

export interface VideoSection {
  title: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

export interface ContactPerson {
  name: string;
  title: string;
  avatarUrl: string;
}

export interface CalendarSection {
  title: string;
  timezone: string;
  calendlyUrl?: string;
  logos: {
    primary: {
      imageUrl: string;
      alt: string;
    };
    secondary: {
      imageUrl: string;
      alt: string;
    };
  };
}

export interface Template2Data {
  header: PersonalizedHeader;
  hero: PersonalizedHero;
  usefulInfo: {
    title: string;
    cards: UsefulInfoCard[];
  };
  video: VideoSection;
  contact: ContactPerson;
  calendar: CalendarSection;
  footer: {
    contentHub: {
      text: string;
      link: string;
    };
    copyright: string;
    links: {
      terms: string;
      privacy: string;
      cookie: string;
    };
    logo: {
      imageUrl: string;
      alt: string;
    };
  };
  colors?: {
    header?: {
      backgroundColor?: string;
      textColor?: string;
    };
    hero?: {
      backgroundColor?: string;
      textColor?: string;
      greetingFontSize?: string;
      greetingLineHeight?: string;
      greetingFontFamily?: string;
      greetingFontWeight?: string;
    };
    usefulInfo?: {
      backgroundColor?: string;
      textColor?: string;
    };
    video?: {
      backgroundColor?: string;
      textColor?: string;
    };
    calendar?: {
      backgroundColor?: string;
      textColor?: string;
      containerWidth?: string;
      containerMinHeight?: string;
    };
    footer?: {
      backgroundColor?: string;
      textColor?: string;
      borderColor?: string;
    };
  };
}

export const template2Data: Template2Data = {
  header: {
    userName: "Raghav",
    logo: {
      imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/logo.png?ts=1749725821",
      alt: "Logo",
    },
    buttons: {
      learnMore: {
        text: "Learn more",
        link: "#",
      },
      bookCall: {
        text: "Book a call",
        link: "#",
      },
    },
  },
  hero: {
    logos: {
      primary: {
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/logo.png?ts=1749725821",
        alt: "Primary Logo",
      },
      secondary: {
        imageUrl: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-human-character-with-green-tree-logo.-png-image_3732560.jpg",
        alt: "Secondary Logo",
      },
    },
    greeting: "Hey Raghav, great to chat\nto you again yesterday,\nscroll down for next\nsteps!",
    description:
      "Roll out the red carpet for your target accounts with scalable 1:1 personalisation and contact/account level tracking.",
    graphicImageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/GIF-_rolling_red_carpet.gif?ts=1736775115&Expires=1766072787&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=w6ZxoHn8X-lOPY8O04B-dOj~X6A6shZ1HgXbuq203fcOoJqDxPqGq3lq8820UFYRQ~abPsYORFB~QpZOCFLLmTfd2gRCxSPZyff~hADqWEFQA8vorRfX4SxY-iyWmfYRz-Jf4Cpuu8eweidedJHXz6w54FklfEObk3FlZi6Uo7B~L0OWcdQPmLgA8QlcfJBskAzdcN-YAkoT9Nqc7wDnFWMBXlkuPjY7MBdeWeNHn4LQmUSmbdv7B6J-ckzO~VNkXMnLn7DBgVvhqdiYo0p~Y8ezoRZnu9HShDLYL~4hTe0kW35witDoJySHM~FZbT~LnpcfaUUrHsBz-ePK7zABRQ__",
  },
  usefulInfo: {
    title: "Useful Information",
    cards: [
      {
        id: "1",
        title: "On-Demand Demos",
        type: "Most popular",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/26a658c7-fec9-4401-8d49-a76997e97332.jpg?ts=1756806071&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=2la4-MG9LUC08R3a12aC3P0HniF1w5lewwOQNYHNoEaNkRE-XobyxGVRI2PJGoBoqoGcX7esW1UeXkj0xNF1ghA5MFAPgCv-vOmuB8lJqa5rIghvoOW3rkW1fTkY1HpFK-urU9Aieh-uyYpgw6J0Ym1b3BOCo--FnoUiikdhq21WN7XTK3MMmblIRG3SNnrNIs~HTd35u8gxqpFiaNjC-BTfEy1mlsijyyc0-FiW~KfpkaP76bYcRukeWcQZEt6tD9pE52xvTnr6ZTP5bIUbUNMLQ80UvWMDqLCpiZpl4uDxBBbRjFBWEAoKh2RqqYb6Y1evYcheO4zZDpgtajnN9A__",
        label: "On-Demand Demos",
        icon: "U",
      },
      {
        id: "2",
        title: "Sami-Sabinsa Group Platform Walkthrough",
        type: "PDF",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/9482aa6e-66c8-4ada-b527-277063ec14af.jpg?ts=1744620969&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=0N4G-S9xWVdu3wOtxxH6NQADV6rzeGHbV311m5An3--WNI1AdgtupwAmpraOYP5KzEHMbgJFH9RTR7HnE5YUTy64Ee2KWi0Z61XS77Be6m8NfmF~BPIgHctuxDhCWo53oylz4u4dhxDFSLiHgD3OENGMyJ0raqiTS9PETKBoQAebPpEQsl95ex9NwVLX47o5vAeDymFchkefZlCcoXwlA722QL9foC4kC3qOFr7LZ78MCmIqxzUMQT62znUXHBaMG95MkrrgKgRreNchfXPwDPSvRaOge7AJQRaQ9t51gJayZdmaDpl7mgdDP0cDtBVNte~Ft3u6cUFvwCZHd72KwQ__",
        label: "Sami-Sabinsa_(2).pdf",
        icon: "📄",
      },
      {
        id: "3",
        title: "Sami-Sabinsa Group x Pfizer Landing Page",
        type: "Landing Page",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/acc5206b-756c-4fc9-b6d3-6351fe7a5998.png?ts=1756806024&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=Bpf4tVaLYtvwq39S93uTMuQzjPYYI7DFCRJ1qn1dhqfseDq4Cy3y-I71VqBNfMQNmrbBa7gjIJqC9TFC0KAgbDZZnfjnp0eg7-tIO1fsFBmBEyMalfOFxSK~3fs~jfrR8NKrNPA0CGKoHDoaHNPDJC1QJy8m~-Jtinyjlm4tiSgzaMbgSkt~Lrt2doB4BXxy8wedTPWY54V8-KqnfhK5ETh8ZvqSQ2swcVNw5qH5KDMR~9dkzyyueKSfCf3MV~30K46GLJktC6eSf6XvyvG1uaY-EDYQX7Ug-QLcjxKBm7lA9S7hrWiiIRsC~m6bhAIu5Ai0dHAkYY~SJxlowTgjPA__",
        label: "Sami-Sabinsa Group x Pfizer Landing Page",
        icon: "U",
      },
      {
        id: "4",
        title: "HubSpot Integration Guide",
        type: "PDF",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/26a658c7-fec9-4401-8d49-a76997e97332.jpg?ts=1756806071&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=2la4-MG9LUC08R3a12aC3P0HniF1w5lewwOQNYHNoEaNkRE-XobyxGVRI2PJGoBoqoGcX7esW1UeXkj0xNF1ghA5MFAPgCv-vOmuB8lJqa5rIghvoOW3rkW1fTkY1HpFK-urU9Aieh-uyYpgw6J0Ym1b3BOCo--FnoUiikdhq21WN7XTK3MMmblIRG3SNnrNIs~HTd35u8gxqpFiaNjC-BTfEy1mlsijyyc0-FiW~KfpkaP76bYcRukeWcQZEt6tD9pE52xvTnr6ZTP5bIUbUNMLQ80UvWMDqLCpiZpl4uDxBBbRjFBWEAoKh2RqqYb6Y1evYcheO4zZDpgtajnN9A__",
        label: "Hubspot_Integration.pdf",
        icon: "📄",
      },
      {
        id: "5",
        title: "Product Overview Video",
        type: "Video",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/e4c42c50-9aa4-4ee0-9741-311f80060676.png?ts=1743432025&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=qGdJ5iANOHRqq4cFTaQqXqJB~6vVuxQddv7-m1fwXMsEoOwwbSMLcobYYiLkvZu83yo8n8KZQRryW8FR9hedKirwD4jwwPqDeIz~4eQsmtaZdHXnT0fweH0Sk2-LwLkm0DFzX2pFeBMR0CQ5a9aKD0wd9CZ93Nf2HDRymSu8Shctjb5VuYEJR-8qlh-Hd9x8yuJ3yCMnL8IvFFhuGD0DMV9Mk90wcvI6jcfWl0t0H~wKnnp3SnFPn2Z6br6gVFDq4VDNqSMwIhPoFdpzbHsMyxR-9jdITptABSpp2mcdGAClUd9syK-hx6M3OeSjHVZUJjUv841OZak-SyzivsJOlA__",
        label: "Product Overview",
        icon: "▶",
      },
      {
        id: "6",
        title: "Case Study: Enterprise Success",
        type: "PDF",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/9482aa6e-66c8-4ada-b527-277063ec14af.jpg?ts=1744620969&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=0N4G-S9xWVdu3wOtxxH6NQADV6rzeGHbV311m5An3--WNI1AdgtupwAmpraOYP5KzEHMbgJFH9RTR7HnE5YUTy64Ee2KWi0Z61XS77Be6m8NfmF~BPIgHctuxDhCWo53oylz4u4dhxDFSLiHgD3OENGMyJ0raqiTS9PETKBoQAebPpEQsl95ex9NwVLX47o5vAeDymFchkefZlCcoXwlA722QL9foC4kC3qOFr7LZ78MCmIqxzUMQT62znUXHBaMG95MkrrgKgRreNchfXPwDPSvRaOge7AJQRaQ9t51gJayZdmaDpl7mgdDP0cDtBVNte~Ft3u6cUFvwCZHd72KwQ__",
        label: "Enterprise_Case_Study.pdf",
        icon: "📄",
      },
      {
        id: "7",
        title: "Getting Started Guide",
        type: "Document",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/acc5206b-756c-4fc9-b6d3-6351fe7a5998.png?ts=1756806024&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=Bpf4tVaLYtvwq39S93uTMuQzjPYYI7DFCRJ1qn1dhqfseDq4Cy3y-I71VqBNfMQNmrbBa7gjIJqC9TFC0KAgbDZZnfjnp0eg7-tIO1fsFBmBEyMalfOFxSK~3fs~jfrR8NKrNPA0CGKoHDoaHNPDJC1QJy8m~-Jtinyjlm4tiSgzaMbgSkt~Lrt2doB4BXxy8wedTPWY54V8-KqnfhK5ETh8ZvqSQ2swcVNw5qH5KDMR~9dkzyyueKSfCf3MV~30K46GLJktC6eSf6XvyvG1uaY-EDYQX7Ug-QLcjxKBm7lA9S7hrWiiIRsC~m6bhAIu5Ai0dHAkYY~SJxlowTgjPA__",
        label: "Getting Started Guide",
        icon: "📋",
      },
      {
        id: "8",
        title: "API Documentation",
        type: "Document",
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/thumbnails/e4c42c50-9aa4-4ee0-9741-311f80060676.png?ts=1743432025&Expires=1766072785&Key-Pair-Id=K1ZIOQWY1IQPUD&Signature=qGdJ5iANOHRqq4cFTaQqXqJB~6vVuxQddv7-m1fwXMsEoOwwbSMLcobYYiLkvZu83yo8n8KZQRryW8FR9hedKirwD4jwwPqDeIz~4eQsmtaZdHXnT0fweH0Sk2-LwLkm0DFzX2pFeBMR0CQ5a9aKD0wd9CZ93Nf2HDRymSu8Shctjb5VuYEJR-8qlh-Hd9x8yuJ3yCMnL8IvFFhuGD0DMV9Mk90wcvI6jcfWl0t0H~wKnnp3SnFPn2Z6br6gVFDq4VDNqSMwIhPoFdpzbHsMyxR-9jdITptABSpp2mcdGAClUd9syK-hx6M3OeSjHVZUJjUv841OZak-SyzivsJOlA__",
        label: "API Documentation",
        icon: "🔧",
      },
    ],
  },
  video: {
    title: "Raghav, rewatch the demo here",
    videoUrl: "https://www.loom.com/embed/9aa193c3a2614b79a5ab8f3853df3901?sid=0e8a6d4f-0184-403b-95b8-b6d89f26f7bf&hide_owner=true&hide_title=true&hideEmbedTopBar=true",
    thumbnailUrl: "https://via.placeholder.com/800x450/000000/FFFFFF?text=Video+Thumbnail",
  },
  contact: {
    name: "Geneviève Ladouceur",
    title: "Commercial Lead",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5p2YAjkVlqZKLb3honCfsh-ZLikbRnwzCxA&s",
  },
  calendar: {
    title: "Raghav, if you need anything in the meantime feel free to book a call!",
    timezone: "India Standard Time (12:10am)",
    logos: {
      primary: {
        imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/logo.png?ts=1749725821",
        alt: "Primary Logo",
      },
      secondary: {
        imageUrl: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-human-character-with-green-tree-logo.-png-image_3732560.jpg",
        alt: "Secondary Logo",
      },
    },
  },
  footer: {
    contentHub: {
      text: "Content Hub",
      link: "#",
    },
    copyright: "© Copyright 2024 Userled.io ltd. All rights reserved.",
    links: {
      terms: "#",
      privacy: "#",
      cookie: "#",
    },
    logo: {
      imageUrl: "https://assets.userled.io/media/3d4cee98-7f17-4e7a-afcb-06e1f1a50c3e/logo.png?ts=1749725821",
      alt: "Logo",
    },
  },
};

