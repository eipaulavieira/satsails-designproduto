import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Componentes/Progresso/Barra de Progresso',
  component: ProgressBar,
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
          'Barra de progresso do fluxo de configuração de conta. ' +
          'Trilho escuro (#1c1c1c), preenchimento verde (#00C853), 300×3px. ' +
          'Espelha exatamente o `.email-progress-header` do protótipo app.html.',
      },
    },
  },
  argTypes: {
    label:  { control: 'text', description: 'Rótulo acima da barra' },
    fillPx: { control: { type: 'range', min: 0, max: 300, step: 1 }, description: 'Largura do preenchimento em px (0–300)' },
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
type Story = StoryObj<typeof ProgressBar>;

/* ── Etapas do fluxo — valores exatos do protótipo ── */

export const Etapa1ConfiguracaoConta: Story = {
  name: 'Etapa 1 — Configuração de conta (50px)',
  args: {
    label: 'Configuração de conta',
    fillPx: 50,
  },
};

export const Etapa2InserirEmail: Story = {
  name: 'Etapa 2 — Inserir e-mail (100px)',
  args: {
    label: 'Conta Individual',
    fillPx: 100,
  },
};

export const Etapa3VerificarCodigo: Story = {
  name: 'Etapa 3 — Verificar código (200px)',
  args: {
    label: 'Conta Individual',
    fillPx: 200,
  },
};

export const Completa: Story = {
  name: 'Completa (300px)',
  args: {
    label: 'Configuração de conta',
    fillPx: 300,
  },
};

export const FluxoCompleto: Story = {
  name: 'Fluxo completo (todas as etapas)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <ProgressBar label="Configuração de conta" fillPx={50}  />
      <ProgressBar label="Conta Individual"       fillPx={100} />
      <ProgressBar label="Conta Individual"       fillPx={200} />
      <ProgressBar label="Configuração de conta"  fillPx={300} />
    </div>
  ),
};
