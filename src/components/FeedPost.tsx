import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Globe, Sparkles } from "lucide-react";
import type { AdCreative } from "@/data/ads";

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
  ad?: AdCreative;
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
  ad,
}: FeedPostProps) => {
  const AuthorName = (
    <h3 className="font-semibold text-sm text-foreground">
      {author.name}
    </h3>
  );

  const stageLabel = ad?.stage ? ad.stage.charAt(0).toUpperCase() + ad.stage.slice(1) : undefined;
  const adTypeLabel = ad?.type ? (ad.type === "carousel" ? "Carousel ad" : "Single ad") : undefined;
  const creativeImages = ad?.images?.length ? ad.images : image ? [image] : [];
  const showCarousel = (ad?.type === "carousel" && creativeImages.length > 1) || creativeImages.length > 1;
  const landingUrl = ad?.landingUrl;
  const ctaLabel = ad?.ctaLabel ?? "Learn more";
  const landingUrlWithParams = (() => {
    if (!landingUrl || !ad?.stage) return landingUrl;

    try {
      const url = new URL(landingUrl);
      url.searchParams.set("stage", ad.stage);
      url.searchParams.set("company", author.name);
      return url.toString();
    } catch {
      // Fallback for non-standard URLs
      const joiner = landingUrl.includes("?") ? "&" : "?";
      return `${landingUrl}${joiner}stage=${encodeURIComponent(ad.stage)}&company=${encodeURIComponent(author.name)}`;
    }
  })();

  const landingHost = (() => {
    if (!landingUrl) return "";
    try {
      return new URL(landingUrl).host.replace(/^www\./, "");
    } catch {
      return "";
    }
  })();

  return (
    <article className="linkedin-card overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-3 pb-0">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <Avatar className="h-12 w-12 bg-card">
              <AvatarImage src={author.avatar} className="object-contain p-1" />
              <AvatarFallback>{author.initials}</AvatarFallback>
            </Avatar>
            <div>
              {AuthorName}
              <p className="text-xs text-muted-foreground line-clamp-1">
                {author.title}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {timeAgo}
                <span aria-hidden="true">·</span>
                <Globe className="h-3 w-3" />
                {isSponsored && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Promoted
                    </span>
                    {stageLabel ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{stageLabel}</span>
                      </>
                    ) : null}
                    {adTypeLabel ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{adTypeLabel}</span>
                      </>
                    ) : null}
                  </>
                )}
              </p>
            </div>
          </div>
          <button className="p-2 rounded-full linkedin-hover text-muted-foreground">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 py-3">
        <p className="text-[14px] leading-[1.35] text-foreground whitespace-pre-wrap">{content}</p>
      </div>

      {/* Image */}
      {creativeImages.length > 0 && (
        <div className="relative">
          {showCarousel ? (
            <Carousel opts={{ loop: true }} className="relative">
              <CarouselContent className="ml-0">
                {creativeImages.map((src, idx) => (
                  <CarouselItem key={`${src}-${idx}`} className="pl-0">
                    <img
                      src={src}
                      alt={`Ad creative ${idx + 1}`}
                      className="w-full object-cover max-h-[520px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
              <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
            </Carousel>
          ) : (
            <img
              src={creativeImages[0]}
              alt="Post content"
              className="w-full object-cover max-h-[520px]"
            />
          )}
        </div>
      )}

      {/* CTA */}
      {isSponsored && landingUrlWithParams && (
        <div className="border-t border-border bg-secondary/40 px-3 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            {landingHost ? (
              <p className="text-xs text-muted-foreground truncate">{landingHost}</p>
            ) : (
              <p className="text-xs text-muted-foreground truncate">Sponsored</p>
            )}
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            <a href={landingUrlWithParams} target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
          </Button>
        </div>
      )}

      {/* Engagement stats */}
      <div className="px-3 py-2 flex justify-between text-xs text-muted-foreground">
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

      <div className="linkedin-divider mx-3" />

      {/* Actions */}
      <div className="px-1 py-1 flex justify-around">
        {[
          { icon: ThumbsUp, label: "Like" },
          { icon: MessageCircle, label: "Comment" },
          { icon: Repeat2, label: "Repost" },
          { icon: Send, label: "Send" },
        ].map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-2 px-2 py-3 rounded-md linkedin-hover text-muted-foreground hover:text-foreground text-sm font-medium flex-1 justify-center"
          >
            <action.icon className="h-5 w-5" />
            <span className="hidden sm:inline">{action.label}</span>
          </button>
        ))}
      </div>
    </article>
  );
};
