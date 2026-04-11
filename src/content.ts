/** Replace placeholders as you write real copy. */
export const site = {
  name: "Sneha Reddy",
  tagline: "Graduate Student · AI and Machine Learning · Purdue University",
  email: "snehareddyhs@gmail.com",
  /** Put your headshot in public/ with this filename (or change the path). */
  aboutPhotoSrc: "/pic.jpeg",
  social: {
    github: "https://github.com/sneha-yb",
    linkedin: "https://www.linkedin.com/in/snehareddypalreddy",
  },
};

export type MainTab = "about" | "academic" | "fun";

export const mainTabs: { id: MainTab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "academic", label: "Academic" },
  { id: "fun", label: "Fun" },
];

export const placeholders = {
  about:
    "Hey there! I’m a grad student at Purdue diving into AI and machine learning — basically teaching machines patterns while I chase my own off-screen ones. When I’m not debugging a model, I’m probably on my feet: I’m a pro dancer and music is my default language (if you see me nodding at nothing, there’s a playlist involved). I’m happiest when I’m learning something I knew nothing about yesterday — new tools, new cities, new rabbit holes — so if it sounds slightly unhinged but interesting, I’m already halfway there.",
  projectsIntro:
    "One line on your projects — coursework, research code, side builds. Set the stage here.",
  projectCards: [
    {
      title: "Project A",
      blurb: "One or two sentences. What did you build or explore?",
    },
    {
      title: "Project B",
      blurb: "Another repo or team project — swap for real titles later.",
    },
    {
      title: "Project C",
      blurb: "Optional third card — hackathon, class, or experiment.",
    },
    {
      title: "Project C",
      blurb: "Optional third card — hackathon, class, or experiment.",
    },
    {
      title: "Project C",
      blurb: "Optional third card — hackathon, class, or experiment.",
    },
  ],
  teaching: [
    { role: "Course name", term: "Term · Year", note: "TA, grader, or student — add detail later." },
    { role: "Workshop or reading group", term: "Ongoing", note: "Placeholder for informal teaching." },
  ],
  fun: {
    intro:
      "Space for hobbies, playlists, reading lists, photos, or anything that isn’t strictly academic — fill this in when you’re ready.",
    extras: [
      { title: "Extra thing one", detail: "Placeholder: e.g. a club, sport, or creative outlet." },
      { title: "Extra thing two", detail: "Placeholder: favorite books, games, or travel notes." },
      { title: "Extra thing three", detail: "Placeholder: link out to a gallery or blog." },
    ],
  },
};
