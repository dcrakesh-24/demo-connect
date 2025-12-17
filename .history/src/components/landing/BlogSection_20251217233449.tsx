import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/landing/template1";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                  {post.description}
                </CardDescription>
                <Link
                  to={post.readMoreLink}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Read More →
                </Link>
              </CardContent>
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

