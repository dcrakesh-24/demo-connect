/**
 * Template 6 CSV Data Loader
 * Loads configuration from CSV and converts to Template6 data structure
 */

import { loadCsvFile } from "@/lib/csvParser";
import type { Template6Data, Template6Feature, Template6TeamMember } from "./template6";

let template6DataCache: Template6Data | null = null;
let template6Promise: Promise<Template6Data> | null = null;

/**
 * Clear Template6 data cache (useful for development/reloads)
 */
export function clearTemplate6Cache(): void {
  template6DataCache = null;
  template6Promise = null;
}

/**
 * Load Template6 data from CSV
 * @param forceReload - If true, clears cache and forces reload
 */
export async function loadTemplate6Data(forceReload: boolean = false): Promise<Template6Data> {
  if (forceReload) {
    clearTemplate6Cache();
  }

  if (template6DataCache && !forceReload) {
    return template6DataCache;
  }

  if (template6Promise && !forceReload) {
    return template6Promise;
  }

  template6Promise = (async () => {
    try {
      const timestamp = new Date().getTime();
      const csvData = await loadCsvFile(`/data/template6-config.csv?t=${timestamp}`);

      // Extract features
      const features: Template6Feature[] = [];
      for (let i = 1; i <= 10; i++) {
        const title = csvData.features?.[`feature${i}_title`];
        if (title) {
          features.push({
            icon: csvData.features[`feature${i}_icon`] || 'Sparkles',
            title,
            description: csvData.features[`feature${i}_description`] || '',
          });
        }
      }

      // Extract hero topics
      const heroTopics: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const topic = csvData.hero?.[`topic${i}`];
        if (topic) {
          heroTopics.push(topic);
        }
      }

      // Extract hero team members
      const heroTeamMembers: { name: string; title: string; avatarUrl?: string }[] = [];
      for (let i = 1; i <= 10; i++) {
        const name = csvData.hero?.[`teamMember${i}_name`];
        if (name) {
          heroTeamMembers.push({
            name,
            title: csvData.hero[`teamMember${i}_title`] || '',
            avatarUrl: csvData.hero[`teamMember${i}_avatarUrl`],
          });
        }
      }

      // Extract team members
      const teamMembers: Template6TeamMember[] = [];
      for (let i = 1; i <= 10; i++) {
        const name = csvData.team?.[`member${i}_name`];
        if (name) {
          teamMembers.push({
            name,
            role: csvData.team[`member${i}_role`] || '',
            bio: csvData.team[`member${i}_bio`] || '',
            initials: csvData.team[`member${i}_initials`] || name.split(' ').map(n => n[0]).join(''),
            linkedinUrl: csvData.team[`member${i}_linkedinUrl`],
            twitterUrl: csvData.team[`member${i}_twitterUrl`],
          });
        }
      }

      // Extract CTA benefits
      const benefits: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const benefit = csvData.cta?.[`benefit${i}`];
        if (benefit) {
          benefits.push(benefit);
        }
      }

      const data: Template6Data = {
        header: {
          logoUrl: csvData.header?.logoUrl,
          logoText: csvData.header?.logoText || 'Userled',
          navLinks: {
            about: {
              text: csvData.header?.navAboutText || 'About Event',
              href: csvData.header?.navAboutHref || '#about',
            },
            booth: {
              text: csvData.header?.navBoothText || 'Find Our Booth',
              href: csvData.header?.navBoothHref || '#booth',
            },
            team: {
              text: csvData.header?.navTeamText || 'Meet the Team',
              href: csvData.header?.navTeamHref || '#team',
            },
          },
          ctaButton: {
            text: csvData.header?.ctaButtonText || 'Book a Meeting',
            link: csvData.header?.ctaButtonLink || '#',
          },
          colors: {
            backgroundColor: csvData.header?.backgroundColor || '#FFFFFF',
            logoGradientFrom: csvData.header?.logoGradientFrom || 'hsl(262,83%,58%)',
            logoGradientTo: csvData.header?.logoGradientTo || 'hsl(292,84%,61%)',
          },
        },
        hero: {
          badge: csvData.hero?.badge || 'B2B Marketing Exchange 2025',
          highlightedName: csvData.hero?.highlightedName,
          greeting: csvData.hero?.greeting || '',
          description: csvData.hero?.description || '',
          boothInfo: csvData.hero?.boothInfo || '',
          topics: heroTopics,
          eventDate: csvData.hero?.eventDate || 'February 24-26',
          eventYear: csvData.hero?.eventYear || '2025',
          venueName: csvData.hero?.venueName || 'The Phoenician',
          venueLocation: csvData.hero?.venueLocation || 'Scottsdale, AZ',
          boothNumber: csvData.hero?.boothNumber || '418',
          boothLocation: csvData.hero?.boothLocation || 'Exhibition Hall A',
          primaryCta: {
            text: csvData.hero?.primaryCtaText || 'Book Your Slot',
            link: csvData.hero?.primaryCtaLink || '#',
          },
          secondaryCta: {
            text: csvData.hero?.secondaryCtaText || 'Learn More',
            link: csvData.hero?.secondaryCtaLink || '#',
          },
          socialProof: csvData.hero?.socialProof || '500+ meetings booked at last year\'s event',
          resortImageUrl: csvData.hero?.resortImageUrl || '',
          teamMembers: heroTeamMembers,
          colors: {
            backgroundColor: csvData.hero?.backgroundColor || '#1E40AF',
            badgeColor: csvData.hero?.badgeColor || 'hsl(262,83%,58%)',
            gradientFrom: csvData.hero?.gradientFrom || 'hsl(262,83%,58%)',
            gradientTo: csvData.hero?.gradientTo || 'hsl(292,84%,61%)',
            highlightedTextColor: csvData.hero?.highlightedTextColor || '#FCD34D',
          },
        },
        features: {
          badge: csvData.features?.badge || 'What We\'ll Discuss',
          title: csvData.features?.title || 'The Future of B2B Marketing',
          description: csvData.features?.description || '',
          features,
          colors: {
            backgroundColor: csvData.features?.backgroundColor || '#FFFFFF',
            badgeColor: csvData.features?.badgeColor || 'hsl(262,83%,58%)',
          },
        },
        boothMap: {
          badge: csvData.boothMap?.badge || 'Find Us Easily',
          title: csvData.boothMap?.title || 'We\'re at Booth 418',
          description: csvData.boothMap?.description || '',
          locationDetails: {
            title: csvData.boothMap?.locationTitle || 'Exhibition Hall A',
            description: csvData.boothMap?.locationDescription || '',
          },
          directions: {
            title: csvData.boothMap?.directionsTitle || 'Easy to Find',
            description: csvData.boothMap?.directionsDescription || '',
          },
          ctaButton: {
            text: csvData.boothMap?.ctaButtonText || 'Get Directions',
            link: csvData.boothMap?.ctaButtonLink || '#',
          },
          mapImageUrl: csvData.boothMap?.mapImageUrl || '',
          boothNumber: csvData.boothMap?.boothNumber || '418',
          colors: {
            backgroundColor: csvData.boothMap?.backgroundColor || '#F5F5F5',
            badgeColor: csvData.boothMap?.badgeColor || 'hsl(262,83%,58%)',
          },
        },
        team: {
          badge: csvData.team?.badge || 'The Team',
          title: csvData.team?.title || 'Meet the Userled Team',
          description: csvData.team?.description || '',
          members: teamMembers,
          colors: {
            backgroundColor: csvData.team?.backgroundColor || '#FFFFFF',
            badgeColor: csvData.team?.badgeColor || 'hsl(262,83%,58%)',
          },
        },
        cta: {
          title: csvData.cta?.title || 'Ready to Transform Your ABM Strategy?',
          description: csvData.cta?.description || '',
          benefits,
          primaryCta: {
            text: csvData.cta?.primaryCtaText || 'Book Your Meeting',
            link: csvData.cta?.primaryCtaLink || '#',
          },
          secondaryCta: {
            text: csvData.cta?.secondaryCtaText || 'Contact Us',
            link: csvData.cta?.secondaryCtaLink || '#',
          },
          trustText: csvData.cta?.trustText || 'Limited slots available • No commitment required',
          colors: {
            backgroundColor: csvData.cta?.backgroundColor || '#000000',
            textColor: csvData.cta?.textColor || '#FFFFFF',
          },
        },
        findUs: {
          title: csvData.findUs?.title || 'Find us here',
          imageUrl: csvData.findUs?.imageUrl || '/assets/findus.png',
          colors: {
            backgroundColor: csvData.findUs?.backgroundColor || '#FFFFFF',
          },
        },
        footer: {
          logoText: csvData.footer?.logoText || 'Userled',
          description: csvData.footer?.description || '',
          socialLinks: {
            linkedin: csvData.footer?.socialLinkedin,
            twitter: csvData.footer?.socialTwitter,
            youtube: csvData.footer?.socialYoutube,
          },
          productLinks: {
            features: csvData.footer?.productFeatures,
            pricing: csvData.footer?.productPricing,
            integrations: csvData.footer?.productIntegrations,
            caseStudies: csvData.footer?.productCaseStudies,
          },
          companyLinks: {
            about: csvData.footer?.companyAbout,
            careers: csvData.footer?.companyCareers,
            blog: csvData.footer?.companyBlog,
            press: csvData.footer?.companyPress,
          },
          contactLinks: {
            email: csvData.footer?.contactEmail,
            support: csvData.footer?.contactSupport,
            documentation: csvData.footer?.contactDocumentation,
          },
          legalLinks: {
            privacy: csvData.footer?.legalPrivacy,
            terms: csvData.footer?.legalTerms,
            cookie: csvData.footer?.legalCookie,
          },
          copyright: csvData.footer?.copyright || `© ${new Date().getFullYear()} Userled. All rights reserved.`,
          colors: {
            backgroundColor: csvData.footer?.backgroundColor || '#FFFFFF',
            borderColor: csvData.footer?.borderColor || '#E5E5E5',
          },
        },
      };

      template6DataCache = data;
      return data;
    } catch (error) {
      console.error('Error loading Template6 CSV data:', error);
      throw error;
    }
  })();

  return template6Promise;
}

/**
 * Get Template6 data (synchronous access to cache)
 */
export function getTemplate6Data(): Template6Data | null {
  return template6DataCache;
}

