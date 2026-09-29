# Portfólio de Cases — Luca Stephan

> Documento de trabalho para consolidação e "pente fino".
> **Confidencialidade:** nomes de clientes/parceiros mantidos genéricos (ex.: "concessionária de grande porte", "rede de restaurantes"). Stakeholders citados por cargo, nunca por nome.
> **Legenda:** `[mapeado]` já constava no site · `[novo]` surgiu na entrevista · `[meta]` é uma capacidade transversal, não um projeto isolado.

---

## Tese

Generalista de formação dupla (negócio + engenharia) que leva problemas corporativos complexos da concepção à entrega **ponta a ponta, sozinho** — com soluções altamente personalizadas, entregues em prazos curtos. Três anos de experiência corporativa cobrindo praticamente todo escopo de automação: CRM, agentes de voz/texto, inteligência de reunião, dados/BI, documentos e cloud.

> **Nomes de empresa/produto do empregador não aparecem no site** (revisão de 08/09/2026). Vale para a marca corporativa e para os nomes internos de produto (o motor de precificação, o assistente RAG interno, o radar de pesquisa e o recrutador por voz entram descritos pela função).

---

## Curadoria do site (revisão de 08/09/2026)

O site é um **currículo**, não a página de uma empresa — a seção de serviço "AI-Ready" foi removida.

**Destaques** viraram um grid único no formato "publicação" (referência: seção *Our Publications* do jina.ai): preview no topo, data, título. São dois tipos de card, com a mesma casca:

| Tipo | Preview | Ação principal |
|---|---|---|
| **Com link público** | screenshot da própria página (`public/images/previews/*.webp`) | abre o site/paper |
| **Sob NDA** | o diagrama de arquitetura SVG, como miniatura | abre o modal com o diagrama grande |

Destaques atuais (ordem do grid):

| # | Case | Tipo | Link |
|---|---|---|---|
| 1 | Espaço São José | screenshot | `patiosaojose.info` |
| 2 | Cardápio digital para casa de lámen | screenshot | `soracardapio.online` |
| 3 | Acidentes na Fernão Dias (BR-381) | screenshot + código | GitHub Pages |
| 4 | Guia de presentes — Stardew Valley | screenshot + código | GitHub Pages |
| 5 | API de predição de churn em telecom | screenshot + código | `tc-churn-api.onrender.com` · repo `tc-mle-fase1` |
| 6 | Camada de dados sobre um ERP sem API | ilustração (diagrama segue no modal) | — |
| 7 | LLMs and the Illusion of Rigor | capa + link | ResearchGate |
| 8 | Tornando visível o design de LLMs (TCC) | capa (1ª pág.) + PDF | `/docs/tese-luca-stephan.pdf` |

> Ordem definida pelo Luca em 08/09/2026: os três sites navegáveis abrem a galeria; o resto segue atrás.

Os destaques ficam numa **galeria horizontal** (scroll-snap + setas), não numa grade vertical — a página ficava longa demais.

**Os 4 destaques corporativos antigos desceram para a grade Corporativo** (08/09/2026): orquestração de reuniões (C1), analytics/forecast de CRM (A3), agente de agendamento (B3) e motor RAG de propostas (E1). Continuam com diagrama e modal, só não ocupam mais a galeria.

Abaixo dos destaques, uma grade compacta: **Corporativo**. A grade **Pessoal** foi removida (08/09/2026) junto com o card do overlay de TFT.

> **Impacto:** só números reais. Onde não há medição, o card fica sem linha de impacto.

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

### B1. Recrutador por voz com IA `[mapeado]`
- **Resumo:** recrutador autônomo que conversa com o gestor por WhatsApp, liga para candidatos, transcreve, avalia e devolve shortlist.
- **Stack:** Python/Flask · Twilio · ElevenLabs · GPT · WhatsApp

### B2. Super-agente de atendimento — rede de restaurantes `[novo]` (projeto-mãe do B1)
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

### E2. Assistente RAG sobre a base de conhecimento interna `[mapeado]`
- **Resumo:** assistente conversacional sobre a base de conhecimento da empresa; alimenta a proposta e outros agentes.
- **Stack:** RAG · LLM · Streamlit

