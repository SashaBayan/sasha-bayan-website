import Image from "next/image";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <NavBar />
    </main>
  );
}
