
import { Spotlight } from '@/components/ui/spotlight';
import { Tilt } from '@/components/ui/tilt';
import { useState, useEffect } from 'react';
import Image from 'next/image';
function TiltCard({ className, image, title, description, alt }) {
  const [isDesktop, setIsDesktop] = useState(true); // Default to true to avoid hydration issues

  useEffect(() => {
    // Check if the device is mobile using window.innerWidth
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px is typical tablet/mobile breakpoint
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Basic card content without effects
  const CardContent = () => (
    <div className='flex-col overflow-hidden rounded-xl bg-gradient-to-b from-n-8/0 to-n-8/90'>
      <Image
        src={image}
        alt={alt}
        className={`${className} rounded-lg object-cover lg:grayscale duration-700 lg:group-hover:grayscale-0`}
      />
      <div className="p-2">
        <h4 className="body-1 py-1 font-semibold">{title}</h4>
        <p className="body-2 py-1 text-n-3">
          {description}
        </p>
      </div>
    </div>
  );

  // If not desktop, return basic card without effects
  if (!isDesktop) {
    return (
      <div className='aspect-square max-w-sm mx-auto group'>
      {/* <div className="aspect-video max-w-sm mx-auto relative z-10 overflow-hidden"> */}
        <CardContent />
      </div>
    );
  }

  // Return card with tilt and spotlight effects for desktop
  return (
    <div className='aspect-video max-w-sm mx-auto'>
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
        className='group relative rounded-lg'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <CardContent />
      </Tilt>
    </div>
  );
}

export default TiltCard;
