import type { Meta, StoryObj } from '@storybook/react';
import { FeeSlider, DEFAULT_FEES } from './FeeSlider';

const meta: Meta<typeof FeeSlider> = {
  title: 'Componentes/Progresso/Seletor de Taxa',
  component: FeeSlider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',    value: '#080808' },
        { name: 'darker', value: '#000000' },
      ],
    },
    docs: {
      description: {
        component:
          'Barra de seleção de taxa de rede Bitcoin. ' +
          'Trilho cinza (6px) com preenchimento laranja (12px). ' +
          'O label central exibe o tempo estimado e a taxa em sat/vb conforme a posição selecionada.',
      },
    },
  },
  argTypes: {
    defaultIndex: {
      control: { type: 'range', min: 0, max: 3, step: 1 },
      description: 'Posição inicial (0 = Lento, 3 = Rápido)',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px 16px', background: '#080808', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeeSlider>;

export const Padrao: Story = {
  name: 'Padrão (~6H)',
  args: { defaultIndex: 1 },
};

export const Lento: Story = {
  name: 'Lento (~24H)',
  args: { defaultIndex: 0 },
};

export const Normal: Story = {
  name: 'Normal (~1H)',
  args: { defaultIndex: 2 },
};

export const Rapido: Story = {
  name: 'Rápido (~10min)',
  args: { defaultIndex: 3 },
};

export const TaxasCustomizadas: Story = {
  name: 'Taxas customizadas',
  args: {
    defaultIndex: 1,
    fees: [
      { time: '~48H',   rate: '0.5 sat/vb'  },
      { time: '~12H',   rate: '1.5 sat/vb'  },
      { time: '~2H',    rate: '4.0 sat/vb'  },
      { time: '~15min', rate: '8.0 sat/vb'  },
      { time: '~5min',  rate: '15.0 sat/vb' },
    ],
  },
};

export const TodasPosicoes: Story = {
  name: 'Todas as posições',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '24px 16px', background: '#080808', borderRadius: 12 }}>
      {DEFAULT_FEES.map((_, i) => (
        <FeeSlider key={i} defaultIndex={i} />
      ))}
    </div>
  ),
};
