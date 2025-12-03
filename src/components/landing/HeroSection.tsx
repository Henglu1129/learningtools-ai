import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Your All-in-One{" "}
            <span className="bg-highlight px-2 inline-block" style={{ transform: "skew(-2deg)" }}>
              AI Creation
            </span>{" "}
            Platform
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-xl">
            From idea to viral video in minutes. Create stunning content with AI that understands your brand, engages your audience, and scales your creativity.
          </p>
          <Button variant="hero" size="lg" className="font-mono text-base gap-2">
            START FREE <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="window-decor rounded-lg" />
          <div className="window-frame rounded-lg">
            <div className="flex gap-1.5 p-3 border-b border-border bg-card">
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-highlight/30 via-purple/30 to-highlight/50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=400&fit=crop"
                alt="AI Generated Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
