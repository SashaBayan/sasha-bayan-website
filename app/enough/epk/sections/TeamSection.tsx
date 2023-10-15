import Section from "@/app/components/Section";

const leftContent = (
  <>
    <h2>The Team Behind the Album</h2>
    <p>
      The album involved an ensemble of world-class artists and engineers who
      each contributed their creative genius.
    </p>
  </>
);

const rightContent = (
  <>
    <div>
      <h2 className="mb-4 text-2xl font-semibold">The Team Behind The Album</h2>
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
