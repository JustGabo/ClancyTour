import Image from "next/image";
import Hero from "./components/Hero";
import Song from "./components/Song";
import Counter from "./components/Counter";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Song/>
      <Counter/>
      <Shop/>
      <Footer/>
    </main>
  );
}
