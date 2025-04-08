'use client';;
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = 'self',
  springOptions = SPRING_CONFIG
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Skip effect for mobile devices

    const calculateDistance = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (isHovered && absoluteDistance <= range) {
          const scale = 1 - absoluteDistance / range;
          x.set(distanceX * intensity * scale);
          y.set(distanceY * intensity * scale);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener('mousemove', calculateDistance);

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
    };
  }, [ref, isHovered, intensity, range, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return; // Skip effect for mobile devices

    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement;

      const handleParentEnter = () => setIsHovered(true);
      const handleParentLeave = () => setIsHovered(false);

      parent.addEventListener('mouseenter', handleParentEnter);
      parent.addEventListener('mouseleave', handleParentLeave);

      return () => {
        parent.removeEventListener('mouseenter', handleParentEnter);
        parent.removeEventListener('mouseleave', handleParentLeave);
      };
    } else if (actionArea === 'global') {
      setIsHovered(true);
    }
  }, [actionArea, isDesktop]);

  const handleMouseEnter = () => {
    if (isDesktop && actionArea === 'self') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop && actionArea === 'self') {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  // If not desktop, return children without magnetic effect
  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={actionArea === 'self' ? handleMouseEnter : undefined}
      onMouseLeave={actionArea === 'self' ? handleMouseLeave : undefined}
      style={{
        x: springX,
        y: springY,
      }}>
      {children}
    </motion.div>
  );
}
