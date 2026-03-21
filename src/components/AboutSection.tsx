import { Lightbulb, Hammer, Sun } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const aboutItems = [
  {
    icon: Lightbulb,
    title: "Baked with Passion",
    description:
      "At The Pound Cake, we don't just bake—we innovate. Our passion for quality inspires us to create bold, flavorful treats that blend creativity with tradition, delivering an unexpected twist on classic favorites.",
  },
  {
    icon: Hammer,
    title: "Crafted with Care",
    description:
      "From tangy tarts and rich pound cakes to buttery cookies and artisan rolls, every treat is crafted with the finest, freshest ingredients. We hand-make each item to bring out the natural richness and flavour.",
  },
  {
    icon: Sun,
    title: "Fresh Flavours, Every Day",
    description:
      "We believe that freshness is key to delivering the best flavour. That's why everything at The Pound Cake is made fresh daily, ensuring the rich, vibrant taste in every single bite, all day, every day.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            About Us
          </span>
        </ScrollReveal>

        <StaggerReveal className="flex flex-col gap-5" staggerDelay={0.1}>
          {aboutItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
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
