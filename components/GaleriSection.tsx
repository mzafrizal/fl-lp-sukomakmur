"use client";

import { useState, useEffect, useCallback } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";

const galeriPhotos = [
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.24.58 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 1",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.24.58 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 2",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.24 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 3",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.25 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 4",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.25 PM (2).jpeg",
    alt: "Kegiatan Desa Sukomakmur 5",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.25 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 6",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.26 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 7",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.26 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 8",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.30.37 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 9",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.37 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 10",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.37 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 11",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.38 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 12",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.38 PM (2).jpeg",
    alt: "Kegiatan Desa Sukomakmur 13",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.38 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 14",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.39 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 15",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.39 PM (2).jpeg",
    alt: "Kegiatan Desa Sukomakmur 16",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.39 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 17",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.40 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 18",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.40 PM (2).jpeg",
    alt: "Kegiatan Desa Sukomakmur 19",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.40 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 20",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.41 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 21",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.41 PM (2).jpeg",
    alt: "Kegiatan Desa Sukomakmur 22",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.41 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 23",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.42 PM (1).jpeg",
    alt: "Kegiatan Desa Sukomakmur 24",
  },
  {
    src: "/assets/galeri/WhatsApp Image 2026-03-10 at 1.35.42 PM.jpeg",
    alt: "Kegiatan Desa Sukomakmur 25",
  },
];

export default function GaleriSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [thumbStart, setThumbStart] = useState(0);

  const THUMB_VISIBLE = 6;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      const normalized =
        ((index % galeriPhotos.length) + galeriPhotos.length) %
        galeriPhotos.length;
      setActiveIndex(normalized);

      // keep thumbnail strip in view
      if (normalized < thumbStart) {
        setThumbStart(normalized);
      } else if (normalized >= thumbStart + THUMB_VISIBLE) {
        setThumbStart(normalized - THUMB_VISIBLE + 1);
      }

      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, thumbStart]
  );

  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (lightboxOpen) return;
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [next, lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const visibleThumbs = galeriPhotos.slice(
    thumbStart,
    thumbStart + THUMB_VISIBLE
  );

  return (
    <section
      id="galeri"
      style={{
        background:
          "linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)",
      }}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "#10b981", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "#34d399", filter: "blur(80px)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
             <Camera className="w-4 h-4" />
            Galeri Foto
          </div>
         
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Momen Kegiatan Desa
          </h2>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Abadikan setiap langkah dan kenangan bersama warga Desa Sukomakmur
            dalam berbagai kegiatan yang penuh makna.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="w-8 h-1 rounded-full bg-emerald-400" />
            <span className="w-16 h-1 rounded-full bg-white" />
            <span className="w-8 h-1 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/30 border border-white/10 mb-4">
          {/* Image */}
          <div
            className="relative w-full cursor-pointer"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              key={activeIndex}
              src={galeriPhotos[activeIndex].src}
              alt={galeriPhotos[activeIndex].alt}
              fill
              className="object-cover transition-opacity duration-400"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority={activeIndex === 0}
            />

            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Counter badge */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">
              {activeIndex + 1} / {galeriPhotos.length}
            </div>

            {/* Click to expand hint */}
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 opacity-80">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Perbesar
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-16">
              <p className="text-white text-sm font-medium drop-shadow">
                {galeriPhotos[activeIndex].alt}
              </p>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 hover:border-emerald-400"
            aria-label="Sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 hover:border-emerald-400"
            aria-label="Berikutnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mb-6">
          {galeriPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="relative">
          {/* Left arrow for thumbnails */}
          {thumbStart > 0 && (
            <button
              onClick={() => setThumbStart((s) => Math.max(0, s - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center border border-white/20 transition-all"
              aria-label="Geser thumbnail ke kiri"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="grid grid-cols-6 gap-2">
            {visibleThumbs.map((photo, i) => {
              const realIndex = thumbStart + i;
              return (
                <button
                  key={realIndex}
                  onClick={() => goTo(realIndex)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                    realIndex === activeIndex
                      ? "border-emerald-400 scale-105 shadow-lg shadow-emerald-500/30"
                      : "border-white/20 hover:border-emerald-300 hover:scale-102 opacity-70 hover:opacity-100"
                  }`}
                  style={{ aspectRatio: "4/3" }}
                  aria-label={`Pilih foto ${realIndex + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  {realIndex === activeIndex && (
                    <div className="absolute inset-0 bg-emerald-500/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right arrow for thumbnails */}
          {thumbStart + THUMB_VISIBLE < galeriPhotos.length && (
            <button
              onClick={() =>
                setThumbStart((s) =>
                  Math.min(galeriPhotos.length - THUMB_VISIBLE, s + 1)
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center border border-white/20 transition-all"
              aria-label="Geser thumbnail ke kanan"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Photo count info */}
        <div className="text-center mt-6">
          <p className="text-emerald-300 text-sm">
            {galeriPhotos.length} foto kegiatan desa tersedia
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <Image
                src={galeriPhotos[activeIndex].src}
                alt={galeriPhotos[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox controls */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/25 text-white rounded-full w-10 h-10 flex items-center justify-center border border-white/30 transition-all"
              aria-label="Tutup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center border border-white/20 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center border border-white/20 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-center text-white/70 text-sm mt-3">
              {galeriPhotos[activeIndex].alt} — {activeIndex + 1} / {galeriPhotos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
