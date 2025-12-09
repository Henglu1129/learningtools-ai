import { trackClick, ANALYTICS_EVENTS } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <p className="text-white/80 text-sm md:text-base font-medium tracking-wide mb-8">
          MULE.RUN@2025
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a 
            href="https://discord.gg/KK3zXcMkhg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_DISCORD)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/></svg>
          </a>
          <a 
            href="https://x.com/mulerun_ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_TWITTER)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M17.9309 2.53467H21.0935L14.1841 10.4317L22.3125 21.1778H15.948L10.9632 14.6603L5.25933 21.1778H2.09478L9.48509 12.731L1.6875 2.53467H8.21354L12.7194 8.49185L17.9309 2.53467ZM16.8209 19.2848H18.5734L7.26131 4.32823H5.38074L16.8209 19.2848Z"/></svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/mulerun" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_LINKEDIN)}
          >
            <svg className="w-5 h-5" viewBox="0 0 23 23" fill="white"><path d="M20.8345 0H1.66113C0.742676 0 0 0.725098 0 1.62158V20.874C0 21.7705 0.742676 22.5 1.66113 22.5H20.8345C21.7529 22.5 22.5 21.7705 22.5 20.8784V1.62158C22.5 0.725098 21.7529 0 20.8345 0ZM6.67529 19.1733H3.33545V8.4331H6.67529V19.1733ZM5.00537 6.96973C3.93311 6.96973 3.06738 6.104 3.06738 5.03613C3.06738 3.96826 3.93311 3.10254 5.00537 3.10254C6.07324 3.10254 6.93896 3.96826 6.93896 5.03613C6.93896 6.09961 6.07324 6.96973 5.00537 6.96973ZM19.1733 19.1733H15.8379V13.9526C15.8379 12.709 15.8159 11.105 14.1021 11.105C12.3662 11.105 12.1025 12.4629 12.1025 13.8647V19.1733H8.77149V8.4331H11.9707V9.90088H12.0146C12.4585 9.05713 13.5483 8.16504 15.1699 8.16504C18.5493 8.16504 19.1733 10.3887 19.1733 13.2803V19.1733Z"/></svg>
          </a>
          <a 
            href="https://www.youtube.com/@MuleRunofficial" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_YOUTUBE)}
          >
            <svg className="w-5 h-5" viewBox="0 0 36 36" fill="white"><path d="M29.0259 13.5C29.0259 13.5 28.8062 11.9487 28.1294 11.2676C27.2725 10.3711 26.3145 10.3667 25.875 10.314C22.7285 10.0854 18.0044 10.0854 18.0044 10.0854H17.9956C17.9956 10.0854 13.2715 10.0854 10.125 10.314C9.68555 10.3667 8.72754 10.3711 7.87061 11.2676C7.19385 11.9487 6.97852 13.5 6.97852 13.5C6.97852 13.5 6.75 15.3238 6.75 17.1432V18.8482C6.75 20.6676 6.97412 22.4912 6.97412 22.4912C6.97412 22.4912 7.19385 24.0425 7.86621 24.7236C8.72314 25.6201 9.84814 25.5895 10.3491 25.6861C12.1509 25.8575 18 25.9102 18 25.9102C18 25.9102 22.7285 25.9014 25.875 25.6772C26.3145 25.6245 27.2725 25.6201 28.1294 24.7236C28.8062 24.0425 29.0259 22.4912 29.0259 22.4912C29.0259 22.4912 29.25 20.672 29.25 18.8482V17.1432C29.25 15.3238 29.0259 13.5 29.0259 13.5ZM15.6753 20.918V14.5942L21.7529 17.7671L15.6753 20.918Z"/></svg>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center items-center gap-8">
          <a 
            href="https://mulerun.com/docs/legal/user-terms-of-use" 
            className="text-white/70 text-sm underline hover:text-white transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_TERMS)}
          >
            Terms
          </a>
          <a 
            href="https://mulerun.com/docs/legal/user-privacy-policy" 
            className="text-white/70 text-sm underline hover:text-white transition-colors"
            onClick={() => trackClick(ANALYTICS_EVENTS.FOOTER_PRIVACY)}
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;