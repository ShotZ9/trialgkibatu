import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Banner title="Beranda"/>
      <Hero />      
      <Gallery />
      <ParallaxSection />
      <Footer />
    </main>
  );
}
