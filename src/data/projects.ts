export type Project = {
  title: string;
  kind: string; // categoria curta (ex. "App", "Pesquisa", "Ferramenta")
  year: string;
  blurb: string; // 1-2 frases, tom editorial
  tags: string[];
  href?: string; // link externo (repo, demo) — opcional
};

/* Conteúdo placeholder com teus projetos reais.
   Edite à vontade: ordem aqui = ordem na página. */
export const projects: Project[] = [
  {
    title: "TomaORemedin",
    kind: "App / Saúde",
    year: "2026",
    blurb:
      "PWA de adesão a tratamento para hipertensão e diabetes, criado para apoiar uma pesquisa de iniciação científica sobre como pacientes mantêm a rotina de medicação.",
    tags: ["PWA", "Saúde", "Pesquisa aplicada"],
  },
  {
    title: "Overlay de TFT para Mac",
    kind: "Ferramenta",
    year: "2026",
    blurb:
      "Overlay nativo que reconhece augments por OCR (Vision, pt/en) onde o Overwolf não chega — porque era Windows-only. Ferramenta de decisão em tempo real para early/mid game.",
    tags: ["macOS", "OCR / Vision", "Swift"],
  },
  {
    title: "Craving",
    kind: "App",
    year: "2026",
    blurb:
      "PWA pessoal para atravessar a fissura de cigarro — projetado em torno do momento de craving, não do hábito em abstrato.",
    tags: ["PWA", "Design comportamental"],
  },
  {
    title: "Guia de Presentes — Stardew Valley",
    kind: "Site",
    year: "2026",
    blurb:
      "Guia data-driven de presentes do jogo, refatorado para separar dados de apresentação. Feito a quatro mãos, com plano de hospedagem e monetização.",
    tags: ["Astro", "Data-driven", "Side project"],
  },
  {
    title: "Consultoria AI-ready data",
    kind: "Consultoria",
    year: "2026",
    blurb:
      "Preparação de dados de organizações locais para uso com IA, começando por um piloto num loteamento familiar em Pouso Alegre.",
    tags: ["Dados", "IA aplicada", "Consultoria"],
  },
  {
    title: "Chaos Engineering como artefato DSR",
    kind: "Pesquisa",
    year: "2025–26",
    blurb:
      "Artigo em Information Systems tratando Chaos Engineering como artefato de Design Science Research para Prospective Learning.",
    tags: ["DSR", "Information Systems", "Paper"],
  },
  {
    title: "The Illusion of Rigor",
    kind: "Pesquisa",
    year: "2025–26",
    blurb:
      "Capítulo/preprint investigando a 'ilusão de rigor' em LLMs, testando Gemini, GPT-4o e Claude sob protocolo comum.",
    tags: ["LLMs", "Avaliação", "Preprint"],
  },
];
