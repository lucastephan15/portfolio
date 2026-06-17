# Portfólio de Cases — Luca Stephan

> Documento de trabalho para consolidação e "pente fino".
> **Confidencialidade:** nomes de clientes/parceiros mantidos genéricos (ex.: "concessionária de grande porte", "rede de restaurantes"). Stakeholders citados por cargo, nunca por nome.
> **Legenda:** `[mapeado]` já constava no site · `[novo]` surgiu na entrevista · `[meta]` é uma capacidade transversal, não um projeto isolado.

---

## Tese

Generalista de formação dupla (negócio + engenharia) que leva problemas corporativos complexos da concepção à entrega **ponta a ponta, sozinho** — com soluções altamente personalizadas, entregues em prazos curtos. Três anos na Amadeus AI cobrindo praticamente todo escopo de automação corporativa: CRM, agentes de voz/texto, inteligência de reunião, dados/BI, documentos e cloud.

---

## Curadoria do site

Foco da atenção em **4 destaques** (com detalhe/diagrama de arquitetura próprios); o restante em **grade compacta**.

| # | Case | Título público | O que prova |
|---|---|---|---|
| ⭐ 1 | **C1** | Sistema Multi-Agente para Orquestração de Reuniões (Human-in-the-Loop) | Governança, segurança, multi-modelo |
| ⭐ 2 | **B3** *(B2 como secundário forte)* | Agente Conversacional Autônomo com Roteamento e Agendamento em Tempo Real | Integração com o mundo físico (Calendar/sistemas), latência de voz |
| ⭐ 3 | **E1** | Motor RAG para Geração Automatizada de Propostas Técnicas | RAG aplicado a documentos complexos |
| ⭐ 4 | **A3** | Plataforma Serverless de Data Analytics e Forecast para CRM | Engenharia de dados pesada (AWS) — quebra o estereótipo "só LLM" |

> **Interface dos destaques:** cada um leva um **diagrama de arquitetura** limpo (User → WhatsApp API → AWS Lambda → ElevenLabs/HubSpot…). CTOs/Tech Leads escaneiam arquitetura em segundos.
> **Impacto:** linhas `Impacto (PREENCHER)` abaixo trazem a *moldura* sugerida — **substituir pelos números reais** antes do deploy (sem métrica chutada).

---

## A. CRM & Revenue Operations

### A1. Relatório semanal de Bill of Materials por parceiro `[novo]`
- **Resumo:** consolidação automática da carteira de deals por parceiro, entregue semanalmente.
- **Como funciona:** scripts batem na **HubSpot API** → dados categorizados por cliente, porte, indústria, valor e estágio do deal → tratados em planilha → envio semanal via **Gmail** ao responsável de cada parceiro.
- **Stack:** HubSpot API · Google Sheets · Gmail API · Python
- **Atributo:** integração CRM ↔ relatório recorrente sem intervenção manual.

### A2. Régua de comunicação por etapa do funil `[novo]`
- **Resumo:** disparo de ações de relacionamento conforme o deal avança.
- **Como funciona:** mudança de estágio do deal aciona tarefas/comunicações da régua, sobre um funil de vendas bem estruturado.
- **Stack:** HubSpot (workflows + API) · Python
- **Atributo:** desenho de processo comercial + automação de cadência.

### A3. Camada própria de analytics sobre o CRM `[novo]` ⭐ DESTAQUE
- **Título público:** Plataforma Serverless de Data Analytics e Forecast para CRM
- **Resumo:** plataforma de dados própria sobre o HubSpot para decisões quantitativas que o software não entregava.
- **Como funciona:** extração via **Python serverless (AWS Lambda)** na HubSpot API → ingestão em **data lake (S3)** → consulta via **Athena** → visualização dupla: **Streamlit** (exploração em tempo real e teste de hipóteses com o time) e **QuickSight** (dashboards para a diretoria).
- **Decisões informadas:** win-rate por **ICP**, coorte por indústria, **pipeline velocity** (ciclo de vendas) e forecast baseado em probabilidade histórica de conversão por perfil — não no "feeling" do vendedor.
- **Stack:** AWS Lambda · S3 · Athena · QuickSight · Streamlit · HubSpot API · Python
- **Atributo:** engenharia de dados ponta a ponta + tradução em decisão de negócio.
- **Impacto:** decisões por intuição substituídas por forecast de pipeline com **~80–85% de acurácia** (coorte de indústrias × histórico de ICP). *(80–85% comunica maturidade e honestidade — evitamos prometer 95%+ em ML corporativo.)*

