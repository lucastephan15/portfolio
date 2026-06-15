export type Project = {
  title: string;
  group: "Amadeus AI" | "Pessoal & Pesquisa";
  kind: string; // categoria curta (ex. "App", "Pesquisa", "Ferramenta")
  year: string;
  blurb: string; // 1-2 frases, tom editorial
  tags: string[];
  href?: string; // link externo (repo, demo) — opcional
};

/* Conteúdo placeholder com teus projetos reais.
   Ordem aqui = ordem na página. Edite à vontade.
   Nomes de clientes finais mantidos genéricos — libere se/quando puder. */
export const projects: Project[] = [
  // ── Amadeus AI — trabalho profissional ─────────────────────────
  {
    title: "MAIA — Recrutador por voz com IA",
    group: "Amadeus AI",
    kind: "Agente / Voz",
    year: "2026",
    blurb:
      "Recrutador autônomo que conversa com o gestor por WhatsApp (Twilio), dispara ligações telefônicas via ElevenLabs, transcreve e avalia candidatos com GPT, e devolve a shortlist — tudo orquestrado por um servidor Flask.",
    tags: ["Python · Flask", "Twilio + ElevenLabs", "GPT", "WhatsApp / Voz"],
  },
  {
    title: "RocketResearch — Radar de pesquisa em IA",
    group: "Amadeus AI",
    kind: "Automação",
    year: "2026",
    blurb:
      "Orquestrador que varre fontes de ponta (DeepMind, Stanford HAI, DeepLearning.AI, Nature MI, ACM, Anthropic, NVIDIA, AWS ML, Tech Review), normaliza os achados e os entrega numa base pesquisável com interface própria.",
    tags: ["Python", "Web scraping", "Streamlit", "SQLite"],
  },
  {
    title: "Oráculo Amadeus",
    group: "Amadeus AI",
    kind: "Assistente RAG",
    year: "2025",
    blurb:
      "Assistente conversacional sobre base de conhecimento da empresa — carrega documentos, indexa e responde com contexto. Iterado por três versões até estabilizar o fluxo de loaders e prompts.",
    tags: ["RAG", "LLM", "Streamlit"],
  },
  {
    title: "Automações de CRM (HubSpot)",
    group: "Amadeus AI",
    kind: "Automação",
    year: "2026",
    blurb:
      "Integrações com a API do HubSpot: descoberta e extração de propriedades de contatos/empresas e uma calculadora de tier de leads, conectando dados de CRM a decisões comerciais.",
    tags: ["HubSpot API", "Python", "CRM"],
  },
  {
    title: "Automação de cotações de seguro",
    group: "Amadeus AI",
    kind: "Automação",
    year: "2025",
    blurb:
      "Pipeline que lê planilhas brutas e preenche automaticamente os templates exigidos por seguradoras (frota e demais ramos), eliminando trabalho manual repetitivo na cotação.",
    tags: ["Python", "pandas / openpyxl", "Automação de planilhas"],
  },
  {
    title: "Nexus — Motor de precificação cloud",
    group: "Amadeus AI",
    kind: "Ferramenta",
    year: "2025",
    blurb:
      "Engine de precificação para infraestrutura em nuvem (OCI): catálogo de itens, motor de cenários e runner, com testes — para estimar custos de projetos de forma reproduzível.",
    tags: ["Python", "Pricing engine", "OCI", "Testes"],
  },
  {
    title: "Enriquecimento de dados & prospecção",
    group: "Amadeus AI",
    kind: "Dados",
    year: "2025–26",
    blurb:
      "Conjunto de fetchers (LinkedIn, fontes de VC) e pipelines de estruturação de grandes bases de empresas, para enriquecer leads e alimentar a prospecção com dados limpos.",
    tags: ["Web scraping", "Data enrichment", "Python"],
  },

  // ── Pessoal & Pesquisa ─────────────────────────────────────────
  {
    title: "TomaORemedin",
    group: "Pessoal & Pesquisa",
    kind: "App / Saúde",
    year: "2026",
    blurb:
      "PWA de adesão a tratamento para hipertensão e diabetes, criado para apoiar uma pesquisa de iniciação científica sobre como pacientes mantêm a rotina de medicação.",
    tags: ["PWA", "Saúde", "Pesquisa aplicada"],
  },
  {
    title: "Overlay de TFT para Mac",
    group: "Pessoal & Pesquisa",
    kind: "Ferramenta",
    year: "2026",
    blurb:
      "Overlay nativo que reconhece augments por OCR (Vision, pt/en) onde o Overwolf não chega — porque era Windows-only. Ferramenta de decisão em tempo real para early/mid game.",
    tags: ["macOS", "OCR / Vision", "Swift"],
  },
  {
    title: "Craving",
    group: "Pessoal & Pesquisa",
    kind: "App",
    year: "2026",
    blurb:
      "PWA pessoal para atravessar a fissura de cigarro — projetado em torno do momento de craving, não do hábito em abstrato.",
    tags: ["PWA", "Design comportamental"],
  },
  {
    title: "Guia de Presentes — Stardew Valley",
    group: "Pessoal & Pesquisa",
    kind: "Site",
    year: "2026",
    blurb:
      "Guia data-driven de presentes do jogo, refatorado para separar dados de apresentação. Feito a quatro mãos, com plano de hospedagem e monetização.",
    tags: ["Astro", "Data-driven", "Side project"],
  },
  {
    title: "Chaos Engineering como artefato DSR",
    group: "Pessoal & Pesquisa",
    kind: "Pesquisa",
    year: "2025–26",
    blurb:
      "Artigo em Information Systems tratando Chaos Engineering como artefato de Design Science Research para Prospective Learning.",
    tags: ["DSR", "Information Systems", "Paper"],
  },
  {
    title: "The Illusion of Rigor",
    group: "Pessoal & Pesquisa",
    kind: "Pesquisa",
    year: "2025–26",
    blurb:
      "Capítulo/preprint investigando a 'ilusão de rigor' em LLMs, testando Gemini, GPT-4o e Claude sob protocolo comum.",
    tags: ["LLMs", "Avaliação", "Preprint"],
  },
];

export const amadeusProjects = projects.filter((p) => p.group === "Amadeus AI");
export const personalProjects = projects.filter(
  (p) => p.group === "Pessoal & Pesquisa",
);
