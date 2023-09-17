import Image from "next/image";

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
      <div className="flex w-1/2 items-center justify-start bg-white px-16 pt-20 md:pt-36">
        {/* TODO: should be Glosa Display font, add this secondary font */}
        <div>
          <h4 className="text-sm uppercase">Listen</h4>
        </div>
        <div>
          <h4 className="text-sm uppercase">Watch</h4>
        </div>
      </div>
    </section>
  );
}
