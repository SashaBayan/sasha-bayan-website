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
  enough: createEPK({
    title: "enough",
    subheader:
      "A deeply introspective album that explores love, self-worth, grief, and acceptance.",
    copy: `This album isn't just a collection of songs—it's a narrative journey of 11 tracks that investigates intimate questions of enoughness in love and life. Conceived and nurtured over a period of two years, the album "enough" is Sasha Bayan's latest project, reflecting a musical journey reminiscent of the works of artists like Sufjan Stevens and Andrew Bird.`,
  }),
  montreux: createEPK({
    title: "montreux",
    subheader: "A Dreamy Dive into Love and Longing",
    copy: `\"montreux,\" the latest single by Sasha Bayan, is an emotive indie rock piece from his upcoming album 'enough'. Set against a dreamy pop backdrop, it explores love, loss, and introspection with poetic lyrics and melodic sounds. Bayan's soft vocals and rich instrumentation create a melancholic yet captivating aura, inviting listeners into a deeply personal narrative. This track showcases Bayan's songwriting prowess and emotional depth, making it a memorable addition to his discography.`,
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
  }),
  maybe: createEPK({
    title: "maybe",
    subheader: "Navigating the Echoes of Past Decisions",
    copy: `"maybe," the latest introspective single from Sasha Bayan, explores the theme of feeling anchored in the past while facing the present. Part of the album 'enough', this alternative rock track subtly navigates the complexities of choices and their lasting imprints on our lives. The song masterfully conveys the sensation of being caught in a cycle of reflection, where memories and what-ifs intertwine. Bayan's emotive vocals, paired with a deeply resonant melody, create a landscape of introspection and longing. The narrative of the song encapsulates the struggle with indecision and the yearning for progress, making "maybe" a compelling and relatable addition to Bayan's discography. Its thoughtful composition and lyrical depth showcase Bayan's talent for crafting music that deeply resonates with the listener's own experiences and reflections.`,
  }),
  tomorrow: createEPK({
    title: "tomorrow",
    subheader: "An Introspective Journey Through Heartache and Hope",
    copy: `"tomorrow," a poignant new single by Sasha Bayan, captures the essence of moving through grief and clinging to hope. Featured in the album 'enough', this track weaves a narrative that resonates with anyone who has navigated the complex emotions of loss and recovery. The song delves into the theme of saying goodbye to the past, all while holding onto the faint promise of a brighter day. Bayan's haunting vocals and the emotive melody bring to life the poignant imagery of an empty home filled with memories and the struggle to let go. The recurring theme, subtly suggesting that each new day brings a chance for healing, underpins the song's emotional depth. "tomorrow" is a testament to Bayan's ability to explore the delicate balance between sorrow and hope, making it a moving and memorable track in his collection.`,
  }),
  wandering: createEPK({
    title: "wandering",
    subheader: "A Poetic Exploration of Regret and Self-Discovery",
    copy: `"wandering," the latest evocative single from Sasha Bayan, delves into the nuances of self-reflection and the aftermath of change. This song, from the album 'enough', captures the turmoil of grappling with past decisions and the identity shifts they bring. The track paints a vivid picture of introspection, examining the duality of freedom and loss in the wake of leaving a significant relationship. Bayan's thoughtful vocals, layered over a rich, reflective melody, explore the theme of looking back with regret and forward with uncertainty. The lyrics subtly reveal the challenges of moving on while still entangled in the shadows of what was. "wandering" stands as a profound and introspective piece in Bayan's discography, showcasing his skill in articulating complex emotional landscapes through his music.`,
  }),
  // ... other songs ...
};

function createEPK({
  title,
  copy,
  subheader,
  pressQuotes = [],
  songHref,
}: {
  title: string;
  copy: string;
  subheader: string;
  pressQuotes?: PressQuote[];
  songHref?: string;
}): EPK {
  return {
    title: `Sasha Bayan - "${title}"`,
    header: `Sasha Bayan presents "${title}"`,
    subheader: subheader,
    about: {
      title: title === "enough" ? "About the Album" : "About the Music",
      imgSrc: `/artwork/${title}.jpg`,
      copy,
      songHref,
    },
    pressQuotes,
  };
}
