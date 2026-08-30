'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Clock3,
  Coffee,
  MapPin,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
  FileText,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  BookOpen,
  ChefHat,
  Star,
  Menu as MenuIcon,
} from "lucide-react";

import Section from "@/components/Section";

const highlights = [
  {
    title: "Comfortable Family Dining",
    description:
      "A relaxed space for parents, kids, and groups to unwind between activities or stay back for a complete outing.",
    icon: Coffee,
  },
  {
    title: "Freshly Served Favorites",
    description:
      "From comforting mains to quick bites, Flavours by Skyville is designed for both hungry players and casual diners.",
    icon: UtensilsCrossed,
  },
  {
    title: "Great for Celebrations",
    description:
      "Pair your parties and event bookings with a dining experience that keeps the energy high and the moments memorable.",
    icon: PartyPopper,
  },
];

const signatureDishes = [
  {
    title: "Paneer Specials",
    description:
      "Rich, satisfying, and crowd-pleasing dishes that bring familiar comfort with a restaurant-style presentation.",
    image: "/assets/Restaurant/Paneer.PNG",
    width: 1149,
    height: 1369,
  },
  {
    title: "Chowmein Bowls",
    description:
      "A quick, flavorful favorite for guests looking for something fun, filling, and easy to share with the table.",
    image: "/assets/Restaurant/Chowmein.PNG",
    width: 1402,
    height: 1122,
  },
];

const experiencePoints = [
  "Perfect add-on to your Skyville family outing",
  "Easy stop for snacks, meals, and group dining",
  "Stylish interior setting for photos and celebrations",
  "A natural companion to events, parties, and play sessions",
];

const menuPages = Array.from({ length: 10 }, (_, i) => i + 1);

const menuCategories = [
  { name: "Appetizers", pages: [1, 2], dotClass: "bg-color-1" },
  { name: "Main Course", pages: [3, 4, 5], dotClass: "bg-color-2" },
  { name: "Chinese & Tandoor", pages: [6, 7], dotClass: "bg-color-3" },
  { name: "Desserts & Beverages", pages: [8, 9, 10], dotClass: "bg-color-4" },
];

