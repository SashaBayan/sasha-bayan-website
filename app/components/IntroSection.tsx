import Image from "next/image";
import Link from "next/link";
import { CLOUDFRONT_URL } from "../constants/urls";

export function IntroSection() {
  return (
    <section
      id="home"
      className="flex flex-wrap justify-center bg-[#E8E1DD] sm:flex-nowrap"
    >
      {/* left side */}
      <div className="relative flex flex-col justify-center bg-[#919191] bg-gradient-to-bl  from-[#E8E1DD] to-[#7d7d7d] sm:w-1/2">
        <Image
          className="grayscale lg:hidden"
          src={`${CLOUDFRONT_URL}/hero-image-with-text.png`}
          width={720}
          height={990}
          alt="sasha bayan photo"
        />
        <img
          className="hidden object-cover grayscale lg:block"
          src={`${CLOUDFRONT_URL}/hero-image-with-text.png`}
          alt="sasha bayan photo"
        />
      </div>
      {/* right side */}
      <div className="flex flex-grow items-center justify-center px-16 py-20 pt-20 sm:w-1/2 md:pt-36">
        <div className="flex flex-col items-center gap-16 sm:items-start">
          <div className="max-w-sm">
            <div className="flex flex-col gap-8">
              <h1 className="font-glosa-display text-4xl font-black md:text-5xl">
                Musician, collaborator, artist
              </h1>
              <p className="font-light">
                Sasha Bayan is a multifaceted musician known for his
                introspective songwriting and global musical influences. With a
                deep background in classical and world music, Sasha's work,
                including his album "
                <a
                  className="font-bold underline hover:animate-pulse"
                  target="_blank"
                  href="https://open.spotify.com/album/70xurRaRvInn6h7KL07GcT?si=xQva3HReSV6fLg7goLaMxQs"
                >
                  enough
                </a>
                " , explores themes of love, loss, and self-discovery. As the
                bandleader and sitar player for{" "}
                <a
                  className="font-bold underline hover:animate-pulse"
                  target="_blank"
                  href="musicbyhightide.com"
                >
                  High Tide
                </a>
                , he fuses world music elements with contemporary composition,
                creating immersive musical experiences. Sasha's rich musical
                tapestry reflects his studies in guitar and composition at{" "}
                <a
                  className="font-bold underline hover:animate-pulse"
                  target="_blank"
                  href="https://www.northwestern.edu/magazine//summer2013/feature/standout-seniors-sidebar/sasha-bayan.html"
                >
                  Northwestern University
                </a>{" "}
                and his exploration of Flamenco, Brazilian, and Indian Classical
                music. His music offers a unique and heartfelt journey through
                the human experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="flex flex-wrap gap-2">
              <p>New single "montreux" is out!</p>
              <a
                target="_blank"
                href="https://open.spotify.com/track/0Kw1LFODITgdtH8nDiEKmb?si=8bb31deb871942ef&nd=1&dlsi=4be8ea65f75c4e12"
              >
                <button className="underline hover:animate-pulse">
                  {" "}
                  Listen Now
                </button>
              </a>
            </div>
            <a
              target="_blank"
              href="https://open.spotify.com/track/0Kw1LFODITgdtH8nDiEKmb?si=8bb31deb871942ef&nd=1&dlsi=4be8ea65f75c4e12"
            >
              <Image
                className="-ml-2"
                width={575}
                height={575}
                src={`/artwork/montreux.jpg`}
                alt="album cover"
              />
            </a>
            <div className="flex w-full justify-center">
              <Link href="mailing-list">
                <button className="rounded-3xl bg-white px-5 py-3 text-xl">
                  Join the Mailing List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
