import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FeedPost } from "@/components/FeedPost";
import { getCompanyById, getPostsByCompanyId } from "@/data/companies";
import { Globe, Users, MapPin, Building2, ExternalLink, ArrowLeft } from "lucide-react";

const CompanyProfile = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const company = getCompanyById(companyId || "");
  const posts = getPostsByCompanyId(companyId || "");

  if (!company) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-[1128px] mx-auto px-4 py-6">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-foreground mb-4">Company not found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return to feed
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to feed
        </Link>

        {/* Company Header Card */}
        <div className="linkedin-card overflow-hidden mb-4">
          {/* Cover Image */}
          <div className="h-48 relative">
            <img 
              src={company.coverImage} 
              alt={`${company.name} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Company Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 relative">
              <Avatar className="h-24 w-24 border-4 border-card bg-card">
                <AvatarImage src={company.logo} className="object-contain p-2" />
                <AvatarFallback className="text-2xl font-bold">{company.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 pt-2 sm:pt-0">
                <h1 className="text-2xl font-bold text-foreground">{company.name}</h1>
                <p className="text-muted-foreground">{company.tagline}</p>
              </div>
              
              <div className="flex gap-2">
                <Button className="bg-primary hover:bg-primary/90">
                  + Follow
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit website
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                <span>{company.industry}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{company.headquarters}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{company.employees} employees</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <a href={`https://${company.website}`} className="text-primary hover:underline">
                  {company.website}
                </a>
              </div>
            </div>

            <p className="text-primary font-medium mt-4">
              {company.followers.toLocaleString()} followers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Main Content */}
          <div className="space-y-4">
            {/* About Section */}
            <div className="linkedin-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground">{company.about}</p>
            </div>

            {/* Posts */}
            <div className="linkedin-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Posts</h2>
            </div>
            
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <FeedPost
                  key={index}
                  author={{
                    name: company.name,
                    title: company.tagline,
                    avatar: company.logo,
                    initials: company.initials,
                  }}
                  timeAgo={post.timeAgo}
                  content={post.content}
                  image={post.image}
                  likes={post.likes}
                  comments={post.comments}
                  reposts={post.reposts}
                  isSponsored={post.isSponsored}
                />
              ))
            ) : (
              <div className="linkedin-card p-6 text-center text-muted-foreground">
                No posts yet
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Footer />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
