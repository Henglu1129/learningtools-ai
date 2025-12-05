import { useEffect, useState } from "react";
import showcasePaper from "@/assets/showcase-paper.gif";
import showcaseYoutube from "@/assets/showcase-youtube.gif";
import showcaseExplain from "@/assets/showcase-explain.gif";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const contentCards = [
  {
    id: 1,
    title: "Wasting Hours — and Still Know Nothing?",
    description: "You clicked, scrolled, skimmed… for 6 hours. And you still can't explain the core idea. Time isn't slipping away. It's being stolen.",
    image: showcasePaper,
    ctaUrl: "https://mulerun.com/agents/3dce446b-c3fc-44c0-8595-6ed9b247c095/shared-sessions/a6660fb7-2c93-4c4f-afb0-895157d324b1",
    eventName: ANALYTICS_EVENTS.SHOWCASE_PAPER,
  },
  {
    id: 2,
    title: "Drowning in Jargon — Not Learning?",
    description: "You highlighted half the textbook. Rewound the lecture twice. But when asked to explain it? Your mind went blank. You're not learning — you're just rehearsing confusion.",
    image: showcaseYoutube,
    ctaUrl: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/shared-sessions/dae4dff8-46e5-4a91-b345-481c472f0213",
    eventName: ANALYTICS_EVENTS.SHOWCASE_YOUTUBE,
  },
  {
    id: 3,
    title: "Saving 10,000 Youtube Videos — Learning Zero?",
    description: "You've subscribed to every smart channel. But your watch history? Still empty. You're not preparing to learn — you're just curating your own delusion.",
    image: showcaseExplain,
    ctaUrl: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/shared-sessions/84b2c823-2703-4b70-a217-5f63f913a5d3",
    eventName: ANALYTICS_EVENTS.SHOWCASE_EXPLAIN,
  },
];

const ContentShowcase = () => {
  const [highlightProgress, setHighlightProgress] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setHighlightProgress(eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          HAVE YOU EVER…….
        </h2>

        <div className="space-y-8 md:space-y-12">
          {contentCards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col gap-6 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-3">
                <h3 className="font-body text-xl md:text-2xl lg:text-3xl font-bold normal-case tracking-normal">
                  {card.title}
                </h3>
                <p className="text-base text-foreground/70 max-w-lg">
                  {card.description}
                </p>
              </div>

              {/* Image Card - 16:9 aspect ratio */}
              <div className="flex-1 flex justify-center w-full">
                <a 
                  href={card.ctaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full max-w-md overflow-hidden rounded-lg border-2 border-border bg-card shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => trackClick(card.eventName)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <span className="text-white font-bold text-sm md:text-base tracking-wide bg-black/50 px-4 py-2 rounded">
                        Click here to solve it
                      </span>
                    </div>
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
