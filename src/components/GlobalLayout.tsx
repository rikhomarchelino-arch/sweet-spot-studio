import { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "@/lib/router-compat";
import SidebarNav from "./SidebarNav";
import { ActiveSectionContext } from "./ActiveSectionContext";
import { useTheme } from "@/hooks/useTheme";

const GlobalLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  useTheme();

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

  const contextValue = useMemo(() => ({ setActiveSection }), []);

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <SidebarNav activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="md:ml-20 transition-colors duration-300">
          <Outlet />
        </main>
      </div>
    </ActiveSectionContext.Provider>
  );
};

export default GlobalLayout;
