import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import carousel1 from "@/assets/carousel-1.gif";
import carousel2 from "@/assets/carousel-2.gif";

const carouselImages = [carousel1, carousel2];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 max-w-2xl">
          <h1 className="mb-6">
            <span className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] block">
              Your AI study partners
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] block mt-2 text-foreground/80">
              ready for any learning task
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-xl">
            Our AI agents read, explain, map, and quiz—so you learn faster and smarter!
          </p>
          <Button variant="hero" size="lg" className="font-mono text-base gap-2">
            START FREE <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div 
          className="relative w-full max-w-md lg:max-w-lg"
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
            <div className="relative aspect-[4/3] bg-gradient-to-br from-highlight/30 via-purple/30 to-highlight/50">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Carousel ${index + 1}`}
                    className="w-full h-full object-contain flex-shrink-0"
                  />
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
                {carouselImages.map((_, index) => (
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
