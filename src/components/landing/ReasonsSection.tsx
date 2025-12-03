import { Check, X } from "lucide-react";

const withMuleRun = [
  "Unlimited AI-powered content ideas",
  "One-click multi-platform publishing",
  "Auto-generated thumbnails & titles",
  "Video creation in minutes",
  "Brand voice consistency",
  "24/7 creative assistant",
  "Analytics & optimization",
];

const withoutMuleRun = [
  "Hours spent brainstorming",
  "Manual posting to each platform",
  "Guessing what works",
  "Expensive production teams",
  "Inconsistent messaging",
  "Creative burnout",
  "Flying blind on performance",
];

const ReasonsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-purple">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            7 Reasons to<br />Choose<br />CreatorFlow
          </h2>
          <p className="text-foreground/60 max-w-md">
            See why thousands of creators are switching to Mule Run
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 border-2 border-primary">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="bg-green-400 w-3 h-3 rounded-full" />
              WITH MULERUN
            </h3>
            <ul className="space-y-4">
              {withMuleRun.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-5 h-5 border-2 border-green-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-8 border-2 border-primary">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="bg-destructive w-3 h-3 rounded-full" />
              WITHOUT MULERUN
            </h3>
            <ul className="space-y-4">
              {withoutMuleRun.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/60">
                  <span className="w-5 h-5 bg-destructive flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive-foreground" />
                  </span>
                  <span className="font-medium line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
