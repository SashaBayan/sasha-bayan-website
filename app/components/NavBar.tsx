"use client";
import { useActiveSection } from "../hooks/useActiveSection";
const sections = ["home", "music", "bio", "contact"];

export function NavBar() {
  const activeSection = useActiveSection();
  return (
    <div className="sticky top-0 z-10 -mb-20 flex w-full justify-between bg-[#E8E1DD] px-5 py-5 text-sm text-black">
      <Link href="#home">
        <h4 className="flex items-center text-sm font-thin uppercase tracking-widest">
          Sasha Bayan
        </h4>
      </Link>
      <div className="flex gap-5 sm:gap-10">
        {sections.map((section) => (
          <Link
            key={section}
            isActive={activeSection === section}
            href={`#${section}`}
          >
            {section}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Link({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <a
      href={href}
      className={`transition-border-color cursor-pointer border-b p-1 capitalize duration-700 hover:animate-pulse hover:border-black ${
        isActive ? "border-b !border-black" : "border-transparent"
      }`}
    >
      {children}
    </a>
  );
}
