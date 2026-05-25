import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FiatPopupCard, FiatTitle, SectionLabel, FiatOption } from './FiatPopupCard';

import brFlag  from '../../assets/flags/br.svg';
import usFlag  from '../../assets/flags/us.svg';
import euFlag  from '../../assets/flags/eu.svg';
import chFlag  from '../../assets/flags/ch.svg';
import gbFlag  from '../../assets/flags/gb.svg';
import pixIcon from '../../assets/flags/pix.svg';

const meta: Meta<typeof FiatPopupCard> = {
  title: 'Componentes/FiatPopupCard',
  component: FiatPopupCard,
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
          'Variante do PopupCard para seleção de moeda fiduciária e método de recebimento. ' +
          'Exibe bandeiras dos países e siglas de moeda. ' +
          'Dividido em duas seções: "País de origem" e "Receber por".',
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
type Story = StoryObj<typeof FiatPopupCard>;

const ORIGINS = [
  { flag: brFlag, code: 'BRL' },
  { flag: usFlag, code: 'USD' },
  { flag: euFlag, code: 'EUR' },
  { flag: chFlag, code: 'CHF' },
  { flag: gbFlag, code: 'GBP' },
];

// ── Story: interativo ────────────────────────────────────────────

export const ReceberEm: Story = {
  name: 'Receber em:',
  args: {
    width: 390,
    height: 650,
    blur: 12,
    showHandle: true,
  },
  render: (args) => {
    const [selectedOrigin, setSelectedOrigin] = useState('BRL');
    const [selectedMethod, setSelectedMethod] = useState('PIX');
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#080808',
      }}>
        <FiatPopupCard {...args}>
          <FiatTitle>Receber em:</FiatTitle>

          <SectionLabel>País de origem:</SectionLabel>
          {ORIGINS.map(({ flag, code }) => (
            <FiatOption
              key={code}
              flag={flag}
              code={code}
              isSelected={selectedOrigin === code}
              onClick={() => setSelectedOrigin(code)}
            />
          ))}

          <SectionLabel>Receber por:</SectionLabel>
          <FiatOption
            flag={pixIcon}
            code="PIX"
            isSelected={selectedMethod === 'PIX'}
            onClick={() => setSelectedMethod('PIX')}
          />
        </FiatPopupCard>
      </div>
    );
  },
};

// ── Story: sem seleção ───────────────────────────────────────────

export const SemSelecao: Story = {
  name: 'Sem seleção (referência)',
  args: {
    width: 390,
    height: 650,
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
      <FiatPopupCard {...args}>
        <FiatTitle>Receber em:</FiatTitle>

        <SectionLabel>País de origem:</SectionLabel>
        {ORIGINS.map(({ flag, code }) => (
          <FiatOption key={code} flag={flag} code={code} />
        ))}

        <SectionLabel>Receber por:</SectionLabel>
        <FiatOption flag={pixIcon} code="PIX" />
      </FiatPopupCard>
    </div>
  ),
};
