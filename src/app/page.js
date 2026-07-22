import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { BackgroundImage } from '@/components/design/Hero';
import ClientLogicWrapper from '@/components/ClientLogicWrapper';
import Benefits from '@/components/Benefits';
import HostEvents from '@/components/HostEvents';
// Lazy load only the heavy Testimonials component
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <p className="text-center py-10">Loading testimonials...</p>,
});

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
        url: "/assets/Skybounce.png",
        width: 1200,
        height: 630,
        alt: "Skyville Udaipur Game Zone Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur",
    description: "Your premier destination for events, experiences, and more in Udaipur.",
    images: [
      "/assets/Skybounce.png",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <BackgroundImage />

      <Section className="overflow-hidden md:overflow-visible" customPaddings="py-10 lg:pt-16 xl:pt-20">
        <Hero />
      </Section>

      <Section customPaddings="overflow-hidden pt-20 pb-10 lg:pb-16 xl:pb-20">
        <Benefits />
      </Section>

      <Section className="overflow-hidden md:overflow-visible" customPaddings="py-10 lg:py-16 xl:py-20">
        <HostEvents />
      </Section>

      <Section>
        <Testimonials />
      </Section>

      <ClientLogicWrapper />
    </>
  );
}
