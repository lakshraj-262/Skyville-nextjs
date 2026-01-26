"use client";


import Link from "next/link";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "@/public/assets/index"; // or use public/check.png with /check.png

const PricingList = () => {
  return (
    <div>
      <div className="flex gap-[1rem] max-md:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[19rem] lg:w-[28rem] px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 font-semibold mb-4">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">₹</div>
                  <div className="h2 text-[3rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Link href="/book-now">
              <Button className="w-full mb-6">Inquiry Now</Button>
            </Link>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
