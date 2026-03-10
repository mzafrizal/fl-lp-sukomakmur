import { Leaf } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/lib/navLinks";

const logos = [
  { src: "/assets/logo/1.png", alt: "Logo Institusi 1" },
  { src: "/assets/logo/2a.png", alt: "Logo Institusi 2" },
  { src: "/assets/logo/3.png", alt: "Logo Institusi 3" },
  { src: "/assets/logo/4.png", alt: "Logo Institusi 4" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-lg mb-2">
              <Leaf className="w-5 h-5" />
              Desa Sukomakmur
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Kecamatan Kajoran, Kabupaten Magelang, Jawa Tengah
            </p>
          </div>

          {/* Nav links */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo strip */}
        <div className="border-t border-slate-800 pt-8 mb-6">
          <p className="text-slate-600 text-xs uppercase tracking-widest text-center mb-5">
            Didukung Oleh STAI Syubbanul Wathon Magelang
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {logos.map((logo, i) => (
              <div key={i} className="relative w-12 h-12 opacity-50 hover:opacity-90 transition-opacity duration-200">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain "
                  sizes="48px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Profil Desa Sukomakmur · Program KKN STAI Syubbanul Wathon Magelang. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
