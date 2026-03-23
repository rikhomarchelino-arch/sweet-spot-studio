import { useState, useEffect, useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Emily R.",
    rating: 5,
    text: "The pound cake was the best I've ever tasted—perfectly balanced between sweet and buttery. A must-try for any cake lover!",
  },
  {
    name: "Daniel K.",
    rating: 5,
    text: "The rolls are so light and fresh! I've never tasted anything like them, and the subtle flavour makes them irresistible.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "I can't get enough of their cookies! Every bite is packed with a perfect burst of goodness. It's my new go-to treat!",
  },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal({ threshold: 0.1 });

  const scrollByCard = useCallback((direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector<HTMLElement>("[data-review-card]")?.offsetWidth ?? 360;
    const gap = 20;
    container.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, scrollByCard]);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Reviews
          </span>
        </ScrollReveal>

        {/* Carousel wrapper */}
        <div
          ref={revealRef}
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left gradient fade */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          {/* Right gradient fade */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          {/* Arrow buttons */}
          <button
            onClick={() => scrollByCard(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 no-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                data-review-card
                initial={{ opacity: 0, y: 24 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="min-w-[85vw] sm:min-w-[360px] md:min-w-[400px] snap-start flex-shrink-0 p-6 md:p-8 rounded-xl bg-card border border-border transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.2)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {review.name}
                </h4>
                <div className="flex gap-1 mt-2 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 font-body leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <ScrollReveal>
          <div className="flex justify-center mt-12">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)]"
            >
              View More on Google Maps
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
