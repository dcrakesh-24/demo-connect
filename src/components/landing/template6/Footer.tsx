import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import type { Template6Footer } from "@/data/landing/template6";

interface FooterProps {
  data: Template6Footer;
}

const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  {data.logoText[0] || 'U'}
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">{data.logoText}</span>
            </Link>
            {data.description && (
              <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                {data.description}
              </p>
            )}
            {/* Social links */}
            <div className="flex items-center gap-3">
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {data.socialLinks.twitter && (
                <a
                  href={data.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {data.socialLinks.youtube && (
                <a
                  href={data.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Product column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {data.productLinks.features && (
                <li>
                  <a href={data.productLinks.features} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Features
                  </a>
                </li>
              )}
              {data.productLinks.pricing && (
                <li>
                  <a href={data.productLinks.pricing} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Pricing
                  </a>
                </li>
              )}
              {data.productLinks.integrations && (
                <li>
                  <a href={data.productLinks.integrations} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Integrations
                  </a>
                </li>
              )}
              {data.productLinks.caseStudies && (
                <li>
                  <a href={data.productLinks.caseStudies} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Case Studies
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {data.companyLinks.about && (
                <li>
                  <a href={data.companyLinks.about} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    About Us
                  </a>
                </li>
              )}
              {data.companyLinks.careers && (
                <li>
                  <a href={data.companyLinks.careers} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Careers
                  </a>
                </li>
              )}
              {data.companyLinks.blog && (
                <li>
                  <a href={data.companyLinks.blog} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Blog
                  </a>
                </li>
              )}
              {data.companyLinks.press && (
                <li>
                  <a href={data.companyLinks.press} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Press
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {data.contactLinks.email && (
                <li>
                  <a href={`mailto:${data.contactLinks.email}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {data.contactLinks.email}
                  </a>
                </li>
              )}
              {data.contactLinks.support && (
                <li>
                  <a href={data.contactLinks.support} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Support
                  </a>
                </li>
              )}
              {data.contactLinks.documentation && (
                <li>
                  <a href={data.contactLinks.documentation} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Documentation
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {data.copyright}
          </p>
          <div className="flex items-center gap-6">
            {data.legalLinks.privacy && (
              <a href={data.legalLinks.privacy} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
            )}
            {data.legalLinks.terms && (
              <a href={data.legalLinks.terms} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
            )}
            {data.legalLinks.cookie && (
              <a href={data.legalLinks.cookie} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Cookie Policy
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

