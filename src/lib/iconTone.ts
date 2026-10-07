// Ícones de ferramenta (simple-icons) vêm na cor da marca — vários são pretos
// ou quase pretos e somem no fundo escuro. Lido no build: se a cor do SVG é
// escura (ou ausente = preto), o chip renderiza o ícone em branco.
import fs from "node:fs";
import path from "node:path";

const cache = new Map<string, boolean>();

const channel = (v: number) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

export function isDarkIcon(icon: string): boolean {
  if (cache.has(icon)) return cache.get(icon)!;
  let dark = true;
  try {
    const svg = fs.readFileSync(path.join(process.cwd(), "public/images/icons", `${icon}.svg`), "utf8");
    const m = svg.match(/fill="#([0-9a-fA-F]{6})"/);
    if (m) {
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
      const lum = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
      dark = lum < 0.1;
    }
  } catch {
    // arquivo ausente: trata como escuro (vira branco), nunca invisível
  }
  cache.set(icon, dark);
  return dark;
}
