import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AssetBalanceCard } from './AssetBalanceCard';

import bitcoinIcon       from '../../assets/imagens/bitcoin.svg';
import lightningIcon     from '../../assets/imagens/lightning-bitcoin.png';
import depixIcon         from '../../assets/imagens/depix.png';
import usdtIcon          from '../../assets/imagens/usdt.png';
import liquidBitcoinIcon from '../../assets/imagens/liquid.png';
import eurxIcon          from '../../assets/imagens/eurx.png';

const meta: Meta<typeof AssetBalanceCard> = {
  title: 'Componentes/AssetBalanceCard',
  component: AssetBalanceCard,
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
          'Card de saldo de ativo da conta. Exibe ícone + nome do ativo à esquerda ' +
          'e saldo em fiat + equivalente em cripto à direita. ' +
          'Suporta modo privacidade via prop `isPrivate`.',
      },
    },
  },
  argTypes: {
    icon:             { control: false, description: 'Ícone do ativo (import de imagem)' },
    assetName:        { control: 'text', description: 'Nome do ativo' },
    fiatBalance:      { control: 'text', description: 'Saldo em moeda fiat (ex: R$14.000)' },
    cryptoEquivalent: { control: 'text', description: 'Equivalente em cripto (ex: ≈ 0.185630 BTC)' },
    isPrivate:        { control: 'boolean', description: 'Oculta os valores com ******' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AssetBalanceCard>;

// ── Stories individuais por ativo ────────────────────────────────

export const Bitcoin: Story = {
  name: 'Bitcoin',
  args: {
    icon: bitcoinIcon,
    assetName: 'Bitcoin',
    fiatBalance: 'R$14.000',
    cryptoEquivalent: '≈ 0.185630 BTC',
  },
};

export const DadosPrivados: Story = {
  name: 'Dados Privados',
  args: {
    icon: bitcoinIcon,
    assetName: 'Bitcoin',
    fiatBalance: 'R$14.000',
    cryptoEquivalent: '≈ 0.185630 BTC',
    isPrivate: true,
  },
};

export const LightningBitcoin: Story = {
  name: 'Lightning Bitcoin',
  args: {
    icon: lightningIcon,
    assetName: 'Lightning Bitcoin',
    fiatBalance: 'R$2.500',
    cryptoEquivalent: '≈ 0.033120 BTC',
  },
};

export const LiquidBitcoin: Story = {
  name: 'Liquid Bitcoin',
  args: {
    icon: liquidBitcoinIcon,
    assetName: 'Liquid Bitcoin',
    fiatBalance: 'R$7.200',
    cryptoEquivalent: '≈ 0.095400 BTC',
  },
};

export const USDT: Story = {
  name: 'USDT',
  args: {
    icon: usdtIcon,
    assetName: 'USDT',
    fiatBalance: 'R$3.150',
    cryptoEquivalent: '≈ 630.00 USDT',
  },
};

export const Depix: Story = {
  name: 'Depix',
  args: {
    icon: depixIcon,
    assetName: 'Depix',
    fiatBalance: 'R$850',
    cryptoEquivalent: '≈ 850.00 BRZ',
  },
};

export const EURx: Story = {
  name: 'EURx',
  args: {
    icon: eurxIcon,
    assetName: 'EURx',
    fiatBalance: 'R$560',
    cryptoEquivalent: '≈ 100.00 EURx',
  },
};

// ── Story: toggle de privacidade com olho ────────────────────────

export const TogglePrivacidade: Story = {
  name: 'Toggle Privacidade (olho)',
  render: () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const assets = [
      { icon: bitcoinIcon,       assetName: 'Bitcoin',          fiatBalance: 'R$14.000', cryptoEquivalent: '≈ 0.185630 BTC' },
      { icon: lightningIcon,     assetName: 'Lightning Bitcoin', fiatBalance: 'R$2.500',  cryptoEquivalent: '≈ 0.033120 BTC' },
      { icon: liquidBitcoinIcon, assetName: 'Liquid Bitcoin',    fiatBalance: 'R$7.200',  cryptoEquivalent: '≈ 0.095400 BTC' },
      { icon: usdtIcon,          assetName: 'USDT',              fiatBalance: 'R$3.150',  cryptoEquivalent: '≈ 630.00 USDT'  },
      { icon: depixIcon,         assetName: 'Depix',             fiatBalance: 'R$850',    cryptoEquivalent: '≈ 850.00 BRZ'   },
      { icon: eurxIcon,          assetName: 'EURx',              fiatBalance: 'R$560',    cryptoEquivalent: '≈ 100.00 EURx'  },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 4px 8px',
        }}>
          <button
            onClick={() => setIsPrivate(p => !p)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '6px 12px',
              color: isPrivate ? '#727272' : '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              cursor: 'pointer',
              transition: 'color 0.15s',
            }}
          >
            {isPrivate ? (
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M7.4 7.5A2 2 0 0 0 9 11a2 2 0 0 0 1.5-.6M4.5 4.6C2.8 5.9 1.5 8 1.5 9c0 0 2 5 7.5 5 1.5 0 2.8-.4 3.9-1M7 3.3C7.6 3.1 8.3 3 9 3c5.5 0 7.5 6 7.5 6s-.5 1.5-1.7 2.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M1.5 9s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.4"/>
              </svg>
            )}
            {isPrivate ? 'Mostrar saldos' : 'Ocultar saldos'}
          </button>
        </div>
        {assets.map(asset => (
          <AssetBalanceCard key={asset.assetName} {...asset} isPrivate={isPrivate} />
        ))}
      </div>
    );
  },
};

// ── Story: todos os ativos juntos ────────────────────────────────

const networkLabelStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 11,
  fontWeight: 700,
  lineHeight: '120%',
  color: '#333',
  textTransform: 'uppercase',
  padding: '0 4px',
};

export const TodosAtivos: Story = {
  name: 'Todos os Ativos (com seções)',
  render: () => {
    const sections = [
      {
        label: 'Onchain',
        assets: [
          { icon: bitcoinIcon, assetName: 'Bitcoin', fiatBalance: 'R$14.000', cryptoEquivalent: '≈ 0.185630 BTC' },
        ],
      },
      {
        label: 'Segunda Camada',
        assets: [
          { icon: lightningIcon, assetName: 'Lightning Bitcoin', fiatBalance: 'R$2.500', cryptoEquivalent: '≈ 0.033120 BTC' },
        ],
      },
      {
        label: 'Sidechain',
        assets: [
          { icon: depixIcon,         assetName: 'Depix',         fiatBalance: 'R$850',   cryptoEquivalent: '≈ 850.00 BRZ'  },
          { icon: liquidBitcoinIcon, assetName: 'Liquid Bitcoin', fiatBalance: 'R$7.200', cryptoEquivalent: '≈ 0.095400 BTC' },
          { icon: usdtIcon,          assetName: 'USDT',           fiatBalance: 'R$3.150', cryptoEquivalent: '≈ 630.00 USDT' },
          { icon: eurxIcon,          assetName: 'EURx',           fiatBalance: 'R$560',   cryptoEquivalent: '≈ 100.00 EURx' },
        ],
      },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sections.map(({ label, assets }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={networkLabelStyle}>{label}</span>
            {assets.map(asset => (
              <AssetBalanceCard key={asset.assetName} {...asset} />
            ))}
          </div>
        ))}
      </div>
    );
  },
};
