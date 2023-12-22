import Section from "@/app/components/Section";
import Image from "next/image";

const leftContent = (
  <div className="flex-wrap">
    <div className="mb-10 flex justify-center">
      <div className="relative h-80 w-80 grayscale">
        <Image alt="sasha bayan" fill src="/white-sasha-guitar-2.png" />
      </div>
    </div>
    <div className="m flex flex-wrap justify-center grayscale lg:flex-nowrap lg:justify-between">
      <div className="relative h-64 w-64">
        <Image alt="sam suggs" fill src="/white-sam-suggs.png" />
      </div>
      <div className="relative h-64 w-64">
        <Image alt="gustavo cortinas" fill src="/white-gustavo-cortinas.png" />
      </div>
    </div>
  </div>
);

const rightContent = (
  <>
    <div className="flex flex-col items-center gap-2">
      <h2 className="mb-4 text-2xl font-semibold">The Team Behind The Music</h2>
      <p className="mb-2 max-w-md text-center">
        The album involved an ensemble of world-class artists and engineers who
        each contributed their creative genius.
      </p>
      <TeamLists />
    </div>
  </>
);

export function TeamSection() {
  return (
    <Section
      leftContent={leftContent}
      rightContent={rightContent}
      leftBg="bg-primary"
      rightBg="bg-white"
    />
  );
}

interface TeamMemberProps {
  role: string;
  name: string;
  website: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ role, name, website }) => (
  <li>
    <a
      className="hover:animate-pulse"
      href={website}
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>{role}:</strong> {name}
    </a>
  </li>
);

interface TeamListProps {
  category: string;
  members: TeamMemberProps[];
}

const TeamList: React.FC<TeamListProps> = ({ category, members }) => (
  <div>
    <h2 className="text-bold my-2 text-center underline">{category}</h2>
    <ul className="list-inside list-disc">
      {members.map((member, index) => (
        <TeamMember
          key={index}
          role={member.role}
          name={member.name}
          website={member.website}
        />
      ))}
    </ul>
  </div>
);

export function TeamLists() {
  const musicians = [
    {
      role: "Songwriter, Singer, Guitarist, Producer",
      name: "Sasha Bayan",
      website: "https://sashabayan.com",
    },
    {
      role: "Bassist, Pianist, Co-Producer",
      name: "Sam Suggs",
      website: "https://samsuggs.com",
    },
    {
      role: "Drummer",
      name: "Gustavo Cortiñas",
      website: "https://gustavocortinasmusic.com",
    },
  ];

  const production = [
    {
      role: "Mix Engineer",
      name: "Javier Veldeavellano",
      website: "https://javillano.com/",
    },
    {
      role: "Mastering Engineer",
      name: "JP Berreondo",
      website: "https://asonicworld.com/",
    },
    {
      role: "Recording Engineer",
      name: "Scott Steinman",
      website: "https://studiomediarecording.com/music.html",
    },
    {
      role: "Production Consultant",
      name: "Kitt Lyles",
      website: "https://www.kittlylesmusic.com/",
    },
  ];

  return (
    <div>
      <TeamList category="Musicians" members={musicians} />
      <TeamList category="Production" members={production} />
    </div>
  );
}
