/**
 * Template 3 CSV Data Loader
 * Loads configuration from CSV and converts to Template3 data structure
 * Template3 is identical to Template1 in structure but uses its own CSV configuration
 */

import { loadCsvFile } from "@/lib/csvParser";
import type { LandingPageData, Feature, CaseStudy, BlogPost } from "./template1";

let template3DataCache: LandingPageData | null = null;
let template3Promise: Promise<LandingPageData> | null = null;

/**
 * Clear Template3 data cache (useful for development/reloads)
 */
export function clearTemplate3Cache(): void {
  template3DataCache = null;
  template3Promise = null;
}

/**
 * Load Template3 data from CSV
 * @param forceReload - If true, clears cache and forces reload
 */
export async function loadTemplate3Data(forceReload: boolean = false): Promise<LandingPageData> {
  if (forceReload) {
    clearTemplate3Cache();
  }

  if (template3DataCache && !forceReload) {
    return template3DataCache;
  }

  if (template3Promise && !forceReload) {
    return template3Promise;
  }

      template3Promise = (async () => {
    try {
      // Add cache busting timestamp to force reload
      const timestamp = new Date().getTime();
      const csvData = await loadCsvFile(`/data/template3-config.csv?t=${timestamp}`);
      
      // Extract features
      const features: Feature[] = [];
      for (let i = 1; i <= 6; i++) {
        const id = csvData.features?.[`item${i}_id`];
        if (id) {
          features.push({
            id: id.toString(),
            icon: csvData.features[`item${i}_icon`] || '',
            iconColor: csvData.features[`item${i}_iconColor`] || 'bg-gray-500',
            title: csvData.features[`item${i}_title`] || '',
            description: csvData.features[`item${i}_description`] || '',
          });
        }
      }

      // Extract case studies
      const caseStudies: CaseStudy[] = [];
      const caseStudy1 = csvData.caseStudies;
      if (caseStudy1?.item1_id) {
        caseStudies.push({
          id: caseStudy1.item1_id.toString(),
          title: caseStudy1.item1_title || '',
          companyName: caseStudy1.item1_companyName || '',
          companyTagline: caseStudy1.item1_companyTagline || '',
          companyLogo: '',
          description: caseStudy1.item1_description || '',
          ctaText: caseStudy1.item1_ctaText || '',
          ctaLink: caseStudy1.item1_ctaLink || '#',
          imageUrl: caseStudy1.item1_imageUrl || '',
        });
      }

      // Extract blog posts
      const blogPosts: BlogPost[] = [];
      for (let i = 1; i <= 6; i++) {
        const id = csvData.blog?.[`post${i}_id`];
        if (id) {
          blogPosts.push({
            id: id.toString(),
            title: csvData.blog[`post${i}_title`] || '',
            description: csvData.blog[`post${i}_description`] || '',
            imageUrl: csvData.blog[`post${i}_imageUrl`] || '',
            readMoreLink: csvData.blog[`post${i}_readMoreLink`] || '#',
          });
        }
      }

      const data: LandingPageData = {
        hero: {
          companyName: csvData.hero?.companyName || '',
          headline: csvData.hero?.headline || '',
          highlightedText: csvData.hero?.highlightedText || '',
          subheadline: csvData.hero?.subheadline || '',
          ctaButton: {
            text: csvData.hero?.ctaButtonText || '',
            link: csvData.hero?.ctaButtonLink || '#',
          },
          graphicBackgroundImage: csvData.hero?.graphicBackgroundImage,
          companyLogo: csvData.hero?.companyLogo,
        },
        intro: {
          title: csvData.intro?.title || '',
          description: csvData.intro?.description || '',
          ctaButton: {
            text: csvData.intro?.ctaButtonText || '',
            link: csvData.intro?.ctaButtonLink || '#',
          },
        },
        features: {
          title: csvData.features?.title || '',
          items: features,
          ctaButton: {
            text: csvData.features?.ctaButtonText || '',
            link: csvData.features?.ctaButtonLink || '#',
          },
        },
        caseStudies: {
          title: csvData.caseStudies?.title || '',
          items: caseStudies,
        },
        marketingSection: {
          title: csvData.marketing?.title || '',
          subtitle: csvData.marketing?.subtitle || '',
          ctaButton: {
            text: csvData.marketing?.ctaButtonText || '',
            link: csvData.marketing?.ctaButtonLink || '#',
          },
        },
        blog: {
          title: csvData.blog?.title || '',
          subtitle: csvData.blog?.subtitle || '',
          posts: blogPosts,
          ctaButton: {
            text: csvData.blog?.ctaButtonText || '',
            link: csvData.blog?.ctaButtonLink || '#',
          },
        },
        footer: {
          socialLinks: {
            linkedin: csvData.footer?.linkedinLink || '#',
            facebook: csvData.footer?.facebookLink || '#',
            instagram: csvData.footer?.instagramLink || '#',
          },
          navLinks: {
            about: csvData.footer?.aboutLink || '#',
            blog: csvData.footer?.blogLink || '#',
            privacy: csvData.footer?.privacyLink || '#',
          },
          copyright: csvData.footer?.copyright || '',
        },
        // Add color configuration
        colors: {
          header: {
            backgroundColor: csvData.header?.backgroundColor || '#FFFFFF',
            textColor: csvData.header?.textColor || '#000000',
          },
          hero: {
            backgroundColor: csvData.hero?.backgroundColor || '#011A65',
            textColor: csvData.hero?.textColor || '#FFFFFF',
            highlightedTextColor: csvData.hero?.highlightedTextColor || '#FF6B35',
            ctaButtonColor: csvData.hero?.ctaButtonColor || '#00d4ff',
            ctaButtonHoverColor: csvData.hero?.ctaButtonHoverColor || '#00b8e6',
          },
          intro: {
            backgroundColor: csvData.intro?.backgroundColor || '#FFFFFF',
            textColor: csvData.intro?.textColor || '#000000',
          },
          features: {
            backgroundColor: csvData.features?.backgroundColor || '#F2F4FF',
            textColor: csvData.features?.textColor || '#000000',
          },
          caseStudies: {
            backgroundColor: csvData.caseStudies?.backgroundColor || '#FFFFFF',
            textColor: csvData.caseStudies?.textColor || '#000000',
          },
          marketing: {
            backgroundColor: csvData.marketing?.backgroundColor || '#F2F4FF',
            textColor: csvData.marketing?.textColor || '#000000',
          },
          blog: {
            backgroundColor: csvData.blog?.backgroundColor || '#FFFFFF',
            textColor: csvData.blog?.textColor || '#000000',
          },
          footer: {
            backgroundColor: csvData.footer?.backgroundColor || '#FFFFFF',
            textColor: csvData.footer?.textColor || '#000000',
          },
        },
        // Add logo configuration
        logos: {
          header: csvData.header?.logoUrl || '',
        },
      };

      template3DataCache = data;
      return data;
    } catch (error) {
      console.error('Error loading Template3 CSV data:', error);
      throw error;
    }
  })();

  return template3Promise;
}

/**
 * Get Template3 data (synchronous access to cache)
 */
export function getTemplate3Data(): LandingPageData | null {
  return template3DataCache;
}

