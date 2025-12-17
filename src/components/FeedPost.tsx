import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Globe, Sparkles } from "lucide-react";

interface FeedPostProps {
  author: {
    name: string;
    title: string;
    avatar: string;
    initials: string;
  };
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  isSponsored?: boolean;
  companyId?: string;
}

export const FeedPost = ({
  author,
  timeAgo,
  content,
  image,
  likes,
  comments,
  reposts,
  isSponsored,
  companyId,
}: FeedPostProps) => {
  const AuthorName = companyId ? (
    <Link 
      to={`/company/${companyId}`}
      className="font-semibold text-sm text-foreground hover:text-primary hover:underline"
    >
      {author.name}
    </Link>
  ) : (
    <h3 className="font-semibold text-sm text-foreground hover:text-primary hover:underline cursor-pointer">
      {author.name}
    </h3>
  );

  return (
    <article className="linkedin-card animate-fade-in">
      {/* Sponsored badge */}
      {isSponsored && (
        <div className="px-4 pt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          <span>Promoted</span>
        </div>
      )}
      
      {/* Header */}
      <div className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            {companyId ? (
              <Link to={`/company/${companyId}`}>
                <Avatar className="h-12 w-12 bg-card">
                  <AvatarImage src={author.avatar} className="object-contain p-1" />
                  <AvatarFallback>{author.initials}</AvatarFallback>
                </Avatar>
              </Link>
            ) : (
              <Avatar className="h-12 w-12">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.initials}</AvatarFallback>
              </Avatar>
            )}
            <div>
              {AuthorName}
              <p className="text-xs text-muted-foreground line-clamp-1">
                {author.title}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {timeAgo} · <Globe className="h-3 w-3" />
              </p>
            </div>
          </div>
          <button className="p-2 rounded-full linkedin-hover text-muted-foreground">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <p className="text-sm text-foreground whitespace-pre-wrap">{content}</p>
      </div>

      {/* Image */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt="Post content"
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      )}

      {/* Engagement stats */}
      <div className="px-4 py-2 flex justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="flex -space-x-1">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <ThumbsUp className="h-2.5 w-2.5 text-primary-foreground" />
            </span>
            <span className="w-4 h-4 rounded-full bg-destructive flex items-center justify-center text-[8px]">
              ❤️
            </span>
          </span>
          <span className="hover:text-primary hover:underline cursor-pointer">
            {likes.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="hover:text-primary hover:underline cursor-pointer">
            {comments} comments
          </span>
          <span>·</span>
          <span className="hover:text-primary hover:underline cursor-pointer">
            {reposts} reposts
          </span>
        </div>
      </div>

      <div className="linkedin-divider mx-4" />

      {/* Actions */}
      <div className="px-2 py-1 flex justify-around">
        {[
          { icon: ThumbsUp, label: "Like" },
          { icon: MessageCircle, label: "Comment" },
          { icon: Repeat2, label: "Repost" },
          { icon: Send, label: "Send" },
        ].map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-2 px-4 py-3 rounded-md linkedin-hover text-muted-foreground hover:text-foreground text-sm font-medium flex-1 justify-center"
          >
            <action.icon className="h-5 w-5" />
            <span className="hidden sm:inline">{action.label}</span>
          </button>
        ))}
      </div>
    </article>
  );
};
