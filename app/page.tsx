import { BioSection } from "./components/BioSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { IntroSection } from "./components/IntroSection";
import { MusicSection } from "./components/MusicSection";
import { NavBar } from "./components/NavBar";
import Head from "next/head";
import { PressSection } from "./epk/sections/PressSection";

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
        <PressSection pressQuotes={pressQuotes()} />
        <MusicSection />
        <BioSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

function pressQuotes() {
  return [
    {
      author: "Yellow & Black",
      quote:
        "Sasha Bayan...has recently landed on our radar with his single, “montreux,” and it seems we can’t get enough of it. The song is a great experience from start to finish and will leave stuck on constant repeat for days.",
      href: "https://yellowblackmusic.com/2023/11/27/sasha-bayan-montreux/",
    },
    {
      author: "Rock The Pigeon",
      quote:
        "Pianos, strings, and light percussion fill additional space in [montreux], creating a dreamy environment where listeners can fall in love with the sounds of Sasha Bayan",
      href: "https://rockthepigeon.com/2023/12/18/exploring-love-and-loss-sasha-bayans-montreux-takes-listeners-on-a-dreamy-musical-journey/",
    },
    {
      author: "Para Pop",
      quote:
        "“montreux” takes listeners into a world brimming with emotions, where every word and note carries weight and meaning...Sasha Bayan effortlessly leaves a profound and lasting impression on the audience with this song.",
      href: "https://parapop.net/sasha-bayan-montreux/",
      note: "(translated from Indonesian)",
    },
  ];
}
