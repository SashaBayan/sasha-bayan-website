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
  return (
    <section
      className={`flex w-full flex-wrap items-center justify-between ${
        reverse ? "flex-col-reverse sm:flex-row" : ""
      }`}
    >
      {/* left side */}
      <div
        className={`flex w-full flex-col items-center ${leftBg} px-10 py-20 sm:w-1/2`}
      >
        <div className="max-w-xl text-center sm:text-left">{leftContent}</div>
      </div>

      {/* right side */}
      <div
        className={`flex w-full items-center justify-center sm:h-full ${rightBg} py-20 sm:w-1/2`}
      >
        {rightContent}
      </div>
    </section>
  );
}

export default Section;
