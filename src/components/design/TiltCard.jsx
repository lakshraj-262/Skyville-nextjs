"use client";

import { Spotlight } from '@/components/ui/spotlight';
import { Tilt } from '@/components/ui/tilt';
import { useState, useEffect } from 'react';
import Image from 'next/image';
function TiltCard({ className, image, title, description, alt }) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const CardContent = ({ includeSpotlight = false }) => (
    <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-n-8/0 to-n-8/90 overflow-hidden">
      {includeSpotlight && (
        <Spotlight
          className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
      )}
      <div className="aspect-square w-full relative">
        <Image
          src={image}
          alt={alt}
          className={`${className} w-full h-full object-cover rounded-t-lg lg:grayscale duration-700 lg:group-hover:grayscale-0`}
          width={200}
          height={200}
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-n-3">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-sm mx-auto md:max-w-none">
      {isLargeScreen ? (
        <Tilt
          rotationFactor={6}
          isRevese
          style={{
            transformOrigin: 'center center',
          }}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          className="group relative rounded-lg"
        >
          <CardContent includeSpotlight={true} />
        </Tilt>
      ) : (
        <div className="group">
          <CardContent includeSpotlight={false} />
        </div>
      )}
    </div>
  );
}

export default TiltCard;