import Image from 'next/image';
import Heading from '../../components/Heading';
import Section from '../../components/Section';

export const metadata = {
  title: "Affordable Pricing at Skyville Udaipur - Game Zone, Trampoline Park & More",
  description:
    "Check out our pricing for trampoline park access, arcade games, bowling, and event bookings. Skyville Udaipur offers affordable fun for everyone!",
  keywords:
    "Skyville pricing, Game zone rates, Udaipur trampoline park price, arcade cost, birthday party packages",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/pricing",
    title: "Skyville Udaipur Pricing - Trampoline & Arcade Rates",
    description:
      "Explore our pricing for games, birthday packages, school picnics, and more at Skyville Udaipur.",
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Skyville Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur Pricing",
    description:
      "Find the best value for fun at Skyville with our transparent and budget-friendly pricing.",
    images: [
      "/assets/logo.svg",
    ],
  },
};


export default function PricingPage() {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="h1 flex-col text-center"
          title="Choose Your Adventure"
          text="Find the perfect package for your play style"
        />

        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <img
            src="https://cdn.jsdelivr.net/gh/VipulSoniwork/skyville-assets@main/Price.avif"
            alt="Pricing Hero"
            width={900}
            height={600}
            className="w-full h-auto rounded-[2rem] shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
