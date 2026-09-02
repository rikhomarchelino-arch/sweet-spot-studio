import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cafeInterior from "@/assets/cafe-interior.jpg";
import cafeLatte from "@/assets/cafe-latte.jpg";
import cafeCounter from "@/assets/cafe-counter.jpg";

const AnimatedText = ({
  text,
  className,
  delay = 0,
  isVisible,
}: {
  text: string;
  className?: string;
  delay?: number;
  isVisible: boolean;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [isVisible, controls]);

  const lines = text.split("\n");
  let globalIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <span key={lineIdx}>
            {words.map((word, wordIdx) => {
              const chars = word.split("");
              const wordElement = (
                <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {chars.map((char) => {
                    const i = globalIndex++;
                    return (
                      <motion.span
                        key={`${lineIdx}-${i}`}
                        style={{ display: "inline-block" }}
                        initial="hidden"
                        animate={controls}
                        variants={{
                          hidden: {
                            y: 30,
                            opacity: 0,
                            filter: "blur(2px)",
                          },
                          visible: {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                              duration: 0.55,
                              delay: delay + i * 0.03,
                              ease: [0.25, 0.1, 0.25, 1],
                            },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              );
              // Add a space between words (as a separate inline element so wrapping happens here)
              if (wordIdx < words.length - 1) {
                globalIndex++; // count the space
                return (
                  <span key={`w-${wordIdx}`}>
                    {wordElement}
                    <motion.span
                      style={{ display: "inline", whiteSpace: "pre" }}
                      initial="hidden"
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 0.55,
                            delay: delay + (globalIndex - 1) * 0.03,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        },
                      }}
                    > </motion.span>
                  </span>
                );
              }
              return wordElement;
            })}
            {lineIdx < lines.length - 1 && <br />}
          </span>
        );
      })}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(false);
          // Force a tick so framer-motion resets before replaying
          requestAnimationFrame(() => setIsVisible(true));
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleText = "THE POUND\nCAFE.";
  const titleCharCount = titleText.replace("\n", "").length;
  const subtitleDelay = titleCharCount * 0.03 + 0.3;

  return (
    <section id="home" ref={sectionRef} className="relative min-h-[92vh] overflow-hidden bg-cafe-cream text-maroon">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 md:px-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
        <div className="relative z-10 lg:col-span-6">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold uppercase text-maroon">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Pastry & coffee · Semarang
          </div>
          <h1 className="font-display text-6xl font-black leading-[0.88] text-maroon md:text-8xl lg:text-9xl">
          <AnimatedText
            text="THE POUND"
            isVisible={isVisible}
          />
          <br />
          <span className="text-maroon">
            <AnimatedText
              text="CAFÉ."
              isVisible={isVisible}
              delay={"THE POUND".length * 0.03 + 0.15}
            />
          </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-maroon/80 md:text-xl">
          <AnimatedText
            text="Tempat untuk kopi yang diracik serius, pastry hangat, dan obrolan yang tidak perlu terburu-buru."
            isVisible={isVisible}
            delay={subtitleDelay}
          />
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-maroon px-7 py-3.5 font-semibold text-maroon-foreground transition-transform hover:-translate-y-1">Lihat Menu</a>
            <a href="/contact" className="rounded-full border-2 border-maroon px-7 py-3.5 font-semibold text-maroon transition-transform hover:-translate-y-1">Kunjungi Kami</a>
          </div>
          <div className="mt-10 flex items-center gap-7 border-t border-maroon/15 pt-7">
            <div><p className="font-display text-2xl font-bold">07.00</p><p className="text-xs uppercase text-maroon/60">Buka setiap hari</p></div>
            <span className="h-10 w-px bg-maroon/15" />
            <div><p className="font-display text-2xl font-bold">4.9/5</p><p className="text-xs uppercase text-maroon/60">Cerita pelanggan</p></div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3 pb-8 lg:col-span-6">
          <div className="space-y-3 pt-10">
            <img src={cafeCounter} alt="Pastry segar di meja The Pound Cake" className="aspect-[3/4] w-full rounded-xl object-cover shadow-2xl transition-transform duration-500 hover:-translate-y-1" width={1200} height={1504} />
            <div className="aspect-square rounded-xl bg-maroon p-6 text-maroon-foreground flex flex-col justify-end">
              <p className="font-display text-2xl font-bold">Stay a little longer.</p>
              <p className="mt-2 text-sm text-maroon-foreground/75">Dibuat untuk pagi pelan, meeting singkat, dan sore bersama.</p>
            </div>
          </div>
          <div className="space-y-3">
            <img src={cafeLatte} alt="Latte yang sedang diracik" className="aspect-square w-full rounded-xl object-cover shadow-2xl transition-transform duration-500 hover:-translate-y-1" width={1200} height={1200} />
            <img src={cafeInterior} alt="Suasana hangat The Pound Cake café" className="aspect-[3/4] w-full rounded-xl object-cover shadow-2xl transition-transform duration-500 hover:-translate-y-1" width={1200} height={1504} />
          </div>
          <div className="absolute bottom-0 right-4 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-primary p-4 text-center text-xs font-bold uppercase text-primary-foreground shadow-xl md:h-28 md:w-28">
            Fresh daily<br />in Semarang
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
