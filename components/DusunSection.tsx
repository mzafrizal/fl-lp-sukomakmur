import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const dusunList = [
  {
    no: "01",
    name: "Dusun Gendol",
    tagline: "Majemuk dalam Adat & Peradaban",
    excerpt:
      "Terletak di perbatasan Desa Temanggung, nama Gendol berarti Gumandul — perpaduan peradaban dua desa yang melahirkan kehidupan dan adat istiadat yang majemuk dan kaya nuansa.",
    full: "Dusun Gendol salah satu Dusun di Desa Sukomakmur yang terletak di perbatasan antara Dusun Butuh Desa Temanggung. Gendol artinya Gumandul — perpaduan peradapan antara Desa Sukomakmur dan Desa Temanggung. Adat istiadat hampir sama dengan adat dan budaya Dusun Butuh namun mengikuti peradapan Desa Sukomakmur, sehingga perpaduan ini bisa menambah nuansa Gendol menjadi Majemuk dalam kehidupan dan adat istiadatnya.",
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    no: "02",
    name: "Dusun Krandegan",
    tagline: "Tempat Berhentinya Kejahatan",
    excerpt:
      "Krandegan bermakna ndeg-ndegan — tempat berhenti. Seorang pujangga besar yang singgah di sini berharap dusun ini kelak menjadi tempat berkembangnya kebaikan dan kearifan lokal.",
    full: "Krandegan mempunyai makna ndeg-ndegan atau tempat untuk berhenti. Ada kisah seorang pujangga besar pendiri dusun berhenti di Krandegan dalam perjalanan lelono-nya. Ia berharap daerah ini kelak diberi nama Krandegan — tempat berhentinya tindak kejahatan dan berkembangnya perbuatan-perbuatan yang baik dan berfaedah. Jadi Krandegan adalah tempat pengembangan adat istiadat, kearifan lokal, dan budaya.",
    accent: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    no: "03",
    name: "Dusun Marongan",
    tagline: "Dusun Kebesaran & Kebanggaan",
    excerpt:
      "Marongan berasal dari marong-marong yang berarti kebesaran. Pendiri dusun bermimpi agar Marongan menjadi tumpuan perlindungan warga dengan kearifan lokal dan budaya yang lestari.",
    full: "Marongan berasal dari kata marong-marong yang artinya kebesaran. Pendiri dusun Marongan bertujuan agar dusun ini menjadi dusun kebanggaan, dusun keberhasilan, dusun yang sejahtera. Setiap kegiatan yang ada di Desa Sukomakmur yang telah dimusyawarahkan ditetapkan di dusun Marongan menjadi acara kebesaran, didukung dengan kearifan lokal masyarakat adat dan agama Islam yang dianut.",
    accent: "#047857",
    bg: "rgba(4,120,87,0.08)",
  },
  {
    no: "04",
    name: "Dusun Gunung Malang",
    tagline: "Teguh Pantang Menyerah",
    excerpt:
      'Nama dari dua kata: Gunung (bukit besar) dan Malang (melintang). Pendirinya menanamkan semangat "rawe-rawe rantas malang-malang putung" — tidak pernah menyerah hingga titik penghabisan.',
    full: 'Gunung Malang berasal dari dua kata: Gunung (perbukitan berbentuk kerucut) dan Malang (melintang). Dusun ini terletak di bawah bukit yang bila dipandang dari daerah lain berbentuk gunung yang melintang. Pendirinya menanamkan semangat "rawe-rawe rantas malang-malang putung" — tidak akan pernah menyerah meskipun sampai titik darah penghabisan. Setiap acara di dusun Gunung Malang dilandasi rasa tanggung jawab, percaya diri, serta kearifan lokal, seni, dan budaya.',
    accent: "#065f46",
    bg: "rgba(6,95,70,0.08)",
  },
  {
    no: "05",
    name: "Dusun Naden",
    tagline: "Rencana yang Selalu Terlaksana",
    excerpt:
      "Naden kependekan dari rencana gedaden — semua yang direncanakan berharap selalu berhasil. Warga Naden dituntut berpegang teguh pada keyakinan dan mengutamakan kepentingan umum.",
    full: "Naden berasal dari kata na rencana, den gedaden (terlaksana) — atau kependekan dari Raden Rencana Gedaden. Semua kegiatan yang direncanakan berharap akan selalu berhasil. Pendiri dusun berharap Naden mempunyai cita-cita yang tinggi demi memakmurkan warganya. Warga dusun Naden dituntut untuk selalu berpegang teguh pada keyakinan, percaya diri, dan mengutamakan kepentingan umum — bekerja keras demi kemakmuran dengan berpedoman pada kearifan lokal yang masih tertanam.",
    accent: "#064e3b",
    bg: "rgba(6,78,59,0.08)",
  },
  {
    no: "06",
    name: "Dusun Nampan",
    tagline: "Menerima dengan Arif & Bijaksana",
    excerpt:
      "Nampan dari Bahasa Jawa nompo (menerima). Terletak di ujung barat berbatasan Wonosobo, dusun ini memadukan dua adat istiadat secara harmonis — menerima yang positif, menolak yang bertentangan.",
    full: "Nampan adalah kata yang diambil dari Bahasa Jawa nompo artinya menerima. Nampan terletak di ujung Barat, berbatasan dengan Kabupaten Wonosobo. Pendiri dusun berharap warga selalu nompo — menerima pola kehidupan masyarakat sekitar yang positif dan tidak bertentangan dengan norma Pancasila, agama, dan adat istiadat. Perpaduan dua adat yang berbeda namun menyatu menjadikan kehidupan dusun Nampan selalu arif dan bijaksana, didukung kearifan lokal dan keindahan alam yang menjanjikan.",
    accent: "#022c22",
    bg: "rgba(2,44,34,0.08)",
  },
];

export default function DusunSection() {
  return (
    <section id="dusun" className="py-20 lg:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Cerita Rakyat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
            Dusun-Dusun di Sukomakmur
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Setiap dusun menyimpan kisah dan filosofi mendalam yang diwariskan turun-temurun oleh para pendirinya.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dusunList.map((dusun, i) => (
            <ScrollReveal key={dusun.no} variant="fade-up" delay={i * 80} duration={500}>
              <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Accent top bar */}
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{ background: dusun.accent }}
                />

                <div className="flex flex-col flex-1 p-6">
                  {/* Number badge + icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full"
                      style={{ background: dusun.bg, color: dusun.accent }}
                    >
                      {dusun.no}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: dusun.bg }}
                    >
                      <MapPin className="w-4 h-4" style={{ color: dusun.accent }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-800 leading-tight mb-1">
                    {dusun.name}
                  </h3>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-3"
                    style={{ color: dusun.accent }}
                  >
                    {dusun.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-10 mb-4"
                    style={{ background: dusun.accent, opacity: 0.4 }}
                  />

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {dusun.excerpt}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

