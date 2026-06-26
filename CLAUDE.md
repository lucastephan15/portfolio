# CLAUDE.md — Portfólio do Luca Stephan

Instruções de projeto para o Claude Code. Site de portfólio pessoal + serviço "AI-Ready".

## Stack & comandos
- **Astro + Tailwind CSS v4.** Site estático.
- **Node 22 obrigatório.** A máquina tem Node 20 por padrão, que o Astro rejeita — sempre usar nvm:
  ```bash
  export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22
  npm run dev     # http://localhost:4321
  npm run build   # validar antes de qualquer commit
  ```
- **Deploy:** automático por **push na branch `main`** (GitHub `lucastephan15/portfolio`).

## Fluxo de trabalho (IMPORTANTE)
- **Sempre mostrar preview e esperar aprovação explícita antes de commit/push.** Preview = dev server real (`npm run dev`) ou um HTML standalone aberto com `open`.
- Validar com `npm run build` antes de commitar.
- **Só commitar/pushar quando o Luca aprovar.** Mensagens de commit em PT-BR.
- Responder sempre em **PT-BR**.

## Tom da copy
- Profissional, **concreto, sem buzzword/"bullshitagem"** — fatos, não marketing.
- Nomes de clientes **genéricos por NDA** ("concessionária de grande porte", "rede de restaurantes"); stakeholders por cargo.
- Métricas só com **números reais** (nunca inventar; ex.: "~80–85%", não "95%+").
- Evitar CTA agressivo, mesmo na seção de serviço.

## Estrutura do site (`src/pages/index.astro`)
Seções, em ordem: **Hero → Sobre → Trabalhos → AI-Ready → "Um pouco mais sobre mim" (carrossel) → Contato.**
- Interatividade é **JS vanilla em `<script>`** no fim do `index.astro` (carrossel, modal de cases, filtro por ferramenta, reveal dos passos). Respeitar `prefers-reduced-motion`.
- Tokens de design (cores, fontes) em `src/styles/global.css` (`@theme`). Acento terracota `--color-accent`.

## Dados (fonte única)
- `src/data/cases.ts` — cases de Trabalhos (+ mapa `TOOLS` para os ícones de stack). 4 destaques têm modal + diagrama.
- `src/data/diagrams.ts` — diagramas de arquitetura SVG (setas usam marcador compartilhado `#dgArrow` definido no index).
- `src/data/about.ts` — cenas do carrossel.
- `src/components/ToolChips.astro` — chips de ferramenta.
- **`docs/portfolio-cases.md` é a fonte de verdade do conteúdo dos cases** (taxonomia, impacto, stack, NDA). Atualizar junto com `cases.ts`.

## Arte pixel (convenções)
- **Cenas do carrossel e fundos:** 16:9, **344×192**, WebP (animado ok), em `public/images/sobre/` e `public/images/`.
- **Ícones/objetos de passo:** ~128×128, WebP, **fundo transparente**, em `public/images/ai-ready/`.
- **Ícones de marca (filtro):** SVG em `public/images/icons/` (de simple-icons).
- Sempre `style="image-rendering: pixelated;"` para manter o pixel nítido.
- O Luca gera as artes (PixelLab). Para manter consistência entre objetos de um conjunto, encadeia geração usando o objeto anterior como referência.

## Backups
- Versões originais de imagens substituídas ficam como `*.bak` (ignoradas pelo git via `.gitignore`).