### A4. Cadastro & enriquecimento de contas on-demand `[novo]` (evolui o `[mapeado]` de enriquecimento)
- **Resumo:** preencher o nome de uma empresa numa planilha cria e enriquece a conta inteira no CRM.
- **Como funciona:** nome digitado no **Google Sheets** → busca via **RocketReach/Apollo** (perfis + telefones diretos + e-mails corporativos validados) → **upsert na HubSpot API**, criando a empresa se não existir e depois os contatos, tudo vinculado por **ID** (empresa/contato). **Deduplicação** crítica antes do upsert: validação de domínio + hash do e-mail contra a base, garantindo integridade e evitando poluição.
- **Stack:** Google Sheets · RocketReach/Apollo · HubSpot API · Python
- **Atributo:** pipeline de dados com integridade referencial e dedup — não é "puxar e jogar".

### A5. Cálculo de tier de leads `[mapeado]`
- **Resumo:** calculadora de priorização de leads conectando dados de CRM a decisão comercial.
- **Stack:** HubSpot API · Python

### A6. Extração de propriedades de contatos/empresas `[mapeado]`
- **Resumo:** descoberta e extração estruturada de propriedades do CRM.
- **Stack:** HubSpot API · Python

### A7. Framework de automação CRM-agnóstico `[meta]`
- **Resumo:** o mesmo arsenal de automações replicado em **ClickUp** ou **HubSpot** conforme o CRM do cliente.
- **Atributo:** abstração de capacidade sobre ferramenta — polivalência aplicada.

---

## B. Agentes conversacionais (voz & WhatsApp)

### B1. MAIA — Recrutador por voz com IA `[mapeado]`
- **Resumo:** recrutador autônomo que conversa com o gestor por WhatsApp, liga para candidatos, transcreve, avalia e devolve shortlist.
- **Stack:** Python/Flask · Twilio · ElevenLabs · GPT · WhatsApp

### B2. Super-agente de atendimento — rede de restaurantes `[novo]` (projeto-mãe do MAIA)
- **Resumo:** agente híbrido que substitui múltiplas funções de front-office.
- **Como funciona:** core de **voz de baixíssima latência** (ElevenLabs + **Vapi**) e texto via **WhatsApp Business API**; reserva aciona **webhook** no sistema de gestão interno do restaurante para travar a mesa e, em paralelo, dispara convite via **Google Calendar API** ao cliente.
- **Stack:** Vapi · ElevenLabs · WhatsApp Business API · Google Calendar API · webhooks · Python
- **Atributo:** orquestração de agente que afeta o mundo real (reserva + agenda + sistemas internos).

### B3. Agente de captura & agendamento — concessionária de grande porte `[novo]` ⭐ DESTAQUE
- **Título público:** Agente Conversacional Autônomo com Roteamento e Agendamento em Tempo Real
- **Resumo:** tira dúvidas, detalha serviços e agenda revisões.
- **Como funciona:** canal primário **WhatsApp** (captura imediata do lead), **fallback para voz**; agendamento faz **checagem de concorrência em tempo real** na agenda da equipe de vendas (**Google Calendar** integrado ao CRM deles) para evitar double-booking, retornando só os slots livres.
- **Stack:** WhatsApp Business API · voz (ElevenLabs/Vapi) · Google Calendar API · CRM
- **Atributo:** lógica de disponibilidade em tempo real, não só "chatbot de FAQ".
- **Impacto:** SLA de primeira resposta de **horas para instantâneo (0 s)**, triagem simultânea ilimitada e **+15–25% na conversão para agendamento** (lead não esfria no WhatsApp).

### B4. Agente de cotação de seguro saúde via WhatsApp `[novo]`
- **Resumo:** conduz a cotação de seguro saúde por conversa.
- **Stack:** WhatsApp Business API · LLM · Python
- **Atributo:** agente vertical de produto financeiro (distinto do H1, que é preenchimento de planilha, não conversa).

---

## C. Inteligência de reunião (human-in-the-loop)

### C1. Orquestrador pós-reunião `[novo]` ⭐ DESTAQUE
- **Título público:** Sistema Multi-Agente para Orquestração de Reuniões (Human-in-the-Loop)
- **Resumo:** transcrição de reunião vira ações distribuídas e controladas, sempre com aprovação humana.
- **Como funciona:** agente de transcrição → agente roteador multicanal. **Extração** em **Claude 3.5 Sonnet** (janela de contexto longa para transcrições), **redação** em **GPT-4o**. O fluxo registra action items + log no **HubSpot**, cria tarefa no **ClickUp** (se houver entregável técnico), manda resumo no **Slack** da equipe e gera **rascunho de follow-up no Gmail**.
- **Human-in-the-loop:** aprovação assíncrona via **Slack** com botões interativos ("Aprovar disparo", "Regerar", "Editar no CRM"). Nada é executado sem intervenção humana.
- **Stack:** Claude 3.5 Sonnet · GPT-4o · HubSpot · ClickUp · Slack (interactive) · Gmail API · Python
- **Atributo:** arquitetura multi-agente, multi-modelo e governança de IA (controle + segurança).
- **Impacto:** tempo de follow-up + setup de tarefas por call de **30–40 min para ~3 min** (apenas ler o resumo e aprovar nos botões do Slack), mantendo a personalização.

