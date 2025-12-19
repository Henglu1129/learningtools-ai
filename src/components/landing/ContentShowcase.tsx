// ContentShowcase component - displays problem cards with solutions
import { Button } from "@/components/ui/button";
import showcasePaper from "@/assets/showcase-paper-v2.gif";
import showcaseExplain from "@/assets/showcase-explain-v2.gif";
import showcaseYoutube from "@/assets/showcase-youtube-v2.gif";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const contentCards = [
  {
    id: 1,
    title: "Wasting Hours — and Still Know Nothing?",
    description: "You clicked, scrolled, skimmed… for 6 hours. And you still can't explain the core idea. Time isn't slipping away. It's being stolen.",
    image: showcasePaper,
    ctaUrl: "https://mulerun.com/agents/577765da-c912-4cc2-9dac-80d0035058ca/shared-sessions/d53f6fbd-5f5d-4911-8e89-f283d3e804d3",
    eventName: ANALYTICS_EVENTS.SHOWCASE_PAPER,
  },
  {
    id: 2,
    title: "Confused by Complex Images and Diagrams?",
    description: "That flowchart, infographic, or technical diagram looks like gibberish. You stare at it for 20 minutes but still can't figure out what it means. Let AI break it down for you like you're five.",
    image: showcaseExplain,
    ctaUrl: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/shared-sessions/84b2c823-2703-4b70-a217-5f63f913a5d3",
    eventName: ANALYTICS_EVENTS.SHOWCASE_EXPLAIN,
  },
  {
    id: 3,
    title: "Saving 10,000 Youtube Videos — Learning Zero?",
    description: "You've subscribed to every smart channel. But your watch history? Still empty. You're not preparing to learn — you're just curating your own delusion.",
    image: showcaseYoutube,
    ctaUrl: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/shared-sessions/1b92191b-8d85-4a1e-a931-a49aa7f7dd11",
    eventName: ANALYTICS_EVENTS.SHOWCASE_YOUTUBE,
  },
];

const ContentShowcase = () => {
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
              <div className="flex-1 space-y-4">
                <h3 className="font-body text-xl md:text-2xl lg:text-3xl font-bold normal-case tracking-normal">
                  {card.title}
                </h3>
                <p className="text-base text-foreground/70 max-w-lg">
                  {card.description}
                </p>
                <Button
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90"
                  onClick={() => trackClick(card.eventName)}
                >
                  <a href={card.ctaUrl} target="_blank" rel="noopener noreferrer">
                    Click here to solve it
                  </a>
                </Button>
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
                  <div className="aspect-video">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />
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
