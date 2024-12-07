const videoIds = [
  "2_9VJpwKGZ4",
  "lTLSTv-XCuk",
  "QsuwC9MBVTg",
  "XwyrG8QX5tA",
  "TgZ9Eq2G4dM",
  "ycoErhyEqbQ",
];

export function VideoSectionEPK() {
  return (
    <section className="flex flex-col items-center gap-10 px-10 py-20">
      {/* Section Header */}
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-semibold">Watch</h2>
      </div>

      {/* Video Grid */}
      <div className="flex flex-wrap justify-center gap-5">
        {videoIds.map((videoId) => (
          <iframe
            key={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            width="260"
            height="150"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow-full-screen"
            allowFullScreen
          />
        ))}
      </div>
    </section>
  );
}
