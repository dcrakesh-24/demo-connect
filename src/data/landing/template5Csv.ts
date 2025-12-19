/**
 * Template 5 CSV Data Loader
 * Loads configuration from CSV and converts to Template5 data structure
 */

import { loadCsvFile } from "@/lib/csvParser";
import type { Template5Data, TeamMember } from "./template5";

let template5DataCache: Template5Data | null = null;
let template5Promise: Promise<Template5Data> | null = null;

/**
 * Clear Template5 data cache (useful for development/reloads)
 */
export function clearTemplate5Cache(): void {
  template5DataCache = null;
  template5Promise = null;
}

/**
 * Load Template5 data from CSV
 * @param forceReload - If true, clears cache and forces reload
 */
export async function loadTemplate5Data(forceReload: boolean = false): Promise<Template5Data> {
  if (forceReload) {
    clearTemplate5Cache();
  }

  if (template5DataCache && !forceReload) {
    return template5DataCache;
  }

  if (template5Promise && !forceReload) {
    return template5Promise;
  }

  template5Promise = (async () => {
    try {
      const timestamp = new Date().getTime();
      const csvData = await loadCsvFile(`/data/template5-config.csv?t=${timestamp}`);
      
      // Extract team members
      const teamMembers: TeamMember[] = [];
      for (let i = 1; i <= 10; i++) {
        const name = csvData.hero?.[`teamMember${i}_name`];
        if (name) {
          teamMembers.push({
            name,
            title: csvData.hero?.[`teamMember${i}_title`] || '',
            avatarUrl: csvData.hero?.[`teamMember${i}_avatarUrl`] || '',
          });
        }
      }

      // Extract topics
      const topics: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const topic = csvData.hero?.[`topic${i}`];
        if (topic) {
          topics.push(topic);
        }
      }

      const data: Template5Data = {
        header: {
          logoUrl: csvData.header?.logoUrl,
          logoText: csvData.header?.logoText,
          userName: csvData.header?.userName,
          buttons: {
            learnMore: {
              text: csvData.header?.learnMoreButtonText || 'Learn more',
              link: csvData.header?.learnMoreButtonLink || '#',
            },
            register: {
              text: csvData.header?.registerButtonText || 'Register',
              link: csvData.header?.registerButtonLink || '#',
            },
          },
          colors: {
            backgroundColor: csvData.header?.backgroundColor || '#FFFFFF',
            textColor: csvData.header?.textColor || '#000000',
            buttonColor: csvData.header?.buttonColor || '#FF6B35',
            buttonHoverColor: csvData.header?.buttonHoverColor || '#E55A2B',
          },
        },
        hero: {
          logos: {
            primary: {
              imageUrl: csvData.hero?.primaryLogoUrl || '',
              alt: csvData.hero?.primaryLogoAlt || 'Logo',
            },
            secondary: csvData.hero?.secondaryLogoUrl ? {
              imageUrl: csvData.hero.secondaryLogoUrl,
              alt: csvData.hero?.secondaryLogoAlt || 'Secondary Logo',
            } : undefined,
          },
          location: csvData.hero?.location || '',
          dates: csvData.hero?.dates || '',
          greeting: csvData.hero?.greeting || '',
          highlightedName: csvData.hero?.highlightedName,
          boothInfo: csvData.hero?.boothInfo || '',
          boothNumber: csvData.hero?.boothNumber || '',
          description: csvData.hero?.description || '',
          topics,
          ctaButton: {
            text: csvData.hero?.ctaButtonText || 'Chat with us!',
            link: csvData.hero?.ctaButtonLink || '#',
          },
          teamMembers,
          resortImageUrl: csvData.hero?.resortImageUrl || '',
          colors: {
            backgroundColor: csvData.hero?.backgroundColor || '#1E40AF',
            textColor: csvData.hero?.textColor || '#FFFFFF',
            highlightedTextColor: csvData.hero?.highlightedTextColor || '#FCD34D',
            buttonColor: csvData.hero?.buttonColor || '#FF6B35',
            buttonHoverColor: csvData.hero?.buttonHoverColor || '#E55A2B',
          },
        },
        marketplaceMap: {
          title: csvData.marketplaceMap?.title || 'Find us here',
          mapImageUrl: csvData.marketplaceMap?.mapImageUrl || '',
          boothNumber: csvData.marketplaceMap?.boothNumber || '',
          boothLocation: csvData.marketplaceMap?.boothLocation,
          colors: {
            backgroundColor: csvData.marketplaceMap?.backgroundColor || '#FFFFFF',
            textColor: csvData.marketplaceMap?.textColor || '#000000',
          },
        },
        footer: {
          text: csvData.footer?.text || 'Find us here',
          colors: {
            backgroundColor: csvData.footer?.backgroundColor || '#FFFFFF',
            textColor: csvData.footer?.textColor || '#000000',
          },
        },
      };

      template5DataCache = data;
      return data;
    } catch (error) {
      console.error('Error loading Template5 CSV data:', error);
      throw error;
    }
  })();

  return template5Promise;
}

/**
 * Get Template5 data (synchronous access to cache)
 */
export function getTemplate5Data(): Template5Data | null {
  return template5DataCache;
}




