import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const logos = [
  { src: "/assets/logo/1.png", alt: "Logo Institusi 1" },
  { src: "/assets/logo/2a.png", alt: "Logo Institusi 2" },
  { src: "/assets/logo/3.png", alt: "Logo Institusi 3" },
  { src: "/assets/logo/4.png", alt: "Logo Institusi 4" },
];

export default function DukungSection() {
  return (
    <section className="bg-slate-50 py-16 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <ScrollReveal variant="fade-up" className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="w-16 sm:flex-1 h-px bg-slate-200" />
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest text-center px-4 sm:px-0 leading-relaxed max-w-sm sm:max-w-none">
            Didukung &amp; Diselenggarakan Oleh<br className="sm:hidden" /> STAI Syubbanul Wathon Magelang
          </p>
          <div className="w-16 sm:flex-1 h-px bg-slate-200" />
        </ScrollReveal>

        {/* Logo grid */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <ScrollReveal key={i} variant="zoom-in" delay={i * 100}>
              <div className="relative flex items-center justify-center group">
                <div className="relative w-28 h-28 md:w-36 md:h-36 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sub-caption */}
        <ScrollReveal variant="fade-up" delay={300}>
          <p className="text-center text-slate-400 text-sm mt-10">
            Website profil desa ini merupakan hasil program{" "}
            <span className="font-semibold text-emerald-700">
              Kuliah Kerja Nyata (KKN)
            </span>{" "}
            yang bertujuan memperkenalkan potensi Desa Sukomakmur kepada dunia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
