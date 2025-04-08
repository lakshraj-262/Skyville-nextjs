"use client";

import { useState, useCallback, useEffect } from 'react';

// Optimized hook using useCallback to prevent unnecessary re-renders
export const useIntersectionObserver = () => {
  const [loadYoutube, setLoadYoutube] = useState(false);
  const [loadPricing, setLoadPricing] = useState(false);

  // Memoize the callback to prevent unnecessary re-creations of the function
  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "youtube-section") setLoadYoutube(true);
        if (entry.target.id === "pricing-section") setLoadPricing(true);
      }
    });
  }, []); // Empty array ensures callback is not recreated on every render

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.25,
      rootMargin: '50px' // Preload a bit earlier
    });

    const sections = [
      document.getElementById("youtube-section"),
      document.getElementById("pricing-section")
    ].filter(Boolean); // Ensure sections exist before observing

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect(); // Clean up observer on unmount
  }, [observerCallback]); // Dependency on memoized callback

  return { loadYoutube, loadPricing };
};
