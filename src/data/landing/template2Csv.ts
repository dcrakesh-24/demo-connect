/**
 * Template 2 CSV Data Loader
 * Loads configuration from CSV and converts to Template2 data structure
 */

import { loadCsvFile } from "@/lib/csvParser";
import type { Template2Data, UsefulInfoCard } from "./template2";

let template2DataCache: Template2Data | null = null;
let template2Promise: Promise<Template2Data> | null = null;

/**
 * Load Template2 data from CSV
 */
export async function loadTemplate2Data(): Promise<Template2Data> {
  if (template2DataCache) {
    return template2DataCache;
  }

  if (template2Promise) {
    return template2Promise;
  }

  template2Promise = (async () => {
    try {
      const csvData = await loadCsvFile("/data/template2-config.csv");
      
      // Extract useful info cards
      const cards: UsefulInfoCard[] = [];
      for (let i = 1; i <= 8; i++) {
        const id = csvData.usefulInfo?.[`card${i}_id`];
        if (id) {
          cards.push({
            id: id.toString(),
            title: csvData.usefulInfo[`card${i}_title`] || '',
            type: csvData.usefulInfo[`card${i}_type`] || '',
            imageUrl: csvData.usefulInfo[`card${i}_imageUrl`] || '',
            label: csvData.usefulInfo[`card${i}_label`] || '',
            icon: csvData.usefulInfo[`card${i}_icon`] || '',
          });
        }
      }

      const data: Template2Data = {
        header: {
          userName: csvData.header?.userName || '',
          logo: {
            imageUrl: csvData.header?.logoUrl || '',
            alt: csvData.header?.logoAlt || 'Logo',
          },
          buttons: {
            learnMore: {
              text: csvData.header?.learnMoreButtonText || '',
              link: csvData.header?.learnMoreButtonLink || '#',
            },
            bookCall: {
              text: csvData.header?.bookCallButtonText || '',
              link: csvData.header?.bookCallButtonLink || '#',
            },
          },
        },
        hero: {
          logos: {
            primary: {
              imageUrl: csvData.hero?.primaryLogoUrl || '',
              alt: csvData.hero?.primaryLogoAlt || 'Primary Logo',
            },
            secondary: {
              imageUrl: csvData.hero?.secondaryLogoUrl || '',
              alt: csvData.hero?.secondaryLogoAlt || 'Secondary Logo',
            },
          },
          greeting: csvData.hero?.greeting || '',
          description: csvData.hero?.description || '',
          graphicImageUrl: csvData.hero?.graphicImageUrl,
        },
        usefulInfo: {
          title: csvData.usefulInfo?.title || '',
          cards: cards,
        },
        video: {
          title: csvData.video?.title || '',
          videoUrl: csvData.video?.videoUrl || '',
          thumbnailUrl: csvData.video?.thumbnailUrl,
        },
        contact: {
          name: csvData.contact?.name || '',
          title: csvData.contact?.title || '',
          avatarUrl: csvData.contact?.avatarUrl || '',
        },
        calendar: {
          title: csvData.calendar?.title || '',
          timezone: csvData.calendar?.timezone || '',
          calendlyUrl: csvData.calendar?.calendlyUrl,
          logos: {
            primary: {
              imageUrl: csvData.calendar?.primaryLogoUrl || '',
              alt: csvData.calendar?.primaryLogoAlt || 'Primary Logo',
            },
            secondary: {
              imageUrl: csvData.calendar?.secondaryLogoUrl || '',
              alt: csvData.calendar?.secondaryLogoAlt || 'Secondary Logo',
            },
          },
        },
        footer: {
          contentHub: {
            text: '',
            link: '#',
          },
          copyright: csvData.footer?.copyright || '',
          links: {
            terms: csvData.footer?.termsLink || '#',
            privacy: csvData.footer?.privacyLink || '#',
            cookie: csvData.footer?.cookieLink || '#',
          },
          logo: {
            imageUrl: csvData.footer?.logoUrl || '',
            alt: csvData.footer?.logoAlt || 'Logo',
          },
        },
        // Add color configuration
        colors: {
          header: {
            backgroundColor: csvData.header?.backgroundColor || '#FFFFFF',
            textColor: csvData.header?.textColor || '#000000',
          },
          hero: {
            backgroundColor: csvData.hero?.backgroundColor || '#000000',
            textColor: csvData.hero?.textColor || '#FFFFFF',
            greetingFontSize: csvData.hero?.greetingFontSize || '48px',
            greetingLineHeight: csvData.hero?.greetingLineHeight || '1.25',
            greetingFontFamily: csvData.hero?.greetingFontFamily || 'Aeonik',
            greetingFontWeight: csvData.hero?.greetingFontWeight || '700',
          },
          usefulInfo: {
            backgroundColor: csvData.usefulInfo?.backgroundColor || '#FFFFFF',
            textColor: csvData.usefulInfo?.textColor || '#000000',
          },
          video: {
            backgroundColor: csvData.video?.backgroundColor || '#FFFFFF',
            textColor: csvData.video?.textColor || '#000000',
          },
          calendar: {
            backgroundColor: csvData.calendar?.backgroundColor || '#2563EB',
            textColor: csvData.calendar?.textColor || '#FFFFFF',
            containerWidth: csvData.calendar?.containerWidth || '70%',
            containerMinHeight: csvData.calendar?.containerMinHeight || '720px',
          },
          footer: {
            backgroundColor: csvData.footer?.backgroundColor || '#FFFFFF',
            textColor: csvData.footer?.textColor || '#000000',
            borderColor: csvData.footer?.borderColor || '#E5E7EB',
          },
        },
      };

      template2DataCache = data;
      return data;
    } catch (error) {
      console.error('Error loading Template2 CSV data:', error);
      throw error;
    }
  })();

  return template2Promise;
}

/**
 * Get Template2 data (synchronous access to cache)
 */
export function getTemplate2Data(): Template2Data | null {
  return template2DataCache;
}




