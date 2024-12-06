import { ContactSection } from "../sections/ContactSection";
import { Header } from "../sections/Header";
import { LONG_BIO, SHORT_BIO, TAGLINE } from "./data";
import { Section } from "./Section";

export default function SitarEPKPage() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <Header
          header={"Sasha Bayan"}
          subheader={"Classically trained sitarist, composer, and improviser"}
        />
        <Section
          leftContent={
            <div className="flex flex-col items-center justify-center p-20">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">Tagline</h2>
                <div>{TAGLINE}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">Short Bio</h2>
                <div>{SHORT_BIO}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">Long Bio</h2>
                {LONG_BIO.split("\n").map((paragraph, idx) => (
                  <div className="" key={idx}>
                    {paragraph}
                  </div>
                ))}
              </div>
            </div>
          }
          rightContent={<div> baller</div>}
        />
        <Section
          reverse
          leftContent={<div className="flex justify-center">holler</div>}
          rightContent={<div> baller</div>}
        />
        <ContactSection />
      </main>
    </>
  );
}
