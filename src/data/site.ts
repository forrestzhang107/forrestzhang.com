// Everything on the home page that is not a blog post. Edit here.

export const SITE = {
  url: "https://forrestzhang.com",
  name: "Forrest Zhang",
  location: "Irvine, California",
  // The home page <title>, which Google shows as the result heading.
  title: "Forrest Zhang | Dexio, VantaSoft, Telvana",
  // Meta description: the snippet under the heading in search results. Keep it under ~155 chars.
  description:
    "Engineer and founder in Irvine, California. CEO of VantaSoft and Telvana, CTO at Butterfli, " +
    "and building Dexio, one wiki for all your agents.",
  // The home page share card (src/data/card.ts).
  cardTitle: "I build software companies.",
  cardKicker: "Dexio · VantaSoft · Telvana · Butterfli",
};

export type Project = {
  name: string;
  role: string;
  // One short line; the list has no room for more.
  summary: string;
  url?: string;
};

// Order is the order shown.
export const PROJECTS: Project[] = [
  { name: "Dexio", role: "Founder", summary: "One wiki for all your agents.", url: "https://dexio.wiki" },
  { name: "VantaSoft", role: "CEO", summary: "Technical consultancy. CTO-level leadership and engineering.", url: "https://vantasoft.com" },
  { name: "Telvana", role: "CEO, founder", summary: "The AI front desk for dental practices.", url: "https://telvana.com" },
  { name: "Butterfli", role: "CTO", summary: "On-demand assisted transportation.", url: "https://gobutterfli.com" },
  { name: "serviceMob", role: "Fractional CTO", summary: "Customer experience modeled as structured data.", url: "https://servicemob.com" },
];

// The bio under the name. Strings are plain text; a project name in {braces} links to that
// project's url from PROJECTS above.
export const BIO =
  "I build software companies. I run {VantaSoft} and {Telvana}, I'm CTO at {Butterfli} and " +
  "fractional CTO at {serviceMob}, and I'm building {Dexio}.";

export const LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/forrestfzhang" },
  { label: "X", url: "https://x.com/forrestfzhang" },
  { label: "GitHub", url: "https://github.com/forrestzhang107" },
];
