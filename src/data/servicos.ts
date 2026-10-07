/* Serviços da Nekobit ("O que fazemos"). A ordem do array é a ordem da
   página: o primeiro é o mais importante (definido pelo Luca em 07/10/2026).
   `cases` aponta para slugs em cases.ts; os de grupo "corporativo" aparecem
   marcados como experiência anterior (não são trabalhos da Nekobit). */
import type { ICONS } from "../lib/icons";

export type Servico = {
  id: string;
  nome: string;
  icone: keyof typeof ICONS;
  cor: string; // var(--color-…)
  tarefa: string; // uma linha: o que resolve
  entrada: string;
  saida: string;
  tools: string[]; // slugs em TOOLS
  cases: string[]; // slugs em cases.ts
};

export const servicos: Servico[] = [
  {
    id: "conteudo",
    nome: "Conteúdo com IA generativa",
    icone: "estrela",
    cor: "var(--color-rosa)",
    tarefa: "Vídeo e imagem para apresentar projetos, produtos e marcas.",
    entrada: "Referências, fotos reais e roteiro",
    saida: "Vídeo ou animação finalizados",
    tools: ["seedance", "kling", "midjourney", "gemini", "elevenlabs", "capcut"],
    cases: ["luta-pa", "patio-sao-jose"],
  },
  {
    id: "web",
    nome: "Sites e produtos web",
    icone: "codigo",
    cor: "var(--color-ciano)",
    tarefa: "Sites de projeto e produtos web leves, rápidos e no ar.",
    entrada: "Conteúdo e objetivo do projeto",
    saida: "Site publicado, com domínio próprio",
    tools: ["astro", "python", "nodedotjs"],
    cases: ["patio-sao-jose", "cardapio-lamen", "stardew-guia"],
  },
  {
    id: "ml",
    nome: "Machine learning em produção",
    icone: "estatistica",
    cor: "var(--color-violeta)",
    tarefa: "Modelos treinados, versionados e servidos por API.",
    entrada: "Dados históricos do negócio",
    saida: "Endpoint de predição versionado",
    tools: ["scikitlearn", "pytorch", "mlflow", "fastapi", "docker", "render"],
    cases: ["churn-api"],
  },
  {
    id: "rag",
    nome: "Documentos e conhecimento (RAG)",
    icone: "formacao",
    cor: "var(--color-ficha)",
    tarefa: "Gerar documentos e responder com base no conhecimento da empresa.",
    entrada: "Documentos, transcrições e histórico",
    saida: "Proposta ou resposta com a fonte citada",
    tools: ["rag", "openai", "anthropic", "googledocs", "python"],
    cases: ["motor-rag-propostas", "assistente-rag-interno"],
  },
  {
    id: "dados",
    nome: "Dados e BI",
    icone: "dados",
    cor: "var(--color-anil)",
    tarefa: "Tirar os dados de onde estão e transformar em decisão.",
    entrada: "ERP, CRM, planilhas e fontes públicas",
    saida: "Base consolidada, painéis e forecast",
    tools: ["python", "pandas", "streamlit", "plotly", "lambda", "athena"],
    cases: ["erp-acougue", "fernao-dias", "analytics-crm"],
  },
  {
    id: "automacao",
    nome: "Automação e CRM",
    icone: "automacao",
    cor: "var(--color-ciano)",
    tarefa: "Tirar do time o trabalho manual e repetitivo.",
    entrada: "Eventos do CRM, e-mails e planilhas",
    saida: "Relatórios, tarefas e mensagens disparados sozinhos",
    tools: ["hubspot", "gmail", "googlesheets", "slack", "clickup", "python"],
    cases: ["relatorio-bom-parceiro", "regua-comunicacao", "triagem-email"],
  },
  {
    id: "agentes",
    nome: "Agentes de IA",
    icone: "agente",
    cor: "var(--color-rosa)",
    tarefa: "Atendimento, agendamento e cotação por voz e WhatsApp.",
    entrada: "A conversa do cliente",
    saida: "Agenda marcada, cotação feita, lead no CRM",
    tools: ["whatsapp", "vapi", "elevenlabs", "twilio", "openai", "googlecalendar"],
    cases: ["agente-agendamento", "super-agente-restaurante", "maia-recrutador"],
  },
];
