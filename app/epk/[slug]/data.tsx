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

interface PressQuoteDictionary {
  [key: string]: PressQuote[];
}
const pressQuoteDictionary: PressQuoteDictionary = {
  falling: [],
  lucid: [],
  wandering: [],
  montreux: [
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
  geneva: [],
  memories: [],
  boundless: [],
  maybe: [],
  gone: [],
  tomorrow: [],
  enough: [
    {
      author: "Clout",
      quote:
        "a thoughtful and nuanced artist who’s eclectic sound and introspective lyrics set him apart",
      href: "https://cloutcloutclout.com/new-music/sacha-bayan-lucid/",
    },
    {
      author: "Rock The Pigeon",
      quote:
        "...a dreamy environment where listeners can fall in love with the sounds of Sasha Bayan",
      href: "https://rockthepigeon.com/2023/12/18/exploring-love-and-loss-sasha-bayans-montreux-takes-listeners-on-a-dreamy-musical-journey/",
    },
    {
      author: "Obscure Sound",
      quote: "...full of gripping sequences and heart-on-sleeve introspection",
      href: "https://www.obscuresound.com/2024/01/sasha-bayan-tomorrow/",
    },
  ],
};

function createEPK({
  title,
  copy,
  subheader,
  songHref,
}: {
  title: string;
  copy: string;
  subheader: string;
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
    pressQuotes: pressQuoteDictionary[title],
  };
}

export const epks: EPKs = {
  falling: createEPK({
    title: "falling",
    subheader: "Delving into the Depths of Love and Dependence",
    copy: `"falling," a captivating new single by Sasha Bayan, immerses listeners in the intense dynamics of love and emotional dependency. Featured in the album 'enough', this track articulates the profound struggle of being entangled in a relationship that both comforts and confines. It traverses the emotional landscape of returning to a love that's both familiar and fraught with complexity. Bayan's powerful vocals, combined with a deep, stirring melody, evoke the internal conflict of a heart torn between staying and leaving. The poignant lines reflect a soul caught in the gravitational pull of a past relationship, struggling with the realization that sometimes love is not enough. "falling" is a poignant and resonant addition to Bayan's discography, showcasing his deft ability to translate intricate emotional experiences into profound musical expressions.`,
    songHref:
      "https://open.spotify.com/track/3FjsL7AWVENz8DNyfhy1bX?si=6280ee3d4b7645d2",
  }),
  lucid: createEPK({
    title: "lucid",
    subheader: "A Surreal Odyssey Through Dreams and Reality",
    copy: `"lucid," an ethereal and introspective single by Sasha Bayan, takes listeners on a journey through the blurry lines between dreams and reality. Part of the album 'enough', this track explores the intense yearning for connection and the turmoil of internal conflicts. With its evocative lyrics, the song delves into the realm of lucid dreaming, where longing and liberation collide. Bayan's haunting vocals and the atmospheric melody create a surreal soundscape, echoing the song's exploration of unfulfilled desires and the quest for understanding. The narrative of 'Lucid' oscillates between the tangible and the ethereal, reflecting the struggle to distinguish between what is real and what is imagined. This track stands as a captivating and profound piece in Bayan's collection, highlighting his unique ability to craft music that resonates with the listener's deepest emotions and thoughts.`,
    songHref:
      "https://open.spotify.com/track/5cDxDU9hcm69DXQi6lbreG?si=434dd0fcf6ed430b",
  }),
  wandering: createEPK({
    title: "wandering",
    subheader: "A Poetic Exploration of Regret and Self-Discovery",
    copy: `"wandering," the latest evocative single from Sasha Bayan, delves into the nuances of self-reflection and the aftermath of change. This song, from the album 'enough', captures the turmoil of grappling with past decisions and the identity shifts they bring. The track paints a vivid picture of introspection, examining the duality of freedom and loss in the wake of leaving a significant relationship. Bayan's thoughtful vocals, layered over a rich, reflective melody, explore the theme of looking back with regret and forward with uncertainty. The lyrics subtly reveal the challenges of moving on while still entangled in the shadows of what was. "wandering" stands as a profound and introspective piece in Bayan's discography, showcasing his skill in articulating complex emotional landscapes through his music.`,
    songHref:
      "https://open.spotify.com/track/3FjsL7AWVENz8DNyfhy1bX?si=5aac5b678aae4d8a",
  }),
  montreux: createEPK({
    title: "montreux",
    subheader: "A Dreamy Dive into Love and Longing",
    copy: `\"montreux,\" the latest single by Sasha Bayan, is an emotive indie rock piece from his upcoming album 'enough'. Set against a dreamy pop backdrop, it explores love, loss, and introspection with poetic lyrics and melodic sounds. Bayan's soft vocals and rich instrumentation create a melancholic yet captivating aura, inviting listeners into a deeply personal narrative. This track showcases Bayan's songwriting prowess and emotional depth, making it a memorable addition to his discography.`,
    songHref:
      "https://open.spotify.com/track/5d44f8CfonDtMgNTPRuie4?si=864ea7d5856c4558",
  }),
  geneva: createEPK({
    title: "geneva",
    subheader: "An Intimate Embrace of Nature and Self",
    copy: `"geneva," a mesmerizing single by Sasha Bayan, explores the profound connection between the self and the natural world. Featured in the album 'enough', this track paints a vivid picture of immersion in the raw beauty of nature, symbolized by the chilling waters of Geneva. The lyrics weave a narrative of surrender and rejuvenation, as the protagonist finds solace and transformation in the embrace of the natural elements. Bayan's soulful vocals, accompanied by the subtle yet profound instrumentation, capture the serene yet intense experience of becoming one with the environment. The repeated refrain, 'Geneva, my body is yours alone,' echoes a deep reverence and a sense of belonging to something greater than oneself. "geneva" is a tranquil yet powerful addition to Bayan's discography, showcasing his ability to evoke deep emotional responses through his music and lyrics.`,
    songHref:
      "https://open.spotify.com/track/3oHfPbPGSM9TaKT7AlY45b?si=83590e7cf0ad466c",
  }),
  memories: createEPK({
    title: "memories",
    subheader: "A Surreal Tapestry of Sound and Memory",
    copy: `"memories," a captivating and ethereal track by Sasha Bayan, blends reversed vocals with instrumental melodies to create an immersive soundscape. Featured in the album 'enough', this piece stands out for its innovative use of sonic textures that evoke the sensation of delving into a dreamlike state of reminiscence. The track's reversed vocal elements add a layer of mystique and introspection, inviting listeners to interpret their own meanings from the abstract sounds. The climax of the reversed section transitions into a clear, poignant piano solo, echoing a melodic motif prevalent throughout the album. This shift represents a moment of lucidity amidst the swirl of memories. "memories" is a masterful fusion of vocal and instrumental storytelling, showcasing Bayan's ability to push musical boundaries and create an experience that resonates deeply with the themes of reflection and nostalgia.`,
    songHref:
      "https://open.spotify.com/track/3V7d9KWmIDYhjXziyHiOk3?si=0d2f04947fff4753",
  }),
  boundless: createEPK({
    title: "boundless",
    subheader: "A Poignant Tale of Love and Sacrifice",
    copy: `"boundless," a compelling single by Sasha Bayan, delves into the depths of selfless love and the complexities of commitment. Featured in the album 'enough', this track explores the intensity of a love that pushes boundaries and faces challenges head-on. The song narrates a journey of devotion, resilience, and the sometimes painful realization that love involves both giving and letting go. Bayan's emotive vocals and the song's dynamic composition convey the turmoil and strength found in a love that knows no bounds. The lyrics, 'I see the walls surround us / The only way out is through / Know that my love is boundless for you', capture the essence of a love that is both enduring and transformative. "boundless" is a powerful and introspective addition to Bayan's discography, showcasing his talent for expressing the multifaceted nature of human relationships through his music.`,
    songHref:
      "https://open.spotify.com/track/1MsejyGbIZwH1VysdAhzHu?si=fab680839410423a",
  }),
  maybe: createEPK({
    title: "maybe",
    subheader: "Navigating the Echoes of Past Decisions",
    copy: `"maybe," the latest introspective single from Sasha Bayan, explores the theme of feeling anchored in the past while facing the present. Part of the album 'enough', this alternative rock track subtly navigates the complexities of choices and their lasting imprints on our lives. The song masterfully conveys the sensation of being caught in a cycle of reflection, where memories and what-ifs intertwine. Bayan's emotive vocals, paired with a deeply resonant melody, create a landscape of introspection and longing. The narrative of the song encapsulates the struggle with indecision and the yearning for progress, making "maybe" a compelling and relatable addition to Bayan's discography. Its thoughtful composition and lyrical depth showcase Bayan's talent for crafting music that deeply resonates with the listener's own experiences and reflections.`,
    songHref:
      "https://open.spotify.com/track/7FtY3BuUSe4nHQwtC7HY76?si=d41a93a7bd254801",
  }),
  gone: createEPK({
    title: "gone",
    subheader: "A Reflective Journey on Love Lost and Lessons Learned",
    copy: `"gone," an evocative single by Sasha Bayan, captures the poignant experience of reflecting on a past relationship and the realization of its end. Featured in the album 'enough', this track delves into the memories of what was once shared and the acceptance of its conclusion. The song's narrative is a contemplative look at the cyclical nature of love and loss, acknowledging the growth and pain that come from such profound connections. Bayan's introspective vocals and the song's reflective melody convey a sense of finality mixed with a bittersweet understanding. The lyrics, 'Looking back, moving on / All we had and all we were is gone', resonate with anyone who has experienced the end of a meaningful relationship, highlighting the dual nature of mourning and evolving. "gone" is a resonant and touching addition to Bayan's discography, showcasing his ability to weave complex emotional themes into his music.`,
    songHref:
      "https://open.spotify.com/track/4qK1QW2wwVogcgwqYQc3HE?si=8decaea3cd954398",
  }),
  tomorrow: createEPK({
    title: "tomorrow",
    subheader: "An Introspective Journey Through Heartache and Hope",
    copy: `"tomorrow," a poignant new single by Sasha Bayan, captures the essence of moving through grief and clinging to hope. Featured in the album 'enough', this track weaves a narrative that resonates with anyone who has navigated the complex emotions of loss and recovery. The song delves into the theme of saying goodbye to the past, all while holding onto the faint promise of a brighter day. Bayan's haunting vocals and the emotive melody bring to life the poignant imagery of an empty home filled with memories and the struggle to let go. The recurring theme, subtly suggesting that each new day brings a chance for healing, underpins the song's emotional depth. "tomorrow" is a testament to Bayan's ability to explore the delicate balance between sorrow and hope, making it a moving and memorable track in his collection.`,
    songHref:
      "https://open.spotify.com/track/4ItHwLmzlIyICDMPFJJ6HP?si=fe52f40c14634887",
  }),
  enough: createEPK({
    title: "enough",
    subheader:
      "A deeply introspective album that explores love, self-worth, grief, and acceptance.",
    // subheader: "Navigating Life's Labyrinth: Love, Loss, and the Quest for Self",
    copy: `Sasha Bayan's "enough" is an intricate musical narrative, composed of 11 tracks that journey through the complexities of human emotion. Spanning themes from the fragile threads of love to the poignant pains of grief and the gradual acceptance of life's imperfections, this album is a reflective and deeply personal exploration. Crafted over two years, each song is a vignette, capturing moments of introspection, self-doubt, and the epiphanies that come with growth. Bayan's compelling blend of indie rock and ethereal melodies, combined with his introspective lyrics, creates a resonant soundscape that echoes the works of Sufjan Stevens and Andrew Bird, yet stands distinct in its introspection and honesty. "enough" is a musical odyssey that invites listeners to confront their own questions of self-worth and connection, making it not just a collection of songs, but a journey of emotional discovery.`,
    // copy: `This album isn't just a collection of songs—it's a narrative journey of 11 tracks that investigates intimate questions of enoughness in love and life. Conceived and nurtured over a period of two years, the album "enough" is Sasha Bayan's latest project, reflecting a musical journey reminiscent of the works of artists like Sufjan Stevens and Andrew Bird.`,

    songHref:
      "https://open.spotify.com/album/70xurRaRvInn6h7KL07GcT?si=xQva3HReSV6fLg7goLaMxQ",
  }),
};
