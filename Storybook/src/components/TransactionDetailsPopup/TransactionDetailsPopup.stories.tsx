import type { Meta, StoryObj } from '@storybook/react';
import { TransactionDetailsPopup } from './TransactionDetailsPopup';

const meta: Meta<typeof TransactionDetailsPopup> = {
  title: 'Componentes/Popups/Detalhes da Transação',
  component: TransactionDetailsPopup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',    value: '#080808' },
        { name: 'darker', value: '#000000' },
      ],
    },
    docs: {
      description: {
        component: `
Popup de detalhes de transação. Cópia do \`CurrencyPopupCard\` com conteúdo de linhas label/valor.

**CSS:**
\`\`\`css
display: flex;
width: 390px;
height: 316px;
padding: 16px 16px 48px 16px;
justify-content: center;
align-items: flex-start;
gap: 10px;
border-radius: 20px 20px 0 0;
background: rgba(51, 51, 51, 0.34);
backdrop-filter: blur(12px);
\`\`\`

**Título:** Inter 16px / Bold 700 / \`#FFF\`

**Conteúdo:** Inter 16px / Regular 400 / \`#FFF\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    blur:  { control: { type: 'range', min: 0, max: 40, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#080808' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TransactionDetailsPopup>;

export const EnvioBitcoin: Story = {
  name: 'Envio — Bitcoin',
  args: {
    title: 'Detalhes da Transação',
    rows: [
      { label: 'Quantidade:', value: 'R$ 555,00'  },
      { label: 'Taxa:',       value: '22 sats'     },
    ],
  },
};

export const EnvioComTotal: Story = {
  name: 'Envio — com total',
  args: {
    title: 'Detalhes da Transação',
    rows: [
      { label: 'Quantidade:', value: 'R$ 555,00'  },
      { label: 'Taxa:',       value: '22 sats'     },
      { label: 'Total:',      value: 'R$ 555,22'  },
    ],
  },
};

export const EnvioLightning: Story = {
  name: 'Envio — Lightning',
  args: {
    title: 'Detalhes da Transação',
    rows: [
      { label: 'Quantidade:', value: '50.000 sats' },
      { label: 'Taxa:',       value: '1 sat'       },
      { label: 'Total:',      value: '50.001 sats' },
    ],
  },
};
