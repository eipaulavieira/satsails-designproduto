import type { Meta, StoryObj } from '@storybook/react';
import { GlassCard } from './GlassCard';

const meta: Meta<typeof GlassCard> = {
  title: 'Componentes/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',  value: '#080808' },
        { name: 'dark-gradient', value: 'linear-gradient(135deg, #0C0B0D 0%, #1a1a2e 100%)' },
        { name: 'light', value: '#F3F4F6' },
      ],
    },
  },
  argTypes: {
    blur: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Intensidade do blur (px)',
    },
    background: {
      control: 'color',
      description: 'Cor de fundo rgba',
    },
    borderColor: {
      control: 'color',
      description: 'Cor da borda',
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 32, step: 2 },
      description: 'Raio da borda (px)',
    },
    padding: {
      control: 'text',
      description: 'Padding interno',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

// ── Conteúdo de exemplo reutilizável ─────────────────────────────

const ExampleContent = () => (
  <div style={{ color: '#fff', fontFamily: 'Inter, sans-serif', minWidth: 260 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: '#FF9800', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px' }}>
      Saldo disponível
    </p>
    <p style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
      R$ 4.280,00
    </p>
    <p style={{ fontSize: 13, color: 'rgba(209,210,210,0.7)', margin: 0 }}>
      ≈ 0.00412 BTC
    </p>
  </div>
);

const ActionContent = () => (
  <div style={{ color: '#fff', fontFamily: 'Inter, sans-serif', minWidth: 280 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,152,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2v14M2 9h14" stroke="#FF9800" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, margin: 0 }}>Receber Bitcoin</p>
        <p style={{ fontSize: 11, color: '#727272', margin: 0 }}>Compartilhe seu endereço</p>
      </div>
    </div>
    <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '0 0 16px' }} />
    <p style={{ fontSize: 11, color: '#727272', margin: 0, lineHeight: 1.6 }}>
      Envie este QR Code ou endereço para quem vai te pagar.
    </p>
  </div>
);

// ── Stories ──────────────────────────────────────────────────────

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    blur: 12,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: '20px 24px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ExampleContent />
    </GlassCard>
  ),
};

export const BlurForte: Story = {
  name: 'Blur Forte',
  args: {
    blur: 24,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 20,
    padding: '24px 28px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ExampleContent />
    </GlassCard>
  ),
};

export const BlurSuave: Story = {
  name: 'Blur Suave',
  args: {
    blur: 6,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 12,
    padding: '20px 24px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ExampleContent />
    </GlassCard>
  ),
};

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {
    blur: 12,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: '20px 24px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ActionContent />
    </GlassCard>
  ),
};

export const TintLaranja: Story = {
  name: 'Tint Laranja',
  args: {
    blur: 12,
    background: 'rgba(255, 152, 0, 0.18)',
    borderColor: 'rgba(255, 152, 0, 0.25)',
    borderRadius: 16,
    padding: '20px 24px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ExampleContent />
    </GlassCard>
  ),
};

export const TintVerde: Story = {
  name: 'Tint Verde',
  args: {
    blur: 12,
    background: 'rgba(0, 200, 83, 0.18)',
    borderColor: 'rgba(0, 200, 83, 0.25)',
    borderRadius: 16,
    padding: '20px 24px',
  },
  render: (args) => (
    <GlassCard {...args}>
      <ExampleContent />
    </GlassCard>
  ),
};

export const Empilhados: Story = {
  name: 'Empilhados',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0C0B0D 0%, #1a1218 60%, #0a1628 100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 32,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <GlassCard blur={12} background="rgba(51,51,51,0.34)" borderColor="rgba(255,255,255,0.08)" borderRadius={16} padding="20px 24px" width={320}>
        <ExampleContent />
      </GlassCard>
      <GlassCard blur={12} background="rgba(255,152,0,0.18)" borderColor="rgba(255,152,0,0.25)" borderRadius={16} padding="20px 24px" width={320}>
        <ActionContent />
      </GlassCard>
      <GlassCard blur={12} background="rgba(0,200,83,0.18)" borderColor="rgba(0,200,83,0.25)" borderRadius={16} padding="20px 24px" width={320}>
        <div style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#00C853', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px' }}>Transação confirmada</p>
          <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 4px' }}>+ R$ 150,00</p>
          <p style={{ fontSize: 12, color: '#727272', margin: 0 }}>há 2 minutos · Lightning</p>
        </div>
      </GlassCard>
    </div>
  ),
};
