interface PressQuote {
  author: string;
  quote: string;
  href: string;
  note?: string;
}

interface AboutSection {
  title: string;
  imgSrc: string;
  copy: string;
  songHref?: string;
}

interface EPK {
  title: string;
  header: string;
  subheader: string;
  about: AboutSection;
  pressQuotes: PressQuote[];
}

interface EPKs {
  [key: string]: EPK;
}

export const epks: EPKs = {
  enough: {
    title: 'Sasha Bayan - "enough"',
    header: 'Sasha Bayan presents "enough"',
    subheader:
      "A deeply introspective album that explores love, self-worth, grief, and acceptance.",
    about: {
      title: "About the album",
      imgSrc: "/album-cover.jpeg",
      copy: `This album isn't just a collection of songs—it's a narrative journey of 11 tracks that investigates intimate questions of enoughness in love and life. Conceived and nurtured over a period of two years, the album "enough" is Sasha Bayan's latest project, reflecting a musical journey reminiscent of the works of artists like Sufjan Stevens and Andrew Bird.`,
    },
    pressQuotes: [],
  },
  montreux: {
    title: 'Sasha Bayan - "montreux"',
    header: 'Sasha Bayan presents "montreux"',
    subheader: "A Dreamy Dive into Love and Longing",
    about: {
      title: "About the Single",
      imgSrc: "/montreux-cover.jpg",
      copy: `\"montreux,\" the latest single by Sasha Bayan, is an emotive indie rock piece from his upcoming album 'enough'. Set against a dreamy pop backdrop, it explores love, loss, and introspection with poetic lyrics and melodic sounds. Bayan's soft vocals and rich instrumentation create a melancholic yet captivating aura, inviting listeners into a deeply personal narrative. This track showcases Bayan's songwriting prowess and emotional depth, making it a memorable addition to his discography.`,
      songHref: "https://open.spotify.com/artist/2cwKhNJE0AFNVtYKhHAgMc",
    },
    pressQuotes: [
      {
        author: "Rock The Pigeon",
        quote:
          "...a dreamy environment where listeners can fall in love with the sounds of Sasha Bayan",
        href: "https://rockthepigeon.com/2023/12/18/exploring-love-and-loss-sasha-bayans-montreux-takes-listeners-on-a-dreamy-musical-journey/",
      },
      {
        author: "Yellow & Black",
        quote:
          "Sasha Bayan...has recently landed on our radar with his single, “montreux,” and it seems we can’t get enough of it. The song is a great experience from start to finish and will leave stuck on constant repeat for days.",
        href: "https://yellowblackmusic.com/2023/11/27/sasha-bayan-montreux/",
      },
      {
        author: "Para Pop",
        quote:
          "“montreux” takes listeners into a world brimming with emotions, where every word and note carries weight and meaning...Sasha Bayan effortlessly leaves a profound and lasting impression on the audience with this song.",
        href: "https://parapop.net/sasha-bayan-montreux/",
        note: "(translated from Indonesian)",
      },
    ],
  },
  // ... other EPKs ...
};
