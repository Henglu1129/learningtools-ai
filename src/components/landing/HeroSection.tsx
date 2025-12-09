// HeroSection - main landing page hero
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import carousel1 from "@/assets/carousel-1-new.gif";
import carousel2 from "@/assets/carousel-2-new.gif";
import carousel3 from "@/assets/carousel-3-new.gif";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

interface CarouselItem {
  gif: string;
  link: string;
  eventName: string;
}

const carouselItems: CarouselItem[] = [
  {
    gif: carousel1,
    link: "https://mulerun.com/@Ailurus/general-browser-operator",
    eventName: ANALYTICS_EVENTS.CAROUSEL_SLIDE_1,
  },
  {
    gif: carousel2,
    link: "https://mulerun.com/@QuickBI/smart-q",
    eventName: ANALYTICS_EVENTS.CAROUSEL_SLIDE_2,
  },
  {
    gif: carousel3,
    link: "https://mulerun.com/@createAny/knowledge-card-factory",
    eventName: ANALYTICS_EVENTS.CAROUSEL_SLIDE_3,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedGifs, setLoadedGifs] = useState<boolean[]>(new Array(carouselItems.length).fill(false));
  const [visibleSlide, setVisibleSlide] = useState<number | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  // Extract first frame from GIF and draw to canvas
  const extractFirstFrame = useCallback((img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = img.naturalWidth || img.width || 640;
    canvas.height = img.naturalHeight || img.height || 360;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  // Preload GIFs and extract first frames
  useEffect(() => {
    carouselItems.forEach((item, index) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Extract first frame to canvas
        const canvas = canvasRefs.current[index];
        if (canvas) {
          extractFirstFrame(img, canvas);
        }
        
        // Mark as loaded
        setLoadedGifs(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
      
      img.src = item.gif;
    });
  }, [extractFirstFrame]);

  // Update visible slide when current index changes
  useEffect(() => {
    // Only show the GIF if it's loaded and is the current slide
    if (loadedGifs[currentIndex]) {
      setVisibleSlide(currentIndex);
    }
  }, [currentIndex, loadedGifs]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleSlideClick = (item: CarouselItem) => {
    trackClick(item.eventName);
    window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="mb-6">
            <span className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] block tracking-[0.1em]">
              Stop Studying Hard.
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] block tracking-[0.1em] mt-2">
              Start Learning Smart.
            </span>
          </h1>
          <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            AI agents that read, explain, organize, and quiz for you—so you can finally learn without burnout.
          </p>
          <Button variant="hero" size="lg" className="font-mono text-base gap-2" asChild>
            <a 
              href="https://mulerun.com/agent-store"
              onClick={() => trackClick(ANALYTICS_EVENTS.HERO_START_FREE)}
            >
              START FREE <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div 
          className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="window-decor rounded-lg" />
          <div className="window-frame rounded-lg overflow-hidden">
            <div className="flex gap-1.5 p-3 border-b border-border bg-card">
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <div className="relative aspect-[16/9] bg-gradient-to-br from-highlight/30 via-purple/30 to-highlight/50">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative cursor-pointer"
                    onClick={() => handleSlideClick(item)}
                  >
                    {/* Canvas for first frame (placeholder) */}
                    <canvas
                      ref={el => canvasRefs.current[index] = el}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        visibleSlide === index && loadedGifs[index] ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    
                    {/* Actual GIF - only visible when loaded and current slide */}
                    {loadedGifs[index] && (
                      <img
                        ref={el => imgRefs.current[index] = el}
                        src={visibleSlide === index ? item.gif : undefined}
                        data-src={item.gif}
                        alt={`Carousel ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          visibleSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
