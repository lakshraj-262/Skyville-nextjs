import dynamic from 'next/dynamic';
import { memo} from 'react';

import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BackgroundImage } from '@/components/design/Hero';
import Loading from '@/components/Loading';

import ClientLogicWrapper from '@/components/ClientLogicWrapper';

export const metadata = {
  title: "Best Game Zone in Udaipur - Trampoline Park, Arcade Games, Bowling, Birthday Parties & More!",
  description:
    "Looking for fun activities in Udaipur? Visit our Game Zone, featuring a trampoline park, soft play area, arcade games, bowling, and options for birthday parties, school picnics, and kitty parties!",
  keywords:
    "Game zone Udaipur, Game zone, trampoline park, soft play area, arcade games, bowling, birthday parties, school picnics, kitty party, Best place for kids, Amusement Park",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/",
    title: "The Ultimate Game Zone in Udaipur - Trampoline Park, Arcade Games & More",
    description:
      "Visit our Game Zone in Udaipur for a trampoline park, arcade games, bowling, birthday parties, school picnics, and kitty parties! Fun for all ages.",
    images: [
      {
        url: "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
        width: 1200,
        height: 630,
        alt: "Skyville Udaipur Game Zone Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur",
    description:
      "Your premier destination for events, experiences, and more in Udaipur.",
    images: [
      "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
    ],
  },
};



// Lazy load components with dynamic import
const Benefits = dynamic(() => import('@/components/Benefits'), {
  loading: () => <Loading />,
});
const HostEvents = dynamic(() => import('@/components/HostEvents'), {
  loading: () => <Loading />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <Loading />,
});
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <Loading />,
});
const Youtube = dynamic(() => import('@/components/Youtube'), {
  loading: () => <Loading />,
});

// Memoized components
const MemoizedHero = memo(Hero);
const MemoizedBackgroundImage = memo(BackgroundImage);

export default function HomePage() {

  return (
    <>
      <MemoizedBackgroundImage />

      <Section className="overflow-hidden md:overflow-visible" customPaddings="py-10 lg:pt-16 xl:pt-20">
        <MemoizedHero />
      </Section>

      <Section customPaddings="overflow-hidden pt-20 pb-10 lg:pb-16 xl:pb-20">
        <Benefits />
      </Section>

      <Section className="overflow-hidden md:overflow-visible" customPaddings="py-10 lg:py-16 xl:py-20">
        <HostEvents />
      </Section>

      {/* Uncomment when needed */}
      <Section>
        <Testimonials />
      </Section>
      <ClientLogicWrapper/>
      {/* <Section
        id="pricing-section"
        className="min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        {loadPricing ? <Pricing /> : <Loading />}
      </Section>

      <Section
        id="youtube-section"
        className="min-h-[300px] flex items-center justify-center"
      >
        {loadYoutube ? <Youtube /> : <Loading />}
      </Section> */}
    </>
  );
}
