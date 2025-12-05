import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import mulerunLogo from "@/assets/mulerun-logo.png";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border px-4 md:px-10 lg:px-20 py-3 flex justify-between items-center bg-card/95 backdrop-blur-sm">
      <div className="flex items-center gap-6 md:gap-10">
        <a 
          href="https://mulerun.com/" 
          className="flex items-center gap-2"
          onClick={() => trackClick(ANALYTICS_EVENTS.NAV_LOGO)}
        >
          <img src={mulerunLogo} alt="MuleRun" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex gap-6">
          <a 
            href="https://mulerun.com/agent-store" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AGENT_STORE)}
          >
            AGENT STORE
          </a>
          <a 
            href="https://mulerun.com/ambassadors" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AMBASSADORS)}
          >
            AMBASSADORS
          </a>
          <a 
            href="https://mulerun.com/docs" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_DOCS)}
          >
            DOCS
          </a>
          <a 
            href="https://mulerun.com/pricing" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_PRICING)}
          >
            PRICING
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="https://form.typeform.com/to/mkqp5k3B?utm_source=website&typeform-source=mulerun.com"
          className="hidden md:inline-flex text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
          onClick={() => trackClick(ANALYTICS_EVENTS.NAV_BE_CREATOR)}
        >
          BE A CREATOR
        </a>
        <Button variant="default" className="text-xs font-bold tracking-wider" size="sm" asChild>
          <a 
            href="https://mulerun.com/signin"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_SIGN_IN)}
          >
            SIGN IN
          </a>
        </Button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border py-4 px-4 md:hidden flex flex-col gap-4">
          <a 
            href="https://mulerun.com/agent-store" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AGENT_STORE)}
          >
            AGENT STORE
          </a>
          <a 
            href="https://mulerun.com/ambassadors" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AMBASSADORS)}
          >
            AMBASSADORS
          </a>
          <a 
            href="https://mulerun.com/docs" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_DOCS)}
          >
            DOCS
          </a>
          <a 
            href="https://mulerun.com/pricing" 
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_PRICING)}
          >
            PRICING
          </a>
          <a 
            href="https://form.typeform.com/to/mkqp5k3B?utm_source=website&typeform-source=mulerun.com"
            className="text-xs font-bold text-foreground/80 hover:text-foreground transition-colors tracking-wider"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_BE_CREATOR)}
          >
            BE A CREATOR
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
