export type AboutSlide = {
  img: string; // caminho em /public (ex.: "/images/sobre/fgv.webp")
  title: string; // título curto do momento
  caption?: string; // 1 frase de contexto (opcional)
};

/* "Um pouco mais sobre mim" — carrossel entre Trabalhos e Contato.
   Cenas pixel art autorais com o avatar. Formato: 16:9 (344×192 ou 1280×720).
   Ordem aqui = ordem no carrossel. */
export const aboutSlides: AboutSlide[] = [
  {
    img: "/images/sobre/fgv.webp",
    title: "Lugares onde estudei",
    caption: "Onde a base em negócios encontrou o código.",
  },
  {
    img: "/images/sobre/faria-lima.webp",
    title: "São Paulo · Capital",
    caption:
      "Project Finance Intern no KfW-IPEX (banco de desenvolvimento do governo alemão), M&A Research Analyst na Alana AI, Analista de Automações na BBRO&Marketing e GTM Engineer na Amadeus AI.",
  },
  {
    img: "/images/sobre/setup.webp",
    title: "Meu cantinho",
    caption: "Onde prototipo, jogo e crio: hobby também vira projeto.",
  },
  {
    img: "/images/sobre/lol-livros.webp",
    title: "Jogos e Livros",
    caption: "Entre o jogo e a leitura, a imaginação flui mais um pouquinho :)",
  },
  {
    img: "/images/sobre/gatos.webp",
    title: "Amante de gatos",
    caption: "Mentalmente, estou aqui.",
  },
  {
    img: "/images/sobre/neve.webp",
    title: "Modo off",
    caption: "Recarregando longe da tela.",
  },
];
