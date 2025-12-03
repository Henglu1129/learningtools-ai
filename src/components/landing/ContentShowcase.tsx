import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const contentCards = [
  {
    id: 1,
    title: "Wasting Hours — and Still Know Nothing",
    description: "You clicked, scrolled, skimmed… for 6 hours. And you still can't explain the core idea. Time isn't slipping away. It's being stolen.",
    hoverTitle: "Paper Preview Agent ends the search spiral.",
    hoverDescription: "In 30 seconds: one clear, expert-vetted overview of any research topic. No noise. No guesswork. Just what matters — so you finally move forward.",
    ctaUrl: "https://mulerun.com/agents/3dce446b-c3fc-44c0-8595-6ed9b247c095/shared-sessions/a6660fb7-2c93-4c4f-afb0-895157d324b1",
  },
  {
    id: 2,
    title: "Drowning in Jargon — Not Learning",
    description: "You highlighted half the textbook. Rewound the lecture twice. But when asked to explain it? Your mind went blank. You're not learning — you're just rehearsing confusion.",
    hoverTitle: "Explain It Like I'm 5 cuts through the fog.",
    hoverDescription: "One crystal-clear explanation of any complex idea—no jargon, no fluff. Just simple, smart clarity… so you actually get it.",
    ctaUrl: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/shared-sessions/84b2c823-2703-4b70-a217-5f63f913a5d3",
  },
  {
    id: 3,
    title: "Saving 10,000 Youtube Videos — Learning Zero",
    description: "You've subscribed to every smart channel. But your watch history? Still empty. You're not preparing to learn — you're just curating your own delusion.",
    hoverTitle: "YTB Quick Scan kills the backlog in seconds.",
    hoverDescription: "Paste any video link — get key insights, diagrams, and takeaways in under 90 seconds. No more \"I'll watch it later.\" Just learn it now.",
    ctaUrl: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/shared-sessions/dae4dff8-46e5-4a91-b345-481c472f0213",
  },
];

const ContentShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16">
          If you're exhausted, you're doing it wrong.
        </h2>

        <div className="flex flex-col gap-8">
          {contentCards.map((card) => (
            <div
              key={card.id}
              className="relative h-[45vh] min-h-[320px] border-2 border-primary rounded-lg overflow-hidden bg-card transition-all duration-300"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Default State */}
              <div className={`absolute inset-0 flex transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4">
                    {card.title}
                  </h3>
                  <p className="text-lg md:text-xl text-foreground/70 max-w-lg">
                    {card.description}
                  </p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-highlight/20 via-purple/20 to-highlight/30 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-highlight/40 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl opacity-50">?</span>
                  </div>
                </div>
              </div>

              {/* Hover State */}
              <div className={`absolute inset-0 flex transition-opacity duration-300 bg-primary/90 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-primary-foreground">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4">
                    {card.hoverTitle}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 max-w-lg mb-8">
                    {card.hoverDescription}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="font-mono text-base gap-2 w-fit"
                    asChild
                  >
                    <a href={card.ctaUrl} target="_blank" rel="noopener noreferrer">
                      Solve it now <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                    <div className="text-center text-primary-foreground/70">
                      <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl">🤖</span>
                      </div>
                      <p className="font-mono text-sm">AI Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
