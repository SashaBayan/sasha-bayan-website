import { BioSection } from "./components/BioSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { IntroSection } from "./components/IntroSection";
import { MusicSection } from "./components/MusicSection";
import { NavBar } from "./components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Akkurat-Light.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Akkurat-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GlosaDisplay-Regular.woff2"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="scroll-smooth">
        <NavBar />
        <IntroSection />
        <MusicSection />
        <BioSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
