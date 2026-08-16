import Hero from "@/components/Hero";
import UploadBox from "@/components/UploadBox";
import QualityCheck from "@/components/QualityCheck";
import SupportedFormats from "@/components/SupportedFormats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <UploadBox />
      <QualityCheck />
      <SupportedFormats />
      <Footer />
    </main>
  );
}