import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TransactionHistoryCard } from './TransactionHistoryCard';

const meta: Meta<typeof TransactionHistoryCard> = {
  title: 'Componentes/TransactionHistoryCard',
  component: TransactionHistoryCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',    value: '#111111' },
        { name: 'darker', value: '#000000' },
      ],
    },
    docs: {
      description: {
        component:
          'Card de histórico de transações. Exibe tipo (compra/venda/conversão), ' +
          'nome do ativo, data, valor e equivalente em BRL. ' +
          'Aparece ao clicar em um ativo específico ou na tela de histórico geral.',
      },
    },
  },
  argTypes: {
    type:       { control: 'select', options: ['compra', 'venda', 'conversao'], description: 'Tipo de transação' },
    assetName:  { control: 'text',    description: 'Nome do ativo' },
    date:       { control: 'text',    description: 'Data da transação' },
    amount:     { control: 'text',    description: 'Quantidade (sats, USDT, etc.)' },
    amountBrl:  { control: 'text',    description: 'Equivalente em BRL' },
    isPrivate:  { control: 'boolean', description: 'Oculta valores com ****** (toggle do olho)' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TransactionHistoryCard>;

// ── Stories individuais — Bitcoin ────────────────────────────────

export const BitcoinVenda: Story = {
  name: 'Bitcoin — Venda',
  args: {
    assetName: 'Bitcoin',
    date: '06/05/2026',
    amount: '-413.714 sats',
    amountBrl: '-1.484,66 BRL',
    type: 'venda',
  },
};

export const BitcoinCompra: Story = {
  name: 'Bitcoin — Compra',
  args: {
    assetName: 'Bitcoin',
    date: '04/05/2026',
    amount: '+520.000 sats',
    amountBrl: '+1.872,00 BRL',
    type: 'compra',
  },
};

export const BitcoinConversao: Story = {
  name: 'Bitcoin — Conversão',
  args: {
    assetName: 'Bitcoin',
    date: '02/05/2026',
    amount: '200.000 sats',
    amountBrl: '720,00 BRL',
    type: 'conversao',
  },
};

// ── Stories individuais — Lightning Bitcoin ──────────────────────

export const LightningVenda: Story = {
  name: 'Lightning Bitcoin — Venda',
  args: {
    assetName: 'Lightning Bitcoin',
    date: '05/05/2026',
    amount: '-85.000 sats',
    amountBrl: '-306,00 BRL',
    type: 'venda',
  },
};

export const LightningCompra: Story = {
  name: 'Lightning Bitcoin — Compra',
  args: {
    assetName: 'Lightning Bitcoin',
    date: '03/05/2026',
    amount: '+150.000 sats',
    amountBrl: '+540,00 BRL',
    type: 'compra',
  },
};

// ── Stories individuais — USDT ───────────────────────────────────

export const USDTCompra: Story = {
  name: 'USDT — Compra',
  args: {
    assetName: 'USDT',
    date: '06/05/2026',
    amount: '+250,00 USDT',
    amountBrl: '+1.375,00 BRL',
    type: 'compra',
  },
};

export const USDTVenda: Story = {
  name: 'USDT — Venda',
  args: {
    assetName: 'USDT',
    date: '01/05/2026',
    amount: '-180,00 USDT',
    amountBrl: '-990,00 BRL',
    type: 'venda',
  },
};

// ── Stories individuais — Depix ──────────────────────────────────

export const DepixCompra: Story = {
  name: 'Depix — Compra',
  args: {
    assetName: 'Depix',
    date: '05/05/2026',
    amount: '+500,00 BRZ',
    amountBrl: '+500,00 BRL',
    type: 'compra',
  },
};

// ── Stories individuais — Liquid Bitcoin ────────────────────────

export const LiquidConversao: Story = {
  name: 'Liquid Bitcoin — Conversão',
  args: {
    assetName: 'Liquid Bitcoin',
    date: '04/05/2026',
    amount: '95.000 sats',
    amountBrl: '342,00 BRL',
    type: 'conversao',
  },
};

// ── Stories individuais — EURx ───────────────────────────────────

export const EURxCompra: Story = {
  name: 'EURx — Compra',
  args: {
    assetName: 'EURx',
    date: '03/05/2026',
    amount: '+75,00 EURx',
    amountBrl: '+435,00 BRL',
    type: 'compra',
  },
};

// ── Story: Privado ───────────────────────────────────────────────

export const DadosPrivados: Story = {
  name: 'Dados Privados',
  args: {
    assetName: 'Bitcoin',
    date: '06/05/2026',
    amount: '-413.714 sats',
    amountBrl: '-1.484,66 BRL',
    type: 'venda',
    isPrivate: true,
  },
};

// ── Story: Histórico Bitcoin ─────────────────────────────────────

export const HistoricoBitcoin: Story = {
  name: 'Histórico — Bitcoin',
  render: () => {
    const txs = [
      { type: 'venda'    as const, date: '06/05/2026', amount: '-413.714 sats', amountBrl: '-1.484,66 BRL' },
      { type: 'compra'   as const, date: '04/05/2026', amount: '+520.000 sats', amountBrl: '+1.872,00 BRL' },
      { type: 'conversao'as const, date: '02/05/2026', amount: '200.000 sats',  amountBrl: '720,00 BRL'    },
      { type: 'compra'   as const, date: '29/04/2026', amount: '+340.000 sats', amountBrl: '+1.224,00 BRL' },
      { type: 'venda'    as const, date: '25/04/2026', amount: '-90.500 sats',  amountBrl: '-325,80 BRL'   },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {txs.map((tx, i) => (
          <TransactionHistoryCard key={i} assetName="Bitcoin" {...tx} />
        ))}
      </div>
    );
  },
};

// ── Story: Histórico USDT ────────────────────────────────────────

export const HistoricoUSDT: Story = {
  name: 'Histórico — USDT',
  render: () => {
    const txs = [
      { type: 'compra'   as const, date: '06/05/2026', amount: '+250,00 USDT', amountBrl: '+1.375,00 BRL' },
      { type: 'venda'    as const, date: '03/05/2026', amount: '-180,00 USDT', amountBrl: '-990,00 BRL'   },
      { type: 'conversao'as const, date: '01/05/2026', amount: '100,00 USDT',  amountBrl: '550,00 BRL'    },
      { type: 'compra'   as const, date: '28/04/2026', amount: '+400,00 USDT', amountBrl: '+2.200,00 BRL' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {txs.map((tx, i) => (
          <TransactionHistoryCard key={i} assetName="USDT" {...tx} />
        ))}
      </div>
    );
  },
};

// ── Story: Todos os ativos juntos (histórico geral) ──────────────

export const HistoricoGeral: Story = {
  name: 'Histórico Geral (todos os ativos)',
  render: () => {
    const txs = [
      { assetName: 'Bitcoin',         type: 'venda'    as const, date: '06/05/2026', amount: '-413.714 sats', amountBrl: '-1.484,66 BRL' },
      { assetName: 'USDT',            type: 'compra'   as const, date: '06/05/2026', amount: '+250,00 USDT',  amountBrl: '+1.375,00 BRL'  },
      { assetName: 'Lightning Bitcoin', type: 'compra' as const, date: '05/05/2026', amount: '+150.000 sats', amountBrl: '+540,00 BRL'    },
      { assetName: 'Depix',           type: 'compra'   as const, date: '05/05/2026', amount: '+500,00 BRZ',   amountBrl: '+500,00 BRL'    },
      { assetName: 'Bitcoin',         type: 'compra'   as const, date: '04/05/2026', amount: '+520.000 sats', amountBrl: '+1.872,00 BRL'  },
      { assetName: 'Liquid Bitcoin',  type: 'conversao'as const, date: '04/05/2026', amount: '95.000 sats',   amountBrl: '342,00 BRL'     },
      { assetName: 'EURx',            type: 'compra'   as const, date: '03/05/2026', amount: '+75,00 EURx',   amountBrl: '+435,00 BRL'    },
      { assetName: 'USDT',            type: 'venda'    as const, date: '03/05/2026', amount: '-180,00 USDT',  amountBrl: '-990,00 BRL'    },
      { assetName: 'Bitcoin',         type: 'conversao'as const, date: '02/05/2026', amount: '200.000 sats',  amountBrl: '720,00 BRL'     },
      { assetName: 'Lightning Bitcoin', type: 'venda'  as const, date: '05/05/2026', amount: '-85.000 sats',  amountBrl: '-306,00 BRL'    },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {txs.map((tx, i) => (
          <TransactionHistoryCard key={i} {...tx} />
        ))}
      </div>
    );
  },
};
