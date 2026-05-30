import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Ações/Botões',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '**04 / Componentes** — Botão base da Satsails com variantes Primary, Secondary, Ghost e Danger.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
    fullWidth: { control: 'boolean', description: 'Ocupa toda a largura disponível' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', children: 'Enviar Bitcoin' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', children: 'Ver detalhes' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', children: 'Cancelar' },
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md', children: 'Remover carteira' },
};

export const Loading: Story = {
  args: { variant: 'primary', size: 'md', loading: true, children: 'Processando…' },
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true, children: 'Indisponível' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
