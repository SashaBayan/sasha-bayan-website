export function Header({
  header,
  subheader,
}: {
  header: string;
  subheader: string;
}) {
  return (
    <section className="flex w-full justify-center bg-gradient-to-br from-[white] from-50% to-[#E8E1DD] px-10 py-20">
      <div className="">
        <div className="w-full">
          <div className="max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold">{header}</h1>
            <p className="mb-8 text-xl">{subheader}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
