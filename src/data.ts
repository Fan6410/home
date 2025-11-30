// src/data.ts

// BASE = "/" in dev (npm run dev)
// BASE = "/Portfolio/" when built for GitHub Pages (via vite.config.ts)
const BASE = import.meta.env.BASE_URL;

// Folder shortcut for the ZONE project images
const ZONE = `${BASE}projects/ZONE/`;

// ───────────────────────────────────────────────
// TYPES
// ───────────────────────────────────────────────

export type ProjectBlock =
  | { type: "vertical"; url: string }
  | { type: "horizontal"; urls: string[] };

export interface Project {
  id: string;
  category: "uiux" | "visual" | "product";
  title: string;
  desc: string;
  coverImage: string;
  blocks: ProjectBlock[];
  date: string;
  toolStack: string[];
}

// ───────────────────────────────────────────────
// DATA
// ───────────────────────────────────────────────

export const projectsData: Project[] = [
  {
    id: "zone",
    category: "uiux",
    title: "ZONE",
    desc: "It is time for a brand new social APP",
    coverImage: `${ZONE}zonecover.jpg`,

    blocks: [
      { type: "vertical", url: `${ZONE}zone01.jpg` },
      { type: "vertical", url: `${ZONE}zone02.jpg` },
      { type: "vertical", url: `${ZONE}zone03.jpg` },

      {
        type: "horizontal",
        urls: [`${ZONE}zone04.jpg`],
      },

      { type: "vertical", url: `${ZONE}zone04-1.jpg` },

      {
        type: "horizontal",
        urls: [`${ZONE}zone05.jpg`],
      },

      { type: "vertical", url: `${ZONE}zone05-1.jpg` },
      { type: "vertical", url: `${ZONE}zone06.jpg` },
      { type: "vertical", url: `${ZONE}poster.jpg` },
    ],

    date: "2023-11",
    toolStack: ["Adobe Illustrator", "Figma", "React"],
  },

  {
    id: "brand-x",
    category: "visual",
    title: "Brand Identity X",
    desc: "Logo & Typography",
    coverImage: "",
    blocks: [],
    date: "2023-10",
    toolStack: ["AI", "PS"],
  },
];
