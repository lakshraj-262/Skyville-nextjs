"use client";

import React from "react";
import Link from "next/link";


import { socials } from "../constants";
import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="sticky !px-0 !py-10 font-poppins">
      <div className="w-full h-[1px] bg-stroke-1 mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col items-center justify-center mb-8 md:flex-none md:items-start md:justify-start md:mb-0">
            <Link href="/" className="inline-block mb-2">
              <img src="/assets/Skybounce.png" width={150} height={40} alt="Skyville Udaipur Logo" />
            </Link>
            <p className="text-sm text-gray-400 mt-2 mb-4">
              Where fun meets adventure!
            </p>
            <div className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-colors hover:bg-gray-700"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="hover:text-purple-400 transition-colors">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-purple-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="hover:text-purple-400 transition-colors">
                  INQUIRY NOW
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="hover:text-purple-400 transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-1">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-color-1" />
                <div>
                  <strong>Address: </strong>
                  <a
                    href="https://maps.google.com/?q=Skyville+Game+Zone+Udaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-n-4 hover:text-color-1 transition-colors text-sm"
                  >
                    4B, near Kidney Care Hospital, Navratna Complex, Bhuwana, Udaipur, Rajasthan 313001
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-color-1" />
                <div>
                  <strong>Email: </strong>
                  <a
                    href="mailto:bounceandplay2024@gmail.com"
                    className="text-n-4 hover:text-color-1 transition-colors text-sm"
                  >
                    bounceandplay2024@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-color-1" />
                <div>
                  <strong>Phone: </strong>
                  <a
                    href="tel:+919468578138"
                    className="text-n-4 hover:text-color-1 transition-colors text-sm"
                  >
                    +91 9468578138
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Skyville Udaipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
