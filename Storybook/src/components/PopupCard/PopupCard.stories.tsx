import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PopupCard, PopupTitle, CoinOption } from './PopupCard';

import bitcoinIcon        from '../../assets/imagens/bitcoin.svg';
import lightningIcon      from '../../assets/imagens/lightning-bitcoin.png';
import depixIcon          from '../../assets/imagens/depix.png';
import usdtIcon           from '../../assets/imagens/usdt.png';
import liquidBitcoinIcon  from '../../assets/imagens/liquid.png';
import eurxIcon           from '../../assets/imagens/eurx.png';

const meta: Meta<typeof PopupCard> = {
  title: 'Componentes/PopupCard',
  component: PopupCard,
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
          'Card glass com `backdrop-filter: blur` usado em popups e bottom sheets. ' +
          'O conteúdo interno varia por contexto — use `PopupTitle` e `CoinOption` como building blocks ou passe qualquer JSX como children.',
      },
    },
  },
  argTypes: {
    blur: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Intensidade do blur em px',
    },
    width:       { control: 'number', description: 'Largura em px' },
    height:      { control: 'number', description: 'Altura em px' },
    showHandle:  { control: 'boolean', description: 'Exibe alça de arrastar' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PopupCard>;

// ── Coins helper ─────────────────────────────────────────────────

const COINS = [
  { icon: bitcoinIcon,       label: 'Bitcoin' },
  { icon: lightningIcon,     label: 'Lightning Bitcoin' },
  { icon: depixIcon,         label: 'Depix' },
  { icon: usdtIcon,          label: 'USDT',           hasChevron: true },
  { icon: liquidBitcoinIcon, label: 'Liquid Bitcoin', hasChevron: true },
  { icon: eurxIcon,          label: 'EURx' },
];

// ── Story: Enviar de ─────────────────────────────────────────────

export const EnviarDe: Story = {
  name: 'Enviar de:',
  args: {
    width: 390,
    height: 504,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState('Bitcoin');
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#080808',
      }}>
        <PopupCard {...args}>
          <PopupTitle>Enviar de:</PopupTitle>
          {COINS.map(({ icon, label, hasChevron }) => (
            <CoinOption
              key={label}
              icon={icon}
              label={label}
              hasChevron={hasChevron}
              isSelected={selected === label}
              onClick={() => setSelected(label)}
            />
          ))}
        </PopupCard>
      </div>
    );
  },
};

// ── Story: Receber em ────────────────────────────────────────────

export const ReceberEm: Story = {
  name: 'Receber em:',
  args: {
    width: 390,
    height: 504,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState('Bitcoin');
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#080808',
      }}>
        <PopupCard {...args}>
          <PopupTitle>Receber em:</PopupTitle>
          {COINS.map(({ icon, label, hasChevron }) => (
            <CoinOption
              key={label}
              icon={icon}
              label={label}
              hasChevron={hasChevron}
              isSelected={selected === label}
              onClick={() => setSelected(label)}
            />
          ))}
        </PopupCard>
      </div>
    );
  },
};

// ── Story: Altura menor (conteúdo customizado) ───────────────────

export const ConteudoCustomizado: Story = {
  name: 'Conteúdo customizado',
  args: {
    width: 390,
    height: 320,
    blur: 12,
    showHandle: true,
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#080808' }}>
      <PopupCard {...args}>
        <PopupTitle>Confirmar envio</PopupTitle>
        <div style={{
          width: '100%',
          background: '#080808',
          borderRadius: 10,
          padding: '16px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <Row label="Para"    value="bc1q...3f7a" />
          <Row label="Valor"   value="0.001 BTC" />
          <Row label="Taxa"    value="~R$ 0,80" />
          <Row label="Total"   value="R$ 120,80" highlight />
        </div>
        <button style={{
          width: '100%',
          height: 52,
          borderRadius: 8,
          background: '#FF9800',
          border: 'none',
          color: '#000',
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          cursor: 'pointer',
          marginTop: 'auto',
          flexShrink: 0,
        }}>
          Confirmar
        </button>
      </PopupCard>
    </div>
  ),
};

// ── Story: Vender ────────────────────────────────────────────────

export const Vender: Story = {
  name: 'Vender:',
  args: {
    width: 390,
    height: 380,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState('Bitcoin');
    const coins = [
      { icon: bitcoinIcon,       label: 'Bitcoin' },
      { icon: depixIcon,         label: 'Depix' },
      { icon: usdtIcon,          label: 'USDT' },
      { icon: liquidBitcoinIcon, label: 'Liquid Bitcoin' },
    ];
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#080808' }}>
        <PopupCard {...args}>
          <PopupTitle>Vender:</PopupTitle>
          {coins.map(({ icon, label }) => (
            <CoinOption
              key={label}
              icon={icon}
              label={label}
              isSelected={selected === label}
              onClick={() => setSelected(label)}
            />
          ))}
        </PopupCard>
      </div>
    );
  },
};

// ── Story: All ───────────────────────────────────────────────────

export const All: Story = {
  name: 'All',
  args: {
    width: 390,
    height: 560,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState('Bitcoin');
    const [filterSelected, setFilterSelected] = useState(false);
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#080808' }}>
        <PopupCard {...args}>
          <PopupTitle>All</PopupTitle>
          {COINS.map(({ icon, label }) => (
            <CoinOption
              key={label}
              icon={icon}
              label={label}
              isSelected={selected === label}
              onClick={() => setSelected(label)}
            />
          ))}
          <div
            onClick={() => setFilterSelected(s => !s)}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: filterSelected ? '#080808' : 'rgba(8, 8, 8, 0.54)',
              borderRadius: 10,
              padding: '0 16px',
              width: '100%',
              height: 52,
              boxSizing: 'border-box',
              flexShrink: 0,
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
              Filtrar todos
            </span>
          </div>
        </PopupCard>
      </div>
    );
  },
};

// ── Helper interno ───────────────────────────────────────────────

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 13, color: '#727272', fontFamily: 'Inter, sans-serif' }}>{label}</span>
      <span style={{
        fontSize: 13,
        fontWeight: highlight ? 700 : 400,
        color: highlight ? '#FF9800' : '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}>{value}</span>
    </div>
  );
}
