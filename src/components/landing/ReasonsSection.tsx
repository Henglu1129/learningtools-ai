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
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

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
      
      const sectionVisibleTop = windowHeight - rect.top;
      const sectionHeight = rect.height;
      const visibleRatio = sectionVisibleTop / sectionHeight;
      
      if (visibleRatio < 0.67) {
        setScrollProgress(0);
        return;
      }
      
      const progress = Math.max(0, Math.min(1, (visibleRatio - 0.67) / 0.33));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSideIconStyle = (index: number, side: 'left' | 'right') => {
    const convergeFactor = Math.min(scrollProgress * 1.5, 1);
    const baseDistance = (index + 1) * 70;
    const translateX = side === 'left' 
      ? -baseDistance * (1 - convergeFactor)
      : baseDistance * (1 - convergeFactor);
    
    const opacity = Math.max(0, 1 - convergeFactor * 1.2);
    const scale = Math.max(0, 1 - convergeFactor * 0.8);
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    };
  };

  const getCenterIconStyle = () => {
    const convergeFactor = Math.min(scrollProgress * 1.5, 1);
    const scale = 1 + (convergeFactor * 0.3);
    
    return {
      transform: `scale(${scale})`,
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="bg-cream border-2 border-border rounded-2xl p-6 md:p-10 shadow-lg">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mb-8">
            One account, all the tools you need
          </h2>

          {/* Platform Icons with convergence animation */}
          <div className="flex justify-center items-center gap-2 mb-10 overflow-hidden py-4">
            {leftIcons.map((platform, index) => (
              <div
                key={`left-${index}`}
                className="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center overflow-hidden"
                style={getSideIconStyle(leftIcons.length - 1 - index, 'left')}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-8 h-8 md:w-11 md:h-11 object-contain"
                />
              </div>
            ))}
            
            <div
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-highlight bg-background flex items-center justify-center overflow-hidden z-10"
              style={getCenterIconStyle()}
            >
              <img 
                src={iconMulerun} 
                alt="Mulerun"
                className="w-10 h-10 md:w-14 md:h-14 object-contain"
              />
            </div>
            
            {rightIcons.map((platform, index) => (
              <div
                key={`right-${index}`}
                className="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-border bg-background flex items-center justify-center overflow-hidden"
                style={getSideIconStyle(index, 'right')}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-8 h-8 md:w-11 md:h-11 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Price section title */}
          <p className="text-center text-foreground/70 mb-6">
            <span className="bg-highlight px-3 py-1 inline-block text-sm md:text-base">Multiple pro tools, a fraction of the price.</span>
          </p>
          
          {/* Price Comparison */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch">
            <div className="bg-background border-l-4 border-l-muted-foreground/50 border border-border p-5 rounded-lg flex flex-col justify-center items-start flex-1">
              <p className="text-sm font-medium text-foreground/70 mb-2">Buy 4 pro platforms separately</p>
              <p className="text-xl md:text-2xl font-bold text-foreground/60">$99<span className="text-sm font-normal">/month</span></p>
            </div>
            <div 
              className="bg-highlight/30 border-l-4 border-l-highlight border border-border p-5 rounded-lg relative group cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col justify-center items-start flex-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">SAVE 75%</span>
              </div>
              <p className="text-sm font-medium text-foreground/70 mb-1">Get the same with Mulerun</p>
              <div className="flex items-baseline gap-2">
                <span className="text-foreground/40 line-through text-base">$10</span>
                <span className="text-xl md:text-2xl font-bold text-foreground">$8.33</span>
                <span className="text-sm font-normal text-foreground/70">/month</span>
              </div>
              <p className="text-xs text-foreground/50 mt-1">Billed annually, get 2 months free</p>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-2">SAVE 20% annually</span>
              
              <div className={`absolute inset-0 bg-primary/90 rounded-lg flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-mono text-sm"
                  asChild
                >
                  <a 
                    href="https://mulerun.com/pricing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackClick(ANALYTICS_EVENTS.REASONS_PRICING)}
                  >
                    View Pricing Plans <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-highlight/20 border-l-4 border-l-highlight border border-border p-4 rounded-lg text-left"
              >
                <benefit.icon className="w-8 h-8 mb-3 text-foreground/70" />
                <p className="font-semibold text-base mb-2">{benefit.title}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              className="font-mono text-sm gap-2"
              asChild
            >
              <a 
                href="https://mulerun.com/signin"
                onClick={() => trackClick(ANALYTICS_EVENTS.REASONS_SIGNUP)}
              >
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
