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
}

export const BlogSection = ({ title, subtitle, posts, ctaButton }: BlogSectionProps) => {
  return (
    <section className="bg-white py-16 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow relative h-80">
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
              <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col justify-between bg-white rounded-t-lg p-6 shadow-lg">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 mb-3">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 text-sm">
                    {post.description}
                  </CardDescription>
                </div>
                <Link
                  to={post.readMoreLink}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm mt-4 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-lg"
          >
            {ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

