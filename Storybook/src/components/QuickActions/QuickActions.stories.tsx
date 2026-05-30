import type { Meta, StoryObj } from '@storybook/react';
import { QuickActions } from './QuickActions';

const meta: Meta<typeof QuickActions> = {
  title: 'Componentes/Ações/QuickActions',
  component: QuickActions,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#080808' }] },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultActive: {
      control: 'select',
      options: ['receber', 'enviar', 'converter', 'sacar', 'depositar'],
      description: 'Ação destacada por padrão',
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickActions>;

export const Padrao: Story = {
  name: 'Padrão (sem seleção)',
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: '#080808', padding: '16px 0', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const DepositarAtivo: Story = {
  name: 'Depositar ativo',
  args: { defaultActive: 'depositar' },
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: '#080808', padding: '16px 0', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const ReceberAtivo: Story = {
  name: 'Receber ativo',
  args: { defaultActive: 'receber' },
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: '#080808', padding: '16px 0', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};
