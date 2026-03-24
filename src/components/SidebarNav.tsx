import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, Info, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "menu", icon: UtensilsCrossed, label: "Menu" },
  { id: "about", icon: Info, label: "About" },
  { id: "contact", icon: Phone, label: "Contact" },
];

const SidebarNav = ({ activeSection, onNavigate }: SidebarNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (id === "contact") {
      navigate("/contact");
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 z-50 flex-col items-center justify-between py-6 bg-sidebar border-r border-sidebar-border">
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={logo} alt="The Pound Cake" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "contact" ? location.pathname === "/contact" : activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </button>
            );
          })}
        </div>

        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={logo} alt="The Pound Cake" className="w-full h-full object-cover" />
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-sidebar/95 backdrop-blur-md border-b border-sidebar-border">
        <div
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={logo} alt="The Pound Cake" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "contact" ? location.pathname === "/contact" : activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SidebarNav;
