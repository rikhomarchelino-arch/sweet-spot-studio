import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  compact?: boolean;
}

const ThemeToggle = ({ theme, toggleTheme, compact = false }: ThemeToggleProps) => {
  const isDark = theme === "dark";

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        className="relative w-14 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center px-0.5 cursor-pointer hover:scale-105 transition-transform duration-300"
        aria-label="Toggle theme">
        
        <Sun size={12} className={`absolute left-1.5 transition-opacity duration-300 text-accent ${isDark ? "opacity-40" : "opacity-100"}`} />
        <Moon size={12} className={`absolute right-1.5 transition-opacity duration-300 text-accent ${isDark ? "opacity-100" : "opacity-40"}`} />
        <span
          className="w-5 h-5 rounded-full bg-accent shadow-sm transition-transform duration-300 ease-in-out"
          style={{ transform: isDark ? "translateX(28px)" : "translateX(0px)" }} />
        
      </button>);

  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-[4.5rem] rounded-full bg-accent/20 border border-accent/30 cursor-pointer hover:scale-105 transition-transform duration-300 p-1 flex-row flex items-center justify-center gap-[4px]"
      aria-label="Toggle theme">
      
      <Sun size={14} className={`relative z-10 transition-opacity duration-300 mt-0.5 text-accent-foreground ${isDark ? "opacity-40" : "opacity-100"}`} />
      <Moon size={14} className={`relative z-10 transition-opacity duration-300 mb-0.5 text-accent-foreground ${isDark ? "opacity-100" : "opacity-40"}`} />
      <span
        className="absolute w-8 h-8 rounded-full bg-accent shadow-sm transition-transform duration-300 ease-in-out"
        style={{ transform: isDark ? "translateY(17px)" : "translateY(-17px)" }} />
      
    </button>);

};

export default ThemeToggle;