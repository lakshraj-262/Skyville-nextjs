import Image from 'next/image';
import Heading from '../../components/Heading';
import Section from '../../components/Section';
import SafetyModal from '../../components/SafetyModal';

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

const visitSteps = [
  {
    title: "Before You Enter",
    description:
      "Wear comfortable clothes, listen to the briefing, and ask our team if you have any medical concerns or activity-related questions.",
  },
  {
    title: "While You Play",
    description:
      "Follow staff instructions, use equipment carefully, take turns where needed, and stay within your comfort level at all times.",
  },
  {
    title: "Need Help?",
    description:
      "Pause immediately and inform our staff if you feel tired, uncomfortable, or unsure about any rule, jump, or movement.",
  },
];

const safetyImages = [
  {
    title: "English Safety Rules",
    src: "/assets/safety/Safety_Rules_English.png",
    alt: "Skyville safety rules in English",
    width: 1448,
    height: 1086,
  },
  {
    title: "Hindi Safety Rules",
    src: "/assets/safety/Safety_Rules_Hindi.jpeg",
    alt: "Skyville safety rules in Hindi",
    width: 1536,
    height: 1024,
  },
];

const trampolineImages = [
  {
    title: "English Trampoline Rules",
    src: "/assets/safety/Rules_Protocols_English.png",
    alt: "Skyville trampoline rules and protocols in English",
    width: 1085,
    height: 1450,
  },
  {
    title: "Hindi Trampoline Rules",
    src: "/assets/safety/Rules_Protocols_Hindi.png",
    alt: "Skyville trampoline rules and protocols in Hindi",
    width: 1774,
    height: 887,
  },
];


export default function SafetyPage() {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="h1 flex-col text-center"
          title="Safety Guide"
          text="A quick, clear guide to help every guest enjoy Skyville safely, confidently, and comfortably."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-n-6 bg-n-8 p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-1">
              Safety First
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-n-1 lg:text-5xl">
              Know the rules before the fun begins.
            </h2>
            <p className="body-2 mt-5 text-n-3">
              Our team is here to make every visit exciting and well-managed.
              Please review the rule boards below before entering any play area,
              especially the trampoline zone. These instructions help reduce
              injuries, improve flow, and make the experience better for
              children, parents, and groups.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {visitSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[1.5rem] border border-n-6 bg-n-7/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-n-1">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-n-3">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-n-6 bg-gradient-to-br from-n-8 via-n-7 to-n-8 p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-1">
              Best Experience Tips
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-n-2">
              <li>Read the English or Hindi board that is easiest for your group.</li>
              <li>Children should be supervised and guided toward age-appropriate activities.</li>
              <li>Remove loose items before active play to avoid distraction or accidents.</li>
              <li>Use the trampoline area only after understanding the posted rules and staff instructions.</li>
              <li>When in doubt, ask our team before attempting a jump, movement, or activity.</li>
            </ul>
          </div>
        </div>

        <Heading
          className="h1 flex-col text-center mt-12 lg:mt-20"
          title="Safety Rules"
          text="Choose the language you prefer and review the complete general safety instructions before starting."
        />

        <SafetyModal images={safetyImages} />

        <Heading
          className="h1 flex-col text-center mt-12 lg:mt-20"
          title="Trampoline Rules"
          text="These boards explain the key trampoline protocols, how to behave on the court, and when to pause or ask for assistance."
        />

        <SafetyModal images={trampolineImages} />

        <div className="mt-12 rounded-[2rem] border border-color-1/30 bg-color-1/10 p-6 lg:mt-16 lg:p-8">
          <h3 className="text-2xl font-semibold text-n-1">
            Important Reminder for All Guests
          </h3>
          <p className="body-2 mt-4 max-w-4xl text-n-2">
            Safety instructions are part of the experience, not just a notice on
            the wall. Please follow the displayed rules, respect staff guidance,
            and take breaks whenever needed. A little caution goes a long way in
            making the visit fun for everyone.
          </p>
        </div>
      </div>
    </Section>
  );
}
