// Everything on the home page that is not a blog post. Edit here.

export const SITE = {
  url: "https://forrestzhang.com",
  name: "Forrest Zhang",
  tagline: "Builds software companies. Irvine, California.",
  description: "Forrest Zhang builds software companies from Irvine, California.",
};

export type Project = {
  name: string;
  role: string;
  // One short line; the index has no room for more.
  summary: string;
  url?: string;
};

// Order is the order shown.
export const PROJECTS: Project[] = [
  { name: "Dexio", role: "Founder", summary: "One wiki for all your agents.", url: "https://dexio.wiki" },
  { name: "VantaSoft", role: "CEO", summary: "Technical consultancy. CTO-level leadership and engineering.", url: "https://vantasoft.com" },
  { name: "Telvana", role: "CEO, founder", summary: "AI voice for dental practices." },
  { name: "Butterfli", role: "CTO", summary: "On-demand assisted transportation.", url: "https://gobutterfli.com" },
  { name: "serviceMob", role: "Fractional CTO", summary: "Customer experience modeled as structured data.", url: "https://servicemob.com" },
];

export const LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/forrestfzhang" },
  { label: "X", url: "https://x.com/forrestfzhang" },
  { label: "GitHub", url: "https://github.com/forrestzhang107" },
];
