import Head from "next/head";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { ContactSection } from "../sections/ContactSection";
import { PressSection } from "../sections/PressSection";

export default function MontreuxEPK() {
  return (
    <>
      <Head>
        <title>Sasha Bayan - "montreux"</title>
        {/* Additional Head tags, similar to your Home Page */}
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <section className="flex w-full justify-center bg-gradient-to-br from-[white] from-50% to-[#E8E1DD] px-10 py-20">
          <div className="">
            <div className="w-full">
              <div className="max-w-2xl text-center">
                <h1 className="mb-4 text-4xl font-bold">
                  Sasha Bayan presents "montreux"
                </h1>
                <p className="mb-8 text-xl">
                  An Dreamy Dive into Love and Longing
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutSection
          title="About the Single"
          imgSrc="/montreux-cover.jpg"
          copy={AboutCopy()}
        />
        <PressSection pressQuotes={pressQuotes()} />
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
        "montreux," the latest single by Sasha Bayan, is an emotive indie rock
        piece from his upcoming album 'enough'. Set against a dreamy pop
        backdrop, it explores love, loss, and introspection with poetic lyrics
        and melodic sounds. Bayan's soft vocals and rich instrumentation create
        a melancholic yet captivating aura, inviting listeners into a deeply
        personal narrative. This track showcases Bayan's songwriting prowess and
        emotional depth, making it a memorable addition to his discography.
      </p>
    </>
  );
}

function pressQuotes() {
  return [
    {
      author: "Rock The Pigeon",
      quote:
        "...a dreamy environment where listeners can fall in love with the sounds of Sasha Bayan",
      href: "https://rockthepigeon.com/2023/12/18/exploring-love-and-loss-sasha-bayans-montreux-takes-listeners-on-a-dreamy-musical-journey/",
    },
    {
      author: "Yellow & Black",
      quote:
        "Sasha Bayan...has recently landed on our radar with his single, “montreux,” and it seems we can’t get enough of it. The song is a great experience from start to finish and will leave stuck on constant repeat for days.",
      href: "https://yellowblackmusic.com/2023/11/27/sasha-bayan-montreux/",
    },
    {
      author: "Para Pop",
      quote:
        "“montreux” takes listeners into a world brimming with emotions, where every word and note carries weight and meaning...Sasha Bayan effortlessly leaves a profound and lasting impression on the audience with this song. *(translated from Indonesian)",
      href: "https://parapop.net/sasha-bayan-montreux/",
    },
  ];
}
