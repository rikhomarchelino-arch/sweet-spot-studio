import { useNavigate, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, Info, Phone } from "lucide-react";
import cakeIcon from "@/assets/CakeIcon.png";
import croissantIcon from "@/assets/CroissantIcon.png";
import ThemeToggle from "./ThemeToggle";

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "menu", icon: UtensilsCrossed, label: "Menu" },
  { id: "about", icon: Info, label: "About" },
  { id: "contact", icon: Phone, label: "Contact" },
];

const SidebarNav = ({ activeSection, onNavigate, theme, toggleTheme }: SidebarNavProps) => {
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
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 z-50 flex-col items-center justify-between py-6 bg-sidebar border-r border-sidebar-border transition-colors duration-300">
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={cakeIcon} alt="The Pound Cake" className="w-full h-full object-contain p-1" />
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
                    ? "bg-accent/20 text-accent"
                    : "text-accent/50 hover:text-accent hover:bg-accent/10"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </button>
            );
          })}

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={croissantIcon} alt="The Pound Cake" className="w-full h-full object-contain p-1" />
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-sidebar/95 backdrop-blur-md border-b border-sidebar-border transition-colors duration-300">
        <div
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <img src={cakeIcon} alt="The Pound Cake" className="w-full h-full object-contain p-1" />
        </div>
        <div className="flex items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "contact" ? location.pathname === "/contact" : activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-accent/50 hover:text-accent"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </button>
            );
          })}

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} compact />
        </div>
      </nav>
    </>
  );
};

export default SidebarNav;
