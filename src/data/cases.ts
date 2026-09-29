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
  group: "corporativo" | "pessoal";
  highlight?: boolean; // destaque (card grande com preview)
  diagram?: string; // slug em diagrams.ts — vira o preview quando não há link
  year?: string;

  /* ── Card de destaque (estética "publicação") ───────────────── */
  date?: string; // rótulo curto exibido acima do título ("Ago 2026")
  preview?: string; // arquivo em /images/previews/ (sem extensão)
  badge?: string; // selo sobre o preview ("ResearchGate", "NDA"…)
  link?: string; // destino principal (abre em nova aba)
  linkLabel?: string; // como o destino é rotulado no card
  repo?: string; // link secundário para o código
  soon?: boolean; // em construção — sem link ainda
  coverTitle?: string; // capa tipográfica (quando não há screenshot nem diagrama)
  coverMeta?: string; // linha de autoria/veículo sob a capa
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
  fastapi: { name: "FastAPI", icon: "fastapi" },
  sqlite: { name: "SQLite", icon: "sqlite" },
  swift: { name: "Swift", icon: "swift" },
  astro: { name: "Astro", icon: "astro" },
  streamlit: { name: "Streamlit", icon: "streamlit" },
  n8n: { name: "n8n", icon: "n8n" },
  make: { name: "Make", icon: "make" },
  linkedin: { name: "LinkedIn", icon: "linkedin" },
  docker: { name: "Docker", icon: "docker" },
  mlflow: { name: "MLflow", icon: "mlflow" },
  pytorch: { name: "PyTorch", icon: "pytorch" },
  scikitlearn: { name: "scikit-learn", icon: "scikitlearn" },
  plotly: { name: "Plotly", icon: "plotly" },
  render: { name: "Render", icon: "render" },
  aws: { name: "AWS" },
  lambda: { name: "Lambda" },
  s3: { name: "S3" },
  athena: { name: "Athena" },
  quicksight: { name: "QuickSight" },
  rocketreach: { name: "RocketReach" },
  apollo: { name: "Apollo" },
  rag: { name: "RAG" },
  ocr: { name: "OCR / Vision" },
  pandas: { name: "pandas", icon: "pandas" },
  gemini: { name: "Nano Banana", icon: "googlegemini" },
  kling: { name: "Kling" },
  twinmotion: { name: "Twinmotion" },
  capcut: { name: "CapCut" },
  midjourney: { name: "Midjourney" },
  drone: { name: "Drone 4K" },
};

