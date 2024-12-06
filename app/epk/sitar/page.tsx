import { Header } from "../sections/Header";
import { Section } from "./Section";

export default function SitarEPKPage() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-start scroll-smooth ">
        <Header
          header={"Sasha Bayan"}
          subheader={"Classically trained sitarist, composer, and improviser"}
        />
        <Section
          leftContent={<div className="flex justify-center">holler</div>}
          rightContent={<div> baller</div>}
        />
        <Section
          reverse
          leftContent={<div className="flex justify-center">holler</div>}
          rightContent={<div> baller</div>}
        />
      </main>
    </>
  );
}
