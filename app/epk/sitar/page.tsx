"use client";
import { Header } from "../sections/Header";
import { CopyableSection } from "./CopyableSection";
import { LONG_BIO, SHORT_BIO, TAGLINE } from "./data";
import { Section } from "./Section";
import { GallerySection } from "./GallerySection";
import { FollowSection } from "./FollowSection";
import { BookSection } from "./BookSection";
import { Footer } from "@/app/components/Footer";

export default function SitarEPKPage() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth">
        <Header
          header={"Sasha Bayan"}
          subheader={
            "Classically trained sitarist blending tradition with contemporary artistry"
          }
        />
        <Section
          leftContent={
            <div className="flex flex-col items-center justify-center gap-5 px-10">
              <h2 className="text-2xl font-semibold">About</h2>
              <CopyableSection title="Tagline" content={TAGLINE} />
              <CopyableSection title="Short Bio" content={SHORT_BIO} />
              <CopyableSection title="Long Bio" content={LONG_BIO} />
            </div>
          }
          rightContent={<GallerySection />}
        />
        <Section
          reverse
          leftContent={<FollowSection />}
          rightContent={<BookSection />}
        />
        <Footer />
      </main>
    </>
  );
}