export const cases: Case[] = [
  // ── Destaques ──────────────────────────────────────────────────
  {
    slug: "patio-sao-jose",
    title: "Espaço São José — site do projeto de revitalização",
    category: "Site / projeto",
    date: "Ago 2026",
    summary:
      "Um prédio de 1910 no centro de Pouso Alegre apresentado como site — com a imagem e o vídeo do projeto produzidos do zero.",
    detail:
      "O projeto de revitalização existia como planta e render, mas não como algo que um investidor ou um inquilino conseguisse enxergar. O site resolve isso, e a maior parte do trabalho está na produção visual: cerca de 3 GB de acervo, incluindo 236 segundos de drone 4K que nunca tinham sido abertos, viraram a espinha do material. A cena 3D do arquiteto (Twinmotion) cobria só o lote — a rua e a vizinhança não existiam em 3D —, então o entorno foi gerado com IA de imagem e animado em vídeo. A regra que fez isso funcionar: toda imagem nasce de uma foto real do imóvel ou de um render existente, nunca do zero, e com a referência certa anexada. Um erro real ilustra o porquê: pedir “a serra ao fundo” de cabeça teria posto montanha atrás do muro do vizinho — de dentro do lote não se vê serra nenhuma. Ir buscar a foto do lugar antes de escrever o prompt é o que separa a peça verossímil da bonita e errada.",
    stack:
      "HTML/CSS · Python · Twinmotion · Nano Banana · Midjourney/Flux · Kling · CapCut · ElevenLabs · drone 4K",
    tools: ["gemini", "midjourney", "kling", "twinmotion", "capcut", "elevenlabs", "drone", "python"],
    group: "pessoal",
    highlight: true,
    preview: "patio-sao-jose",
    link: "https://patiosaojose.info",
    linkLabel: "patiosaojose.info",
    year: "2026",
  },
  {
    slug: "cardapio-lamen",
    title: "Cardápio digital para uma casa de lámen",
    category: "Site / cardápio digital",
    date: "Set 2026",
    summary:
      "Cardápio digital de uma casa de lámen em São Paulo, em português, inglês e japonês, com filtros por tipo de prato.",
    detail:
      "O cliente abre o cardápio no celular, direto na mesa. Os pratos ficam organizados por categoria (ramen, hiyashi, mazemen, acompanhamentos, onigiri, sobremesas e bebidas), cada um com foto, descrição e preço. Dá para filtrar por com caldo, sem caldo, gelado, picante e vegetariano, e o site está em três idiomas: português, inglês e japonês.",
    stack: "Astro · site estático · PT/EN/JA",
    tools: ["astro"],
    group: "corporativo",
    highlight: true,
    preview: "sora-cardapio",
    link: "https://soracardapio.online/",
    linkLabel: "soracardapio.online",
    year: "2026",
  },
  {
    slug: "fernao-dias",
    title: "Acidentes na Rodovia Fernão Dias (BR-381)",
    category: "Dados abertos",
    date: "Mai 2026",
    summary:
      "5.905 acidentes e 298 mortes em relatório aberto, montado quando a concessionária desativou o canal que reportava em tempo real.",
    detail:
      "A Fernão Dias liga São Paulo a Belo Horizonte. Até abril de 2026 a concessão era da Arteris, que mantinha um perfil ativo reportando acidentes em tempo real; com a transferência para a Motiva, esse canal saiu do ar. O relatório consolida a base datatran da PRF (uma linha por ocorrência) com indicadores, série temporal e mapas. O recorte do trecho é explícito, porque a BR-381 cobre duas rodovias diferentes em MG: UF == SP, ou UF == MG com km ≥ 480 — abaixo disso é o Vale do Aço. Reprodutível: baixar os CSVs da PRF e rodar um script.",
    stack: "Python · pandas · Plotly · GitHub Pages · dados abertos da PRF",
    tools: ["python", "pandas", "plotly"],
    group: "pessoal",
    highlight: true,
    preview: "fernao-dias",
    badge: "GitHub Pages",
    link: "https://lucastephan15.github.io/fernao-dias-dados/",
    linkLabel: "lucastephan15.github.io",
    repo: "https://github.com/lucastephan15/fernao-dias-dados",
    year: "2026",
  },
  {
    slug: "stardew-guia",
    title: "Guia de presentes — Stardew Valley",
    category: "Site / dados",
    date: "Mai 2026",
    summary:
      "Aniversários, receitas, rotina por estação e busca reversa, bilíngue — com os dados gerados por pipeline determinístico a partir da wiki.",
    detail:
      "Site estático sem build, com os dados isolados num único arquivo (data.js) que é a fonte de verdade: personagens, itens, receitas, rotinas e i18n. A pasta scripts/ guarda o pipeline em Python que gerou esse arquivo a partir da Stardew Valley Wiki — download de sprites, parsing determinístico de receitas, aniversários e rotinas, e auditoria dos presentes amados. Separar dados de apresentação é o que permite regerar tudo quando a wiki muda, sem tocar na interface.",
    stack: "HTML/JS sem build · Python (pipeline de dados) · GitHub Pages",
    tools: ["python", "nodedotjs"],
    group: "pessoal",
    highlight: true,
    preview: "stardew",
    badge: "GitHub Pages",
    link: "https://lucastephan15.github.io/stardew-gift-guide/",
    linkLabel: "lucastephan15.github.io",
    repo: "https://github.com/lucastephan15/stardew-gift-guide",
    year: "2026",
  },
  {
    slug: "churn-api",
    title: "API de predição de churn em telecom",
    category: "Machine learning em produção",
    date: "Ago 2026",
    summary:
      "Ranqueador de risco de cancelamento servido por API — o limiar de corte é parâmetro de negócio, não decisão do modelo.",
    detail:
      "O artefato é um ranqueador, não um classificador: a pergunta do negócio não é “esse cliente vai cancelar?”, é “quem eu ligo primeiro?”. Isso determina a métrica (PR-AUC, independente de limiar) e faz do limiar de corte um parâmetro alterável sem retreinar nada — aqui, 0,29, derivado da economia do erro (R$ 194 por churner perdido contra R$ 62 por atenção desperdiçada). A rota /health declara versão, sha256 do artefato carregado, nº de features e limiar aplicado: um 200 que não diz qual modelo está no ar não serve de health check. A imagem linux/amd64 reproduz o PR-AUC do treino em macOS nos dez dígitos, com zero decisões trocadas, e o deploy só sai se o CI passar (autoDeployTrigger: checksPass) — entrega contínua sem integração contínua publicaria o que ninguém aprovou.",
    stack:
      "Python · scikit-learn · PyTorch · MLflow · FastAPI · Docker · Render",
    tools: ["python", "scikitlearn", "pytorch", "mlflow", "fastapi", "docker", "render"],
    group: "pessoal",
    highlight: true,
    preview: "churn-api",
    badge: "FastAPI",
    link: "https://tc-churn-api.onrender.com",
    linkLabel: "tc-churn-api.onrender.com",
    repo: "https://github.com/lucastephan15/tc-mle-fase1",
    year: "2026",
  },
  {
    slug: "erp-acougue",
    title: "Camada de dados sobre um ERP sem API",
    category: "Engenharia de dados",
    date: "Ago 2026",
    summary:
      "O ERP de um varejo de carnes não tem API. Automatizei a extração das vendas e do financeiro e montei o painel e os relatórios em cima disso.",
    detail:
      "O dono baixava relatórios do ERP na mão e colava num chat de IA para montar o que enviava aos sócios. O sistema faz esse caminho sozinho: um coletor autentica no ERP, baixa as cinco fontes que importam (vendas item a item, produtos, extrato, caixas e formas de pagamento) e guarda tudo; em cima disso rodam o painel e os relatórios. Cada coleta é gravada com a data em que foi lida e não sobrescreve a anterior — porque o ERP altera o histórico depois: o mesmo pedido devolveu saldos diferentes com 30 minutos de intervalo. Guardar a data da leitura é o que permite conferir qualquer número mais tarde.",
    impact:
      "155 endpoints do ERP mapeados; o relatório que era montado à mão sai pronto em HTML, validado contra o original.",
    stack: "Python · sessão autenticada · pandas · Streamlit · snapshots versionados",
    tools: ["python", "pandas", "streamlit"],
    group: "pessoal",
    highlight: true,
    preview: "erp-acougue",
    diagram: "erp-acougue",
    year: "2026",
  },
  {
    slug: "illusion-of-rigor",
    title: "LLMs and the Illusion of Rigor",
    category: "Pesquisa · Governança de IA",
    date: "2026",
    summary:
      "Implications on Global Asymmetry and AI Governance in the International System.",
    detail:
      "Experimento de “primeira camada” com Gemini 2.5 Pro, ChatGPT-4o e Claude Opus 4: os modelos foram instruídos, pelas próprias interfaces de chat, a aprender e aplicar um modelo de decision-mapping (Guevara, 2019) ao caso empírico da governança global de IA. Os modos de falha foram distintos — substituição de tarefa, alucinação metodológica e, o mais relevante, uma “ilusão de rigor”: a saída mais competente simulou com sucesso a forma da escrita acadêmica, mas foi minada por falhas sistemáticas de evidência, com alta taxa de citações fabricadas, distorcidas e de baixa qualidade. O argumento é que essa ilusão é uma ameaça epistêmica mais perniciosa que o erro óbvio, porque transfere ao leitor o ônus da verificação forense — e que a falha não é meramente técnica, mas sintoma de um sistema global assimétrico, com lógica otimizada para plausibilidade em vez de profundidade analítica. Com Dr. Alfredo Juan Guevara Martinez e Profa. Dra. Luciana Monteiro-Krebs. Capítulo em edição para livro organizado pela PUC-RS.",
    stack: "Gemini 2.5 Pro · ChatGPT-4o · Claude Opus 4 · Relações Internacionais",
    tools: ["openai", "anthropic"],
    coverTitle:
      "LLMs and the Illusion of Rigor: implications on Global Asymmetry and AI Governance in the International System",
    coverMeta:
      "Guevara Martinez · Stephan · Monteiro-Krebs — capítulo em edição, PUC-RS",
    group: "pessoal",
    highlight: true,
    badge: "ResearchGate",
    link: "https://www.researchgate.net/publication/397001141_LLMs_and_the_Illusion_of_Rigor_implications_on_Global_Asymmetry_and_AI_Governance_in_the_International_System",
    linkLabel: "researchgate.net",
    year: "2026",
  },
  {
    slug: "tese-gaia",
    title: "Tornando visível o design de LLMs",
    category: "Pesquisa · TCC",
    date: "2025",
    summary:
      "Um estudo eDSR do Projeto Gaia em português brasileiro — trabalho de conclusão de curso na FGV EAESP.",
    stack: "eDSR · LLMs · português brasileiro · FGV EAESP",
    tools: [],
    group: "pessoal",
    highlight: true,
    preview: "tese",
    badge: "TCC",
    link: "/docs/tese-luca-stephan.pdf",
    linkLabel: "Ler o PDF",
    year: "2025",
  },

  // ── Corporativo — grade compacta ───────────────────────────────
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
    group: "corporativo",
    diagram: "motor-rag-propostas",
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
    group: "corporativo",
    diagram: "agente-agendamento",
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
    group: "corporativo",
    diagram: "analytics-crm",
    year: "2024",
  },
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
    group: "corporativo",
    diagram: "orquestrador-reunioes",
    year: "2025",
  },
  {
    slug: "maia-recrutador",
    title: "Recrutador por voz com IA",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Recrutador autônomo: conversa com o gestor no WhatsApp, liga para candidatos, transcreve, avalia e devolve a shortlist.",
    stack: "Python/Flask · Twilio · ElevenLabs · GPT · WhatsApp",
    tools: ["python", "flask", "twilio", "elevenlabs", "openai", "whatsapp"],
    group: "corporativo",
    year: "2026",
  },
  {
    slug: "super-agente-restaurante",
    title: "Super-agente de atendimento para rede de restaurantes",
    category: "Agentes de voz & WhatsApp",
    summary:
      "Agente híbrido (voz de baixa latência + WhatsApp) que faz reservas batendo direto no sistema de gestão e na agenda.",
    detail:
      "Core de voz de baixíssima latência (ElevenLabs + Vapi) e texto via WhatsApp Business API. A reserva aciona um webhook no sistema de gestão interno para travar a mesa e, em paralelo, dispara o convite via Google Calendar ao cliente.",
    stack: "Vapi · ElevenLabs · WhatsApp · Google Calendar · webhooks · Python",
    tools: ["vapi", "elevenlabs", "whatsapp", "googlecalendar", "python"],
    group: "corporativo",
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
    group: "corporativo",
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
    group: "corporativo",
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
    group: "corporativo",
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
    group: "corporativo",
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
    group: "corporativo",
    year: "2025",
  },
  {
    slug: "assistente-rag-interno",
    title: "Assistente RAG sobre a base de conhecimento da empresa",
    category: "Documentos & conhecimento (RAG)",
    summary:
      "Assistente conversacional sobre a base interna; alimenta o motor de propostas e outros agentes.",
    stack: "RAG · LLM · Streamlit",
    tools: ["rag", "openai", "streamlit"],
    group: "corporativo",
    year: "2025",
  },
  {
    slug: "radar-pesquisa-ia",
    title: "Radar de pesquisa em IA",
    category: "Dados & scraping",
    summary:
      "Varre fontes de ponta (DeepMind, Stanford HAI, Nature MI, Anthropic, NVIDIA…), normaliza e entrega base pesquisável.",
    stack: "Python · web scraping · Streamlit · SQLite",
    tools: ["python", "streamlit", "sqlite"],
    group: "corporativo",
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
    group: "corporativo",
    year: "2025",
  },
  {
    slug: "motor-precificacao-cloud",
    title: "Motor de precificação de infraestrutura cloud",
    category: "Cloud & engenharia de custos",
    summary:
      "Engine de precificação de infraestrutura: catálogo, motor de cenários e runner, com testes — para custos reproduzíveis.",
    stack: "Python · pricing engine · Oracle OCI · testes",
    tools: ["python"],
    group: "corporativo",
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
    group: "corporativo",
    year: "2025",
  },

];

export const highlightCases = cases.filter((c) => c.highlight);
export const corporativoCompact = cases.filter(
  (c) => c.group === "corporativo" && !c.highlight,
);
