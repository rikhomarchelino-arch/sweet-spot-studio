import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterMarquee from "@/components/FooterMarquee";
import { useActiveSection } from "@/components/ActiveSectionContext";

const Index = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sections = ["home", "menu", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <FAQSection />
      <ReviewsSection />
      <FooterMarquee />
    </>
  );
};

export default Index;
