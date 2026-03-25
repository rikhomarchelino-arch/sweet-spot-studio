import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { menuCategories } from "@/data/menuData";
import MenuSubSection from "@/components/MenuSubSection";
import ScrollReveal from "@/components/ScrollReveal";

const MenuCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const category = menuCategories.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-body">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get other categories for "More" section
  const otherCategories = menuCategories.filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-border/50 text-foreground hover:bg-background/80 transition-colors duration-300 font-body text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-3 text-base md:text-lg text-foreground/70 font-body max-w-xl"
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Items Section */}
      <div className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Items
            </span>
          </ScrollReveal>

          {category.subCategories.map((sub) => (
            <MenuSubSection key={sub.title} subCategory={sub} />
          ))}
        </div>
      </div>

      {/* More Categories */}
      <div className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-body mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              More
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/menu/${cat.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[16/10] cursor-pointer"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/60 font-body max-w-xs opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
