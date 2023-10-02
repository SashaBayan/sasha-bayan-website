import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";

export function MediaSection() {
  return (
    <section className="flex flex-wrap justify-around bg-[#E8E1DD] py-10 sm:flex-nowrap">
      {/* left side */}
      <div>
        {/* TODO: use akkurat light font */}
        <h4 className="text-sm font-thin uppercase">Sasha Bayan</h4>
        <Image
          className="grayscale"
          src="/guitar-photo-with-text.png"
          width={600}
          height={900}
          alt="sasha bayan photo"
        />
        {/* <img
          className="hidden object-cover grayscale lg:block"
          src="/guitar-photo-with-text.png"
          alt="sasha bayan photo"
        /> */}
      </div>
      {/* right side */}
      <div className="flex w-1/2 flex-col gap-16 bg-white px-16 pt-20 md:pt-36">
        {/* TODO: should be Glosa Display font, add this secondary font */}
        <div>
          <h4 className="mb-5 text-sm uppercase">Listen</h4>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <AudioPlayer src="test-audio.wav" trackName="Enough" />
              <AudioPlayer src="test-audio-2.wav" trackName="Tomorrow" />
            </div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <AudioPlayer src="test-audio.wav" trackName="Enough" />
              <AudioPlayer src="test-audio-2.wav" trackName="Tomorrow" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase">Watch</h4>
        </div>
      </div>
    </section>
  );
}
