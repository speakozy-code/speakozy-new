import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-border/60 bg-secondary/60 hover:bg-secondary text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110 hover:shadow-md"
      aria-label={isDark ? "تبديل إلى الوضع الفاتح" : "تبديل إلى الوضع الداكن"}
    >
      <Sun
        className={`absolute w-[18px] h-[18px] transition-all duration-500 ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute w-[18px] h-[18px] transition-all duration-500 ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
