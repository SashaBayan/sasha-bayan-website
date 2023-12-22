import Section from "@/app/components/Section";

export function AboutSection({
  title,
  copy,
  imgSrc,
}: {
  title: string;
  copy: string | React.ReactNode;
  imgSrc: string;
}) {
  return (
    <Section
      leftContent={<LeftContent title={title} copy={copy} />}
      rightContent={<RightContent imgSrc={imgSrc} />}
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

function RightContent({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="h-80 w-80 md:h-96 md:w-96">
      <img src={imgSrc} alt="album cover" />
    </div>
  );
}
