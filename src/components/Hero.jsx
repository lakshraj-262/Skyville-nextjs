"use client";
import { curve } from "../assets";
import { BackgroundCircles } from "./design/Hero";
import SubmitBtn from "./design/SubmitBtn";
import VideoPreview from "./VideoPreview";
import { projects } from "../constants";
import { useRef } from 'react';
import Card from "./Card";
import Image from "next/image";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <div className="relative">
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-2 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-10 lg:mb-[3rem]">
                    <h1 className="h1 mt-3 md:mb-16 mb-12  ">
                        Dive Into one of the Premier {` `}
                        <span className="inline-block relative uppercase">
                            Game Zone in Udaipur!{" "}
                            <Image
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-10 text-n-2 lg:mb-8">
                        Enjoy Our Trampoline Park, Soft Play Area, and Arcade Games
                    </p>

                    <div className="body-1 hidden md:flex items-center justify-center p-4 my-20">
                        <VideoPreview videoUrl="https://www.youtube.com/watch?v=hN3qFc1Uu2Ya" />
                    </div>
                    <div className="absolute z-10 lg:-bottom-32 left-0 right-0 font-medium body-1 flex items-center justify-center  ">
                        <SubmitBtn name="Inquiry Now" url="/book-now" />
                    </div>
                </div>

                <div className="z-1 relative max-w-[23rem] mx-auto md:max-w-5xl  ">
                    <BackgroundCircles />
                </div>
            </div>


            {/* Cards - Hidden on mobile, visible from md breakpoint up */}
            <div className="flex-col mt-[15rem] w-3/5 mx-auto hidden lg:block ">
                {projects.map((project, i) => (
                    <div
                        className="relative z-10"
                        key={`p_${i}`}
                        style={{
                            position: 'sticky',
                            top: `calc(8rem + ${i * 2}rem)`,
                        }}
                    >
                        <Card {...project} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Hero;