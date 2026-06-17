/* Cases do portfólio — base única consumida pela seção "Trabalhos".
   Nomes de clientes mantidos genéricos (NDA). Ver docs/portfolio-cases.md. */

export type Case = {
  slug: string;
  title: string; // título público (genérico)
  category: string; // rótulo curto de categoria
  summary: string; // 1 linha (card)
  detail?: string; // "como funciona" (modal)
  impact?: string; // métrica de impacto
  stack?: string; // stack em texto livre
  tools: string[]; // slugs em TOOLS (chips de ícone)
  group: "amadeus" | "pessoal";
  highlight?: boolean; // destaque (card grande + diagrama + modal)
  diagram?: string; // slug em diagrams.ts
  year?: string;
};

/* Ferramentas → rótulo + ícone (arquivo em /images/icons/<icon>.svg).
   Sem `icon` = chip de texto (ferramentas sem logo limpo). */
export const TOOLS: Record<string, { name: string; icon?: string }> = {
  hubspot: { name: "HubSpot", icon: "hubspot" },
  clickup: { name: "ClickUp", icon: "clickup" },
  gmail: { name: "Gmail", icon: "gmail" },
  googlesheets: { name: "Sheets", icon: "googlesheets" },
  googlecalendar: { name: "Calendar", icon: "googlecalendar" },
  googledocs: { name: "Docs", icon: "googledocs" },
  slack: { name: "Slack", icon: "slack" },
  whatsapp: { name: "WhatsApp", icon: "whatsapp" },
  twilio: { name: "Twilio", icon: "twilio" },
  elevenlabs: { name: "ElevenLabs", icon: "elevenlabs" },
  vapi: { name: "Vapi" },
  openai: { name: "GPT-4o", icon: "openai" },
  anthropic: { name: "Claude", icon: "anthropic" },
  python: { name: "Python", icon: "python" },
  nodedotjs: { name: "Node", icon: "nodedotjs" },
  flask: { name: "Flask", icon: "flask" },
  sqlite: { name: "SQLite", icon: "sqlite" },
  swift: { name: "Swift", icon: "swift" },
  astro: { name: "Astro", icon: "astro" },
  streamlit: { name: "Streamlit", icon: "streamlit" },
  n8n: { name: "n8n", icon: "n8n" },
  make: { name: "Make", icon: "make" },
  linkedin: { name: "LinkedIn", icon: "linkedin" },
  aws: { name: "AWS" },
  lambda: { name: "Lambda" },
  s3: { name: "S3" },
  athena: { name: "Athena" },
  quicksight: { name: "QuickSight" },
  rocketreach: { name: "RocketReach" },
  apollo: { name: "Apollo" },
  rag: { name: "RAG" },
  ocr: { name: "OCR / Vision" },
  pandas: { name: "pandas" },
};

