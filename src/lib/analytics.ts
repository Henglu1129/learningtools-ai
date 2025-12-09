// Analytics tracking utility for all link clicks
export const trackClick = (eventName: string, properties?: Record<string, string>) => {
  // Log to console for debugging
  console.log(`[Analytics] ${eventName}`, properties);
  
  // If Google Analytics is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
  
  // If other analytics tools are available (Mixpanel, Amplitude, etc.)
  if (typeof window !== 'undefined' && (window as any).analytics) {
    (window as any).analytics.track(eventName, properties);
  }
};

// Predefined event names
export const ANALYTICS_EVENTS = {
  // Navigation
  NAV_AGENT_STORE: 'nav_click_agent_store',
  NAV_AMBASSADORS: 'nav_click_ambassadors',
  NAV_DOCS: 'nav_click_docs',
  NAV_PRICING: 'nav_click_pricing',
  NAV_BE_CREATOR: 'nav_click_be_creator',
  NAV_SIGN_IN: 'nav_click_sign_in',
  NAV_LOGO: 'nav_click_logo',
  
  // Hero
  HERO_START_FREE: 'hero_click_start_free',
  
  // Hero Carousel
  CAROUSEL_SLIDE_1: 'carousel_click_slide_1',
  CAROUSEL_SLIDE_2: 'carousel_click_slide_2',
  CAROUSEL_SLIDE_3: 'carousel_click_slide_3',
  
  // Content Showcase
  SHOWCASE_PAPER: 'showcase_click_paper',
  SHOWCASE_EXPLAIN: 'showcase_click_explain',
  SHOWCASE_YOUTUBE: 'showcase_click_youtube',
  
  // Features
  FEATURE_BROWSER: 'feature_click_browser',
  FEATURE_KNOWLEDGE: 'feature_click_knowledge',
  FEATURE_MINDMAP: 'feature_click_mindmap',
  FEATURE_SMARTQ: 'feature_click_smartq',
  AGENT_PAPER: 'agent_click_paper',
  AGENT_YOUTUBE: 'agent_click_youtube',
  AGENT_EXPLAIN: 'agent_click_explain',
  
  // Reasons
  REASONS_PRICING: 'reasons_click_pricing',
  REASONS_SIGNUP: 'reasons_click_signup',
  
  // Footer
  FOOTER_DISCORD: 'footer_click_discord',
  FOOTER_TWITTER: 'footer_click_twitter',
  FOOTER_LINKEDIN: 'footer_click_linkedin',
  FOOTER_YOUTUBE: 'footer_click_youtube',
  FOOTER_TERMS: 'footer_click_terms',
  FOOTER_PRIVACY: 'footer_click_privacy',
};
