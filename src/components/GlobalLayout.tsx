import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarNav from "./SidebarNav";

const GlobalLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveSection("contact");
    } else if (location.pathname === "/") {
      // IntersectionObserver in Index handles this
    }
  }, [location.pathname]);

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
        <Outlet context={{ setActiveSection }} />
      </main>
    </div>
  );
};

export default GlobalLayout;
