"use client";


import Link from "next/link";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] flex flex-col h-full"
          >
            <h4 className="h4 font-semibold mb-4 text-center">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 text-center">
              {item.description}
            </p>

            <div className="flex items-center justify-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">{item.price === "On MRP" ? "" : "₹"}</div>
                  <div className="h2 text-[3rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            {item.priceLabel && (
              <div className="text-sm text-n-1/70 mb-4 text-center">
                {item.priceLabel}
              </div>
            )}

            <Link href="/book-now" className="mt-auto">
              <Button className="w-full mb-6">Inquiry Now</Button>
            </Link>

            <ul className="mt-auto space-y-0">
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center py-4 border-t border-n-6 first:border-t-0"
                >
                  <img src="/assets/check.svg" width={24} height={24} alt="Check" className="flex-shrink-0" />
                  <p className="body-2 ml-4 text-left flex-1">{feature}</p>
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
