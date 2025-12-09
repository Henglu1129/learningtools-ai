// HeroSection - main landing page hero
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const carouselItems = [
  {
    video: "/videos/carousel-1.mp4",
    link: "https://mulerun.com/@Ailurus/general-browser-operator",
    eventName: ANALYTICS_EVENTS.HERO_CAROUSEL_1,
  },
  {
    video: "/videos/carousel-2.mp4",
    link: "https://mulerun.com/@QuickBI/smart-q",
    eventName: ANALYTICS_EVENTS.HERO_CAROUSEL_2,
  },
  {
    video: "/videos/carousel-3.mp4",
    link: "https://mulerun.com/@createAny/knowledge-card-factory",
    eventName: ANALYTICS_EVENTS.HERO_CAROUSEL_3,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Control video playback based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

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
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex-shrink-0 cursor-pointer"
                    onClick={() => trackClick(item.eventName)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.video}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </a>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
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
                    onClick={() => setCurrentIndex(index)}
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
