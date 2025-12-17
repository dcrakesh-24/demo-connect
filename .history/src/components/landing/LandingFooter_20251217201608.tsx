import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface LandingFooterProps {
  socialLinks: {
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  navLinks: {
    about: string;
    blog: string;
    privacy: string;
  };
  copyright: string;
}

export const LandingFooter = ({ socialLinks, navLinks, copyright }: LandingFooterProps) => {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link to={navLinks.about} className="hover:underline">
              About us
            </Link>
            <span className="text-white/50">|</span>
            <Link to={navLinks.blog} className="hover:underline">
              Blog
            </Link>
            <span className="text-white/50">|</span>
            <Link to={navLinks.privacy} className="hover:underline">
              Privacy policy
            </Link>
          </div>

          {/* Separator */}
          <div className="w-full max-w-md h-px bg-white/20" />

          {/* Copyright */}
          <p className="text-sm text-white/80">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

