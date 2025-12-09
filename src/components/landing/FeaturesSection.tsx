import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featureBrowser from "@/assets/feature-browser.png";
import featureKnowledge from "@/assets/feature-knowledge.png";
import featureMindmap from "@/assets/feature-mindmap.webp";
import featureSmartq from "@/assets/feature-smartq.png";
import agentPaperNew from "@/assets/agent-paper-new.gif";
import agentYoutubeNew from "@/assets/agent-youtube-new.gif";
import agentExplainNew from "@/assets/agent-explain-new.gif";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const features = [
  {
    title: "Discover",
    description: "Handle your browser and complete any web-based tasks.",
    image: featureBrowser,
    link: "https://mulerun.com/agents/ca8f87b0-cc33-4e18-973d-04031871e731/",
    imagePosition: "right",
    eventName: ANALYTICS_EVENTS.FEATURE_BROWSER,
  },
  {
    title: "Understand",
    description: "Summarize any article you have into a beautifully‑designed knowledge card.",
    image: featureKnowledge,
    link: "https://mulerun.com/agents/05ad0e6e-96da-4eb4-b195-5aa75fd172d8/",
    imagePosition: "left",
    eventName: ANALYTICS_EVENTS.FEATURE_KNOWLEDGE,
  },
  {
    title: "Organize",
    description: "Effortlessly create and export mind maps in FreeMind format.",
    image: featureMindmap,
    link: "https://mulerun.com/agents/3079e928-f57b-462a-94f8-a041b78534dd/",
    imagePosition: "right",
    eventName: ANALYTICS_EVENTS.FEATURE_MINDMAP,
  },
  {
    title: "Question",
    description: "AI-powered data analysis via natural language—no coding needed.",
    image: featureSmartq,
    link: "https://mulerun.com/agents/779e2356-11e7-4fe0-90a3-4a1e9506c3b0/",
    imagePosition: "left",
    eventName: ANALYTICS_EVENTS.FEATURE_SMARTQ,
  },
];

const miniAgents = [
  {
    name: "Generate topic overviews",
    image: agentPaperNew,
    link: "https://mulerun.com/agents/3dce446b-c3fc-44c0-8595-6ed9b247c095/",
    eventName: ANALYTICS_EVENTS.AGENT_PAPER,
  },
  {
    name: "Quick video summaries",
    image: agentYoutubeNew,
    link: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/",
    eventName: ANALYTICS_EVENTS.AGENT_YOUTUBE,
  },
  {
    name: "Simplify complex pics",
    image: agentExplainNew,
    link: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/",
    eventName: ANALYTICS_EVENTS.AGENT_EXPLAIN,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background" style={{ backgroundColor: 'hsl(0, 0%, 97%)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 tracking-wider">
          Your Complete Learning Flow
        </h2>

        {/* Feature Cards */}
        <div className="space-y-8 md:space-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-4 md:gap-8`}
            >
              {/* Text Content */}
              <div className={`flex-1 space-y-2 ${feature.imagePosition === "left" ? "md:text-right md:items-end" : "md:text-left md:items-start"} flex flex-col text-center ${feature.imagePosition === "left" ? "md:items-end" : "md:items-start"}`}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 max-w-sm">
                  {feature.description}
                </p>
                <a 
                  href={feature.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackClick(feature.eventName)}
                >
                  <Button className="bg-foreground text-background hover:bg-foreground/90 px-5 py-2 text-sm font-medium mt-2">
                    Try it for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Agent Cards */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {miniAgents.map((agent, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden w-full md:w-72 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-base font-semibold mb-2 normal-case tracking-normal font-body">
                    {agent.name}
                  </h4>
                  <a 
                    href={agent.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackClick(agent.eventName)}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      Free Trial
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