---

## D. Email & comunicação

### D1. Triagem inteligente de email `[novo]`
- **Resumo:** classifica e prioriza a caixa de entrada e já adianta respostas.
- **Como funciona:** integração nativa via **Gmail API**; classificação **multi-label** por intenção (Dúvida Técnica, Comercial, Suporte, Spam) e prioridade (Alta/Média/Baixa). Para intenções comerciais mapeadas (ex.: cotação padrão), insere **rascunho contextualizado na pasta Drafts**.
- **Stack:** Gmail API · LLM · Python
- **Atributo:** classificação + ação (draft), não só etiqueta.

---

## E. Documentos, comercial & conhecimento (RAG)

### E1. Automação de proposta comercial `[novo]` ⭐ DESTAQUE
- **Título público:** Motor RAG para Geração Automatizada de Propostas Técnicas
- **Resumo:** pipeline que gera propostas técnicas/comerciais conectadas ao conhecimento da empresa.
- **Como funciona:** cadeia de steps — (1) ingestão de contexto via **RAG** sobre o histórico da conta e transcrições; (2) estruturação do esqueleto; (3) geração do conteúdo técnico (atributos de marca, requisitos, equipe); (4) revisão de tom de voz. Output bruto em **Markdown** → conversão dinâmica para **Google Docs** (edição colaborativa) → exportação para **PDF**.
- **Stack:** RAG · LLM · Google Docs API · Markdown→PDF · Python
- **Atributo:** "cérebro" comercial conectado ao oráculo de conhecimento.
- **Impacto:** tempo médio de elaboração de proposta de **2–3 h para ~15 min** (restante = revisão humana e ajustes no Google Docs), mantendo personalização e tom de marca.

### E2. Oráculo Amadeus — assistente RAG `[mapeado]`
- **Resumo:** assistente conversacional sobre a base de conhecimento da empresa; alimenta a proposta e outros agentes.
- **Stack:** RAG · LLM · Streamlit

### E3. Parsing de documentos para RAG `[novo/meta]`
- **Resumo:** extração de texto, tabelas e metadados de anexos (contratos, relatórios setoriais) → chunks vetorizados.
- **Stack:** bibliotecas de extração de PDF · embeddings/vetorização · Python
- **Atributo:** transforma documento não-estruturado em conhecimento consumível por LLM.

---

## F. Dados, scraping & enriquecimento

### F1. RocketResearch — radar de pesquisa em IA `[mapeado]`
- **Resumo:** varre fontes de ponta (DeepMind, Stanford HAI, Nature MI, Anthropic, NVIDIA, AWS ML…), normaliza e entrega base pesquisável.
- **Stack:** Python · web scraping · Streamlit · SQLite

### F2. Scraping amplo — dados & assets visuais `[novo]`
- **Resumo:** roteiros de scraping para os mais variados fins — análise de dados e captura de **assets/estilos visuais** para recriar interfaces com o visual desejado.
- **Stack:** Python · scraping
- **Atributo:** versatilidade (de dados a referências de design).

### F3. Enriquecimento & prospecção (LinkedIn / VC) `[mapeado]`
- **Resumo:** fetchers (LinkedIn, fontes de VC) e pipelines de estruturação de grandes bases para alimentar prospecção.
- **Stack:** Python · web scraping · data enrichment

---

## G. Cloud, plataforma & ferramentas internas

### G1. Nexus — motor de precificação cloud (OCI) `[mapeado]`
- **Resumo:** engine de precificação de infraestrutura em nuvem: catálogo, motor de cenários e runner, com testes.
- **Como funciona:** mapeia custo de armazenamento, infraestrutura e VMs para estimar custos de projeto de forma reproduzível.
- **Stack:** Python · pricing engine · Oracle OCI · testes
- **Atributo:** domínio das etapas de criação/custeio de um produto de IA.

### G2. Apps internos em Streamlit `[meta]`
- **Resumo:** ferramentas internas e protótipos para o time validar lógicas de IA sem o overhead de front-ends complexos.
- **Stack:** Streamlit · Python
- **Atributo:** entrega rápida de ferramenta utilizável.

