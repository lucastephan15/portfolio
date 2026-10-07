// Fonte única da arte em pixel da Nekobit (mesmas grades da skill nekobit-brand).
// Grades: "X" = pixel cheio, "o" = olho (vazado; fecha na piscada), "." = vazio.

export const PALETTE = {
  fliperama: "#0d0a1f",
  tela: "#1b1538",
  grade: "#2e2657",
  fosforo: "#f3eeff",
  nevoa: "#9d94c7",
  rosa: "#ff5fa2",
  violeta: "#b35cff",
  anil: "#5b7cff",
  ciano: "#38d6ff",
  ficha: "#ffd447",
  papel: "#f6f3ff",
  tinta: "#1b1538",
};

const STOPS = [PALETTE.rosa, PALETTE.violeta, PALETTE.anil, PALETTE.ciano];
const hex2 = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const rgb2 = (a: number[]) =>
  "#" + a.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

/** Cor na rampa neon (t de 0 a 1). */
export function ramp(t: number): string {
  const s = Math.min(STOPS.length - 1.0001, t * (STOPS.length - 1));
  const i = Math.floor(s);
  const f = s - i;
  const a = hex2(STOPS[i]);
  const b = hex2(STOPS[i + 1]);
  return rgb2(a.map((v, k) => v + (b[k] - v) * f));
}

/** n degraus da rampa neon, de Rosa a Ciano. */
export const steps = (n: number) =>
  Array.from({ length: n }, (_, i) => ramp(n === 1 ? 0 : i / (n - 1)));

export const SYMBOL = ["X.....X", "XX...XX", "XXXXXXX", "XoXXXoX", "XXXXXXX", "XXXXXXX"];
export const SYMBOL_5 = ["X...X", "XXXXX", "XoXoX", "XXXXX", "XXXXX"];

const LETTERS: Record<string, string[]> = {
  n: ["....", "....", "XXX.", "X..X", "X..X", "X..X", "X..X"],
  e: ["....", "....", ".XX.", "X..X", "XXXX", "X...", ".XXX"],
  k: ["X...", "X...", "X..X", "X.X.", "XX..", "X.X.", "X..X"],
  o: ["....", "....", ".XX.", "X..X", "X..X", "X..X", ".XX."],
  b: ["X...", "X...", "XXX.", "X..X", "X..X", "X..X", "XXX."],
  i: ["X", ".", "X", "X", "X", "X", "X"],
  t: [".X.", ".X.", "XXX", ".X.", ".X.", ".X.", ".XX"],
};
export const WORDMARK = Array.from({ length: 7 }, (_, y) =>
  [..."nekobit"].map((ch) => LETTERS[ch][y]).join("."),
);

export interface Layer {
  grid: string[];
  x?: number;
  y?: number;
  /** Uma cor para tudo, ou uma cor por linha da grade. */
  color: string | string[];
}

/** Retângulos SVG de uma camada; olhos ("o") viram tampas da piscada. */
export function layerRects({ grid, x = 0, y = 0, color }: Layer) {
  const colorAt = (row: number) =>
    Array.isArray(color) ? color[Math.min(color.length - 1, row)] : color;
  let fill = "";
  let lids = "";
  grid.forEach((line, row) =>
    [...line].forEach((c, col) => {
      const r = `<rect x="${x + col}" y="${y + row}" width="1" height="1" fill="${colorAt(row)}"/>`;
      if (c === "X") fill += r;
      if (c === "o") lids += r;
    }),
  );
  return { fill, lids };
}

/** Logo horizontal: símbolo na base do wordmark, 3 bits de espaço. 41×7 bits. */
export const LOGO_W = SYMBOL[0].length + 3 + WORDMARK[0].length;
export const LOGO_H = WORDMARK.length;
