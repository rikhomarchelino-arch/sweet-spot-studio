import { Sparkles, Search, Sun } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const aboutItems = [
  {
    icon: Sparkles,
    title: "Designed to Feel Personal",
    description:
      "Every cake we create is designed with intention—crafted to match your moment, your style, and your story. Because no two celebrations should ever feel the same.",
  },
  {
    icon: Search,
    title: "Crafted in Every Detail",
    description:
      "From shape to finish, every detail is thoughtfully made to create a cake that not only tastes good—but looks unforgettable.",
  },
  {
    icon: Sun,
    title: "Made Fresh, Made for You",
    description:
      "Each cake is made to order using fresh ingredients, ensuring every piece feels as special as the moment it’s made for.",
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
