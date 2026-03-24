import { useState, useEffect } from "react";
import SidebarNav from "@/components/SidebarNav";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";

import FooterMarquee from "@/components/FooterMarquee";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
  }, []);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="md:ml-20">
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <FAQSection />
        <ReviewsSection />
        
        <FooterMarquee />
      </main>
    </div>
  );
};

export default Index;
