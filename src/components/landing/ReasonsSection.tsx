import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, CreditCard, Users } from "lucide-react";
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
    title: "No More Platform Switching",
    description: "Say goodbye to juggling between apps. Do everything in one place—3x faster workflow.",
  },
  {
    icon: CreditCard,
    title: "Unified Billing",
    description: "One invoice, one payment. No more tracking multiple due dates or charges.",
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
    const baseDistance = (index + 1) * 35;
    const translateX = side === 'left' 
      ? baseDistance * (1 - convergeFactor) * -1
      : baseDistance * (1 - convergeFactor);
    
    const opacity = scrollProgress === 0 ? 1 : Math.max(0, 1 - convergeFactor * 1.2);
    const scale = scrollProgress === 0 ? 1 : Math.max(0.2, 1 - convergeFactor * 0.8);
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
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
    <section ref={sectionRef} className="py-12 md:py-20" style={{ backgroundColor: 'hsl(205, 60%, 92%)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mb-2 font-bold text-foreground">
          Mulerun's all-in-one edge
        </h2>
        
        <p className="text-center mb-8">
          <span className="bg-highlight px-3 py-1 inline-block text-sm md:text-base rounded">Multiple pro tools, a fraction of the price.</span>
        </p>

        {/* Main content card */}
        <div className="rounded-2xl p-6 md:p-10 shadow-lg" style={{ backgroundColor: 'hsl(205, 50%, 97%)' }}>
          {/* Using Mulerun is like having */}
          <p className="text-center text-foreground font-semibold text-lg mb-4">
            Using Mulerun is like having
          </p>

          {/* Platform Icons with convergence animation */}
          <div className="flex justify-center items-center gap-2 mb-8 overflow-hidden py-4">
            {leftIcons.map((platform, index) => (
              <div
                key={`left-${index}`}
                className="w-10 h-10 md:w-14 md:h-14 rounded-lg border border-border/30 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'hsl(205, 40%, 94%)', ...getSideIconStyle(leftIcons.length - 1 - index, 'left') }}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-cover rounded"
                />
              </div>
            ))}
            
            <div
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg border-2 border-highlight flex items-center justify-center overflow-hidden z-10"
              style={{ backgroundColor: 'hsl(205, 50%, 97%)', ...getCenterIconStyle() }}
            >
              <img 
                src={iconMulerun} 
                alt="Mulerun"
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded"
              />
            </div>
            
            {rightIcons.map((platform, index) => (
              <div
                key={`right-${index}`}
                className="w-10 h-10 md:w-14 md:h-14 rounded-lg border border-border/30 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'hsl(205, 40%, 94%)', ...getSideIconStyle(index, 'right') }}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* Price section title */}
          <p className="text-center text-foreground font-semibold mb-6">
            Multiple pro platforms — Mulerun handles it all.
          </p>
          
          {/* Price Comparison - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Buy separately */}
            <div className="p-5 rounded-lg border-l-4" style={{ backgroundColor: 'hsl(205, 40%, 94%)', borderLeftColor: 'hsl(205, 40%, 70%)' }}>
              <p className="text-sm font-medium text-foreground/70 mb-2">Buy 4 pro platforms separately</p>
              <p className="text-xl md:text-2xl font-bold text-foreground/60">¥1,596<span className="text-sm font-normal">/month</span></p>
            </div>
            
            {/* Get with Mulerun */}
            <div 
              className="p-5 rounded-lg relative group cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 border-l-highlight"
              style={{ backgroundColor: 'hsl(205, 50%, 97%)', borderColor: 'hsl(var(--highlight))' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm font-medium text-foreground/70 mb-2">Get the same with Mulerun</p>
              <div className="flex items-baseline gap-2">
                <span className="text-foreground/40 line-through text-base">¥159</span>
                <span className="text-foreground/70">/month</span>
                <span className="mx-1">—</span>
                <span className="bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded">Save 90%</span>
              </div>
              
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

            {/* Annual savings */}
            <div className="p-5 rounded-lg border-l-4" style={{ backgroundColor: 'hsl(205, 40%, 94%)', borderLeftColor: 'hsl(205, 40%, 70%)' }}>
              <p className="text-sm font-medium text-foreground/70 mb-2">Annual savings</p>
              <p className="text-xl md:text-2xl font-bold text-highlight">¥17,244<span className="text-sm font-normal">/year</span></p>
            </div>
          </div>

          {/* Beyond Price section */}
          <p className="text-center text-foreground mb-6">
            Beyond Price — <span className="font-bold">More Convenience with Mulerun</span>
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-lg text-center border-l-4 border-l-highlight"
                style={{ backgroundColor: 'hsl(205, 40%, 94%)' }}
              >
                <benefit.icon className="w-8 h-8 mb-3 text-foreground/70 mx-auto" />
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
                Sign Up For Free <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;