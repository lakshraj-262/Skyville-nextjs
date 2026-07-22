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
  metadataBase: new URL('https://skyvilleudaipur.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }, 
  openGraph: {
    title: "Skyville Udaipur",
    description:
      "Fun-filled activities in Udaipur – Skyville offers trampoline park, arcade, soft play, and more!",
    url: "https://skyvilleudaipur.com",
    siteName: "Skyville Udaipur",
    locale: 'en_US',
    type: "website",
    images: [
      {
        url: "/assets/Skybounce.png",
        width: 1200,
        height: 630,
        alt: "Skyville Udaipur Game Zone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur",
    description:
      "Trampoline park, arcade games, and birthday party venue in Udaipur.",
    images: ["/assets/Skybounce.png"],
    creator: "@skyvilleudaipur",
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/Skybounce.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <NonCritical/>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
