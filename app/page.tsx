import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <NavBar />
      <IntroSection />
    </main>
  );
}
