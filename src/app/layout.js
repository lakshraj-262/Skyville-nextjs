import "./globals.css";
import NonCritical from "@/components/NonCritical";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export const metadata = {
  title: "Skyville Udaipur - Game Zone & Trampoline Park",
  description:
    "Visit Skyville in Udaipur – Your go-to destination for trampoline park, arcade games, bowling, and birthday parties!",
  openGraph: {
    title: "Skyville Udaipur",
    description:
      "Fun-filled activities in Udaipur – Skyville offers trampoline park, arcade, soft play, and more!",
    url: "https://skyvilleudaipur.com",
    siteName: "Skyville Udaipur",
    images: [
      {
        url: "https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png",
        width: 1200,
        height: 630,
        alt: "Skyville Udaipur Game Zone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur",
    description:
      "Trampoline park, arcade games, and birthday party venue in Udaipur.",
    images: ["https://res.cloudinary.com/dg0kso6zc/image/upload/v1737452070/Untitled_design_1_dnicgn.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <NonCritical />
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
