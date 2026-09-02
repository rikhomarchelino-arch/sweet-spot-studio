import { Sparkles, Search, Sun } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const aboutItems = [
  {
    icon: Sparkles,
    title: "A Café to Come Back To",
    description:
      "Tempat yang hangat untuk memulai pagi, bertemu teman, atau mengambil jeda dengan secangkir kopi yang dibuat sepenuh hati.",
  },
  {
    icon: Search,
    title: "Coffee, Pastry, and Craft",
    description:
      "Dari espresso hingga lipatan croissant, setiap detail disiapkan dengan presisi agar terasa istimewa namun tetap akrab.",
  },
  {
    icon: Sun,
    title: "Fresh from Our Counter",
    description:
      "Pilihan pastry, cake, dan hidangan café dibuat segar untuk menemani setiap ritme harimu.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-cafe-cream py-20 text-maroon md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            The Café
          </span>
        </ScrollReveal>

        <StaggerReveal className="flex flex-col gap-5" staggerDelay={0.1}>
          {aboutItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-lg bg-maroon text-maroon-foreground border border-maroon hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-maroon-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-maroon-foreground/70 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default AboutSection;
