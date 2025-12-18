import type { BlogArticleContent as BlogArticleContentType } from "@/data/landing/template4";

interface ArticleHeaderProps {
  data: {
    publishedDate?: string;
    title: string;
    author?: string;
    authorLink?: string;
    readTime?: string;
    featuredImage?: string;
  };
}

export const ArticleHeader = ({ data }: ArticleHeaderProps) => {
  return (
    <div className="w-full">
      {/* Header Section with Title and Featured Image Side by Side */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Title and Metadata (Takes full available width and height) */}
          <div className="lg:col-span-7 w-full flex flex-col h-full justify-between">
            {/* Article Metadata - At the top */}
            {data.publishedDate && (
              <div className="text-sm text-gray-500">
                Published {data.publishedDate}
              </div>
            )}

            {/* Title - In the middle */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] max-w-xl break-words whitespace-normal my-auto">
              {data.title}
            </h1>

            {/* Author and Read Time - At the bottom */}
            {(data.author || data.readTime) && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {data.author && (
                  <span>
                    By{" "}
                    {data.authorLink ? (
                      <a
                        href={data.authorLink}
                        className="text-gray-900 hover:underline font-medium"
                      >
                        {data.author}
                      </a>
                    ) : (
                      <span className="font-medium">{data.author}</span>
                    )}
                  </span>
                )}
                {data.author && data.readTime && (
                  <span className="text-gray-400">•</span>
                )}
                {data.readTime && (
                  <span className="text-gray-500">{data.readTime} read</span>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Featured Image */}
          {data.featuredImage && (
            <div className="lg:col-span-5 flex-shrink-0 h-full">
              <img
                src={data.featuredImage}
                alt={data.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

