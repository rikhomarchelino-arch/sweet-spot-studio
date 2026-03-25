import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import { useTheme } from "@/hooks/useTheme";

const GlobalLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [location.pathname]);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <SidebarNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="md:ml-20 transition-colors duration-300">
        <Outlet context={{ setActiveSection }} />
      </main>
    </div>
  );
};

export default GlobalLayout;
