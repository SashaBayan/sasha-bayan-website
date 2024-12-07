"use client";
import { useState } from "react";

const videoIds = [
  "2_9VJpwKGZ4",
  "lTLSTv-XCuk",
  "QsuwC9MBVTg",
  "XwyrG8QX5tA",
  "TgZ9Eq2G4dM",
  "ycoErhyEqbQ",
];

export function VideoSectionEPK() {
  const [showAll, setShowAll] = useState(false);

  // Control which videos are shown based on the toggle
  const visibleVideos = showAll ? videoIds : videoIds.slice(0, 3);

  return (
    <section className="flex flex-col items-center gap-5">
      {/* Section Header */}
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-semibold">Watch</h2>
      </div>

      {/* Video Grid */}
      <div className="flex flex-wrap justify-center gap-5">
        {visibleVideos.map((videoId) => (
          <iframe
            key={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            width="260"
            height="150"
            title={`YouTube video ${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>

      {/* Show All Toggle */}
      {videoIds.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-sm text-blue-500 hover:underline"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      )}
    </section>
  );
}
