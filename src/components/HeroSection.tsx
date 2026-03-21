import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import heroCake from "@/assets/hero-cake.jpg";

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
        if (entry.isIntersecting) {
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

  const titleText = "THE POUND\nCAKE.";
  const titleCharCount = titleText.replace("\n", "").length;
  const subtitleDelay = titleCharCount * 0.03 + 0.3;

  return (
    <section id="home" ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="The Pound Cake - Premium Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground drop-shadow-2xl">
          <AnimatedText
            text="THE POUND"
            isVisible={isVisible}
          />
          <br />
          <span className="text-primary">
            <AnimatedText
              text="CAKE."
              isVisible={isVisible}
              delay={"THE POUND".length * 0.03 + 0.15}
            />
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-foreground/80 font-body">
          <AnimatedText
            text="Crafting premium cakes & pastries delivering with love on every bite!"
            isVisible={isVisible}
            delay={subtitleDelay}
          />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
