import Heading from '@/components/Heading'
import Section from '@/components/Section'
import CustomForm from '@/components/CustomForm'

export const metadata = {
  title: "Book Your Experience at Skyville Udaipur - Trampoline, Arcade & More",
  description:
    "Secure your spot at Skyville Udaipur today! Book trampoline sessions, arcade game passes, birthday parties, or school trips easily through our online form.",
  keywords:
    "Book Skyville Udaipur, Game Zone Booking, Trampoline Booking Udaipur, Birthday Party Booking, Arcade Game Reservation, School Picnic Venue Udaipur",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/book-now",
    title: "Book Now - Skyville Udaipur",
    description:
      "Easily book your experience at Skyville – Udaipur’s top game zone for parties, arcade fun, and trampoline sessions.",
    images: [
      {
        url: "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
        width: 1200,
        height: 630,
        alt: "Book Now Banner - Skyville Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Now - Skyville Udaipur",
    description:
      "Reserve your time at Skyville Udaipur – the best place for fun-filled activities in the city.",
    images: [
      "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
    ],
  },
};


const BookNow = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="h1 flex-col text-center"
          title="Book Your Adventure"
          text="Select your preferred activities and time slot"
        />

        <div className="opacity-0 animate-fadeIn transition-all duration-500 delay-200 max-w-4xl mx-auto mt-6 md:mt-10">
          <div className="md:bg-n-8 md:border md:border-n-6 md:p-8 md:rounded-2xl relative">
            <CustomForm />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BookNow