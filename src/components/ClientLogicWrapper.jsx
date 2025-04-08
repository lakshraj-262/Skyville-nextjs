'use client';

// import { useEffect } from 'react';
import { useIntersectionObserver } from '@/components/optimize/useIntersectionObserver';
import { useSmoothScroll } from '@/components/optimize/useSmoothScroll';
import Loading from '@/components/Loading';
import Pricing from '@/components/Pricing';
import Youtube from '@/components/Youtube';
import Section from '@/components/Section';

export default function ClientLogicWrapper() {
    useSmoothScroll();
    const { loadYoutube, loadPricing } = useIntersectionObserver();
  
    return (
      <>
        <Section id="pricing-section" className="min-h-[400px] flex items-center justify-center overflow-hidden">
          {loadPricing ? <Pricing /> : <Loading />}
        </Section>
  
        <Section id="youtube-section" className="min-h-[300px] flex items-center justify-center">
          {loadYoutube ? <Youtube /> : <Loading />}
        </Section>
      </>
    );
}
