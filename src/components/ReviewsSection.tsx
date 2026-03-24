import { useState, useEffect, useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Cheilla Yuniar",
    rating: 5,
    text: "Aku baru nyobain poundcake disini. Ternyata teksturnya padat dan lumer. Kopinya juga cukup oke. Ada makanan beratnya juga. Ada area parkirnya juga.",
  },
  {
    name: "Devin Meizza",
    rating: 5,
    text: "Tempat ngopi pewe di Semarang dengan rasa kopi yang juara. After taste-nya ringan dan tidak meninggalkan kesan berat di tenggorokan.",
  },
  {
    name: "Ricky Setiawan",
    rating: 5,
    text: "Pertama kali coba cafe & pastry dengan nuansa clean. Ada demo kitchen jadi pastry selalu fresh from the oven. Menu makanan dan minuman juga bervariasi.",
  },
  {
    name: "Afira Azzahra",
    rating: 5,
    text: "First time kesini dan servicenya luar biasa. Pastry-nya enak, semua oke. Bahkan dapat compliment jika ada menu yang kurang pas. Terima kasih banyak.",
  },
  {
    name: "Adisty Octaviyani",
    rating: 5,
    text: "Makanannya enak, matcha-nya juga enak. Tempatnya tidak terlalu besar tapi cozy, cocok untuk nugas atau santai. Pasti akan kembali lagi.",
  },
  {
    name: "Farah Angelina",
    rating: 5,
    text: "Akhirnya menemukan chewy cookies yang worth it. Satu set isi dua dengan harga terjangkau, sangat recommended.",
  },
  {
    name: "Milka Otto",
    rating: 5,
    text: "Suasana cafe homey. Cheesecake-nya enak. Coba rusty mochi brownchiz juga menarik. Cocok untuk pecinta dessert dan makanan berat.",
  },
  {
    name: "Gisella Indi Sheranti",
    rating: 5,
    text: "Pertama kali kesini dan tempatnya nyaman sekali. Pegawainya ramah dan rotinya cukup enak.",
  },
  {
    name: "Cece Tobing",
    rating: 5,
    text: "Walaupun fokus di pastry, main course-nya sangat enak. Curry dan pasta creamy tidak bikin eneg. Staff juga sangat ramah. Akan kembali lagi.",
  },
  {
    name: "Helena Yupita",
    rating: 5,
    text: "Semua menu enak, terutama toast-nya. Tempatnya estetik, nyaman, dan strategis. Staff sangat ramah. Sangat direkomendasikan.",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/The+Pound+Cake+%7C+Pastry+%26+Coffee,+Jl.+Letnan+Jenderal+S.+Parman+No.3,+Petompon,+Gajahmungkur,+Semarang+City,+Central+Java+50231/data=!4m2!3m1!1s0x2e708b252acba21f:0x8c7d0756df0a137!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjEyLjUYACDXggMqlAEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODQ0NzIsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzk2MTkzQgJJRA%3D%3D&skid=6a1061a6-8cea-4b19-932f-a9e2301c79b1&g_st=aw";

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal({ threshold: 0.1 });

  const getCardMetrics = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return { cardWidth: 300, gap: 20 };
    const card = container.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = card?.offsetWidth ?? 300;
    const gap = 20;
    return { cardWidth, gap };
  }, []);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const { cardWidth, gap } = getCardMetrics();
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, reviews.length - 1));
  }, [getCardMetrics]);

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
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      scrollByCard(1);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, scrollByCard]);

  // Map activeIndex to max 3 dots
  const totalCards = reviews.length;
  const maxDots = 3;
  const getDotIndex = () => {
    if (totalCards <= maxDots) return activeIndex;
    const ratio = activeIndex / (totalCards - 1);
    return Math.round(ratio * (maxDots - 1));
  };
  const activeDot = getDotIndex();

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
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          {/* Arrow buttons — outside card area */}
          <button
            onClick={() => scrollByCard(-1)}
            className="absolute -left-4 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="absolute -right-4 sm:-right-5 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
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
                  delay: Math.min(index * 0.08, 0.5),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="min-w-[calc(100vw-5rem)] sm:min-w-[calc(50vw-4rem)] lg:min-w-[calc(33.333%-0.85rem)] max-w-[380px] snap-start flex-shrink-0 p-5 sm:p-6 md:p-7 rounded-xl bg-card border border-border transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.2)]"
                style={{ boxShadow: "var(--shadow-card)", wordBreak: "keep-all" }}
              >
                <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                  {review.name}
                </h4>
                <div className="flex gap-1 mt-2 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 font-body leading-relaxed text-sm sm:text-[0.935rem]" style={{ textAlign: "justify", textAlignLast: "left" }}>
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dot indicators — desktop: bottom-right, mobile/tablet: centered */}
          <div className="flex md:justify-end justify-center mt-5 md:mt-4 md:pr-2">
            <div className="flex gap-2">
              {Array.from({ length: maxDots }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeDot
                      ? "bg-primary scale-125"
                      : "bg-foreground/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <ScrollReveal>
          <div className="flex justify-center mt-10">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)]"
            >
              Review Based on Google Maps
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
