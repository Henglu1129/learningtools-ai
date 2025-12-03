import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-7xl md:text-9xl lg:text-[180px] leading-none tracking-tighter">
            Mule<span className="text-highlight">R</span>un
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-mono text-sm">
            THE FUTURE OF CONTENT CREATION
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {[Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-highlight hover:text-highlight-foreground transition-colors"
            >
              <Icon className="w-5 h-5 text-primary" />
            </a>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Mule Run. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
