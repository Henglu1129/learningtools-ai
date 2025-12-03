import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Video, Wand2, Share2 } from "lucide-react";

const features = [
  {
    label: "ILLUSTRATE FROM SPARK",
    title: "When inspiration strikes— create instantly",
    description: "Turn any idea into stunning visuals in seconds. Our AI understands context and creates on-brand content instantly.",
    cta: "START CREATING",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    icon: Sparkles,
  },
  {
    label: "AUTO SHORT VIDEO CREATOR",
    title: "You're the creator— and the crew",
    description: "Full video production at your fingertips. Script, edit, and publish without a team.",
    cta: "CREATE VIDEO",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    icon: Video,
  },
  {
    label: "YOUTUBE TITLE GENERATOR WITH EMOJIS",
    title: "Great content deserves great attention",
    description: "AI-powered titles that get clicks. Optimized for engagement and discoverability.",
    cta: "TRY FREE",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    icon: Wand2,
  },
  {
    label: "YOUTUBE VIDEO TO SOCIAL CONTENT",
    title: "One piece. Every platform.",
    description: "Transform long-form content into bite-sized posts for every social platform automatically.",
    cta: "SEE DEMO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    icon: Share2,
  },
];

const FeatureShowcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 md:gap-16 items-center py-16 border-b border-border last:border-b-0`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <feature.icon className="w-5 h-5 text-highlight-foreground" />
                <span className="font-mono text-xs text-foreground/60 uppercase tracking-wider">
                  {feature.label}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-foreground/60 mb-6 max-w-md">
                {feature.description}
              </p>
              <Button variant="hero" className="font-mono text-sm gap-2">
                {feature.cta} <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-highlight -z-10 translate-x-3 translate-y-3 rounded-lg" />
                <div className="border-2 border-primary rounded-lg overflow-hidden bg-card">
                  <div className="flex gap-1.5 p-3 border-b border-border">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-highlight" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
