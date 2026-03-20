# Satsails — Design System & Documentação UX

> Repositório central de todos os entregáveis de UX/UI da Satsails.  
> Carteira Bitcoin de autocustódia com suporte a Lightning, Liquid, DePix e PIX.

---

## Estrutura do repositório

```
satsails-design-system/
├── 01-briefing-e-estrategia/    # Contexto, pesquisa e base estratégica
├── 02-arquitetura-de-informacao/ # Navegação, taxonomia e inventário
├── 03-design-system/             # Fundação visual, tokens e componentes
├── 04-ui-e-mockups/              # Wireframes, mockups PT/EN e protótipos
├── 05-variants-e-estados/        # Variantes e estados de componentes
└── 06-documentacao-e-handoff/    # Specs dev, decisões e onboarding
```

---

## Conexão com Figma

Os arquivos de design estão no Figma e espelham esta estrutura.  
Consulte `06-documentacao-e-handoff/onboarding-do-time/links-e-recursos.md` para os links.

---

## Como contribuir

1. Siga a nomenclatura de arquivos: `kebab-case` em português
2. Toda decisão de design deve ser registrada em `06-documentacao-e-handoff/decisoes-de-design/`
3. Ao atualizar componentes, atualizar também o `changelog.md`

---

## Paleta de cores principal

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#F7931A` | Bitcoin / ações primárias |
| `--color-accent` | `#FF9800` | Destaques |
| `--color-danger` | `#CF1C0E` | Erros / alertas críticos |
| `--color-success` | `#00C853` | Confirmações |
| `--color-neutral-dark` | `#333333` | Texto |
| `--color-black` | `#0C0B0D` | Fundo escuro |
| `--color-white` | `#FFFFFF` | Fundo claro |
| `--color-gray` | `#D1D2D2` | Bordas / divisores |

---

_Mantido pela equipe de design. Dúvidas: consulte o onboarding em `06-documentacao-e-handoff/`._
