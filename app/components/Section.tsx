import { ReactNode } from "react";

interface SectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftBg?: string;
  rightBg?: string;
  reverse?: boolean;
}

function Section({
  leftContent,
  rightContent,
  leftBg = "bg-white",
  rightBg = "bg-[#E8E1DD]",
  reverse,
}: SectionProps) {
  const sideClasses = "flex w-full flex-col items-center px-10 py-20 sm:w-1/2";
  return (
    <section
      className={`flex w-full flex-wrap items-center justify-between ${
        reverse ? "flex-col-reverse sm:flex-row" : ""
      }`}
    >
      {/* left side */}
      <div className={`${sideClasses} ${leftBg}`}>{leftContent}</div>

      {/* right side */}
      <div className={`${sideClasses} ${rightBg}`}>{rightContent}</div>
    </section>
  );
}

export default Section;
