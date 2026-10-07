# CLAUDE.md — Nekobit / Portfólio do Luca Stephan

Instruções de projeto para o Claude Code. Site da **Nekobit** (empresa do Luca) com o portfólio dele dentro, em estética **arcade**.

## Stack & comandos
- **Astro + Tailwind CSS v4.** Site estático, uma página só (`src/pages/index.astro`).
- **Node 22 obrigatório.** A máquina tem Node 20 por padrão, que o Astro rejeita — sempre usar nvm:
  ```bash
  export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22
  npm run dev     # http://localhost:4321
  npm run build   # validar antes de qualquer commit
  ```
- **Deploy:** automático por **push na branch `main`** (GitHub `lucastephan15/portfolio`, domínio nekobit.com.br).

## Fluxo de trabalho (IMPORTANTE)
- **Sempre mostrar preview e esperar aprovação explícita antes de commit/push.** Preview = dev server real (`npm run dev`) ou um HTML standalone aberto com `open`.
- **Trabalho de interface = peça por peça com opções** (skill pessoal `pecas-com-opcoes`): 2–3 versões reais numa rota de preview temporária, conferidas em 375 e 1440 px, o Luca aprova ou combina, a peça vai para o componente real e o preview é apagado.
- Validar com `npm run build` antes de commitar. Nada de arquivos `public/__*.html` (harness de teste) no commit.
- **Só commitar/pushar quando o Luca aprovar.** Mensagens de commit em PT-BR.
- Responder sempre em **PT-BR**.

## Tom da copy
- Profissional, **concreto, sem buzzword/"bullshitagem"** — fatos, não marketing. A estética é lúdica; o texto não.
- Nomes de clientes **genéricos por NDA** ("concessionária de grande porte", "rede de restaurantes"); stakeholders por cargo.
- Métricas só com **números reais** (nunca inventar; ex.: "~80–85%", não "95%+"). Dado real mas datado leva a data ("#1 da Europa · FT 2023").
- **Os 16 cases "Corporativo" NÃO são da Nekobit** (experiência anterior). Sempre rotulados como experiência anterior, sem dizer "funcionário" nem citar contrato, e nunca usados como resultado da empresa.
- Nunca publicar faturamento, valores, nomes de clientes ou o endereço (residencial) da empresa. CNPJ pode.
- Evitar CTA agressivo.

## Estrutura do site (`src/pages/index.astro`)
Uma página com **capa → menu → 3 fases** que se "destravam":
- **Capa:** logo + PRESS START (clique/toque/Enter/Espaço). **Menu:** 3 barras estilo HUD (`MenuBar`), seleção única controlada por script (mouse, Tab e setas ↑↓ passam pelo mesmo estado).
- **Fases** (`src/components/fases/`), trancadas (`hidden`) até a barra ser escolhida; só uma aberta por vez:
  - `Jogador.astro` — Home (Pouso Alegre animada) → 01 Sobre (terminal) → 02 Um pouco mais sobre mim (carrossel) → 03 Contato.
  - `Portfolio.astro` — filtro por stack → 01 Em destaque (galeria) → 02 Corporativo (experiência anterior) + modal de case.
  - `Nekobit.astro` — abertura → 01 Quem somos → 02 O que fazemos (inventário no desktop / cards no celular) → 03 Como trabalhamos → 04 Stack (esteira) → 05 Placar → créditos (contato + ficha técnica).
- **O hash é a fonte da verdade:** `""` capa · `#menu` menu, tudo trancado · `#<id>` destrava a fase que contém o elemento e rola até ele. Links diretos (`/#jogador`, `/#contato`, `/#trabalhos`) e o voltar do navegador funcionam. "▲ Voltar ao menu" = `href="#menu"`.
- Entrar numa fase pelo menu mostra a tela "Carregando fase" (~0,6 s, em passos); link direto e reduced-motion entram sem efeito.
- **IDs são globais na página** — prefixar os novos por fase (ex.: `nekobit-contato`) para não colidir.
- Interatividade é **JS vanilla em `<script>`** nos componentes. Movimento sempre em passos (`steps()`) e respeitando `prefers-reduced-motion`; rolagem programática usa `behavior: "instant"` explícito (o `html` tem `scroll-behavior: smooth`).

## Design (fonte da verdade: skill `nekobit-brand`)
- Tokens em `src/styles/global.css`, num `@theme static` (o Tailwind v4 só emite variáveis usadas por utilitários; `static` garante `var(--color-tela)` etc. nos componentes). Base `html/body` dentro de `@layer base`.
- Cores: Fliperama `#0d0a1f` (fundo) · Tela · Grade · Fósforo (texto) · Névoa · neon Rosa→Violeta→Anil→Ciano · Ficha (amarelo, pontual).
- Fontes: **Jersey 15** (títulos; peso único — `font-synthesis-weight: none`, tamanhos ~20% maiores) · Inter (texto) · JetBrains Mono (rótulos).
- Utilitários: `.notch` (cantos chanfrados; corta sombra — não usar em botões), `.btn-px` / `.btn-px.ghost`, `.text-neon`, `.scanlines`, `.px-sprite` (tamanho via `--u` px por bit).
- Arte vetorial em pixel: `src/lib/pixel.ts` (logo, gato-bit, wordmark), `src/lib/icons.ts` (ícones 7×7) → `PixelSprite`, `Logo`, `PixelIcon`. Cabeçalho de seção: `HudHeading`.

## Dados (fonte única)
- `src/data/cases.ts` — cases do Portfólio (+ mapa `TOOLS`). A ordem do array é a ordem da galeria; `highlight: true` põe o case na galeria, o resto (grupo `corporativo`) cai na grade Corporativo.
- `src/data/servicos.ts` — os 7 serviços da Nekobit (ordem = importância, o primeiro é o mais importante).
- `src/data/diagrams.ts` — diagramas SVG (paleta arcade; setas usam o marcador `#dgArrow` definido na fase Portfólio).
- `src/data/about.ts` — cenas do carrossel.
- `src/components/ToolChips.astro` — chips de ferramenta; ícones escuros viram brancos automaticamente (`src/lib/iconTone.ts`, lido no build).
- **`docs/portfolio-cases.md` é a fonte de verdade do conteúdo dos cases** (taxonomia, impacto, stack, NDA). Atualizar junto com `cases.ts`.

## Arte pixel (convenções)
- **Cenas do carrossel e fundos:** 16:9, **344×192**, WebP (animado ok), em `public/images/sobre/` e `public/images/`.
- **Retratos/ícones do menu:** 72×72, WebP sem perda, fundo transparente, em `public/images/nekobit/`.
- **Ícones de marca (filtro):** SVG em `public/images/icons/` (de simple-icons, via `cdn.jsdelivr.net/npm/simple-icons@latest/icons/<slug>.svg`).
- **Previews dos destaques:** screenshot da página em **960×600** (16:10), WebP, em `public/images/previews/`. Sem `image-rendering: pixelated` — não é pixel art.
- **Vídeos de case:** MP4 **H.264** (não HEVC), `+faststart`, em `public/videos/<slug>.mp4`; campo `video` no `cases.ts`. Pôster 16:9 em `previews/<slug>-poster.webp`.
- Sempre `image-rendering: pixelated` em pixel art.
- O Luca gera as artes (PixelLab). Para consistência entre objetos de um conjunto, encadeia geração usando o objeto anterior como referência.
- `public/images/ai-ready*` são artes da antiga seção de serviço (removida em 08/09/2026), guardadas caso voltem.

## Backups
- Versões originais de imagens substituídas ficam como `*.bak` (ignoradas pelo git via `.gitignore`).
