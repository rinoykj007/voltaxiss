import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CTASection = ({
  title = "Ready to Get Started?",
  description = "Contact us today to discuss your project requirements and discover how we can support your business with our comprehensive range of services and supplies.",
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Call +966 59 135 1561",
  onPrimaryClick = () => (window.location.href = "/#contact"),
  onSecondaryClick = () => (window.location.href = "tel:+966591351561"),
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all"
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
