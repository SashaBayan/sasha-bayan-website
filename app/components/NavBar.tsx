import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex w-full justify-end px-10 py-5 text-sm text-black">
      <div className="hidden gap-10 md:flex">
        <div className="hover:animate-pulse">
          <a href="#home" className="cursor-pointer ">
            Home
          </a>
        </div>
        <a
          href="#music"
          className="cursor-pointer border-black hover:animate-pulse hover:border-b"
        >
          Music
        </a>
        <a href="#bio" className="cursor-pointer hover:animate-pulse">
          Bio
        </a>
        <a href="#contact" className="cursor-pointer hover:animate-pulse">
          Contact
        </a>
      </div>
    </div>
  );
}
