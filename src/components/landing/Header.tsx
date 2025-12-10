import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import mulerunLogo from "@/assets/mulerun-logo.png";
import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-[120px] py-4 h-20 bg-background border-b border-border/20">
      <div className="flex items-center gap-4 md:gap-11">
        <a 
          href="https://mulerun.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-stone-800 rounded-sm py-1 pr-2 pl-0.5 h-10 hover:opacity-90 transition-opacity"
          onClick={() => trackClick(ANALYTICS_EVENTS.NAV_LOGO)}
        >
          <div className="w-9 h-9 bg-card rounded-sm border border-border/10 flex items-center justify-center overflow-hidden">
            <img src={mulerunLogo} alt="MuleRun" className="w-7 h-7 object-contain" />
          </div>
          <span className="font-body font-bold text-lg text-white">MuleRun</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          <a 
            href="https://mulerun.com/agent-store" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AGENT_STORE)}
          >
            Agent Store
          </a>
          <a 
            href="https://mulerun.com/ambassadors" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AMBASSADORS)}
          >
            Ambassadors
          </a>
          <a 
            href="https://mulerun.com/docs" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_DOCS)}
          >
            DOCS
          </a>
          <a 
            href="https://mulerun.com/pricing" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_PRICING)}
          >
            PRICING
          </a>
        </nav>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <a 
          href="https://form.typeform.com/to/mkqp5k3B?utm_source=website"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => trackClick(ANALYTICS_EVENTS.NAV_BE_CREATOR)}
        >
          BE A CREATOR
        </a>
        <a 
          href="https://mulerun.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-mono font-bold text-sm uppercase tracking-tight hover:bg-primary/90 transition-colors"
          onClick={() => trackClick(ANALYTICS_EVENTS.NAV_SIGN_IN)}
        >
          Sign Up
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border/20 py-4 px-4 lg:hidden flex flex-col gap-4">
          <a 
            href="https://mulerun.com/agent-store" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AGENT_STORE)}
          >
            Agent Store
          </a>
          <a 
            href="https://mulerun.com/ambassadors" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_AMBASSADORS)}
          >
            Ambassadors
          </a>
          <a 
            href="https://mulerun.com/docs" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_DOCS)}
          >
            DOCS
          </a>
          <a 
            href="https://mulerun.com/pricing" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_PRICING)}
          >
            PRICING
          </a>
          <a 
            href="https://form.typeform.com/to/mkqp5k3B?utm_source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_BE_CREATOR)}
          >
            BE A CREATOR
          </a>
          <a 
            href="https://mulerun.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-mono font-bold text-sm uppercase tracking-tight hover:bg-primary/90 transition-colors w-fit"
            onClick={() => trackClick(ANALYTICS_EVENTS.NAV_SIGN_IN)}
          >
            Sign Up
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
