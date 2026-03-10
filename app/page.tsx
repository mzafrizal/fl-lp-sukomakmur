import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GeografiSection from "@/components/GeografiSection";
import SejarahSection from "@/components/SejarahSection";
import DusunSection from "@/components/DusunSection";
import PariwisataSection from "@/components/PariwisataSection";
import GaleriSection from "@/components/GaleriSection";
import BudayaSection from "@/components/BudayaSection";
import VideoSection from "@/components/VideoSection";
import DukungSection from "@/components/DukungSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-sans antialiased">
        <HeroSection />
        <GeografiSection />
        <SejarahSection />
        <DusunSection />
        <PariwisataSection />
        <GaleriSection />
        {/* <BudayaSection /> */}
        <VideoSection />
        <DukungSection />
        <Footer />
      </main>
    </>
  );
}
