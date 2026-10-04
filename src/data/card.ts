// Share cards: a 1200x630 PNG per page, drawn at build time, used as og:image so links on
// LinkedIn, X, Slack and iMessage show a card instead of a bare URL. Same look as the site:
// one monospace typeface, off-white, the round headshot.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { SITE } from "./site";

const ROOT = process.cwd();
const BG = "#fafaf8";
const FG = "#111110";
const MUTED = "#5c5c57";
const RULE = "#dddcd6";

const fontFile = (w: number) =>
  readFileSync(join(ROOT, `node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-${w}-normal.woff`));
const photo = "data:image/jpeg;base64," + readFileSync(join(ROOT, "public/forrest.jpg")).toString("base64");

// Long titles step down so they stay within three or four lines.
function titleSize(title: string): number {
  if (title.length <= 34) return 64;
  if (title.length <= 60) return 54;
  if (title.length <= 96) return 46;
  return 40;
}

const h = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}) => ({
  type,
  props: { style, children, ...extra },
});

/** A PNG card: headshot and name at the top, `title` large, `kicker` and the domain at the bottom. */
export async function renderCard(title: string, kicker: string): Promise<Uint8Array> {
  const card = h(
    "div",
    {
      width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between",
      background: BG, padding: "70px 84px 60px", fontFamily: "Plex Mono", color: FG,
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: 26 }, [
        h("img", { width: 96, height: 96, borderRadius: 48 }, undefined, { src: photo, width: 96, height: 96 }),
        h("div", { display: "flex", flexDirection: "column" }, [
          h("div", { display: "flex", fontSize: 34, fontWeight: 500 }, SITE.name),
          h("div", { display: "flex", fontSize: 26, color: MUTED, marginTop: 4 }, SITE.location),
        ]),
      ]),
      h("div", { display: "flex", fontSize: titleSize(title), fontWeight: 500, lineHeight: 1.22,
        letterSpacing: "-0.01em", maxWidth: 1030 }, title),
      h("div", { display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: `2px solid ${RULE}`, paddingTop: 22, fontSize: 26, color: MUTED }, [
        h("div", { display: "flex" }, kicker),
        h("div", { display: "flex" }, "forrestzhang.com"),
      ]),
    ],
  );
  const svg = await satori(card as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Plex Mono", data: fontFile(400), weight: 400, style: "normal" },
      { name: "Plex Mono", data: fontFile(500), weight: 500, style: "normal" },
    ],
  });
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
