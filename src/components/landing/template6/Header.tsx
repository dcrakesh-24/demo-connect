import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Template6Header } from "@/data/landing/template6";

interface HeaderProps {
  data: Template6Header;
}

const Header = ({ data }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt={data.logoText}
                className="w-9 h-9 rounded-lg"
              />
            ) : (
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  {data.logoText[0] || 'U'}
                </span>
              </div>
            )}
            <span className="font-bold text-xl text-foreground">{data.logoText}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href={data.navLinks.about.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {data.navLinks.about.text}
            </a>
            <a href={data.navLinks.booth.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {data.navLinks.booth.text}
            </a>
            <a href={data.navLinks.team.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {data.navLinks.team.text}
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="default" asChild>
              <Link to={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href={data.navLinks.about.href} className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {data.navLinks.about.text}
              </a>
              <a href={data.navLinks.booth.href} className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {data.navLinks.booth.text}
              </a>
              <a href={data.navLinks.team.href} className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {data.navLinks.team.text}
              </a>
              <Button variant="accent" className="mt-2" asChild>
                <Link to={data.ctaButton.link}>{data.ctaButton.text}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

