"use client";
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Heading from "./Heading";

const Testimonials = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Wait for the container to be available in the DOM
    if (!widgetContainerRef.current) return;


    
    // <script src="https://static.elfsight.com/platform/platform.js" async></script>
    // <div class="elfsight-app-d2030dcf-6155-42c6-95f8-6fd62434a127" data-elfsight-app-lazy></div>

    // Create script element
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    
    // Add script to the specific container instead of body
    widgetContainerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      if (widgetContainerRef.current?.contains(script)) {
        widgetContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative z-2 ">
      <div className="absolute inset-0 bg-radial-gradient from-color-1/20 via-n-8/10 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading
            title="What Our Visitors Say"
            text="Real reviews from our happy customers on Google"
            className="h1 flex-col text-center"
          />
        </motion.div>

        <div className="w-full">
          <div 
            ref={widgetContainerRef}
            className="elfsight-app-129936b6-01b0-4d05-825f-eb69cedc980b"
            data-elfsight-app-lazy
          />
          {/* <div 
            ref={widgetContainerRef}
            className="trustindex-widget"
            id="trustindex-widget-container"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
