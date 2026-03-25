import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Menu
          </span>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {menuCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/menu/${cat.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[16/10] cursor-pointer block"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/60 font-body max-w-xs opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default MenuSection;
