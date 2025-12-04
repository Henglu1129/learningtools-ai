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

const leftIcons = [
  { name: "Grammarly", icon: iconGrammarly },
  { name: "Quizlet", icon: iconQuizlet },
  { name: "Copilot", icon: iconCopilot },
];

const rightIcons = [
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation when element is 1/3 into view
      const triggerPoint = windowHeight * 0.67;
      const progress = Math.max(0, Math.min(1, (triggerPoint - rect.top) / (windowHeight / 3)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate side icon styles - converge to center and fade
  const getSideIconStyle = (index: number, side: 'left' | 'right') => {
    const convergeFactor = Math.min(scrollProgress * 1.5, 1);
    
    // Distance from center increases with index
    const baseDistance = (index + 1) * 70;
    const translateX = side === 'left' 
      ? -baseDistance * (1 - convergeFactor)
      : baseDistance * (1 - convergeFactor);
    
    // Fade out as they converge
    const opacity = Math.max(0, 1 - convergeFactor * 1.2);
    const scale = Math.max(0, 1 - convergeFactor * 0.8);
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    };
  };

  // Center icon grows as others converge
  const getCenterIconStyle = () => {
    const convergeFactor = Math.min(scrollProgress * 1.5, 1);
    const scale = 1 + (convergeFactor * 0.3);
    
    return {
      transform: `scale(${scale})`,
      transition: 'transform 0.1s ease-out',
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
          <h3 className="text-xl md:text-2xl text-center mb-6 tracking-wide font-body normal-case">
            Using <span className="font-bold bg-highlight px-2">Mulerun</span> is like having
          </h3>

          {/* Platform Icons with convergence animation */}
          <div className="flex justify-center items-center gap-2 mb-12 overflow-hidden py-4">
            {/* Left icons */}
            {leftIcons.map((platform, index) => (
              <div
                key={`left-${index}`}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center overflow-hidden"
                style={getSideIconStyle(leftIcons.length - 1 - index, 'left')}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
              </div>
            ))}
            
            {/* Center Mulerun icon */}
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-highlight bg-background flex items-center justify-center overflow-hidden z-10"
              style={getCenterIconStyle()}
            >
              <img 
                src={iconMulerun} 
                alt="Mulerun"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
            
            {/* Right icons */}
            {rightIcons.map((platform, index) => (
              <div
                key={`right-${index}`}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center overflow-hidden"
                style={getSideIconStyle(index, 'right')}
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
          <h3 className="text-xl md:text-2xl text-center mb-6 tracking-wide font-body normal-case">
            Multiple pro platforms — <span className="font-bold bg-highlight px-2">Mulerun</span> handles it all.
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-background border-l-4 border-l-muted-foreground/50 border border-border p-6 rounded-lg flex flex-col items-center justify-center">
              <p className="text-sm font-medium text-foreground/70 mb-3 text-center">Buy 4 pro platforms separately</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground/60 text-center">$99<span className="text-base font-normal">/month</span></p>
            </div>
            <div 
              className="bg-highlight/30 border-l-4 border-l-highlight border border-border p-6 rounded-lg relative group cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col justify-center items-start"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm font-medium text-foreground/70 mb-3">Get the same with Mulerun</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">$19.9<span className="text-base font-normal">/month</span></p>
              <p className="text-xs text-foreground/50 mt-1">cancel anytime [PRICE in USD]</p>
              
              {/* Hover overlay with pricing button */}
              <div className={`absolute inset-0 bg-primary/90 rounded-lg flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-mono text-base"
                  asChild
                >
                  <a href="https://mulerun.com/pricing" target="_blank" rel="noopener noreferrer">
                    View Pricing Plans <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <h3 className="text-xl md:text-2xl text-center mb-6 font-body normal-case">
            Beyond Price — More Convenience with <span className="font-bold bg-highlight px-2">Mulerun</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-highlight/20 border-l-4 border-l-highlight border border-border p-5 rounded-lg text-left"
              >
                <benefit.icon className="w-10 h-10 mb-4 text-foreground/70" />
                <p className="font-semibold text-lg mb-3">{benefit.title}</p>
                <p className="text-base text-foreground/60 leading-relaxed">{benefit.description}</p>
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