import Head from "next/head";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { ContactSection } from "../sections/ContactSection";

export default function EnoughEPK() {
  return (
    <>
      <Head>
        <title>Sasha Bayan - "enough" Album</title>
        {/* Additional Head tags, similar to your Home Page */}
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <section className="flex w-full justify-center bg-gradient-to-br from-[white] from-50% to-[#E8E1DD] px-10 py-20">
          <div className="">
            <div className="w-full">
              <div className="max-w-2xl text-center">
                <h1 className="mb-4 text-4xl font-bold">
                  Sasha Bayan presents "enough"
                </h1>
                <p className="mb-8 text-xl">
                  A deeply introspective album that explores love, self-worth,
                  grief, and acceptance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
}
