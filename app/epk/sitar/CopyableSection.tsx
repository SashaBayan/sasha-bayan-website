import { BsClipboard2, BsClipboard2CheckFill } from "react-icons/bs";
import { useState } from "react";

interface CopyableSectionProps {
  title: string;
  content: string;
}

export function CopyableSection({ title, content }: CopyableSectionProps) {
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paragraphs = content.split("\n").filter((p) => p.trim() !== ""); // Ensure no empty paragraphs
  const visibleContent = showAll ? paragraphs : paragraphs.slice(0, 1); // Show either all paragraphs or the first one

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-3 flex items-center space-x-2 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          className="mb-1 flex items-center text-gray-500 hover:text-gray-800"
          onClick={handleCopy}
          aria-label={`Copy ${title}`}
        >
          {copied ? (
            <BsClipboard2CheckFill size={20} className="text-green-500" />
          ) : (
            <BsClipboard2 size={20} />
          )}
        </button>
        <span
          className={`ml-2 text-sm font-medium transition-opacity duration-200 ${
            copied ? "text-green-500 opacity-100" : "opacity-0"
          }`}
        >
          Copied!
        </span>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        {/* Render visible paragraphs */}
        {visibleContent.map((paragraph, idx) => (
          <p className="text-gray-700" key={idx}>
            {paragraph}
          </p>
        ))}

        {/* Toggle button for expandable content */}
        {paragraphs.length > 1 && (
          <button
            className="mt-2 text-sm text-blue-500 hover:underline"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
}
