import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// screen scrolls back to the top/resets when clicking
// on any links in navbar

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;