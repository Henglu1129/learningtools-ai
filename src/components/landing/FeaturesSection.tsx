import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featureBrowser from "@/assets/feature-browser.png";
import featureKnowledge from "@/assets/feature-knowledge.png";
import featureMindmap from "@/assets/feature-mindmap.webp";
import featureSmartq from "@/assets/feature-smartq.png";
import agentPaper from "@/assets/agent-paper.webp";
import agentYoutube from "@/assets/agent-youtube.webp";
import agentExplain from "@/assets/agent-explain.webp";

const features = [
  {
    category: "Discover",
    title: "General Browser Operator",
    description: "Just tell it what you want. It handles the web for you.",
    image: featureBrowser,
    link: "https://mulerun.com/agents/ca8f87b0-cc33-4e18-973d-04031871e731/",
    imagePosition: "right",
  },
  {
    category: "Understand",
    title: "Knowledge Card Agent",
    description: "Paste. Generate. Own.",
    image: featureKnowledge,
    link: "https://mulerun.com/agents/05ad0e6e-96da-4eb4-b195-5aa75fd172d8/",
    imagePosition: "left",
  },
  {
    category: "Organize",
    title: "Mindmap generator",
    description: "Turn ideas into clear mind maps.",
    image: featureMindmap,
    link: "https://mulerun.com/agents/3079e928-f57b-462a-94f8-a041b78534dd/",
    imagePosition: "right",
  },
  {
    category: "Question",
    title: "Smart Q",
    description: "For anyone who lost in charts.",
    image: featureSmartq,
    link: "https://mulerun.com/agents/779e2356-11e7-4fe0-90a3-4a1e9506c3b0/",
    imagePosition: "left",
  },
];

const miniAgents = [
  {
    name: "Paper Review Agent",
    image: agentPaper,
    link: "https://mulerun.com/agents/3dce446b-c3fc-44c0-8595-6ed9b247c095/",
  },
  {
    name: "YouTube Quick Scan",
    image: agentYoutube,
    link: "https://mulerun.com/agents/15ff0a66-65e2-4669-a400-81ce8763a2c4/",
  },
  {
    name: "Explain it like I am 5",
    image: agentExplain,
    link: "https://mulerun.com/agents/8a6ccf9e-95dd-46a2-98d4-560302fd99e2/",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Feature Cards */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <span className="font-mono text-sm text-foreground/60 uppercase tracking-wider">
                  {feature.category}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  {feature.title}
                </h3>
                <p className="text-lg text-foreground/70 max-w-md">
                  {feature.description}
                </p>
                <a href={feature.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-3 text-sm font-medium">
                    Try it for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Agent Cards */}
        <div className="mt-24 md:mt-32">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {miniAgents.map((agent, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden w-full md:w-80 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-3 normal-case tracking-normal font-body">
                    {agent.name}
                  </h4>
                  <a href={agent.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
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