### E3. Parsing de documentos para RAG `[novo/meta]`
- **Resumo:** extração de texto, tabelas e metadados de anexos (contratos, relatórios setoriais) → chunks vetorizados.
- **Stack:** bibliotecas de extração de PDF · embeddings/vetorização · Python
- **Atributo:** transforma documento não-estruturado em conhecimento consumível por LLM.

---

## F. Dados, scraping & enriquecimento

### F1. Radar de pesquisa em IA `[mapeado]`
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

### G1. Motor de precificação de infraestrutura cloud (OCI) `[mapeado]`
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

## I. Projetos próprios com link público `[novo — 08/09/2026]`

Entraram como **destaques** porque têm página acessível: o preview é screenshot da própria página.

### I1. API de predição de churn em telecom ⭐ DESTAQUE
Tech Challenge Fase 1 da pós em MLE (FIAP/Alura). **Ranqueador, não classificador** — a pergunta é "quem eu ligo primeiro?", o que fixa a métrica em PR-AUC e faz do limiar (0,29) um parâmetro de negócio, derivado de R$ 194 por churner perdido × R$ 62 por atenção desperdiçada.
- `/health` declara versão, sha256 do artefato, nº de features e limiar aplicado.
- Imagem `linux/amd64` reproduz o PR-AUC do treino em macOS nos 10 dígitos, 0 decisões trocadas.
- Deploy só sai com o CI verde (`autoDeployTrigger: checksPass` no `render.yaml`).
- Model card com seção de fairness que publica o resultado ruim.
- **No ar:** https://tc-churn-api.onrender.com · **Código:** https://github.com/lucastephan15/tc-mle-fase1
- Stack: Python · scikit-learn · PyTorch · MLflow · FastAPI · Docker · Render

### I2. Camada de dados sobre um ERP sem API ⭐ DESTAQUE
Varejo de carnes (**nome do negócio omitido**). O ERP não tem API pública, só um export "integração com BI" atrás de login.
> **Copy do card (revisada em 08/09/2026):** texto simples e direto — o que foi feito e o resultado. O detalhe técnico (snapshot, manifesto, SHA-256) fica no modal e na linha de impacto, não na chamada.
- Coletor autentica e varre 5 fontes; 155 endpoints do ERP mapeados.
- **Snapshot datado com manifesto** (fonte, período, contagens, somas, SHA-256) porque o histórico muda retroativamente: o mesmo request devolveu saldos diferentes com 30 min de intervalo.
- Recoleta arquiva a leitura anterior em `revisoes/`, nunca sobrescreve. Leitura por uma única porta (`dados.Base`), que informa de qual snapshot veio cada número.
- Relatório que era montado à mão sai pronto em HTML, validado contra o original.
- Stack: Python · sessão autenticada · pandas · Streamlit · Repo local `popota_estancia_2c`

### I3. Acidentes na Rodovia Fernão Dias (BR-381) ⭐ DESTAQUE
Relatório aberto sobre a base `datatran` da PRF: 5.905 acidentes, 298 mortes, 6.657 feridos (01/2024–03/2026). Motivo: a concessão passou da Arteris para a Motiva em abril/2026 e o canal que reportava acidentes em tempo real foi desativado.
- Recorte explícito do trecho (a BR-381 são duas rodovias em MG): `UF == SP` ou `UF == MG e km ≥ 480`.
- **No ar:** https://lucastephan15.github.io/fernao-dias-dados/ · Stack: Python · pandas · Plotly

### I4. Guia de presentes — Stardew Valley ⭐ DESTAQUE
Bilíngue PT/EN, com aniversários, receitas, rotina por estação e busca reversa. Dados isolados em `data.js` (fonte de verdade), gerados por pipeline determinístico em Python a partir da wiki.
- **No ar:** https://lucastephan15.github.io/stardew-gift-guide/

