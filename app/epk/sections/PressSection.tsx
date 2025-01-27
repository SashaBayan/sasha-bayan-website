export function PressSection({
  pressQuotes,
}: {
  pressQuotes: { quote: string; author: string; href: string; note?: string }[];
}) {
  return (
    <section
      id="press"
      className="w-full bg-gradient-to-br from-[#E8E1DD] to-white px-10 pb-10 pt-20"
    >
      <h1 className="mb-10 text-center font-glosa-display text-5xl">Press</h1>
      <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-2 lg:grid-cols-3">
        {pressQuotes.map((pq) => {
          return <PressQuote key={pq.author} {...pq} />;
        })}
      </div>
    </section>
  );
}

function PressQuote({
  author,
  quote,
  href,
  note,
}: {
  quote: string;
  author: string;
  href: string;
  note?: string;
}) {
  return (
    <div className="mb-10 max-w-md">
      <a
        href={href}
        className="block cursor-pointer text-left hover:animate-pulse"
        target="_blank"
      >
        <blockquote className="mb-2 text-2xl font-semibold">{quote}</blockquote>
        <cite className="text-xl font-bold"> - {author}</cite>
        <p>{note}</p>
      </a>
    </div>
  );
}
