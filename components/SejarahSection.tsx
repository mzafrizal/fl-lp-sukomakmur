import { BookOpen, Milestone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const timelineItems = [
  {
    year: "1982",
    title: "Pemikiran Awal",
    desc: "Tokoh masyarakat, agama, dan adat mulai berdiskusi merumuskan kebijakan. Muncul kesimpulan awal bahwa Desa Sutopati sudah waktunya dimekarkan.",
    color: "#10b981",
  },
  {
    year: "1995",
    title: "Gagasan Resmi & Kendala",
    desc: "Ide pemekaran disuarakan secara resmi, namun mengalami kebuntuan akibat sengketa pembagian batas wilayah, kas desa, dan tanah bengkok.",
    color: "#059669",
  },
  {
    year: "1995–2004",
    title: "Masa Perjuangan",
    desc: "Selama 9 tahun para tokoh pantang menyerah dan terus memperjuangkan pemekaran melalui berbagai proses musyawarah.",
    color: "#047857",
  },
  {
    year: "2004",
    title: "Keputusan Final",
    desc: 'BPD Desa Sutopati menetapkan kebijakan pemekaran dengan semboyan "adil itu tidak harus sama" — memecahkan kebuntuan dan memuluskan jalan.',
    color: "#065f46",
  },
  {
    year: "2005",
    title: "Mandat Pemerintah Keluar",
    desc: "Pemerintah Kabupaten Magelang menyatakan sah Pembentukan Desa Sukomakmur melalui Peraturan Daerah Kabupaten Magelang No 5 Tahun 2005.",
    color: "#022c22",
  },
];

export default function SejarahSection() {
  return (
    <section
      id="sejarah"
      className="relative py-20 lg:py-28 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)",
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <ScrollReveal variant="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Sejarah Desa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Lahirnya Sebuah Cita-Cita
          </h2>
          <p className="text-white/80 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Berawal dari pemikiran para tokoh sejak tahun{" "}
            <span className="text-emerald-300 font-semibold">1982</span> untuk
            memekarkan diri dari Desa Sutopati demi pelayanan warga yang adil.
            Sukomakmur resmi menjadi desa definitif melalui{" "}
            <span className="text-emerald-300 font-semibold">
              Peraturan Daerah Kabupaten Magelang No 5 Tahun 2005
            </span>
            , memayungi 6 dusun adat istiadat.
          </p>
        </ScrollReveal>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Vertical line running through all items */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 sm:left-1/2 sm:-translate-x-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />

          <div className="flex flex-col gap-0">
            {timelineItems.map((item, index) => {
              const isRight = index % 2 === 0;
              return (
                <ScrollReveal
                  key={item.year}
                  variant={isRight ? "fade-right" : "fade-left"}
                  delay={index * 120}
                >

                  {/* ── Mobile layout (always left-aligned) ── */}
                  <div className="flex items-start gap-4 w-full sm:hidden">
                    {/* Dot */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{
                          background: item.color,
                          border: "3px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        <Milestone className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200 mb-6">
                      <span
                        className="inline-block text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                        style={{ background: item.color, color: "white" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-white font-bold text-sm mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* ── Desktop layout (alternating left/right) ── */}
                  <div className="hidden sm:flex w-full items-center">
                    {/* Left card (even index) or spacer */}
                    <div className="w-1/2 flex justify-end pr-8">
                      {isRight ? (
                        <div className="max-w-xs w-full bg-white/10 border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors duration-200 text-right">
                          <span
                            className="inline-block text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                            style={{ background: item.color, color: "white" }}
                          >
                            {item.year}
                          </span>
                          <h3 className="text-white font-bold text-sm mb-1.5 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: item.color,
                          border: "3px solid rgba(255,255,255,0.35)",
                        }}
                      >
                        <Milestone className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Right card (odd index) or spacer */}
                    <div className="w-1/2 flex justify-start pl-8">
                      {!isRight ? (
                        <div className="max-w-xs w-full bg-white/10 border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors duration-200 text-left">
                          <span
                            className="inline-block text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                            style={{ background: item.color, color: "white" }}
                          >
                            {item.year}
                          </span>
                          <h3 className="text-white font-bold text-sm mb-1.5 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full" />
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