### I5. Espaço São José ⭐ DESTAQUE
Site do projeto de revitalização de um prédio de 1910 no centro de Pouso Alegre. **O peso do case está na produção de imagem e vídeo**, não só no site.
- **Acervo:** ~3 GB, incluindo 236 s de drone 4K que nunca tinham sido abertos — viraram a espinha do material.
- **Limite do 3D:** a cena Twinmotion do arquiteto modelava **só o lote** — rua e vizinhança não existiam em 3D. O entorno foi gerado com IA de imagem e animado em vídeo.
- **Regra-mãe do método:** toda imagem nasce de uma foto real do imóvel ou de um render existente, nunca do zero, e só com a referência certa anexada. Caso real: pedir "a serra ao fundo" de cabeça teria posto montanha atrás do muro do vizinho — de dentro do lote não se vê serra.
- **Stack:** HTML/CSS · Python · Twinmotion · Nano Banana · Midjourney/Flux · Kling · CapCut · ElevenLabs · drone 4K
- **No ar:** https://patiosaojose.info — link público **autorizado pelo Luca em 08/09/2026**, apesar do `robots: noindex` da página.

### I6. LLMs and the Illusion of Rigor ⭐ DESTAQUE
Capítulo em edição para livro organizado pela **PUC-RS**. Com Dr. Alfredo Juan Guevara Martinez e Profa. Dra. Luciana Monteiro-Krebs.
- **Método:** experimento de "primeira camada" — Gemini 2.5 Pro, ChatGPT-4o e Claude Opus 4 instruídos, pelas interfaces nativas de chat, a aplicar um modelo de decision-mapping (Guevara, 2019) ao caso da governança global de IA.
- **Achado:** modos de falha distintos — substituição de tarefa, alucinação metodológica e a "ilusão de rigor" (a saída mais competente simula a forma acadêmica, mas com alta taxa de citações fabricadas/distorcidas). O ônus da verificação forense recai sobre o leitor.
- **Publicado:** ResearchGate (397001141).
- **Pendente:** o PDF, para trocar a capa tipográfica pela 1ª página real (o ResearchGate bloqueia captura automática — confirmado em 08/09/2026).

### I7. Tornando visível o design de LLMs ⭐ DESTAQUE
TCC na FGV EAESP (2025), orientação do Prof. Gabriel Silva Cogo. Estudo eDSR do Projeto Gaia em português brasileiro.
- **Hospedagem:** PDF no próprio site — `public/docs/tese-luca-stephan.pdf` (1,4 MB, 113 páginas).
- **Preview:** folha de rosto (pág. 3) renderizada a 150 dpi e recortada em 16:10.

### I8. Cardápio digital para casa de lámen ⭐ DESTAQUE
- **Resumo:** cardápio digital de uma casa de lámen em São Paulo, em PT/EN/JA, com filtros por tipo de prato (com caldo, sem caldo, gelado, picante, vegetariano).
- **Link:** https://soracardapio.online/ — no ar desde setembro de 2026.
- **Stack:** Astro · site estático
- **Preview:** screenshot da área do cardápio (menu de categorias, filtros e primeiros pratos), recortado em 16:10 e reduzido para 960×600.
- **Posição:** 2º da galeria, logo depois do Espaço São José (pedido do Luca em 29/09/2026).

---

## Retirados do site em 08/09/2026
TomaORemedin · Craving · Chaos Engineering como artefato DSR · **Overlay de TFT para Mac** (com a grade "Pessoal" inteira).

> O overlay continua sendo a prova de OCR/extração estruturada do zero (ver E3) — está fora do site, não do repertório.

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
- [x] **Escopo extra decidido:** sem case de tickets/NF-e dedicado — **não força**. A competência de **OCR/extração estruturada** já está comprovada (Overlay de TFT, OCR do zero + parsing de documentos do RAG, E3). Portfólio em nível sênior focado no core entregue no trabalho corporativo.

## Próximos passos de build (site)
- [x] Nova dinâmica de **Trabalhos**: destaques com diagrama/preview + modal × grade compacta para o resto.
- [x] **Ícones de ferramentas** por case (estilo n8n templates).
- [x] Diagramas de arquitetura em SVG (`src/data/diagrams.ts`) — 5, contando o do ERP.
- [x] **Preview da tese** (I7) — folha de rosto renderizada do PDF.
- [x] **Card do cardápio de lámen** (I8) — "em breve" até a entrega.
- [x] `patiosaojose.info` (I5) — link autorizado.
- [x] Destaques em **galeria horizontal**.
- [ ] **Preview da 1ª página do paper** (I6) — depende do PDF.
