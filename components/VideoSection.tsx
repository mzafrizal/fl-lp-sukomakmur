import { Youtube } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function VideoSection() {
  return (
    <section id="video" className="py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <Youtube className="w-4 h-4" />
            Video Profil Desa Sukomakmur
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Saksikan Keindahan Sukomakmur
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Jelajahi pesona Negeri Sayur melalui video dokumenter yang
            mengabadikan kehidupan, alam, dan budaya Desa Sukomakmur.
          </p>
        </ScrollReveal>

        {/* YouTube embed */}
        <ScrollReveal variant="zoom-in" delay={100}>
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 60px rgba(4,120,87,0.2), 0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* Decorative accent bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(to right, #10b981, #059669, #047857)",
              }}
            />
            <div className="aspect-video bg-slate-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4SIrJDPshs?rel=0&modestbranding=1"
                title="Video Desa Sukomakmur – Negeri Sayur di Lereng Gunung Sumbing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Caption */}
        <p className="text-center text-slate-400 text-sm mt-5">
          📍 Desa Sukomakmur, Kecamatan Kajoran, Kabupaten Magelang · 
        </p>
      </div>
    </section>
  );
}
