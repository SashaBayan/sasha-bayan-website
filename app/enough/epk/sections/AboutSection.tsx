import Section from "@/app/components/Section";

const LeftContent = (
  <>
    <h2 className="mb-4 text-2xl font-semibold">About The Album</h2>
    <p className="mb-4">
      This album isn't just a collection of songs—it's a narrative journey of 11
      tracks that investigates intimate questions of enoughness in love and
      life.
    </p>
    <p>
      Conceived and nurtured over a period of two years, the album "enough" is
      Sasha Bayan's latest project, reflecting a musical journey reminiscent of
      artists like Sufjan Stevens and Andrew Bird.
    </p>
  </>
);

const RightContent = <img src="/album-cover.jpeg" alt="album cover" />;

export function AboutSection() {
  return (
    <Section
      leftContent={LeftContent}
      rightContent={RightContent}
      leftBg="bg-white"
      rightBg="bg-[#E8E1DD]"
    />
  );
}
