import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Ganti DOMAIN_ANDA dengan domain produksi Anda, misal: https://sukomakmur.desa.id
const SITE_URL = "https://desa-sukomakmur.vercel.app";

export const metadata: Metadata = {
  // Title template: halaman spesifik bisa override dengan title sendiri
  title: {
    default: "Profil Desa Sukomakmur – Negeri Sayur di Lereng Gunung Sumbing",
    template: "%s | Desa Sukomakmur",
  },
  description:
    "Website resmi Desa Sukomakmur, Kecamatan Kajoran, Kabupaten Magelang. Temukan pesona alam pertanian sayur, sejarah pemekaran, wisata Negeri Sayur, cerita rakyat 6 dusun, dan budaya Warga Sejati.",
  keywords: [
    "Desa Sukomakmur",
    "Negeri Sayur",
    "Wisata Magelang",
    "Desa Wisata Kajoran",
    "Gunung Sumbing",
    "Sukomakmur Magelang",
    "Agrowisata Sayur",
    "Profil Desa Sukomakmur",
    "Kecamatan Kajoran",
    "Wisata Jawa Tengah",
  ],
  authors: [{ name: "Pemerintah Desa Sukomakmur" }],
  creator: "Pemerintah Desa Sukomakmur",
  publisher: "Desa Sukomakmur",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (Facebook, WhatsApp, Telegram share preview) ──
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Desa Sukomakmur",
    title: "Profil Desa Sukomakmur – Negeri Sayur di Lereng Gunung Sumbing",
    description:
      "Jelajahi pesona alam, sejarah, wisata, dan budaya Desa Sukomakmur, Kecamatan Kajoran, Kabupaten Magelang, Jawa Tengah.",
    images: [
      {
        url: "/assets/bg.webp",
        width: 1200,
        height: 630,
        alt: "Hamparan ladang sayur Desa Sukomakmur dengan latar Gunung Sumbing",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Profil Desa Sukomakmur – Negeri Sayur di Lereng Gunung Sumbing",
    description:
      "Jelajahi pesona alam, sejarah, wisata, dan budaya Desa Sukomakmur, Kecamatan Kajoran, Kabupaten Magelang.",
    images: ["/assets/bg.webp"],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD Structured Data — membantu Google memahami konteks halaman */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Pemerintah Desa Sukomakmur",
              alternateName: "Desa Sukomakmur",
              url: SITE_URL,
              logo: `${SITE_URL}/assets/bg.webp`,
              description:
                "Desa Sukomakmur adalah desa yang terletak di Kecamatan Kajoran, Kabupaten Magelang, Jawa Tengah — dikenal sebagai Negeri Sayur di lereng Gunung Sumbing.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kajoran",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },
              areaServed: "Desa Sukomakmur, Kecamatan Kajoran, Kabupaten Magelang",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
