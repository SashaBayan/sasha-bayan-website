import Head from "next/head";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { ContactSection } from "../sections/ContactSection";
import { Header } from "../sections/Header";

export default function EnoughEPK() {
  return (
    <>
      <Head>
        <title>Sasha Bayan - "enough" Album</title>
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <Header
          header='Sasha Bayan presents "enough"'
          subheader="A deeply introspective album that explores love, self-worth, grief, and acceptance."
        />
        <AboutSection
          title="About the album"
          imgSrc="/album-cover.jpeg"
          copy={<AboutCopy />}
        />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
}

function AboutCopy() {
  return (
    <>
      <p className="mb-4">
        This album isn't just a collection of songs—it's a narrative journey of
        11 tracks that investigates intimate questions of enoughness in love and
        life.
      </p>
      <p>
        Conceived and nurtured over a period of two years, the album "enough" is
        Sasha Bayan's latest project, reflecting a musical journey reminiscent
        of the works of artists like Sufjan Stevens and Andrew Bird.
      </p>
    </>
  );
}
