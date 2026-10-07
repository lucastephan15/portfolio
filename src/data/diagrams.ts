/* Diagramas de arquitetura dos cases em destaque (SVG inline, tema arcade Nekobit).
   Renderizados no modal via set:html. Responsivos (viewBox + width:100%).
   As setas usam um marcador compartilhado #dgArrow (definido uma vez na fase Portfólio). */

const style = `
  <style>
    .box { fill:#1b1538; stroke:#2e2657; stroke-width:2; }
    .acc { fill:#2a1540; stroke:#ff5fa2; stroke-width:2; }
    .sink{ fill:#0d0a1f; stroke:#38d6ff; stroke-width:2; }
    .lbl { font:600 13px Inter,ui-sans-serif,system-ui,sans-serif; fill:#f3eeff; }
    .sub { font:11px Inter,ui-sans-serif,system-ui,sans-serif; fill:#9d94c7; }
    .note{ font:11px "JetBrains Mono",ui-monospace,monospace; fill:#9d94c7; }
    .edge{ fill:none; stroke:#6d76ff; stroke-width:1.5; }
  </style>`;

const A = 'marker-end="url(#dgArrow)"';

export const diagrams: Record<string, string> = {
  "orquestrador-reunioes": `
  <svg viewBox="0 0 920 340" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arquitetura do orquestrador de reuniões">
    ${style}
    <rect class="box" x="24" y="146" width="156" height="52" rx="8"/>
    <text class="lbl" x="102" y="168" text-anchor="middle">Transcrição</text>
    <text class="sub" x="102" y="185" text-anchor="middle">da reunião</text>
    <rect class="acc" x="212" y="146" width="160" height="52" rx="8"/>
    <text class="lbl" x="292" y="168" text-anchor="middle">Agente Extração</text>
    <text class="sub" x="292" y="185" text-anchor="middle">Claude 3.5 Sonnet</text>
    <rect class="acc" x="404" y="146" width="160" height="52" rx="8"/>
    <text class="lbl" x="484" y="168" text-anchor="middle">Agente Redação</text>
    <text class="sub" x="484" y="185" text-anchor="middle">GPT-4o</text>
    <rect class="sink" x="712" y="44"  width="184" height="46" rx="8"/>
    <text class="lbl" x="804" y="64"  text-anchor="middle">HubSpot</text>
    <text class="sub" x="804" y="80"  text-anchor="middle">log + action items</text>
    <rect class="sink" x="712" y="116" width="184" height="46" rx="8"/>
    <text class="lbl" x="804" y="136" text-anchor="middle">ClickUp</text>
    <text class="sub" x="804" y="152" text-anchor="middle">tarefa técnica</text>
    <rect class="acc"  x="712" y="188" width="184" height="46" rx="8"/>
    <text class="lbl" x="804" y="208" text-anchor="middle">Slack</text>
    <text class="sub" x="804" y="224" text-anchor="middle">resumo + aprovação ●</text>
    <rect class="sink" x="712" y="260" width="184" height="46" rx="8"/>
    <text class="lbl" x="804" y="280" text-anchor="middle">Gmail</text>
    <text class="sub" x="804" y="296" text-anchor="middle">rascunho de follow-up</text>
    <path class="edge" ${A} d="M180,172 L208,172"/>
    <path class="edge" ${A} d="M372,172 L400,172"/>
    <path class="edge" d="M564,172 L598,172"/>
    <path class="edge" ${A} d="M598,172 C660,172 650,67 708,67"/>
    <path class="edge" ${A} d="M598,172 C660,172 650,139 708,139"/>
    <path class="edge" ${A} d="M598,172 C660,172 650,211 708,211"/>
    <path class="edge" ${A} d="M598,172 C660,172 650,283 708,283"/>
    <text class="note" x="24" y="326">● Nada é disparado sem aprovação humana no Slack (Aprovar · Regerar · Editar).</text>
  </svg>`,

  "agente-agendamento": `
  <svg viewBox="0 0 920 250" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arquitetura do agente de agendamento">
    ${style}
    <rect class="box" x="24" y="96" width="150" height="56" rx="8"/>
    <text class="lbl" x="99" y="118" text-anchor="middle">Cliente</text>
    <text class="sub" x="99" y="135" text-anchor="middle">WhatsApp / voz</text>
    <rect class="acc" x="206" y="96" width="150" height="56" rx="8"/>
    <text class="lbl" x="281" y="118" text-anchor="middle">Agente</text>
    <text class="sub" x="281" y="135" text-anchor="middle">intenção + diálogo</text>
    <rect class="box" x="388" y="86" width="190" height="76" rx="8"/>
    <text class="lbl" x="483" y="112" text-anchor="middle">Disponibilidade</text>
    <text class="sub" x="483" y="129" text-anchor="middle">Google Calendar + CRM</text>
    <text class="sub" x="483" y="144" text-anchor="middle">(checagem em tempo real)</text>
    <rect class="box" x="610" y="96" width="124" height="56" rx="8"/>
    <text class="lbl" x="672" y="120" text-anchor="middle">Slots livres</text>
    <rect class="acc" x="766" y="96" width="130" height="56" rx="8"/>
    <text class="lbl" x="831" y="118" text-anchor="middle">Reserva</text>
    <text class="sub" x="831" y="135" text-anchor="middle">confirmada</text>
    <path class="edge" ${A} d="M174,124 L202,124"/>
    <path class="edge" ${A} d="M356,124 L384,124"/>
    <path class="edge" ${A} d="M578,124 L606,124"/>
    <path class="edge" ${A} d="M734,124 L762,124"/>
    <path class="edge" ${A} d="M672,152 C672,196 281,196 281,156"/>
    <text class="note" x="690" y="186">slots ao cliente</text>
    <text class="note" x="24" y="226">Sem double-booking: só horários livres são oferecidos. Fallback automático para ligação.</text>
  </svg>`,

  "motor-rag-propostas": `
  <svg viewBox="0 0 920 300" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arquitetura do motor RAG de propostas">
    ${style}
    <rect class="box" x="24" y="44" width="170" height="56" rx="8"/>
    <text class="lbl" x="109" y="66" text-anchor="middle">Histórico +</text>
    <text class="lbl" x="109" y="83" text-anchor="middle">transcrições</text>
    <rect class="acc" x="226" y="44" width="150" height="56" rx="8"/>
    <text class="lbl" x="301" y="66" text-anchor="middle">RAG · Oráculo</text>
    <text class="sub" x="301" y="83" text-anchor="middle">ingestão de contexto</text>
    <rect class="box" x="408" y="44" width="150" height="56" rx="8"/>
    <text class="lbl" x="483" y="76" text-anchor="middle">1 · Esqueleto</text>
    <rect class="box" x="590" y="44" width="170" height="56" rx="8"/>
    <text class="lbl" x="675" y="76" text-anchor="middle">2 · Conteúdo técnico</text>
    <rect class="box" x="590" y="180" width="170" height="56" rx="8"/>
    <text class="lbl" x="675" y="212" text-anchor="middle">3 · Revisão de tom</text>
    <rect class="box" x="408" y="180" width="150" height="56" rx="8"/>
    <text class="lbl" x="483" y="212" text-anchor="middle">Markdown</text>
    <rect class="box" x="226" y="180" width="150" height="56" rx="8"/>
    <text class="lbl" x="301" y="208" text-anchor="middle">Google Docs</text>
    <text class="sub" x="301" y="224" text-anchor="middle">edição humana</text>
    <rect class="acc" x="24" y="180" width="150" height="56" rx="8"/>
    <text class="lbl" x="99" y="212" text-anchor="middle">PDF</text>
    <path class="edge" ${A} d="M194,72 L222,72"/>
    <path class="edge" ${A} d="M376,72 L404,72"/>
    <path class="edge" ${A} d="M558,72 L586,72"/>
    <path class="edge" ${A} d="M675,100 L675,176"/>
    <path class="edge" ${A} d="M590,208 L562,208"/>
    <path class="edge" ${A} d="M408,208 L380,208"/>
    <path class="edge" ${A} d="M226,208 L178,208"/>
    <text class="note" x="24" y="276">Output limpo em Markdown → Google Docs (colaboração) → exportação final em PDF.</text>
  </svg>`,

  "analytics-crm": `
  <svg viewBox="0 0 920 300" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arquitetura da plataforma de analytics de CRM">
    ${style}
    <rect class="box" x="24" y="120" width="150" height="56" rx="8"/>
    <text class="lbl" x="99" y="152" text-anchor="middle">HubSpot API</text>
    <rect class="acc" x="206" y="120" width="160" height="56" rx="8"/>
    <text class="lbl" x="286" y="142" text-anchor="middle">AWS Lambda</text>
    <text class="sub" x="286" y="159" text-anchor="middle">Python serverless</text>
    <rect class="box" x="398" y="120" width="150" height="56" rx="8"/>
    <text class="lbl" x="473" y="146" text-anchor="middle">S3</text>
    <text class="sub" x="473" y="162" text-anchor="middle">data lake</text>
    <rect class="box" x="580" y="120" width="120" height="56" rx="8"/>
    <text class="lbl" x="640" y="152" text-anchor="middle">Athena</text>
    <rect class="sink" x="740" y="58" width="160" height="50" rx="8"/>
    <text class="lbl" x="820" y="78" text-anchor="middle">Streamlit</text>
    <text class="sub" x="820" y="95" text-anchor="middle">exploração · time</text>
    <rect class="sink" x="740" y="186" width="160" height="50" rx="8"/>
    <text class="lbl" x="820" y="206" text-anchor="middle">QuickSight</text>
    <text class="sub" x="820" y="223" text-anchor="middle">dashboards · diretoria</text>
    <path class="edge" ${A} d="M174,148 L202,148"/>
    <path class="edge" ${A} d="M366,148 L394,148"/>
    <path class="edge" ${A} d="M548,148 L576,148"/>
    <path class="edge" d="M700,148 L724,148"/>
    <path class="edge" ${A} d="M724,148 C740,148 736,83 738,83"/>
    <path class="edge" ${A} d="M724,148 C740,148 736,211 738,211"/>
    <text class="note" x="24" y="276">Métricas: win-rate por ICP · coorte por indústria · pipeline velocity · forecast (~80–85%).</text>
  </svg>`,

  "erp-acougue": `
  <svg viewBox="0 0 920 320" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arquitetura da camada de dados sobre o ERP">
    ${style}
    <rect class="box" x="24" y="118" width="168" height="60" rx="8"/>
    <text class="lbl" x="108" y="142" text-anchor="middle">ERP do varejo</text>
    <text class="sub" x="108" y="159" text-anchor="middle">sem API · somente leitura</text>
    <rect class="acc" x="228" y="118" width="160" height="60" rx="8"/>
    <text class="lbl" x="308" y="142" text-anchor="middle">Coletor</text>
    <text class="sub" x="308" y="159" text-anchor="middle">login + 5 fontes</text>
    <rect class="acc" x="424" y="106" width="188" height="84" rx="8"/>
    <text class="lbl" x="518" y="132" text-anchor="middle">Snapshot datado</text>
    <text class="sub" x="518" y="150" text-anchor="middle">manifesto: contagens,</text>
    <text class="sub" x="518" y="165" text-anchor="middle">somas, SHA-256</text>
    <text class="sub" x="518" y="181" text-anchor="middle">fonte de verdade</text>
    <rect class="box" x="648" y="118" width="120" height="60" rx="8"/>
    <text class="lbl" x="708" y="144" text-anchor="middle">dados.Base</text>
    <text class="sub" x="708" y="161" text-anchor="middle">única porta</text>
    <rect class="sink" x="800" y="52" width="96" height="44" rx="8"/>
    <text class="lbl" x="848" y="79" text-anchor="middle">Relatórios</text>
    <rect class="sink" x="800" y="126" width="96" height="44" rx="8"/>
    <text class="lbl" x="848" y="153" text-anchor="middle">Painel</text>
    <rect class="sink" x="800" y="200" width="96" height="44" rx="8"/>
    <text class="lbl" x="848" y="227" text-anchor="middle">Alertas</text>
    <rect class="box" x="424" y="212" width="188" height="44" rx="8"/>
    <text class="sub" x="518" y="232" text-anchor="middle">revisoes/ — a leitura anterior</text>
    <text class="sub" x="518" y="247" text-anchor="middle">é arquivada, nunca apagada</text>
    <path class="edge" ${A} d="M192,148 L224,148"/>
    <path class="edge" ${A} d="M388,148 L420,148"/>
    <path class="edge" ${A} d="M612,148 L644,148"/>
    <path class="edge" d="M768,148 L788,148"/>
    <path class="edge" ${A} d="M788,148 C796,148 792,74 798,74"/>
    <path class="edge" ${A} d="M788,148 L798,148"/>
    <path class="edge" ${A} d="M788,148 C796,148 792,222 798,222"/>
    <path class="edge" ${A} d="M518,190 L518,208"/>
    <text class="note" x="24" y="300">O ERP reescreve o passado: o mesmo request devolveu saldos diferentes com 30 min de intervalo — por isso toda leitura é carimbada.</text>
  </svg>`,
};
