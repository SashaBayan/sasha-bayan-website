export function StatsSection({ stats }: { stats: string[] }) {
  return (
    <section className="w-full bg-gradient-to-br from-[#E8E1DD] to-white px-10 pb-10 pt-20">
      <h1 className="mb-10 text-center font-glosa-display text-5xl">Stats</h1>
      <div className="flex justify-center">
        {stats.map((stat) => {
          return (
            <div
              className="bold  w-full justify-center text-center text-2xl"
              key={stat}
            >
              {stat}
            </div>
          );
        })}
      </div>
    </section>
  );
}
