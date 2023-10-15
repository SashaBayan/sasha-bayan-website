import Section from "@/app/components/Section";
import Image from "next/image";

const leftContent = (
  <div className="flex-wrap">
    <div className="mb-10 flex justify-center">
      <div className="relative h-80 w-80 grayscale">
        <Image alt="sasha bayan" fill src="/white-sasha-guitar-2.png" />
      </div>
    </div>
    <div className="m flex flex-wrap justify-center grayscale lg:flex-nowrap lg:justify-between">
      <div className="relative h-64 w-64">
        <Image alt="sam suggs" fill src="/white-sam-suggs.png" />
      </div>
      <div className="relative h-64 w-64">
        <Image alt="gustavo cortinas" fill src="/white-gustavo-cortinas.png" />
      </div>
    </div>
  </div>
);

const rightContent = (
  <>
    <div className="flex flex-col items-center gap-2">
      <h2 className="mb-4 text-2xl font-semibold">The Team Behind The Album</h2>
      <p className="mb-2 max-w-md text-center">
        The album involved an ensemble of world-class artists and engineers who
        each contributed their creative genius.
      </p>
      <ul className="list-inside list-disc">
        <h2 className="text-bold my-2 text-center underline"> Musicians </h2>
        <li>
          <strong>Songwriter, Singer, Guitarist, Producer:</strong> Sasha Bayan
        </li>
        <li>
          <strong>Bassist, Pianist, Co-Producer:</strong> Sam Suggs
        </li>
        <li>
          <strong>Drummer:</strong> Gustavo Cortiñas
        </li>
        <h2 className="text-bold my-2 text-center underline"> Production </h2>
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
  </>
);

export function TeamSection() {
  return (
    <Section
      leftContent={leftContent}
      rightContent={rightContent}
      leftBg="bg-primary"
      rightBg="bg-white"
    />
  );
}

// <div className="mt-12 text-center">
// <a href="#" className="text-blue-500 underline">
//   🔊 Listen to the full album: Sasha Bayan's "enough"
// </a>
// </div>

// <div className="mt-8 text-center">
// <h2 className="mb-4 text-2xl font-semibold">Contacts and Media</h2>
// <p>
//   <strong>Official Website:</strong>{" "}
//   <a href="#" className="text-blue-500 underline">
//     Sasha Bayan Official
//   </a>
// </p>
// <p>
//   <strong>Facebook:</strong>{" "}
//   <a href="#" className="text-blue-500 underline">
//     Sasha Bayan FB
//   </a>
// </p>
// <p>
//   <strong>Instagram:</strong>{" "}
//   <a href="#" className="text-blue-500 underline">
//     Sasha Bayan Instagram
//   </a>
// </p>
// <p>
//   <strong>Download Press Photos:</strong>{" "}
//   <a href="#" className="text-blue-500 underline">
//     Press Photo Dropbox
//   </a>
// </p>
// </div>
