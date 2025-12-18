import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/landing/template1";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogSectionProps {
  title: string;
  subtitle: string;
  posts: BlogPost[];
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const BlogSection = ({ title, subtitle, posts, ctaButton, colors }: BlogSectionProps) => {
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";
  
  return (
    <section 
      className="py-16 lg:py-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow relative h-80 rounded-3xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${post.imageUrl})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* White Overlay Box - Bottom Half */}
              <div className="absolute bottom-4 left-4 right-4 h-1/2 flex flex-col justify-center items-center bg-white rounded-2xl p-4 shadow-lg text-center space-y-2">
                <CardTitle className="text-sm font-bold text-gray-800 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-xs text-gray-600 line-clamp-2">
                  {post.description}
                </CardDescription>
                <Link
                  to={post.readMoreLink}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-xs mt-1"
                >
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-5 py-5 text-sm rounded-lg"
          >
            {ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

