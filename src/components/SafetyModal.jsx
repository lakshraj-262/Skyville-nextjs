'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SafetyModal({ images, title }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openModal = (image) => {
    setCurrentImage(image);
    setZoom(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  return (
    <>
      <div className="grid gap-8 xl:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.src}
            className="rounded-[2rem] border border-n-6 bg-n-8 p-4 sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-n-1">{image.title}</h3>
              <button
                onClick={() => openModal(image)}
                className="rounded-full border border-n-5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-n-3 hover:bg-n-5 hover:text-n-1 transition-colors cursor-pointer"
              >
                Full View
              </button>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full View */}
      {modalOpen && currentImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{currentImage.title}</h3>
              <button
                onClick={closeModal}
                className="rounded-full bg-red-500/80 hover:bg-red-600 p-3 text-white transition-colors shadow-lg"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Container with Zoom */}
            <div className="flex-1 overflow-auto bg-white rounded-2xl flex items-center justify-center">
              <div
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
                className="transition-transform duration-200"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={currentImage.width}
                  height={currentImage.height}
                  className="max-w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-white font-mono">{Math.round(zoom * 100)}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button
                onClick={handleResetZoom}
                className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
