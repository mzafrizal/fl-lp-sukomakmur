/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Ganti dengan domain produksi Anda
  siteUrl: process.env.SITE_URL || "https://desa-sukomakmur.vercel.app",
  generateRobotsTxt: true,
  // Halaman yang TIDAK diindeks Google
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  // Generate sitemap setiap build
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 7000,
};
