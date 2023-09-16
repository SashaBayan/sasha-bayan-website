export function NavBar() {
  return (
    <div className="sticky top-0 z-10 -mb-20 flex w-full justify-end gap-10 px-10 py-5 text-sm text-black">
      <a
        href="#home"
        className="transition-border-color cursor-pointer border-b border-transparent p-1 duration-300 hover:animate-pulse hover:border-black"
      >
        Home
      </a>
      <a
        href="#music"
        className="transition-border-color cursor-pointer border-b border-transparent p-1 duration-300 hover:animate-pulse hover:border-black"
      >
        Music
      </a>
      <a
        href="#bio"
        className="transition-border-color cursor-pointer border-b border-transparent p-1 duration-300 hover:animate-pulse hover:border-black"
      >
        Bio
      </a>
      <a
        href="#contact"
        className="transition-border-color cursor-pointer border-b border-transparent p-1 duration-300 hover:animate-pulse hover:border-black"
      >
        Contact
      </a>
    </div>
  );
}
