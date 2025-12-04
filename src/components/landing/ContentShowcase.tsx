import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import showcasePaper from "@/assets/showcase-paper.webp";
import showcaseExplain from "@/assets/showcase-explain.webp";
import showcaseYoutube from "@/assets/showcase-youtube.webp";

const contentCards = [
  {
    id: 1,
    title: "Wasting Hours — and Still Know Nothing",
    description: "You clicked, scrolled, skimmed… for 6 hours. And you still can't explain the core idea. Time isn't slipping away. It's being stolen.",
    hoverTitle: "Paper Preview Agent",
    image: showcasePaper,
    ctaUrl: "https://mulerun.com/agents/3dce446b-c3fc-44c0-8595-6ed9b247c095/shared-sessions/a6660fb7-2c93-4c4f-afb0-895157d324b1",
  },
  {
    id: 2,
    title: "Drowning in Jargon — Not Learning",
    description: "You highlighted half the textbook. Rewound the lecture twice. But when asked to explain it? Your mind went blank. You're not learning — you're just rehearsing confusion.",
    hoverTitle: "Explain It Like I'm 5",
    image: showcaseExplain,
    ctaUrl: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/shared-sessions/84b2c823-2703-4b70-a217-5f63f913a5d3",
  },
  {
    id: 3,
    title: "Saving 10,000 Youtube Videos — Learning Zero",
    description: "You've subscribed to every smart channel. But your watch history? Still empty. You're not preparing to learn — you're just curating your own delusion.",
    hoverTitle: "YTB Quick Scan",
    image: showcaseYoutube,
    ctaUrl: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/shared-sessions/dae4dff8-46e5-4a91-b345-481c472f0213",
  },
];

const ContentShowcase = () => {
  const [highlightProgress, setHighlightProgress] = useState(0);

  useEffect(() => {
    // Auto-play animation with easing (fast then slow)
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds total
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Ease-out cubic for fast start, slow end
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setHighlightProgress(eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after a brief delay
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16">
          If you're{" "}
          <span className="relative inline-block">
            <span 
              className="absolute inset-0 bg-highlight -skew-x-2 origin-left"
              style={{ 
                transform: `scaleX(${highlightProgress}) skewX(-2deg)`,
                transition: 'none'
              }}
            />
            <span className="relative">exhausted</span>
          </span>
          , you're doing it{" "}
          <span className="relative inline-block">
            <span 
              className="absolute inset-0 bg-highlight -skew-x-2 origin-left"
              style={{ 
                transform: `scaleX(${highlightProgress}) skewX(-2deg)`,
                transition: 'none'
              }}
            />
            <span className="relative">wrong</span>
          </span>
          .
        </h2>

        <div className="space-y-16 md:space-y-24">
          {contentCards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="font-body text-2xl md:text-3xl lg:text-4xl font-bold normal-case tracking-normal">
                  {card.title}
                </h3>
                <p className="text-lg text-foreground/70 max-w-lg">
                  {card.description}
                </p>
              </div>

              {/* Image Card with Hover - 4:3 aspect ratio for entire card */}
              <div className="flex-1 flex justify-center">
                <a 
                  href={card.ctaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-full max-w-md overflow-hidden rounded-lg border-2 border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] flex flex-col">
                    <div className="p-4 border-b border-border bg-card shrink-0">
                      <h4 className="font-semibold text-lg tracking-wider">{card.hoverTitle}</h4>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.hoverTitle}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Hover overlay with Free Trial button */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="font-mono text-base"
                    >
                      FREE TRIAL
                    </Button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;