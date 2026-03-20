# Input

## Tipos

- Text
- Número (valor em BTC/sats/reais)
- Senha (seed phrase, PIN)
- Endereço de carteira (com scanner QR)
- Pesquisa

## Estados

| Estado | Descrição |
|---|---|
| Empty | Campo vazio, placeholder visível |
| Focused | Borda `--color-primary`, label sobe |
| Filled | Com valor inserido |
| Error | Borda `--color-danger`, mensagem abaixo |
| Disabled | Opacity 40%, não editável |
| Loading | Skeleton ou spinner |

## Regras de uso

- Inputs de valor monetário sempre mostram a unidade (BTC, USDT, R$)
- Endereços de carteira devem ter ícone de colar e de QR ao lado
- Mensagens de erro em `--color-danger`, 12px, abaixo do campo
