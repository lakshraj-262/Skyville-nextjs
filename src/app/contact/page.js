// contact/page.jsx (Server Component)
import ContactForm from '@/components/ContactForm'
import Section from '@/components/Section'
import Heading from '@/components/Heading'
import Faq from '@/components/design/Faq'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: "Contact Skyville Udaipur - Game Zone, Birthday Venue & More",
  description:
    "Get in touch with Skyville Udaipur! We're here to answer questions about bookings, events, school picnics, or any general queries you may have.",
  keywords:
    "Contact Skyville, Skyville Udaipur phone number, Game zone inquiry Udaipur, Skyville address, Trampoline park contact",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/contact",
    title: "Contact Us - Skyville Udaipur",
    description:
      "Have questions or need to plan an event? Contact Skyville for the best trampoline, arcade, and party zone in Udaipur.",
    images: [
      {
        url: "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
        width: 1200,
        height: 630,
        alt: "Contact Skyville - Game Zone Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Skyville Udaipur",
    description:
      "Reach out to us for bookings, general questions, or event inquiries in Udaipur.",
    images: [
      "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
    ],
  },
};

const businessHours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Saturday - Sunday', hours: '9:00 AM - 11:00 PM' },
  { day: 'Public Holidays', hours: '9:00 AM - 11:00 PM' }
]

const Contact = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="h1 flex-col text-center"
          title="Get in Touch"
          text="We'd love to hear from you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-n-8 border border-n-6 rounded-2xl p-5 hover:border-n-5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-n-6 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-color-1" />
                </div>
                <h3 className="text-xl font-semibold text-n-1">Location</h3>
              </div>
              <a
                href="https://maps.google.com/?q=Skyville+Game+Zone+Udaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-n-4 hover:text-color-1 transition-colors block text-sm"
              >
                4B, near Kidney Care Hospital, Navratna Complex, Bhuwana, Udaipur, Rajasthan 313001
              </a>
            </div>

            {/* Contact */}
            <div className="bg-n-8 border border-n-6 rounded-2xl p-6 hover:border-n-5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-n-6 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-color-1" />
                </div>
                <h3 className="text-xl font-semibold text-n-1">Contact</h3>
              </div>
              <div className="space-y-2">
                <a href="tel:+919468578138" className="text-n-4 hover:text-color-1 transition-colors block text-sm">
                  +91 9468578138
                </a>
                <a href="mailto:bounceandplay2024@gmail.com" className="text-n-4 hover:text-color-1 transition-colors block text-sm">
                  bounceandplay2024@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-n-8 border border-n-6 rounded-2xl p-6 hover:border-n-5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-n-6 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-color-1" />
                </div>
                <h3 className="text-xl font-semibold text-n-1">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-n-4 text-sm">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-3 space-y-6">
            <div className="h-[300px] rounded-2xl overflow-hidden border border-n-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.9434660507213!2d73.69760068627167!3d24.625633320746374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e51c4fa343c3%3A0x76a509bb1bd0428d!2sSkyville%20Game%20Zone!5e0!3m2!1sen!2sin!4v1736326112750!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-10 lg:pt-16 xl:pt-20">
          <Heading
            className="h1 flex-col text-center"
            title="FAQ"
            text="Everything You Need to Know About Skyville"
          />
          <Faq />
        </div>
      </div>
    </Section>
  )
}

export default Contact