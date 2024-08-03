import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const middleOfViewport = window.innerHeight / 2;

      const sections = ["home", "music", "bio", "contact"];
      const sectionsDims = sections.map((sec) => getSectionDimensions(sec));

      const foundSection = sections.find((sec, index) => {
        const dims = sectionsDims[index];
        return (
          dims &&
          dims.top <= middleOfViewport &&
          dims.bottom >= middleOfViewport
        );
      });

      setActiveSection(foundSection || "");
    };

    window && window.addEventListener("scroll", throttle(handleScroll, 100));

    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};

function getSectionDimensions(sectionId: string) {
  const sectionElement = document.getElementById(sectionId);
  if (!sectionElement) return null;

  const rect = sectionElement.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
  };
}

function throttle(
  func: (...args: any[]) => void,
  limit: number,
): (...args: any[]) => void {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function (...args: any[]) {
    // @ts-ignore
    const context = this;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}
