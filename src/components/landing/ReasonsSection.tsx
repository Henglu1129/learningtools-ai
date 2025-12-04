import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Lightbulb, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import iconQuizlet from "@/assets/icon-quizlet.png";
import iconGrammarly from "@/assets/icon-grammarly.png";
import iconCopilot from "@/assets/icon-copilot.png";
import iconMulerun from "@/assets/icon-mulerun.png";
import iconOtter from "@/assets/icon-otter.png";
import iconHeygen from "@/assets/icon-heygen.png";
import iconMiro from "@/assets/icon-miro.png";

const platformIcons = [
  { name: "Quizlet", icon: iconQuizlet },
  { name: "Grammarly", icon: iconGrammarly },
  { name: "Copilot", icon: iconCopilot },
  { name: "Mulerun", icon: iconMulerun },
  { name: "Otter", icon: iconOtter },
  { name: "Heygen", icon: iconHeygen },
  { name: "Miro", icon: iconMiro },
];

const benefits = [
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "Say goodbye to juggling between apps. Do everything in one place—3x faster workflow.",
  },
  {
    icon: Lightbulb,
    title: "Learn easier, study smarter",
    description: "Say goodbye to complex workflows and repetitive tasks. All-in-one tools simplify learning and boost efficiency by 3x.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Coming soon: automatic data sync across features for true end-to-end automation.",
  },
];

const ReasonsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate icon positions based on scroll
  const getIconStyle = (index: number) => {
    const centerIndex = 3; // Mulerun is in the center
    const distance = index - centerIndex;
    const convergeFactor = Math.min(scrollProgress * 2, 1);
    
    // Icons converge toward center
    const translateX = distance * 80 * (1 - convergeFactor);
    const scale = 1 + (convergeFactor * (index === centerIndex ? 0.3 : -0.2));
    const opacity = index === centerIndex ? 1 : (1 - convergeFactor * 0.8);
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    };
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="bg-cream border-2 border-border rounded-2xl p-8 md:p-12 shadow-lg">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-4">
            Mulerun's all-in-one edge
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            <span className="bg-highlight px-3 py-1 inline-block">Multiple pro tools, a fraction of the price.</span>
          </p>

          {/* Using Mulerun subtitle */}
          <h3 className="text-xl md:text-2xl text-center mb-6 tracking-wide">
            Using Mulerun is like having
          </h3>

          {/* Platform Icons with convergence animation */}
          <div className="flex justify-center items-center gap-2 mb-12 overflow-hidden py-4">
            {platformIcons.map((platform, index) => (
              <div
                key={index}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center overflow-hidden"
                style={getIconStyle(index)}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Price Comparison */}
          <h3 className="text-xl md:text-2xl text-center mb-6 tracking-wide font-normal">
            Multiple pro platforms — <span className="font-bold bg-highlight px-2">Mulerun</span> handles it all.
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-background border-l-4 border-l-muted-foreground/50 border border-border p-6 rounded-lg">
              <p className="text-sm font-medium text-foreground/70 mb-3">Buy 4 pro platforms separately</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground/60">$99<span className="text-base font-normal">/month</span></p>
            </div>
            <div className="bg-highlight/30 border-l-4 border-l-highlight border border-border p-6 rounded-lg">
              <p className="text-sm font-medium text-foreground/70 mb-3">Get the same with Mulerun</p>
              <div className="flex items-baseline gap-3 flex-wrap">
                <p className="text-2xl md:text-3xl font-bold text-foreground">$15.9<span className="text-base font-normal">/month</span></p>
                <span className="bg-orange-200 px-2 py-0.5 rounded text-sm font-medium">Save 75%</span>
              </div>
              <p className="text-xs text-foreground/50 mt-1">Annual plan (20% off)</p>
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
                <p className="text-xs text-foreground/60 text-justify">{benefit.description}</p>
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
