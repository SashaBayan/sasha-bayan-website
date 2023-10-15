import Head from "next/head";
import Image from "next/image";

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
                  A deeply introspective album that transcends the clichés of
                  breakup albums, offering an exploration into love, self-worth,
                  and acceptance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-wrap items-center justify-between">
          {/* left side */}
          <div className="flex w-full flex-col items-center bg-white px-10 py-20 sm:w-1/2">
            <div className="max-w-xl text-center sm:text-left">
              <h2 className="mb-4 text-2xl font-semibold">About The Album</h2>
              <p className="mb-4">
                This album isn't just a collection of songs—it's a narrative
                journey of 11 tracks that investigates intimate questions of
                enoughness in love and life.
              </p>
              <p>
                Conceived and nurtured over a period of two years, the album
                "enough" is Sasha Bayan's latest project, reflecting a musical
                journey reminiscent of artists like Sufjan Stevens and Andrew
                Bird. It delves into the multifaceted human experiences of
                questioning love, self-worth, and the complex emotion of feeling
                'enough.'
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="flex w-full justify-center bg-[#E8E1DD] py-20 sm:w-1/2">
            <div className="h-96 w-96">
              <img src="/album-cover.jpeg" alt="album cover" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

{
  /* <div>
            <h2 className="mb-4 text-2xl font-semibold">
              The Team Behind The Album
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Songwriter, Singer, Guitarist:</strong> Sasha Bayan
              </li>
              <li>
                <strong>Bassist, Pianist, Co-Producer:</strong> Sam Suggs
              </li>
              <li>
                <strong>Drummer:</strong> Gustavo Cortiñas
              </li>
              <li>
                <strong>Sound Engineer:</strong> Scott Steinman
              </li>
              <li>
                <strong>Production Consultant:</strong> Kitt Lyles
              </li>
              <li>
                <strong>Mix Engineer:</strong> Javier Veldeavellano
              </li>
              <li>
                <strong>Mastering Engineer:</strong> JP Berreondo
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="text-blue-500 underline">
              🔊 Listen to the full album: Sasha Bayan's "enough"
            </a>
          </div>

          <div className="mt-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold">Contacts and Media</h2>
            <p>
              <strong>Official Website:</strong>{" "}
              <a href="#" className="text-blue-500 underline">
                Sasha Bayan Official
              </a>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <a href="#" className="text-blue-500 underline">
                Sasha Bayan FB
              </a>
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a href="#" className="text-blue-500 underline">
                Sasha Bayan Instagram
              </a>
            </p>
            <p>
              <strong>Download Press Photos:</strong>{" "}
              <a href="#" className="text-blue-500 underline">
                Press Photo Dropbox
              </a>
            </p>
          </div> */
}
