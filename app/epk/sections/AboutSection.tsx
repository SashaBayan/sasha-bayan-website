import Section from "@/app/components/Section";

export function AboutSection({
  title,
  copy,
  imgSrc,
  href,
}: {
  title: string;
  copy: string | React.ReactNode;
  imgSrc: string;
  href?: string;
}) {
  return (
    <Section
      leftContent={<LeftContent title={title} copy={copy} />}
      rightContent={<RightContent imgSrc={imgSrc} href={href} />}
      leftBg="bg-white"
      rightBg="bg-[#E8E1DD]"
      reverse
    />
  );
}

function LeftContent({
  title,
  copy,
}: {
  title: string;
  copy: string | React.ReactNode;
}) {
  return (
    <div className="max-w-xl text-center sm:text-left">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      {copy}
    </div>
  );
}

function RightContent({ imgSrc, href }: { imgSrc: string; href?: string }) {
  return (
    <div className="mb-5 h-80 w-80 text-center md:h-96 md:w-96">
      {href ? (
        <>
          <a href={href} target="_blank">
            <img src={imgSrc} alt="album cover" />
            <button className="mt-5 rounded-3xl bg-white px-5 py-3 text-xl">
              Listen Now
            </button>
          </a>
        </>
      ) : (
        <img src={imgSrc} alt="album cover" />
      )}
    </div>
  );
}
