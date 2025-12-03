import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Receipt, Users } from "lucide-react";

const platformIcons = [
  { name: "Notion", icon: "📝" },
  { name: "Figma", icon: "🎨" },
  { name: "Slack", icon: "💬" },
  { name: "Perplexity", icon: "🔍" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Claude", icon: "✨" },
  { name: "CapCut", icon: "🎬" },
  { name: "Linear", icon: "📊" },
];

const benefits = [
  {
    icon: Layers,
    title: "No More Platform Switching",
    description: "Say goodbye to juggling between apps. Do everything in one place—3x faster workflow.",
  },
  {
    icon: Receipt,
    title: "Unified Billing",
    description: "One invoice, one payment. No more tracking multiple due dates or charges.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Coming soon: automatic data sync across features for true end-to-end automation.",
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 shadow-lg">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-4">
            Mulerun's all-in-one edge
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            <span className="bg-highlight px-3 py-1 inline-block">Multiple pro tools, a fraction of the price.</span>
          </p>

          {/* Platform Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformIcons.map((platform, index) => (
              <div
                key={index}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center text-2xl"
              >
                {platform.icon}
              </div>
            ))}
          </div>

          {/* Price Comparison */}
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Multiple pro platforms — Mulerun handles it all.
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-background border-l-4 border-l-orange-400 border border-border p-4 rounded-lg">
              <p className="text-sm font-medium text-foreground/70 mb-2">Buy 4 pro platforms separately</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground/60">¥1,596<span className="text-base font-normal">/month</span></p>
            </div>
            <div className="bg-highlight/30 border-l-4 border-l-highlight border border-border p-4 rounded-lg">
              <p className="text-sm font-medium text-foreground/70 mb-2">Get the same with Mulerun</p>
              <p className="text-xl md:text-2xl">
                <span className="line-through text-foreground/40">¥159/month</span>
                <span className="ml-2 bg-orange-200 px-2 py-0.5 rounded text-sm">Save 90%</span>
              </p>
            </div>
            <div className="bg-background border-l-4 border-l-orange-400 border border-border p-4 rounded-lg">
              <p className="text-sm font-medium text-foreground/70 mb-2">Annual savings</p>
              <p className="text-2xl md:text-3xl font-bold text-orange-600">¥17,244<span className="text-base font-normal">/year</span></p>
            </div>
          </div>

          {/* Benefits */}
          <h3 className="text-xl md:text-2xl text-center mb-6">
            Beyond Price — <span className="font-semibold">More Convenience with Mulerun</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-highlight/20 border-l-4 border-l-highlight border border-border p-4 rounded-lg text-center"
              >
                <benefit.icon className="w-8 h-8 mx-auto mb-3 text-foreground/70" />
                <p className="font-semibold text-sm mb-2">{benefit.title}</p>
                <p className="text-xs text-foreground/60">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              className="font-mono text-base gap-2"
              asChild
            >
              <a href="https://mulerun.com/signin">
                Sign up for free <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
