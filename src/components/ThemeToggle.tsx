import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5" />;
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5" />;
    } else {
      // System theme - show based on actual applied theme
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />;
    }
  };

  const getTooltipText = () => {
    if (theme === "light") {
      return "Switch to dark mode";
    } else if (theme === "dark") {
      return "Switch to system theme";
    } else {
      return "Switch to light mode";
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={getTooltipText()}
      className="hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {getIcon()}
    </Button>
  );
}