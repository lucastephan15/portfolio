export type AboutSlide = {
  img: string; // caminho em /public (ex.: "/images/sobre/fgv.webp")
  title: string; // título curto do momento
  caption?: string; // 1 frase de contexto (opcional)
};

/* "Um pouco mais sobre mim" — carrossel entre Sobre e Trabalhos.
   Cenas pixel art com o avatar. Formato: 16:9 (344×192 ou 1280×720).
   Ordem aqui = ordem no carrossel. Títulos/legendas a refinar. */
export const aboutSlides: AboutSlide[] = [
  {
    img: "/images/sobre/fgv.webp",
    title: "FGV EAESP",
    caption: "Onde a base em negócios encontrou o código.",
  },
  {
    img: "/images/sobre/faria-lima.webp",
    title: "Faria Lima",
    caption: "No centro financeiro de SP, levando IA do dado ao produto.",
  },
  {
    img: "/images/sobre/neve.webp",
    title: "Modo off",
    caption: "Recarregando longe da tela — anjo de neve incluso.",
  },
];
