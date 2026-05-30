import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CurrencyPopupCard, CurrencyTitle, CurrencyOption } from './CurrencyPopupCard';

const meta: Meta<typeof CurrencyPopupCard> = {
  title: 'Componentes/Popups/CurrencyPopupCard',
  component: CurrencyPopupCard,
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
          'Variante do PopupCard para seleção de moeda/unidade. ' +
          'Sem ícones — exibe apenas a sigla da moeda. ' +
          'O estado selecionado usa fundo `#080808` em 100% de opacidade com checkmark laranja.',
      },
    },
  },
  argTypes: {
    blur:       { control: { type: 'range', min: 0, max: 40, step: 1 }, description: 'Intensidade do blur em px' },
    width:      { control: 'number', description: 'Largura em px' },
    height:     { control: 'number', description: 'Altura em px' },
    showHandle: { control: 'boolean', description: 'Exibe alça de arrastar' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencyPopupCard>;

const CURRENCIES = ['USD', 'BRL', 'EUR', 'CHF', 'GBP', 'SATS'];

// ── Story: interativo (com seleção) ──────────────────────────────

export const VerQuantidadeEm: Story = {
  name: 'Ver quantidade em:',
  args: {
    width: 390,
    height: 523,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState('BRL');
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#080808',
      }}>
        <CurrencyPopupCard {...args}>
          <CurrencyTitle>Ver quantidade em:</CurrencyTitle>
          {CURRENCIES.map((code) => (
            <CurrencyOption
              key={code}
              code={code}
              isSelected={selected === code}
              onClick={() => setSelected(code)}
            />
          ))}
        </CurrencyPopupCard>
      </div>
    );
  },
};

// ── Story: sem seleção ───────────────────────────────────────────

export const SemSelecao: Story = {
  name: 'Sem seleção (referência)',
  args: {
    width: 390,
    height: 523,
    blur: 12,
    showHandle: true,
  },
  render: (args) => (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808',
    }}>
      <CurrencyPopupCard {...args}>
        <CurrencyTitle>Ver quantidade em:</CurrencyTitle>
        {CURRENCIES.map((code) => (
          <CurrencyOption key={code} code={code} />
        ))}
      </CurrencyPopupCard>
    </div>
  ),
};