export const cases: Case[] = [
  // ── Destaques ──────────────────────────────────────────────────
  {
    slug: "orquestrador-reunioes",
    title: "Sistema multi-agente para orquestração de reuniões",
    category: "Inteligência de reunião · Human-in-the-loop",
    summary:
      "Transcrição de reunião vira ações distribuídas e controladas — tarefas, e-mails e mensagens — sempre sob aprovação humana.",
    detail:
      "Um agente de transcrição alimenta um agente roteador multicanal. A extração roda em Claude 3.5 Sonnet (janela de contexto longa para transcrições) e a redação em GPT-4o. O fluxo registra action items e log no HubSpot, cria tarefa no ClickUp quando há entregável técnico, posta um resumo no Slack e gera rascunho de follow-up no Gmail. Nada é disparado sem aprovação: a confirmação acontece de forma assíncrona no Slack, com botões interativos (Aprovar disparo · Regerar · Editar no CRM).",
    impact:
      "Tempo de follow-up e setup de tarefas por call: de 30–40 min para ~3 min, mantendo a personalização.",
    stack: "Claude 3.5 Sonnet · GPT-4o · HubSpot · ClickUp · Slack · Gmail · Python",
    tools: ["anthropic", "openai", "hubspot", "clickup", "slack", "gmail", "python"],
    group: "amadeus",
    highlight: true,
    diagram: "orquestrador-reunioes",
    year: "2025",
  },
  {
    slug: "agente-agendamento",
    title: "Agente conversacional autônomo com agendamento em tempo real",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Captura o lead, tira dúvidas e agenda — checando disponibilidade real na agenda para nunca dar double-booking.",
    detail:
      "Para uma concessionária de grande porte: canal primário no WhatsApp (captura imediata do lead) com fallback para voz. Tira dúvidas, detalha serviços e agenda revisões. O agendamento faz uma checagem de concorrência em tempo real na agenda da equipe (Google Calendar integrado ao CRM), retornando apenas os slots livres ao usuário — evitando double-booking.",
    impact:
      "SLA de primeira resposta de horas para instantâneo (0 s); +15–25% na conversão para agendamento ao não deixar o lead esfriar.",
    stack: "WhatsApp Business API · voz (ElevenLabs/Vapi) · Google Calendar · CRM",
    tools: ["whatsapp", "elevenlabs", "vapi", "googlecalendar", "hubspot"],
    group: "amadeus",
    highlight: true,
    diagram: "agente-agendamento",
    year: "2025",
  },
  {
    slug: "motor-rag-propostas",
    title: "Motor RAG para geração de propostas técnicas",
    category: "Documentos & conhecimento (RAG)",
    summary:
      "Pipeline que gera propostas técnicas/comerciais conectadas ao histórico da conta e ao conhecimento da empresa.",
    detail:
      "Cadeia de múltiplos steps: (1) ingestão de contexto via RAG sobre o histórico da conta e transcrições; (2) estruturação do esqueleto; (3) geração do conteúdo técnico (atributos de marca, requisitos, equipe); (4) revisão de tom de voz. O output sai em Markdown (formatação limpa) e é convertido dinamicamente para Google Docs, permitindo edição colaborativa antes da exportação para PDF.",
    impact:
      "Tempo médio de elaboração de proposta: de 2–3 h para ~15 min (restante = revisão humana no Docs), mantendo personalização e tom de marca.",
    stack: "RAG · LLM · Google Docs · Markdown→PDF · Python",
    tools: ["rag", "openai", "googledocs", "python"],
    group: "amadeus",
    highlight: true,
    diagram: "motor-rag-propostas",
    year: "2025",
  },
  {
    slug: "analytics-crm",
    title: "Plataforma serverless de analytics e forecast para CRM",
    category: "Engenharia de dados & BI",
    summary:
      "Camada de dados própria sobre o CRM para decisões quantitativas que o software não entregava.",
    detail:
      "Extração via Python serverless (AWS Lambda) na HubSpot API, ingestão em data lake (S3), consulta via Athena e visualização dupla: Streamlit para exploração em tempo real com o time e QuickSight para dashboards da diretoria. Monitora win-rate por ICP, coorte por indústria e pipeline velocity — ajustando o forecast pela probabilidade histórica de conversão de cada perfil, não pelo feeling do vendedor.",
    impact:
      "Forecast de pipeline com ~80–85% de acurácia, substituindo decisão por intuição.",
    stack: "AWS Lambda · S3 · Athena · QuickSight · Streamlit · HubSpot API · Python",
    tools: ["lambda", "s3", "athena", "quicksight", "streamlit", "hubspot", "python"],
    group: "amadeus",
    highlight: true,
    diagram: "analytics-crm",
    year: "2024",
  },

  // ── Amadeus — grade compacta ───────────────────────────────────
  {
    slug: "maia-recrutador",
    title: "MAIA — recrutador por voz com IA",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Recrutador autônomo: conversa com o gestor no WhatsApp, liga para candidatos, transcreve, avalia e devolve a shortlist.",
    stack: "Python/Flask · Twilio · ElevenLabs · GPT · WhatsApp",
    tools: ["python", "flask", "twilio", "elevenlabs", "openai", "whatsapp"],
    group: "amadeus",
    year: "2026",
  },
  {
    slug: "super-agente-restaurante",
    title: "Super-agente de atendimento para rede de restaurantes",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Agente híbrido (voz de baixa latência + WhatsApp) que faz reservas batendo direto no sistema de gestão e na agenda.",
    detail:
      "Projeto-mãe do qual o MAIA derivou. Core de voz de baixíssima latência (ElevenLabs + Vapi) e texto via WhatsApp Business API. A reserva aciona um webhook no sistema de gestão interno para travar a mesa e, em paralelo, dispara o convite via Google Calendar ao cliente.",
    stack: "Vapi · ElevenLabs · WhatsApp · Google Calendar · webhooks · Python",
    tools: ["vapi", "elevenlabs", "whatsapp", "googlecalendar", "python"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "cotacao-seguro-whatsapp",
    title: "Agente de cotação de seguro saúde via WhatsApp",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Conduz a cotação de seguro saúde por conversa, capturando dados e qualificando o lead no WhatsApp.",
    stack: "WhatsApp Business API · LLM · Python",
    tools: ["whatsapp", "openai", "python"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "relatorio-bom-parceiro",
    title: "Relatório semanal de carteira por parceiro",
    category: "CRM & Revenue Ops",
    summary:
      "Consolida os deals por parceiro (cliente, porte, indústria, valor, estágio) e envia automaticamente toda semana.",
    stack: "HubSpot API · Google Sheets · Gmail · Python",
    tools: ["hubspot", "googlesheets", "gmail", "python"],
    group: "amadeus",
    year: "2024",
  },
  {
    slug: "cadastro-enriquecimento",
    title: "Cadastro & enriquecimento de contas on-demand",
    category: "CRM & Revenue Ops",
    summary:
      "Digitar o nome de uma empresa numa planilha cria e enriquece a conta inteira no CRM — com deduplicação por domínio e hash de e-mail.",
    detail:
      "O nome no Google Sheets dispara a busca via RocketReach/Apollo (perfis, telefones diretos e e-mails corporativos validados) e o upsert na HubSpot API: cria a empresa se não existir, depois os contatos, tudo vinculado por ID. Antes de qualquer upsert, valida o domínio e gera hash do e-mail contra a base — garantindo integridade e evitando poluição do CRM.",
    stack: "Google Sheets · RocketReach/Apollo · HubSpot API · Python",
    tools: ["googlesheets", "rocketreach", "apollo", "hubspot", "python"],
    group: "amadeus",
    year: "2024",
  },
  {
    slug: "regua-comunicacao",
    title: "Régua de comunicação por etapa do funil",
    category: "CRM & Revenue Ops",
    summary:
      "Mudança de estágio do deal dispara as ações de relacionamento da régua, sobre um funil bem estruturado.",
    stack: "HubSpot (workflows + API) · Python",
    tools: ["hubspot", "python"],
    group: "amadeus",
    year: "2024",
  },
  {
    slug: "triagem-email",
    title: "Triagem inteligente de e-mail",
    category: "E-mail & comunicação",
    summary:
      "Classifica a caixa por intenção e prioridade e já insere rascunhos contextualizados em Drafts.",
    detail:
      "Via Gmail API: classificação multi-label por intenção (Dúvida Técnica, Comercial, Suporte, Spam) e prioridade (Alta/Média/Baixa). Para intenções comerciais mapeadas (ex.: cotação padrão), além de etiquetar, insere um rascunho de resposta altamente contextualizado na pasta Drafts.",
    stack: "Gmail API · LLM · Python",
    tools: ["gmail", "openai", "python"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "oraculo-amadeus",
    title: "Oráculo — assistente RAG da empresa",
    category: "Documentos & conhecimento (RAG)",
    summary:
      "Assistente conversacional sobre a base de conhecimento da empresa; alimenta a proposta e outros agentes.",
    stack: "RAG · LLM · Streamlit",
    tools: ["rag", "openai", "streamlit"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "rocketresearch",
    title: "RocketResearch — radar de pesquisa em IA",
    category: "Dados & scraping",
    summary:
      "Varre fontes de ponta (DeepMind, Stanford HAI, Nature MI, Anthropic, NVIDIA…), normaliza e entrega base pesquisável.",
    stack: "Python · web scraping · Streamlit · SQLite",
    tools: ["python", "streamlit", "sqlite"],
    group: "amadeus",
    year: "2026",
  },
  {
    slug: "enriquecimento-prospeccao",
    title: "Enriquecimento & prospecção de dados",
    category: "Dados & scraping",
    summary:
      "Fetchers (LinkedIn, fontes de VC) e pipelines de estruturação de grandes bases para alimentar a prospecção.",
    stack: "Python · web scraping · data enrichment",
    tools: ["python", "linkedin", "rocketreach"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "nexus-pricing",
    title: "Nexus — motor de precificação cloud (OCI)",
    category: "Cloud & engenharia de custos",
    summary:
      "Engine de precificação de infraestrutura: catálogo, motor de cenários e runner, com testes — para custos reproduzíveis.",
    stack: "Python · pricing engine · Oracle OCI · testes",
    tools: ["python"],
    group: "amadeus",
    year: "2025",
  },
  {
    slug: "automacao-cotacao-seguro",
    title: "Automação de cotações de seguro (back-office)",
    category: "Back-office & planilhas",
    summary:
      "Lê planilhas brutas e preenche os templates exigidos pelas seguradoras — batch/ETL com confiabilidade de dados.",
    impact:
      "Economia de ~20–30 h operacionais/semana (≈1 FTE de data entry), com erros de digitação reduzidos a zero.",
    stack: "Python · pandas/openpyxl",
    tools: ["python", "pandas"],
    group: "amadeus",
    year: "2025",
  },

  // ── Pessoal & pesquisa ─────────────────────────────────────────
  {
    slug: "tomaoremedin",
    title: "TomaORemedin",
    category: "App / Saúde",
    summary:
      "PWA de adesão a tratamento (hipertensão/diabetes), criado para apoiar uma pesquisa de iniciação científica.",
    stack: "PWA · Saúde · Pesquisa aplicada",
    tools: [],
    group: "pessoal",
    year: "2026",
  },
  {
    slug: "tft-overlay",
    title: "Overlay de TFT para Mac",
    category: "Ferramenta / OCR",
    summary:
      "Motor de OCR (Vision) construído do zero para reconhecer augments onde o Overwolf (Windows-only) não chega.",
    detail:
      "Overlay nativo de macOS que reconhece augments por OCR (Apple Vision, pt/en) em tempo real, para decisão de early/mid game. Demonstra competência de OCR/extração estruturada do zero — a mesma base aplicável a NF-e/conciliação e ao parsing de documentos do RAG.",
    stack: "macOS · OCR / Vision · Swift",
    tools: ["swift", "ocr"],
    group: "pessoal",
    year: "2026",
  },
  {
    slug: "craving",
    title: "Craving",
    category: "App",
    summary:
      "PWA pessoal para atravessar a fissura de cigarro — projetado em torno do momento de craving, não do hábito.",
    stack: "PWA · Design comportamental",
    tools: [],
    group: "pessoal",
    year: "2026",
  },
  {
    slug: "stardew-guia",
    title: "Guia de Presentes — Stardew Valley",
    category: "Site",
    summary:
      "Guia data-driven de presentes do jogo, refatorado para separar dados de apresentação.",
    stack: "Astro · data-driven",
    tools: ["astro"],
    group: "pessoal",
    year: "2026",
  },
  {
    slug: "chaos-engineering-dsr",
    title: "Chaos Engineering como artefato DSR",
    category: "Pesquisa",
    summary:
      "Artigo em Information Systems tratando Chaos Engineering como artefato de Design Science Research.",
    stack: "DSR · Information Systems · Paper",
    tools: [],
    group: "pessoal",
    year: "2025–26",
  },
  {
    slug: "illusion-of-rigor",
    title: "The Illusion of Rigor",
    category: "Pesquisa",
    summary:
      "Preprint sobre a 'ilusão de rigor' em LLMs, testando Gemini, GPT-4o e Claude sob protocolo comum.",
    stack: "LLMs · Avaliação · Preprint",
    tools: ["openai", "anthropic"],
    group: "pessoal",
    year: "2025–26",
  },
];

export const highlightCases = cases.filter((c) => c.highlight);
export const amadeusCompact = cases.filter(
  (c) => c.group === "amadeus" && !c.highlight,
);
export const pessoalCases = cases.filter((c) => c.group === "pessoal");
