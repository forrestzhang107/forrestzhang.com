// Everything on the home page that is not a blog post. Edit here.

export const SITE = {
  url: "https://forrestzhang.com",
  name: "Forrest Zhang",
  description: "Forrest Zhang builds software companies from Irvine, California.",
};

export type Project = {
  name: string;
  role: string;
  summary: string;
  url?: string;
};

// Order is the order shown.
export const PROJECTS: Project[] = [
  {
    name: "Dexio",
    role: "Founder",
    summary: "One wiki for all your agents. Claude, ChatGPT, Codex, Cursor and others share it through MCP, and you see what they know.",
    url: "https://dexio.wiki",
  },
  {
    name: "VantaSoft",
    role: "CEO",
    summary: "A technical consultancy that provides CTO-level leadership and hands-on engineering for growing businesses. Started in 2021.",
    url: "https://vantasoft.com",
  },
  {
    name: "Telvana",
    role: "CEO and founder",
    summary: "AI voice for dental practices.",
  },
  {
    name: "Butterfli",
    role: "CTO",
    summary: "On-demand assisted transportation.",
    url: "https://gobutterfli.com",
  },
  {
    name: "serviceMob",
    role: "Fractional CTO",
    summary: "Models the customer experience as structured data so enterprises prevent support demand instead of handling it.",
    url: "https://servicemob.com",
  },
];

export const LINKS = [
  { label: "GitHub", url: "https://github.com/forrestzhang107" },
];
