import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BudayaSection() {
  return (
    <section id="budaya" className="py-20 lg:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Real image – left */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/IMG_20240330_012053.jpg"
            alt="Pemandangan jalan setapak sawah dengan Gunung Sumbing di latar belakang"
            fill
            className="object-cover"
          />
        </div>

        {/* Text – right */}
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" />
            Budaya &amp; Masyarakat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight tracking-tight mb-6">
            Harmoni Warga Sejati &amp; Tradisi
          </h2>
          <p className="text-slate-600 leading-relaxed text-base mb-8">
            Penduduk kami adalah{" "}
            <strong className="text-emerald-700">&ldquo;Warga Sejati&rdquo;</strong>{" "}
            yang masih memegang teguh kearifan lokal, sopan santun, dan
            keramahtamahan. Sebagai bentuk penghormatan, setiap dusun rutin
            mengadakan kegiatan{" "}
            <em className="text-slate-800 font-semibold">merti dusun</em> atau{" "}
            <em className="text-slate-800 font-semibold">bersih desa</em> untuk
            mengenang para pendiri dusun.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Kearifan Lokal", "Merti Dusun", "Keramahtamahan", "Gotong Royong"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <Button variant="ghost" size="md">
            <Users className="w-5 h-5" />
            Selami Budaya Kami
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
