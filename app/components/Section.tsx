import { ReactNode } from "react";

interface SectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftBg?: string;
  rightBg?: string;
}

function Section({
  leftContent,
  rightContent,
  leftBg = "bg-white",
  rightBg = "bg-[#E8E1DD]",
}: SectionProps) {
  return (
    <section className="flex w-full flex-wrap items-center justify-between">
      {/* left side */}
      <div
        className={`flex w-full flex-col items-center ${leftBg} px-10 py-20 sm:w-1/2`}
      >
        <div className="max-w-xl text-center sm:text-left">{leftContent}</div>
      </div>

      {/* right side */}
      <div className={`flex w-full justify-center ${rightBg} py-20 sm:w-1/2`}>
        <div className="h-96 w-96">{rightContent}</div>
      </div>
    </section>
  );
}

export default Section;