function MenuViewer({ onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= 10) {
      setCurrentPage(page);
    }
  }, []);

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, prevPage, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Menu/menu.pdf";
    link.download = "Flavours-by-Skyville-Menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 md:p-8 animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-6xl max-h-[100vh] md:max-h-[95vh] flex flex-col">
        {/* Mobile-optimized header */}
        <div className="flex items-center justify-between mb-3 md:mb-4 px-2">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="rounded-xl md:rounded-2xl bg-gradient-to-r from-color-1/20 to-color-2/20 p-2 md:p-3 border border-color-2/30">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-color-2" />
            </div>
            <div>
              <p className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-color-2">
                Our Menu
              </p>
              <h3 className="text-base md:text-xl font-semibold text-white">
                Flavours by Skyville
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-n-6 bg-n-7/70 p-3 md:p-2.5 text-n-1 transition-colors hover:border-color-3 hover:text-color-3"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex items-stretch gap-2 md:gap-4 overflow-hidden">
          {/* Desktop left navigation */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="hidden md:flex flex-shrink-0 items-center justify-center w-12 rounded-2xl border border-n-6 bg-n-7/50 text-n-1 transition-all hover:border-color-1 hover:bg-color-1/10 hover:text-color-1 disabled:opacity-30 disabled:hover:border-n-6 disabled:hover:bg-n-7/50 disabled:hover:text-n-1"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex-1 overflow-auto rounded-[1.5rem] md:rounded-[2rem] border border-n-6 bg-n-8">
            <div className="flex items-center justify-center min-h-full p-2 md:p-6">
              <div
                className="relative transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoom / 100})` }}
              >
                <div className="w-full max-w-[350px] md:max-w-[900px] aspect-[3/4] md:aspect-[4/3] rounded-[1rem] md:rounded-[1.5rem] bg-gradient-to-br from-n-7 via-n-7 to-n-8 overflow-hidden border border-n-6 shadow-2xl">
                  <div className="w-full h-full flex flex-col">
                    <div className="flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-n-6 bg-gradient-to-r from-color-1/10 via-color-2/5 to-color-3/10">
                      <div className="flex items-center gap-1 md:gap-2">
                        <ChefHat className="h-4 w-4 md:h-5 md:w-5 text-color-2" />
                        <span className="text-xs md:text-sm font-semibold text-white">
                          Flavours by Skyville
                        </span>
                      </div>
                      <span className="text-[10px] md:text-xs font-semibold text-n-4 uppercase tracking-wider">
                        Page {currentPage} of 10
                      </span>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-3 md:p-8">
                      <img
                        src={`/assets/Menu/page-${currentPage}.png`}
                        alt={`Menu page ${currentPage}`}
                        className="w-full h-full object-contain rounded-lg md:rounded-xl bg-n-8"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display =
                            "flex";
                        }}
                      />
                      <div
                        className="hidden w-full h-full flex-col items-center justify-center text-center rounded-xl bg-gradient-to-br from-color-1/5 via-n-8 to-color-2/5 border border-dashed border-n-6"
                        style={{ display: "none" }}
                      >
                        <div className="rounded-3xl bg-gradient-to-br from-color-1/20 to-color-2/20 p-6 mb-6 border border-color-2/30">
                          <FileText className="h-16 w-16 text-color-2" />
                        </div>
                        <h4 className="text-2xl font-semibold text-white mb-2">
                          Menu Page {currentPage}
                        </h4>
                        <p className="text-n-3 max-w-sm text-sm leading-6 mb-4">
                          Place your menu images in the Menu folder to display them here.
                        </p>
                        <div className="rounded-2xl border border-n-6 bg-n-7/50 p-4 max-w-xs">
                          <p className="text-xs text-n-4 uppercase tracking-wider mb-2">
                            File Path
                          </p>
                          <code className="text-sm text-color-2 font-mono">
                            /public/assets/Menu/page-{currentPage}.png
                          </code>
                        </div>
                        <p className="mt-6 text-xs text-n-4">
                          -- OR --
                        </p>
                        <p className="mt-2 text-sm text-n-3">
                          Place a single PDF at:
                          <code className="ml-2 text-color-2 font-mono">
                            /public/assets/Menu/menu.pdf
                          </code>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-t border-n-6 bg-n-7/30">
                      <div className="flex items-center gap-1 md:gap-1.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3 w-3 md:h-4 md:w-4 fill-color-2 text-color-2"
                          />
                        ))}
                      </div>
                      <span className="text-[9px] md:text-xs text-n-4">
                        Savor every bite at Skyville
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop right navigation */}
          <button
            onClick={nextPage}
            disabled={currentPage === 10}
            className="hidden md:flex flex-shrink-0 items-center justify-center w-12 rounded-2xl border border-n-6 bg-n-7/50 text-n-1 transition-all hover:border-color-1 hover:bg-color-1/10 hover:text-color-1 disabled:opacity-30 disabled:hover:border-n-6 disabled:hover:bg-n-7/50 disabled:hover:text-n-1"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mt-3 md:mt-4 px-2">
          {/* Mobile zoom and download controls */}
          <div className="md:hidden flex items-center justify-between gap-2 mb-3">
            <button
              onClick={() => setZoom(Math.max(50, zoom - 25))}
              className="flex-1 rounded-xl border border-n-6 bg-n-7/70 py-2.5 text-n-1 transition-colors hover:border-color-1 hover:text-color-1 flex items-center justify-center gap-2"
            >
              <ZoomOut className="h-4 w-4" />
              <span className="text-xs font-semibold">{zoom}%</span>
            </button>
            <button
              onClick={() => setZoom(Math.min(200, zoom + 25))}
              className="flex-1 rounded-xl border border-n-6 bg-n-7/70 py-2.5 text-n-1 transition-colors hover:border-color-1 hover:text-color-1 flex items-center justify-center gap-2"
            >
              <ZoomIn className="h-4 w-4" />
              <span className="text-xs font-semibold">{zoom}%</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 rounded-xl border border-n-6 bg-n-7/70 py-2.5 text-n-1 transition-colors hover:border-color-2 hover:text-color-2 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span className="text-xs font-semibold">PDF</span>
            </button>
          </div>

          {/* Page navigation */}
          <div className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto pb-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="md:hidden flex-shrink-0 rounded-xl border border-n-6 bg-n-7/70 p-2.5 text-n-1 transition-colors hover:border-color-1 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {menuPages.map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`flex-shrink-0 h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-color-1 to-color-3 text-white shadow-lg shadow-color-1/20"
                    : "border border-n-6 bg-n-7/50 text-n-3 hover:border-color-2/50 hover:text-n-1"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === 10}
              className="md:hidden flex-shrink-0 rounded-xl border border-n-6 bg-n-7/70 p-2.5 text-n-1 transition-colors hover:border-color-1 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Desktop download button */}
          <div className="hidden md:flex items-center justify-center mt-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl border border-n-6 bg-n-7/70 px-4 py-2.5 text-sm font-semibold text-n-1 transition-colors hover:border-color-2 hover:text-color-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuPreviewCard({ page, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative rounded-2xl border border-n-6 bg-n-8 overflow-hidden transition-all duration-300 hover:border-color-2/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-color-2/10"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={`/assets/Menu/page-${page}.png`}
          alt={`Menu page ${page}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />
        <div
          className="w-full h-full flex-col items-center justify-center bg-gradient-to-br from-color-1/10 via-n-8 to-color-2/10 p-4"
          style={{ display: "none" }}
        >
          <div className="rounded-2xl bg-n-7/60 p-3 mb-3 border border-n-6">
            <FileText className="h-8 w-8 text-color-2" />
          </div>
          <span className="text-lg font-semibold text-white">Page {page}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-color-2">
              View Page
            </span>
            <ArrowRight className="h-4 w-4 text-color-2" />
          </div>
        </div>

        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-n-8/80 backdrop-blur-sm border border-n-6 px-3 py-1 text-xs font-semibold text-white">
            #{page}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function RestaurantContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && <MenuViewer onClose={() => setMenuOpen(false)} />}

      <Section className="overflow-hidden pt-12 lg:pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-color-3/20 blur-[140px]" />
          <div className="absolute left-8 top-1/3 h-40 w-40 rounded-full bg-color-1/20 blur-[100px]" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-color-2/20 blur-[120px]" />
        </div>

        <div className="container relative z-2">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-color-2/30 bg-color-2/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-color-2">
                <Sparkles className="h-4 w-4" />
                New Restaurant Experience
              </div>

              <h1 className="h1 mt-6 max-w-3xl text-n-1">
                Welcome to <span className="text-color-2">Flavours by Skyville</span>
              </h1>

              <p className="body-1 mt-6 max-w-2xl text-n-2">
                A vibrant dining destination inside Skyville where good food,
                family time, and celebration energy come together. Drop in for
                a quick bite, stay for a relaxed meal, or pair your visit with
                your next event booking.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-color-1 to-color-3 px-6 py-4 font-semibold text-white transition-transform duration-200 lg:hover:scale-[1.02]"
                >
                  Reserve Your Visit
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <button
                  onClick={() => setMenuOpen(true)}
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-color-2/50 bg-color-2/10 px-6 py-4 font-semibold text-color-2 transition-all duration-200 lg:hover:scale-[1.02] lg:hover:bg-color-2/20 lg:hover:border-color-2"
                >
                  <MenuIcon className="h-5 w-5" />
                  View Full Menu (10 Pages)
                </button>

                <a
                  href="tel:+919468578138"
                  className="inline-flex items-center gap-2 rounded-2xl border border-n-5 bg-n-7/70 px-6 py-4 font-semibold text-n-1 transition-colors lg:hover:border-color-2 lg:hover:text-color-2"
                >
                  Call Restaurant Team
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-n-6 bg-n-7/70 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-color-1">
                    Dining
                  </p>
                  <p className="mt-2 text-sm leading-6 text-n-3">
                    Family-friendly setting with a premium casual feel.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-n-6 bg-n-7/70 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-color-2">
                    Ambience
                  </p>
                  <p className="mt-2 text-sm leading-6 text-n-3">
                    A lively interior that matches the Skyville energy.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-n-6 bg-n-7/70 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-color-3">
                    Celebrations
                  </p>
                  <p className="mt-2 text-sm leading-6 text-n-3">
                    Great for post-play meals, parties, and gathering moments.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-color-2/30 bg-gradient-to-br from-[#2a1734] via-[#140f22] to-[#0b1222] p-5 sm:col-span-2">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-start">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 flex-shrink-0">
                    <Image
                      src="/assets/Flavours by Skyville.JPG.jpeg"
                      alt="Flavours by Skyville logo"
                      width={400}
                      height={400}
                      className="h-36 w-36 rounded-[1rem] object-contain sm:h-44 sm:w-44"
                      priority
                    />
                  </div>

                  <div className="flex-1 sm:ml-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-2">
                      Restaurant Brand
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">
                      Flavours by Skyville
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-n-3">
                      Built as a stylish extension of the Skyville experience,
                      this space brings together fun, food, and comfort under
                      one roof.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-n-6 bg-n-7/70">
                <Image
                  src="/assets/Restaurant/View1.JPG.jpeg"
                  alt="Interior view of Flavours by Skyville restaurant"
                  width={3146}
                  height={1880}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[2rem] border border-n-6 bg-n-7/70">
                  <Image
                    src="/assets/Restaurant/Paneer.PNG"
                    alt="Paneer dish served at Flavours by Skyville"
                    width={1149}
                    height={1369}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-n-6 bg-n-7/70">
                  <Image
                    src="/assets/Restaurant/Chowmein.PNG"
                    alt="Chowmein served at Flavours by Skyville"
                    width={1402}
                    height={1122}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-4 lg:pt-8">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-n-6 bg-n-7/60 p-6 lg:p-7"
                >
                  <div className="inline-flex rounded-2xl bg-white/5 p-3 text-color-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-n-3">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="rounded-[2.5rem] border border-color-2/20 bg-gradient-to-br from-[#1c1129] via-[#0b1222] to-[#181122] p-6 lg:p-10 overflow-hidden relative">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-color-2/10 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-color-1/10 blur-[120px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-color-1/30 bg-color-1/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-color-1">
                  <BookOpen className="h-4 w-4" />
                  Full Menu Available
                </div>

                <h2 className="h2 mt-6 text-white">
                  Explore our 10-page <span className="text-color-2">delicious menu</span>
                </h2>
                <p className="body-2 mt-4 text-n-2 max-w-md">
                  From mouthwatering appetizers to decadent desserts, discover
                  every dish we serve. Flip through pages, zoom in for details,
                  and download the menu to plan your next visit.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-color-1 to-color-3 px-6 py-4 font-semibold text-white transition-transform duration-200 lg:hover:scale-[1.02]"
                  >
                    <Maximize2 className="h-5 w-5" />
                    Open Full Menu Viewer
                  </button>

                  <a
                    href="/assets/Menu/menu.pdf"
                    download="Flavours-by-Skyville-Menu.pdf"
                    className="inline-flex items-center gap-2 rounded-2xl border border-n-5 bg-n-7/70 px-6 py-4 font-semibold text-n-1 transition-colors lg:hover:border-color-2 lg:hover:text-color-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
                  <div className="rounded-[1.5rem] border border-n-6 bg-n-7/60 p-4">
                    <p className="text-3xl font-bold text-color-2">10</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-n-4">
                      Menu Pages
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-n-6 bg-n-7/60 p-4">
                    <p className="text-3xl font-bold text-color-1">4+</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-n-4">
                      Categories
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {menuPages.map((page) => (
                  <MenuPreviewCard
                    key={page}
                    page={page}
                    onClick={() => setMenuOpen(true)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-1">
              Signature Picks
            </p>
            <h2 className="h2 mt-4 text-white">
              Fresh visuals. Warm vibe. Food that completes the outing.
            </h2>
            <p className="body-2 mt-4 text-n-2">
              We used your actual restaurant images to shape this page around
              the real experience guests can expect when they visit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {signatureDishes.map((dish) => (
              <div
                key={dish.title}
                className="overflow-hidden rounded-[2rem] border border-n-6 bg-n-8"
              >
                <div className="overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    width={dish.width}
                    height={dish.height}
                    className="h-[20rem] w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-color-2">
                    Featured Dish
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {dish.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-n-3">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-color-1/20 bg-gradient-to-br from-color-1/10 via-n-8 to-n-8 p-6 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-1">
                Why It Works
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
                The restaurant feels like part of the full Skyville day out.
              </h2>
              <p className="mt-5 text-sm leading-7 text-n-2">
                Instead of stepping away for food, guests can continue their
                experience right here with stylish seating, easy group dining,
                and a setting that fits both quick visits and longer
                celebrations.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-n-3">
                <Clock3 className="h-5 w-5 text-color-2" />
                Designed for all-day family visits, events, and spontaneous food breaks.
              </div>
            </div>

            <div className="rounded-[2rem] border border-n-6 bg-n-7/60 p-6 lg:p-8">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-color-2" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-color-2">
                    Experience Highlights
                  </p>
                  <p className="text-sm text-n-3">
                    Ideal for families, parties, and guests spending the day at Skyville.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {experiencePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-n-6 bg-n-8/80 p-5 text-sm leading-6 text-n-2"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="rounded-[2rem] border border-color-2/20 bg-gradient-to-r from-[#1c1129] via-[#0e1525] to-[#181122] p-8 text-center lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-color-2">
              Visit Flavours by Skyville
            </p>
            <h2 className="h2 mt-4 text-white">
              Bring food, fun, and family time into one destination.
            </h2>
            <p className="body-2 mx-auto mt-4 max-w-3xl text-n-2">
              Planning a visit, event, or celebration at Skyville? Add the
              restaurant experience and make the outing feel complete.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-n-8 transition-transform duration-200 lg:hover:scale-[1.02]"
              >
                Book an Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-color-2/50 bg-color-2/10 px-6 py-4 font-semibold text-color-2 transition-all duration-200 lg:hover:scale-[1.02] lg:hover:bg-color-2/20"
              >
                <MenuIcon className="h-5 w-5" />
                Browse Our Menu
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition-colors lg:hover:border-color-2 lg:hover:text-color-2"
              >
                Contact Skyville
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
