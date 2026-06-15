# nekobit.com.br — Portfólio

Portfólio pessoal de **Luca Stephan** — builder & AI engineer.
Construído com [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), com direção visual editorial (claro) e um momento 3D via [`<model-viewer>`](https://modelviewer.dev).

## Rodar localmente

Requer **Node 22** (ver `.nvmrc`).

```bash
nvm use 22
npm install
npm run dev      # http://localhost:4321
```

## Estrutura

```
src/
  pages/index.astro       # página única (hero, sobre, trabalhos, contato)
  layouts/Layout.astro    # shell + fontes (Fraunces × Inter)
  components/Hero3D.astro  # visualizador 3D do hero
  data/projects.ts         # conteúdo dos projetos (data-driven)
  styles/global.css        # design system (cores, tipografia)
public/models/             # modelos 3D (.glb)
```

## Build

```bash
npm run build    # gera /dist (estático)
```
