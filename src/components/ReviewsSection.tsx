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
  {
    name: "James T.",
    rating: 5,
    text: "Ordered a custom cake for my daughter's birthday and it was stunning. The attention to detail was incredible!",
  },
  {
    name: "Priya N.",
    rating: 5,
    text: "Their lemon tart is divine—tangy, creamy, and not too sweet. I keep coming back every weekend for more.",
  },
  {
    name: "Marcus L.",
    rating: 5,
    text: "Best bakery in town, hands down. Everything tastes homemade and you can tell they use quality ingredients.",
  },
  {
    name: "Aisha B.",
    rating: 5,
    text: "The red velvet was absolutely perfect for our anniversary. Moist, rich, and beautifully decorated.",
  },
  {
    name: "Chris W.",
    rating: 5,
    text: "I'm obsessed with their banana bread—warm, moist, and packed with flavour. It sells out fast for a reason!",
  },
  {
    name: "Laura H.",
    rating: 5,
    text: "Tried the chocolate ganache cake and it was heavenly. Silky smooth with just the right amount of sweetness.",
  },
  {
    name: "Omar F.",
    rating: 5,
    text: "Every pastry I've tried here has been exceptional. The croissants are flaky and buttery—pure perfection.",
  },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal({ threshold: 0.1 });

  const getCardMetrics = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return { cardWidth: 360, gap: 20 };
    const card = container.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = card?.offsetWidth ?? 360;
    const gap = 20;
    return { cardWidth, gap };
  }, []);

  const scrollByCard = useCallback(
    (direction: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const { cardWidth, gap } = getCardMetrics();
      const scrollAmount = direction * (cardWidth + gap);
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction > 0 && container.scrollLeft >= maxScroll - 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction < 0 && container.scrollLeft <= 2) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [getCardMetrics]
  );

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      scrollByCard(1);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, scrollByCard]);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12">
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
          {/* Gradient fades */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          {/* Arrow buttons */}
          <button
            onClick={() => scrollByCard(-1)}
            className="absolute -left-1 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="absolute -right-1 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 no-scrollbar cursor-grab active:cursor-grabbing px-6 sm:px-8 md:px-10"
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
                  delay: Math.min(index * 0.08, 0.5),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="min-w-[calc(100vw-4rem)] sm:min-w-[calc(50vw-3.5rem)] md:min-w-[calc(33.333vw-4rem)] lg:min-w-[calc(33.333%-1rem)] max-w-[400px] snap-start flex-shrink-0 p-6 md:p-8 rounded-xl bg-card border border-border transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.2)]"
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
                <p className="text-foreground/70 font-body leading-relaxed text-sm sm:text-base">
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
