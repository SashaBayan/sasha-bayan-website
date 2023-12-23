import { Header } from "../sections/Header";
import { AboutSection } from "../sections/AboutSection";
import { PressSection } from "../sections/PressSection";
import { TeamSection } from "../sections/TeamSection";
import { ContactSection } from "../sections/ContactSection";
import { epks } from "./data";
import Head from "next/head";

export default function EPKPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (!epks[slug]) {
    // Handle the case where there is no content for the slug
    return <div>No content found for this EPK section.</div>;
  }

  const {
    title,
    header,
    subheader,
    about: { title: aboutTitle, imgSrc, copy, songHref },
    pressQuotes,
  } = epks[slug];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <Header header={header} subheader={subheader} />
        <AboutSection
          title={aboutTitle}
          imgSrc={imgSrc}
          copy={copy}
          href={songHref}
        />
        {pressQuotes.length > 0 ? (
          <PressSection pressQuotes={pressQuotes} />
        ) : null}
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
}
