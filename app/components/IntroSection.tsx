import Image from "next/image";

export function IntroSection() {
  return (
    <section className="flex flex-wrap justify-center bg-[#E8E1DD] sm:flex-nowrap">
      {/* left side */}
      <div className="relative bg-white lg:w-1/2">
        <Image
          className="grayscale lg:hidden"
          src="/hero-image-with-text.png"
          width={720}
          height={990}
          alt="sasha bayan photo"
        />
        <img
          className="hidden object-cover grayscale lg:block"
          src="/hero-image-with-text.png"
          alt="sasha bayan photo"
        />
      </div>
      {/* right side */}
      <div className="flex w-1/2 flex-grow items-center justify-start px-16 pt-20 md:pt-36">
        <div className="flex flex-col gap-16">
          <div className="max-w-sm">
            <div className="flex flex-col gap-8">
              <h1 className="font-glosa-display text-4xl font-black md:text-5xl">
                Musician, collaborator, artist
              </h1>
              <p className="font-light">
                Sasha Bayan is a classically trained multi-instrumentalist,
                composer, and singer-songwriter based in the Bay Area. He
                regularly performs solo and in ensembles. He performs
                classically-inspired sitar; classical, jazz, and Brazilian
                guitar; and his own original compositions and arrangements.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <p>New album dropping November 2023!</p>
              <button> Get notified.</button>
            </div>
            <Image
              className="-ml-2"
              width={575}
              height={575}
              src="/album-cover-placeholder.png"
              alt="album cover"
            />
            <div className="flex w-full justify-center">
              <button className="rounded-3xl bg-white px-5 py-3 text-xl">
                Preorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