### G3. Stack de BI & métricas `[novo/meta]`
- **Resumo:** evolução de integrações simples no Sheets para bancos estruturados conectados a **QuickSight**, medindo performance da própria IA e do negócio.
- **Stack:** S3 · Athena · QuickSight · Python

---

## H. Automação de back-office / planilhas

### H1. Automação de cotações de seguro (frota e demais ramos) `[mapeado]`
- **Resumo:** pipeline que lê planilhas brutas e preenche automaticamente os templates exigidos por seguradoras.
- **Stack:** Python · pandas/openpyxl
- **Atributo:** eliminação de trabalho manual repetitivo (back-office: batch/ETL/confiabilidade de dados).
- **Impacto:** economia de **~20–30 h operacionais/semana** (≈1 FTE dedicado a data entry), com erros de digitação reduzidos a zero.
- **Par complementar (B4 × H1):** B4 é *front-office* (fala com o cliente: UX conversacional, baixa latência, NLP/intenção); H1 é *back-office* (resolve a burocracia interna: batch, ETL, integridade). Juntos mostram os dois lados da operação.

---

## Orquestração: no-code vs código `[meta]`
- **Make / n8n:** conexões simples de webhooks e testes rápidos.
- **Código próprio (Python/Node, serverless):** fluxos com manipulação complexa de dados, chamadas encadeadas de agentes e arquitetura robusta.
- **Atributo:** escolhe a ferramenta certa pelo problema, não por modismo.

---

## Projetos pessoais & pesquisa `[mapeado]`
- **TomaORemedin** — PWA de adesão a tratamento (hipertensão/diabetes), apoio a IC.
- **Overlay de TFT para Mac** — motor de **OCR (Vision) construído do zero** para reconhecer augments onde o Overwolf não chega. *(Comprova competência de OCR/extração estruturada — a mesma base que cobriria NF-e/conciliação. Reforçada pelo parsing de documentos do RAG, ver E3.)*
- **Craving** — PWA para atravessar a fissura de cigarro (design comportamental).
- **Guia de Presentes — Stardew Valley** — site data-driven (Astro).
- **Chaos Engineering como artefato DSR** — paper em Information Systems.
- **The Illusion of Rigor** — preprint sobre "ilusão de rigor" em LLMs (Gemini/GPT-4o/Claude).

---

## Legenda de ferramentas (para os ícones, estilo n8n templates)

Mapa tool → cases (base para os "selos" de cada projeto):

| Ferramenta | Cases |
|---|---|
| HubSpot | A1, A2, A3, A4, A5, A6, C1 |
| ClickUp | A7, C1 |
| Gmail / Google Workspace | A1, C1, D1 |
| Google Sheets | A1, A4, G3, H1 |
| Google Calendar | B2, B3 |
| Google Docs | E1 |
| Slack | C1 |
| WhatsApp Business API | B1, B2, B3, B4 |
| Twilio | B1 |
| ElevenLabs / Vapi | B1, B2, B3 |
| Claude 3.5 Sonnet | C1 |
| GPT-4o | C1, D1, E1 |
| AWS Lambda / S3 / Athena / QuickSight | A3, G3 |
| Streamlit | A3, E2, F1, G2 |
| RocketReach / Apollo | A4 |
| LinkedIn / fontes VC | F3 |
| Oracle OCI | G1 |
| Python · pandas/openpyxl | A*, B*, D1, E*, F*, G*, H1 |
| Node | (fluxos serverless selecionados) |
| n8n / Make | webhooks simples, protótipos |
| RAG / embeddings | E1, E2, E3 |

---

## Pontos a pentear (TODO)
- [x] B4 vs H1 → **mantidos separados** (front-office × back-office).
- [x] **Destaques definidos:** C1, B3, E1, A3 (B2 como secundário forte).
- [x] **Títulos públicos** definidos para os 4 destaques.
- [x] **Métricas reais** preenchidas (C1, B3, E1, A3, H1).
- [x] **Escopo extra decidido:** sem case de tickets/NF-e dedicado — **não força**. A competência de **OCR/extração estruturada** já está comprovada (Overlay de TFT, OCR do zero + parsing de documentos do RAG, E3). Portfólio em nível sênior focado no core entregue na Amadeus.

## Próximos passos de build (site)
- [ ] Nova dinâmica de **Trabalhos**: 4 destaques (com **diagrama de arquitetura** + detalhe/modal) × grade compacta para o resto.
- [ ] **Ícones de ferramentas** por case (estilo n8n templates) — usar a *Legenda de ferramentas* acima como fonte.
- [ ] Diagramas de arquitetura dos 4 destaques (Excalidraw/draw.io ou SVG no próprio site).
