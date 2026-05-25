import type { Meta, StoryObj } from '@storybook/react';
import { Card, MetricCard, ListCard } from './Card';

const meta: Meta = {
  title: 'Componentes/Cards',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '**05 / Componentes** — Cards base, métrica e lista para a interface da Satsails.',
      },
    },
  },
};

export default meta;

export const Base: StoryObj<typeof Card> = {
  render: () => (
    <Card style={{ width: 320 }}>
      <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600, color: '#0C0B0D' }}>Carteira Principal</h3>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>
        Saldo disponível na carteira on-chain. Clique para ver transações recentes.
      </p>
    </Card>
  ),
};

export const Metric: StoryObj<typeof MetricCard> = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <MetricCard
        label="Saldo BTC"
        value="0.0842 BTC"
        change="2.4% nas últimas 24h"
        changePositive
        icon={<span style={{ fontSize: 18 }}>₿</span>}
      />
      <MetricCard
        label="Saldo em BRL"
        value="R$ 24.381"
        change="1.2% hoje"
        changePositive={false}
        icon={<span style={{ fontSize: 18 }}>R$</span>}
      />
      <MetricCard
        label="Transações"
        value="142"
        change="12 este mês"
        changePositive
      />
      <MetricCard
        label="Lightning"
        value="12.500 sats"
        change="Capacidade disponível"
        changePositive
        icon={<span style={{ fontSize: 18 }}>⚡</span>}
      />
    </div>
  ),
  parameters: { layout: 'padded' },
};

export const List: StoryObj<typeof ListCard> = {
  render: () => (
    <ListCard
      title="Transações Recentes"
      items={[
        { label: 'Recebido de Alice', value: '+0.005 BTC', sub: 'Há 2 horas · On-chain' },
        { label: 'Enviado para exchange', value: '-0.012 BTC', sub: 'Há 1 dia · On-chain' },
        { label: 'Pagamento Lightning', value: '-1.200 sats', sub: 'Há 2 dias · Lightning' },
        { label: 'PIX recebido', value: '+R$ 500', sub: 'Há 3 dias · DePix' },
      ]}
    />
  ),
  parameters: { layout: 'padded' },
};

export const WithShadow: StoryObj<typeof Card> = {
  render: () => (
    <Card shadow style={{ width: 320 }}>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Card com sombra para modais e overlays.</p>
    </Card>
  ),
};
