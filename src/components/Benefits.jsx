"use client";

import Image from "next/image";
import { benefits } from "../constants";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <div className="container relative z-2">
      <Heading
        className="md:max-w-md lg:max-w-2xl h1"
        title="Fun for Everyone!"
      />

      <div className="flex flex-wrap gap-10 mb-10 justify-center">
        {benefits.map((item) => (
          <div
            className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[20rem] md:max-w-[24rem] bg-benefit-card-${item.id}`}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[12rem] md:min-h-[20rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
              <div className="flex items-center mt-auto">
                <Image
                  src={item.iconUrl}
                  width={48}
                  height={48}
                  alt={item.title}
                />
              </div>
            </div>

            {item.light && <GradientLight />}

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-15 hidden lg:block">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <ClipPath />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
