import { Calendar, MapPin, Clock, ArrowRight, Sparkles, PartyPopper } from 'lucide-react';
import Link from 'next/link';

import InfiniteSliderHover from '@/components/design/InfiniteSliderHover';
import Section from '@/components/Section';
import { eventsSection } from '@/constants';

export const metadata = {
  title: "Host Your Events at Skyville Udaipur - Birthdays, School Picnics & More",
  description:
    "Celebrate birthdays, host school picnics, or plan kitty parties at Skyville Udaipur! Our vibrant game zone is the perfect venue for memorable events.",
  keywords:
    "Birthday party Udaipur, School picnic venue, Kids party Udaipur, Skyville events, Game zone party venue",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/events",
    title: "Events at Skyville - Game Zone Udaipur",
    description:
      "Host amazing events at Skyville Udaipur — trampoline parties, arcade fun, school events, and more!",
    images: [
      {
        url: "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
        width: 1200,
        height: 630,
        alt: "Skyville Events - Game Zone in Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur Events",
    description:
      "Make your events unforgettable with Skyville — the ultimate game zone and party place in Udaipur.",
    images: [
      "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
    ],
  },
};


const EventsPage = () => {

  return (
    <Section>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-auto">
        <div className="absolute inset-0">
          <div className="floating absolute top-20 left-10 w-32 h-32 bg-color-1 rounded-full blur-[80px] opacity-20"></div>
          <div className="floating-reverse absolute top-40 right-20 w-40 h-40 bg-color-2 rounded-full blur-[100px] opacity-20"></div>
          <div className="floating absolute bottom-20 left-1/2 w-48 h-48 bg-color-3 rounded-full blur-[120px] opacity-10"></div>
        </div>

        <div className="relative px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-color-1"></div>
            <PartyPopper className="w-8 h-8 text-color-1" />
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-color-1"></div>
          </div>

          <div className="flex flex-col items-center mb-12 lg:mb-20 text-center">
            <h2 className="h1 bg-gradient-to-r from-color-1 via-color-2 to-color-3 text-transparent bg-clip-text">
              SKYVILLE EVENTS
            </h2>
            <p className="body-2 mt-4 text-n-2 mb-8">
              Welcome to SKYVILLE, where every moment turns into a treasured memory! Whether you're hosting a birthday party, corporate event, or family gathering, we offer exceptional party hosting services to make it unforgettable.
            </p>
            <Link href="/book-now">
              <button className="px-8 py-4 bg-gradient-to-r from-color-1 to-[#9955FF] rounded-xl text-white font-medium 
                transition-all transform lg:hover:scale-105 lg:hover:shadow-lg lg:hover:shadow-color-1/20 flex items-center gap-2 mx-auto">
                Start Planning Your Event
                <Sparkles className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Events Section */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
          <div className="grid gap-12">
            {eventsSection.map((event, index) => (
              <div key={event.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 perspective-container">
                  <div className="relative rounded-2xl overflow-hidden card-3d">
                    <div className="w-[28rem] sm:w-[35rem] lg:w-[40rem]">
                      <InfiniteSliderHover reverse={event.reverse} images={event.images} />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                  <p className="text-n-2 leading-relaxed">{event.description}</p>

                  <Link href="/book-now">
                    <button
                      className="px-6 body-1 py-3 bg-n-6 lg:hover:bg-n-5 text-white rounded-xl 
      transition-all transform lg:hover:scale-105 flex items-center gap-2 group"
                    >
                      Inquiry
                      <ArrowRight className="w-5 h-5 transform lg:group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventsPage;
