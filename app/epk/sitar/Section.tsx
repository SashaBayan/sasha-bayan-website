import React, { ReactNode } from "react";

interface SectionProps {
  leftContent: ReactNode; // Content for the left section
  rightContent: ReactNode; // Content for the right section
  reverse?: boolean; // Whether to reverse the layout
  id?: string; // Optional ID for the section
}

export function Section({
  leftContent,
  rightContent,
  reverse = false,
  id,
}: SectionProps) {
  return (
    <section id={id} className="flex w-full flex-wrap justify-around bg-white">
      {/* Mobile order */}
      <div
        className={`flex w-full flex-col py-20 sm:w-1/2 ${
          reverse ? "sm:order-last" : "sm:order-first"
        }`}
      >
        {leftContent}
      </div>

      <div
        className={`flex w-full flex-col bg-[#E8E1DD] py-20 sm:w-1/2 ${
          reverse ? "sm:order-first" : "sm:order-last"
        }`}
      >
        {rightContent}
      </div>
    </section>
  );
}
