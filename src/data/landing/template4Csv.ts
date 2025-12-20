/**
 * Template 4 CSV Data Loader
 * Loads configuration from CSV and converts to Template4 data structure
 */

import { loadCsvFile } from "@/lib/csvParser";
import type { Template4Data, TableOfContentsItem, BlogArticleSection, FooterColumn } from "./template4";

let template4DataCache: Record<string, Template4Data> = {};
let template4Promises: Record<string, Promise<Template4Data>> = {};

/**
 * Clear Template4 data cache (useful for development/reloads)
 */
export function clearTemplate4Cache(companyId?: string): void {
  if (companyId) {
    delete template4DataCache[companyId];
    delete template4Promises[companyId];
  } else {
    template4DataCache = {};
    template4Promises = {};
  }
}

/**
 * Load Template4 data from CSV
 * @param companyId - Company ID to load company-specific data. Falls back to default if not provided.
 * @param forceReload - If true, clears cache and forces reload
 */
export async function loadTemplate4Data(companyId?: string, forceReload: boolean = false): Promise<Template4Data> {
  const cacheKey = companyId || 'default';
  
  if (forceReload) {
    clearTemplate4Cache(companyId);
  }

  if (template4DataCache[cacheKey] && !forceReload) {
    return template4DataCache[cacheKey];
  }

  if (template4Promises[cacheKey] && !forceReload) {
    return template4Promises[cacheKey];
  }

  template4Promises[cacheKey] = (async () => {
    try {
      const timestamp = new Date().getTime();
      // Use company-specific CSV if companyId is provided, otherwise use default
      const csvFileName = companyId 
        ? `blog-${companyId}-config.csv`
        : 'template4-config.csv';
      const csvData = await loadCsvFile(`/data/${csvFileName}?t=${timestamp}`);
      
      // Extract navigation links
      const navLinks = [];
      for (let i = 1; i <= 10; i++) {
        const text = csvData.header?.[`navLink${i}_text`];
        const link = csvData.header?.[`navLink${i}_link`];
        if (text) {
          navLinks.push({ text, link: link || '#' });
        }
      }

      // Extract table of contents
      const tocItems: TableOfContentsItem[] = [];
      for (let i = 1; i <= 20; i++) {
        const id = csvData.toc?.[`item${i}_id`];
        const text = csvData.toc?.[`item${i}_text`];
        if (id && text) {
          tocItems.push({
            id: id.toString(),
            text,
            link: csvData.toc?.[`item${i}_link`] || `#${id}`,
            isActive: csvData.toc?.[`item${i}_active`] === 'true',
          });
        }
      }

      // Extract article sections
      const sections: BlogArticleSection[] = [];
      for (let i = 1; i <= 20; i++) {
        const id = csvData.content?.[`section${i}_id`];
        if (id) {
          const heading = csvData.content?.[`section${i}_heading`];
          const contentLines: string[] = [];
          for (let j = 1; j <= 10; j++) {
            const line = csvData.content?.[`section${i}_content${j}`];
            if (line) contentLines.push(line);
          }
          
          const listItems: string[] = [];
          for (let j = 1; j <= 20; j++) {
            const item = csvData.content?.[`section${i}_listItem${j}`];
            if (item) listItems.push(item);
          }

          sections.push({
            id: id.toString(),
            heading: heading || undefined,
            content: contentLines,
            listItems: listItems.length > 0 ? listItems : undefined,
          });
        }
      }

      // Extract footer columns
      const footerColumns: FooterColumn[] = [];
      for (let col = 1; col <= 10; col++) {
        const title = csvData.footer?.[`column${col}_title`];
        if (title) {
          const links = [];
          for (let link = 1; link <= 20; link++) {
            const linkText = csvData.footer?.[`column${col}_link${link}_text`];
            const linkUrl = csvData.footer?.[`column${col}_link${link}_url`];
            if (linkText) {
              links.push({
                text: linkText,
                link: linkUrl || '#',
              });
            }
          }
          footerColumns.push({ title, links });
        }
      }

      const data: Template4Data = {
        header: {
          logoUrl: csvData.header?.logoUrl,
          logoText: csvData.header?.logoText || 'Brandwatch',
          navLinks,
          signInLink: csvData.header?.signInLink || '#',
          getStartedLink: csvData.header?.getStartedLink || '#',
          colors: {
            backgroundColor: csvData.header?.backgroundColor || '#FFFFFF',
            textColor: csvData.header?.textColor || '#000000',
            buttonColor: csvData.header?.buttonColor || '#00C853',
            buttonHoverColor: csvData.header?.buttonHoverColor || '#00A043',
          },
        },
        tableOfContents: tocItems,
        content: {
          publishedDate: csvData.content?.publishedDate,
          title: csvData.content?.title || '',
          author: csvData.content?.author,
          authorLink: csvData.content?.authorLink,
          readTime: csvData.content?.readTime,
          featuredImage: csvData.content?.featuredImage,
          sections,
        },
        ad: {
          logoUrl: csvData.ad?.logoUrl,
          title: csvData.ad?.title || '',
          description: csvData.ad?.description || '',
          ctaButton: {
            text: csvData.ad?.ctaButtonText || 'Get Started',
            link: csvData.ad?.ctaButtonLink || '#',
          },
          colors: {
            backgroundColor: csvData.ad?.backgroundColor || '#FFFFFF',
            borderColor: csvData.ad?.borderColor || '#E5E7EB',
            buttonColor: csvData.ad?.buttonColor || '#00C853',
            buttonHoverColor: csvData.ad?.buttonHoverColor || '#00A043',
          },
        },
        productDemo: csvData.productDemo?.heading
          ? {
              title: csvData.productDemo?.title,
              heading: csvData.productDemo?.heading || '',
              ctaButton: {
                text: csvData.productDemo?.ctaButtonText || 'Get a product demo',
                link: csvData.productDemo?.ctaButtonLink || '#',
              },
              colors: {
                backgroundColor: csvData.productDemo?.backgroundColor || '#00C853',
                textColor: csvData.productDemo?.textColor || '#FFFFFF',
                buttonColor: csvData.productDemo?.buttonColor || '#FFFFFF',
                buttonHoverColor: csvData.productDemo?.buttonHoverColor || '#F5F5F5',
              },
            }
          : undefined,
        footer: {
          columns: footerColumns,
          newsletter: {
            title: csvData.footer?.newsletterTitle || 'The Brandwatch Bulletin',
            description: csvData.footer?.newsletterDescription || '',
            signUpButtonText: csvData.footer?.newsletterButtonText || 'Sign up',
          },
          language: csvData.footer?.language || 'English',
          copyright: csvData.footer?.copyright || '',
          companyInfo: csvData.footer?.companyInfo || '',
          vatInfo: csvData.footer?.vatInfo,
          socialLinks: {
            x: csvData.footer?.socialX,
            facebook: csvData.footer?.socialFacebook,
            linkedin: csvData.footer?.socialLinkedin,
            instagram: csvData.footer?.socialInstagram,
            youtube: csvData.footer?.socialYoutube,
          },
          colors: {
            backgroundColor: csvData.footer?.backgroundColor || '#FFFFFF',
            textColor: csvData.footer?.textColor || '#000000',
            linkColor: csvData.footer?.linkColor || '#000000',
          },
        },
        chatWidget: {
          enabled: csvData.chatWidget?.enabled === 'true',
          message: csvData.chatWidget?.message || 'Great, how can I help you today? Ask me anything!',
          logoUrl: csvData.chatWidget?.logoUrl,
          colors: {
            backgroundColor: csvData.chatWidget?.backgroundColor || '#FFFFFF',
            textColor: csvData.chatWidget?.textColor || '#000000',
          },
        },
        shareLinks: {
          x: csvData.share?.xLink,
          facebook: csvData.share?.facebookLink,
          linkedin: csvData.share?.linkedinLink,
          reddit: csvData.share?.redditLink,
          whatsapp: csvData.share?.whatsappLink,
        },
      };

      template4DataCache[cacheKey] = data;
      return data;
    } catch (error) {
      console.error('Error loading Template4 CSV data:', error);
      // Remove failed promise so it can be retried
      delete template4Promises[cacheKey];
      throw error;
    }
  })();

  return template4Promises[cacheKey];
}

/**
 * Get Template4 data (synchronous access to cache)
 */
export function getTemplate4Data(companyId?: string): Template4Data | null {
  const cacheKey = companyId || 'default';
  return template4DataCache[cacheKey] || null;
}

