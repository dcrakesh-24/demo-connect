import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { Template6CTA } from "@/data/landing/template6";

interface CTASectionProps {
  data: Template6CTA;
}

const CTASection = ({ data }: CTASectionProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-accent" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            {data.title}
          </h2>
          <p className="text-background/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {data.description}
          </p>

          {/* Benefits */}
          {data.benefits.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {data.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full"
                >
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-background text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              asChild
            >
              <Link to={data.primaryCta.link}>
                {data.primaryCta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              asChild
            >
              <Link to={data.secondaryCta.link}>{data.secondaryCta.text}</Link>
            </Button>
          </div>

          {/* Trust indicator */}
          {data.trustText && (
            <p className="mt-8 text-background/50 text-sm">
              {data.trustText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

