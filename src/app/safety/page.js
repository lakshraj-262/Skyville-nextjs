import Image from 'next/image';
import Heading from '../../components/Heading';
import Section from '../../components/Section';

export const metadata = {
  title: "Safety First at Skyville Udaipur - Clean, Secure & Fun Environment",
  description:
    "Your safety is our top priority at Skyville Udaipur. Learn about our hygiene protocols, safety guidelines, and trained staff ensuring a worry-free experience.",
  keywords:
    "Skyville safety, game zone safety Udaipur, trampoline park safety, hygiene protocols, clean play area",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/safety",
    title: "Skyville Udaipur - Safety & Hygiene",
    description:
      "Discover how we maintain a safe and hygienic environment for all visitors at Skyville Udaipur.",
    images: [
      {
        url: "/assets/Skybounce.png",
        width: 1200,
        height: 630,
        alt: "Skyville Safety Measures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Safety & Hygiene",
    description:
      "Learn about Skyville's safety measures that ensure every visitor enjoys a clean and secure environment.",
    images: [
      "/assets/Skybounce.png",
    ],
  },
};


export default function SafetyPage() {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="h1 flex-col text-center"
          title="Safety Rules"
          text="Please read our safety guidelines carefully before your visit"
        />

        <div className="flex flex-col gap-10 lg:flex-row items-center justify-center">
          <img
            src="https://cdn.jsdelivr.net/gh/VipulSoniwork/skyville-assets@main/safety_rules.avif"
            alt="Safety Rules English"
            width={640}
            height={800}
            className="rounded-[2rem] w-full max-w-[40rem] h-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/VipulSoniwork/skyville-assets@main/safety_rules_hindi.avif"
            alt="Safety Rules Hindi"
            width={640}
            height={800}
            className="rounded-[2rem] w-full max-w-[40rem] h-auto"
          />
        </div>

        <Heading
          className="h1 flex-col text-center mt-12 lg:mt-20"
          title="Trampoline Rules"
          text="Techniques for safe and fun trampoline jumping"
        />

        <div className="flex gap-10 lg:flex-row items-center justify-center">
          <img
            src="https://cdn.jsdelivr.net/gh/VipulSoniwork/skyville-assets@main/4x3%20Flex.avif"
            alt="Trampoline Rules"
            width={1200}
            height={800}
            className="rounded-[2rem] w-full max-w-[50rem] lg:h-[40rem] object-fill lg:max-w-full"
          />
        </div>
      </div>
    </Section>
  );
}
