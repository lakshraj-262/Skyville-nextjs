import Heading from "./Heading";
import {
  Gradient,
} from "./design/Services";
import TiltCard from "./design/TiltCard";
import { eventTypes } from "../constants";

const HostEvents = () => {
  return (
      <div className="container ">
        <Heading
          className="h1 flex-col text-center"
          title="Host Unforgettable Events at Skyville"
        />

        <div className="relative">
          {/* Event types */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-4 ">
            {eventTypes.map((event, index) => (
              <div key={index}>
                <div className="">
                  <TiltCard
                    title={event.name}
                    description={event.description}
                    image={event.image}
                    // className="aspect-square object-cover h-full w-full"
                    // className="aspect-square object-contain w-full"
                    alt={event.alt}
                  />
                </div>
              </div>
            ))}
            {/* Custom packages */}
            <div
              className=" border-zinc-50/10 bg-gradient-to-b from-n-8/0 to-n-8/90 md:col-span-4 bg-color-5 p-6 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Custom Event Packages</h3>
              <p className="mb-4">
                Tailor your event to perfection with our customizable packages. Our expert team will help you create an unforgettable experience.
              </p>
                <button
                  className="bg-white text-color-1 px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out transform lg:hover:bg-color-1 lg:hover:text-white lg:hover:scale-105"
                  onClick={() => window.open('https://wa.me/9468578138', '_blank')}
                >
                  Contact Us
                </button>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
  );
};

export default HostEvents;