import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import type { Theme } from "@/hooks/use-theme";
import type { NavItem } from "@/types/navigation";

type NavbarProps = {
  items: NavItem[];
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ items, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Zoe Sobol
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <nav
        className={`
          absolute left-0 right-0 top-full overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl
          transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-transparent"}
        `}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClose}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
