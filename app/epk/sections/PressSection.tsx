export function PressSection({
  pressQuotes,
}: {
  pressQuotes: { quote: string; author: string; href: string }[];
}) {
  return (
    <section className="flex w-full justify-center bg-gradient-to-br from-[#E8E1DD] to-white px-10 pb-10 pt-20">
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
}: {
  quote: string;
  author: string;
  href: string;
}) {
  return (
    <div className="mb-10 max-w-md">
      <a
        href={href}
        className="block cursor-pointer text-left hover:animate-pulse"
      >
        <blockquote className="text-2xl font-semibold">{quote}</blockquote>
        <cite className="text-xl font-bold"> - {author}</cite>
      </a>
    </div>
  );
}
