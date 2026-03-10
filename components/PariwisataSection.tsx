import Image from "next/image";
import { Mountain, Leaf, Eye, Star, ArrowRight, Camera } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: Leaf,
    title: "Agrowisata & Terasering",
    desc: "Saksikan kelihaian petani Sukomakmur mengolah lereng gunung menjadi terasering sayuran yang indah — perpaduan kerja keras dan keharmonisan dengan alam.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Eye,
    title: "Adat Istiadat & Seni Budaya",
    desc: "Pelajari tradisi turun-temurun yang masih lestari: merti dusun, kesenian lokal, dan kearifan warga Sejati yang selalu menjaga harmoni kehidupan.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: Mountain,
    title: "Panorama Alam Semesta",
    desc: "Nikmati keindahan Gunung Sumbing, Merapi, dan Merbabu dari titik-titik pandang terbaik di Sukomakmur — sebuah pemandangan yang memanjakan jiwa.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Star,
    title: "Kearifan Lokal",
    desc: "Rasakan kehangatan budaya lokal, cita rasa kuliner desa, dan keramahan warga yang menjadikan setiap kunjungan sebagai pengalaman tak terlupakan.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const galleryImages = [
  {
    src: "/assets/bg.webp",
    alt: "Hamparan ladang sayur Desa Sukomakmur berlatar Gunung Sumbing",
    label: "Panorama Ladang Sayur",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/assets/negeri-sayur-sukomakmur-magelang_169.jpeg",
    alt: "Papan Negeri Sayur Sukomakmur dengan terasering di latar belakang",
    label: "Gerbang Negeri Sayur",
    span: "",
  },
  {
    src: "/assets/IMG_20240330_012053.jpg",
    alt: "Jalan setapak sawah dengan Gunung Sumbing di latar belakang",
    label: "Jalan Setapak Petani",
    span: "",
  },
];

export default function PariwisataSection() {
  return (
    <section id="wisata" className="py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <ScrollReveal variant="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <Mountain className="w-4 h-4" />
            Pariwisata Desa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Wisata Alam{" "}
            <span className="text-emerald-600">Negeri Sayur</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Desa Sukomakmur menyimpan potensi keindahan alam yang luar biasa di antara hamparan pertanian dan perkebunan sayur. Wisata Negeri Sayur hadir sebagai pintu masuk untuk mempelajari{" "}
            <strong className="text-slate-700">adat istiadat</strong>,{" "}
            <strong className="text-slate-700">seni budaya</strong>,{" "}
            <strong className="text-slate-700">kearifan lokal</strong>, dan{" "}
            <strong className="text-slate-700">alam semesta</strong> yang memukau.
          </p>
        </ScrollReveal>

        

        {/* ── Photo Gallery ── */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <Camera className="w-4 h-4" />
            Galeri Foto
          </div>

          {/* Grid: big photo left, 2 stacked right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
            {/* Large hero image */}
            <div className="group relative sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:h-auto h-60 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/bg.webp"
                alt="Hamparan ladang sayur Desa Sukomakmur berlatar Gunung Sumbing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              >
                <span className="text-white text-sm font-semibold">Panorama Ladang Sayur</span>
              </div>
            </div>

            {/* Top-right image */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/negeri-sayur-sukomakmur-magelang_169.jpeg"
                alt="Papan Negeri Sayur Sukomakmur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              >
                <span className="text-white text-xs font-semibold">Gerbang Negeri Sayur</span>
              </div>
            </div>

            {/* Bottom-right image */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/IMG_20240330_012053.jpg"
                alt="Jalan setapak sawah dengan Gunung Sumbing"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              >
                <span className="text-white text-xs font-semibold">Jalan Setapak Petani</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
