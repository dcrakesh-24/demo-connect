import type { BlogArticleContent as BlogArticleContentType } from "@/data/landing/template4";

interface BlogArticleContentProps {
  data: BlogArticleContentType;
}

export const BlogArticleContent = ({ data }: BlogArticleContentProps) => {
  return (
    <article className="w-full">
      {/* Article Sections */}
      <div className="prose prose-lg max-w-none w-full">
        {data.sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="mb-8 scroll-mt-20"
          >
            {section.heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12 first:mt-0">
                {section.heading}
              </h2>
            )}

            {section.content.map((paragraph, pIndex) => {
              // Highlight specific words like "ranges" in green
              const parts = paragraph.split(/(ranges)/i);
              return (
                <p
                  key={pIndex}
                  className="text-gray-700 leading-relaxed mb-4 text-base"
                >
                  {parts.map((part, i) => {
                    if (part.toLowerCase() === 'ranges') {
                      return <span key={i} className="text-green-600 font-medium">{part}</span>;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </p>
              );
            })}

            {section.listItems && section.listItems.length > 0 && (
              <ul className="list-none space-y-3 mb-6">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.subSections && section.subSections.map((subSection, subIndex) => (
              <div key={subIndex} className="mt-6">
                {subSection.heading && (
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {subSection.heading}
                  </h3>
                )}
                {subSection.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
                {subSection.listItems && subSection.listItems.length > 0 && (
                  <ul className="list-none space-y-3 mb-6">
                    {subSection.listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};

