import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavBar } from './BottomNavBar';

const meta: Meta<typeof BottomNavBar> = {
  title: 'Componentes/BottomNavBar',
  component: BottomNavBar,
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
        component:
          'Barra de navegação inferior do app. ' +
          'O item ativo exibe label em laranja (#FF9800) e ícone filled. ' +
          'O botão central é maior (52px) com fundo laranja. ' +
          'Ícones via @phosphor-icons/react (18px laterais, 28px central).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomNavBar>;

// ── Story: posicionada na base da tela ──────────────────────────

export const Default: Story = {
  name: 'Home ativo',
  args: { defaultActive: 'home' },
  render: (args) => (
    <div style={{ height: '100vh', background: '#080808', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
      <BottomNavBar {...args} />
    </div>
  ),
};

export const ScanAtivo: Story = {
  name: 'Scan ativo (botão central)',
  args: { defaultActive: 'scan' },
  render: (args) => (
    <div style={{ height: '100vh', background: '#080808', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
      <BottomNavBar {...args} />
    </div>
  ),
};

export const MercadoAtivo: Story = {
  name: 'Mercado ativo',
  args: { defaultActive: 'chart' },
  render: (args) => (
    <div style={{ height: '100vh', background: '#080808', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
      <BottomNavBar {...args} />
    </div>
  ),
};
