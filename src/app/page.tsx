import Hero from "@/components/Hero";
// import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main>
      {/* <Banner title="Beranda"/> */}
      <Hero />      
      <Gallery />
      <ParallaxSection />
    </main>
  );
}
