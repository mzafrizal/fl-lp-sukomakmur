import Image from "next/image";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function GeografiSection() {
  return (
    <section id="geografi" className="py-20 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <ScrollReveal variant="fade-right" className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Geografi &amp; Pertanian
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight tracking-tight mb-6">
            Menjaga Warisan Agraris di Lereng Sumbing
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Terletak sekitar{" "}
              <strong className="text-slate-800">37 kilometer</strong> dari
              pusat Kabupaten Magelang, Desa Sukomakmur berdiri tangguh di
              lereng Gunung Sumbing.
            </p>
            <p>
              Hamparan lahan pertanian sayuran dan terasering yang tertata rapi
              bukan sekadar mata pencaharian, melainkan{" "}
              <strong className="text-emerald-700">
                mahakarya seni bercocok tanam
              </strong>{" "}
              yang menyatu dengan keindahan alam.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "6", label: "Dusun Adat" },
              { value: "37 km", label: "dari Kota Magelang" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-emerald-50 border border-emerald-100 rounded-xl p-4"
              >
                <p className="text-2xl font-extrabold text-emerald-700">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Real image */}
        <ScrollReveal variant="fade-left" delay={150} className="order-1 md:order-2">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/negeri-sayur-sukomakmur-magelang_169.jpeg"
              alt="Papan Negeri Sayur Sukomakmur dengan terasering di latar belakang"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
