# Botão

## Variantes

| Variante | Uso |
|---|---|
| Primary | Ação principal da tela (ex: Enviar, Confirmar) |
| Secondary | Ação secundária |
| Ghost | Ação terciária, sem peso visual |
| Danger | Ações destrutivas ou irreversíveis |
| Disabled | Ação indisponível |

## Estados

- Default
- Hover
- Pressionado (active)
- Loading (spinner inline)
- Disabled

## Tokens usados

- Background: `--color-primary`
- Texto: `--color-text-inverse`
- Border-radius: `8px`
- Padding: `16px 24px`
- Fonte: Inter 16px / 500

## Regras de uso

- **Máximo 1 botão Primary por tela**
- Nunca usar botão Danger sem modal de confirmação
- Loading state deve substituir o label, não se somar
