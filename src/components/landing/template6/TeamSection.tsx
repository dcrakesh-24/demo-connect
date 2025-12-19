import { Linkedin, Twitter } from "lucide-react";
import type { Template6Team } from "@/data/landing/template6";

interface TeamSectionProps {
  data: Template6Team;
}

const TeamSection = ({ data }: TeamSectionProps) => {
  return (
    <section 
      id="team" 
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-muted-foreground text-lg">
              {data.description}
            </p>
          )}
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {data.members.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative inline-block mb-5">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-accent-foreground font-bold text-3xl">{member.initials}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-success flex items-center justify-center shadow-md">
                  <span className="text-success-foreground text-xs">✓</span>
                </div>
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                {member.bio}
              </p>
              
              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.twitterUrl && (
                  <a
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

