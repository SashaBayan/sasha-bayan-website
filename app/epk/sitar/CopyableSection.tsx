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
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {/* Title and CTA */}
      <div className="md:items-left col-span-1 flex flex-col items-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          onClick={handleCopy}
          className="mt-2 text-sm text-blue-500 hover:underline"
          aria-label={`Copy ${title}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Bio Content */}
      <div className="col-span-2 flex flex-col gap-2 text-sm">
        {visibleContent.map((paragraph, idx) => (
          <p className="text-gray-700" key={idx}>
            {paragraph}
          </p>
        ))}

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
