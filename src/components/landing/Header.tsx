import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center bg-card">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="bg-muted rounded border border-border p-1">
            <div className="bg-cream rounded w-8 h-8 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="6" height="6" fill="currentColor" />
                <rect x="14" y="4" width="6" height="6" fill="currentColor" />
                <rect x="4" y="14" width="6" height="6" fill="currentColor" />
                <rect x="14" y="14" width="6" height="6" fill="currentColor" />
              </svg>
            </div>
          </div>
          <span className="font-bold text-lg">Mule Run</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            FEATURES
          </a>
          <a href="#how-it-works" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            HOW IT WORKS
          </a>
          <a href="#integrations" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            INTEGRATIONS
          </a>
          <a href="#pricing" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            PRICING
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden md:inline-flex font-mono text-sm">
          LOG IN
        </Button>
        <Button variant="hero" className="font-mono text-sm">
          SIGN UP
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
