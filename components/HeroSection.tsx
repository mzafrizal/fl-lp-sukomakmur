import Image from "next/image";
import { Leaf, Compass, PlayCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Real background image */}
      <Image
        src="/assets/bg.webp"
        alt="Ladang sayur Desa Sukomakmur dengan latar Gunung Sumbing"
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,20,15,0.62)", zIndex: 1 }}
      />
      {/* Green glow blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(4,120,87,0.2)", zIndex: 1 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(16,185,129,0.1)", zIndex: 1 }}
      />

      {/* Foreground content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Leaf className="w-3.5 h-3.5" />
          Kabupaten Magelang · Jawa Tengah
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-6xl mb-6 text-center">
          Desa Sukomakmur :{" "}
          <span className="text-emerald-400">Negeri Sayur</span>{" "}
          di Pelukan Gunung Sumbing
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 text-center">
          <em className="not-italic font-semibold text-emerald-300">
            Mbangun Deso Noto Bawono.
          </em>{" "}
          Sebuah harmoni kehidupan petani yang senantiasa membangun desa, menata
          bumi, dan merawat alam sekitarnya.
        </p>

        {/* <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="default" size="lg">
            <Compass className="w-5 h-5" />
            Mulai Penjelajahan
          </Button>
          <Button variant="outline" size="lg">
            <PlayCircle className="w-5 h-5" />
            Tonton Video
          </Button>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        style={{ zIndex: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Gulir ke bawah</span>
        <ChevronRight className="w-4 h-4 rotate-90 animate-bounce" />
      </div>
    </section>
  );
}
