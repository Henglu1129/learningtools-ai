import { Button } from "@/components/ui/button";
import mulerunLogo from "@/assets/mulerun-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center bg-card">
      <div className="flex items-center gap-8 md:gap-10">
        <a href="https://mulerun.com/" className="flex items-center gap-2">
          <img src={mulerunLogo} alt="MuleRun" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex gap-6">
          <a href="https://mulerun.com/agent-store" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            AGENT STORE
          </a>
          <a href="https://mulerun.com/ambassadors" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            AMBASSADORS
          </a>
          <a href="https://mulerun.com/docs" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            DOCS
          </a>
          <a href="https://mulerun.com/pricing" className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors">
            PRICING
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="https://form.typeform.com/to/mkqp5k3B?utm_source=website&typeform-source=mulerun.com"
          className="hidden md:inline-flex font-mono text-sm font-bold text-foreground/80 hover:text-foreground transition-colors"
        >
          BE A CREATOR
        </a>
        <Button variant="default" className="font-mono text-sm" asChild>
          <a href="https://mulerun.com/signin">SIGN IN</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
