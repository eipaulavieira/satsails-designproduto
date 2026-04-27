# Satsails Design Product — CLAUDE.md

Hub de design da Satsails. Monorepo estático com três seções: hub de navegação (index.html), Storybook de componentes React, e protótipos HTML das telas do app.

---

## Estrutura

```
satsails-designproduto/
├── index.html                        # Hub principal de navegação
├── vercel.json                       # Config de deploy (static + storybook build)
├── CLAUDE.md                         # Este arquivo
├── Storybook/                        # Design system em React + Storybook 8
│   ├── src/components/               # Button, Card, Input (.tsx + .stories.tsx)
│   ├── src/tokens/                   # colors.ts, spacing.ts, typography.ts
│   ├── src/docs/                     # Introduction, Colors, Typography, Spacing (.mdx)
│   └── .storybook/                   # main.ts, preview.tsx, satsails-theme.ts
└── UX-Repository/                    # Documentação e protótipos
    ├── 01-briefing-e-estrategia/
    ├── 02-arquitetura-de-informacao/
    ├── 03-design-system/             # Docs de componentes e tokens em .md
    ├── 04-ui-e-mockups/
    ├── 05-branding-e-identidade/
    ├── 06-documentacao-e-handoff/
    ├── 07-comunicacao-e-conteudo/
    ├── 08-arquivo/
    └── 09-prototipo/                 # Telas HTML navegáveis
        ├── splash-screen.html        # Splash (logo + redirect automático) → login.html
    ├── login.html                # Tela de boas-vindas → criar-pin.html
        ├── criar-pin.html            # Tela de criação de PIN → confirmar-pin.html
        └── confirmar-pin.html        # Confirmação de PIN
```

---

## Stack

| Camada | Tecnologia |
|---|---|
| Componentes | React 18 + TypeScript 5 |
| Build / Dev | Vite 5 + Storybook 8 |
| Protótipos | HTML + CSS puro (sem framework) |
| Fontes | Inter via Google Fonts |
| Deploy | Vercel (static + storybook build) |

---

## Tokens de Design

| Token | Hex | Uso |
|---|---|---|
| primary | `#F7931A` | Bitcoin / ações primárias |
| accent | `#FF9800` | Destaques / CTAs |
| success | `#00C853` | Confirmações |
| danger | `#CF1C0E` | Erros |
| black | `#080808` | Fundo escuro |
| subtitle | `#727272` | Texto secundário |
| border | `#333333` | Bordas sutis |
| light | `#D1D2D2` | Texto claro suave |

---

## Protótipos — como adicionar tela nova

1. Criar `UX-Repository/09-prototipo/nome-da-tela.html`
2. Usar o phone-frame padrão: `width:390px; height:844px; border-radius:30px`
3. Buscar design no Figma com `mcp__figma__get_design_context` (fileKey: `MrSOytFvlB9zlg7fIZQC39`)
4. Adicionar link "← Recomeçar fluxo" acima do frame para facilitar teste
5. Adicionar card no `index.html` se for um fluxo novo

Fluxo atual: `splash-screen` → `login` → `criar-pin` → `confirmar-pin`

---

## Storybook — como adicionar componente

```
src/components/NomeComponente/
├── NomeComponente.tsx        # Componente React
└── NomeComponente.stories.tsx # Histórias do Storybook
```

Rodar local: `cd Storybook && npm install && npm run storybook` → localhost:6006
Build: `npm run build-storybook` → output em `storybook-static/`

---

## Deploy (Vercel)

- `vercel.json` na raiz configura build do Storybook e serve tudo como estático
- Storybook disponível em `/storybook/` após build
- Protótipos disponíveis em `/UX-Repository/09-prototipo/nome.html`
- UX Repository: seção em construção, sem deploy próprio ainda

---

## Convenções

- Nomes de pastas: `kebab-case` em português
- Cores: sempre usar os tokens acima, nunca hardcode avulso
- Protótipos: HTML puro, sem dependências externas além de Google Fonts
- Figma file key fixo: `MrSOytFvlB9zlg7fIZQC39` (WALLET-Satsails)
- Assets do Figma expiram em 7 dias — se imagem sumir, rebuscar via `get_design_context`
