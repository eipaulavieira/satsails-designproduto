import type { Meta, StoryObj } from '@storybook/react';
import { BalanceTotalCard } from './BalanceTotalCard';

const meta: Meta<typeof BalanceTotalCard> = {
  title: 'Componentes/BalanceTotalCard',
  component: BalanceTotalCard,
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
          'Card de saldo total da conta. Usa GlassCard como container e exibe ' +
          'o rótulo "Saldo total:", o valor em fiat e o equivalente em BTC.',
      },
    },
  },
  argTypes: {
    totalBalance:     { control: 'text',    description: 'Saldo em moeda fiat (ex: R$ 68.420,00)' },
    cryptoEquivalent: { control: 'text',    description: 'Equivalente em BTC (ex: ≈ 0.18563)' },
    isPrivate:        { control: 'boolean', description: 'Oculta os valores com •••' },
    blur:             { control: { type: 'range', min: 0, max: 40, step: 1 }, description: 'Intensidade do blur (px)' },
    background:       { control: 'color', description: 'Cor de fundo rgba' },
    borderColor:      { control: 'color', description: 'Cor da borda' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BalanceTotalCard>;

export const DadosPrivados: Story = {
  name: 'Dados Privados',
  args: {
    totalBalance: 'R$ 68.420,00',
    cryptoEquivalent: '≈ 0.18563',
    isPrivate: true,
  },
};

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    totalBalance: 'R$ 68.420,00',
    cryptoEquivalent: '≈ 0.18563',
  },
};

export const SaldoZerado: Story = {
  name: 'Saldo Zerado',
  args: {
    totalBalance: 'R$ 0,00',
    cryptoEquivalent: '≈ 0.00000',
  },
};

export const SaldoAlto: Story = {
  name: 'Saldo Alto',
  args: {
    totalBalance: 'R$ 1.240.000,00',
    cryptoEquivalent: '≈ 12.84321',
  },
};
