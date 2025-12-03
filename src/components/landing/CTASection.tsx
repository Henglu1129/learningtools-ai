import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Zigzag pattern */}
      <div className="h-12 zigzag-pattern" />
      
      <div className="bg-highlight py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6">
            Get Mule Run<br />Your Messes
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already scaling their content with AI. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="font-mono text-base gap-2">
              GET STARTED <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="font-mono text-base border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground">
              WATCH DEMO
            </Button>
          </div>
          <p className="mt-6 font-mono text-sm text-foreground/60">
            14-Day Free Trial • No Credit Card • Cancel Anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
