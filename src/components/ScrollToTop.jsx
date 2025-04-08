"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div style={{ position: 'fixed', zIndex: 1000, bottom: '20px', right: '20px' }}>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 bg-color-1 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </motion.button>
      )}
    </div>
  )
}

export default ScrollToTop

