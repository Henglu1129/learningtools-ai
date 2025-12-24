import { useState, useEffect } from "react";

// Check if user is logged in to mulerun by checking cookies
export const useMulerunAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for common authentication cookies that mulerun might use
    const cookies = document.cookie;
    
    // Common auth cookie patterns - adjust based on actual mulerun cookie names
    const authCookiePatterns = [
      'mulerun_session',
      'mulerun_auth',
      'mulerun_token',
      'session_token',
      'auth_token',
      'access_token',
      'supabase-auth-token',
      'sb-',
    ];
    
    const hasAuthCookie = authCookiePatterns.some(pattern => 
      cookies.toLowerCase().includes(pattern.toLowerCase())
    );
    
    setIsLoggedIn(hasAuthCookie);
  }, []);

  return isLoggedIn;
};
