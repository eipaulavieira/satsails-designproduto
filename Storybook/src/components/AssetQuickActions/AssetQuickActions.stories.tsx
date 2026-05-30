import type { Meta, StoryObj } from '@storybook/react';
import { AssetQuickActions } from './AssetQuickActions';

const meta: Meta<typeof AssetQuickActions> = {
  title: 'Componentes/Ações/AssetQuickActions',
  component: AssetQuickActions,
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
          'Variante do QuickActions específica para cada ativo. ' +
          'Sem o botão Depositar. Aparece na tela de detalhe/histórico do ativo — ' +
          'as ações (Receber, Enviar, Converter, Vender) já são contextuais ao ativo selecionado.',
      },
    },
  },
  argTypes: {
    assetName: { control: 'text', description: 'Nome do ativo (para uso futuro nas ações)' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AssetQuickActions>;

export const Bitcoin: Story = {
  name: 'Bitcoin',
  args: { assetName: 'Bitcoin' },
};

export const LightningBitcoin: Story = {
  name: 'Lightning Bitcoin',
  args: { assetName: 'Lightning Bitcoin' },
};

export const USDT: Story = {
  name: 'USDT',
  args: { assetName: 'USDT' },
};

export const Depix: Story = {
  name: 'Depix',
  args: { assetName: 'Depix' },
};

export const LiquidBitcoin: Story = {
  name: 'Liquid Bitcoin',
  args: { assetName: 'Liquid Bitcoin' },
};

export const EURx: Story = {
  name: 'EURx',
  args: { assetName: 'EURx' },
};
