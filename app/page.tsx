import Image from "next/image";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <section className="flex w-screen">
        {/* left side */}
        <div>
          <Image
            className="grayscale"
            src="/hero-image.jpg"
            width={720}
            height={990}
            alt="sasha bayan photo"
          />
        </div>
        {/* right side */}
        <div className="flex items-center justify-center bg-[#E8E1DD]">
          <h1 className="text-5xl font-black">
            Musician, collaborator, artist
          </h1>
        </div>
      </section>
    </main>
  );
}
