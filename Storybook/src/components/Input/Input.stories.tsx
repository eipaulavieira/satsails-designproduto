import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea, Select } from './Input';

const meta: Meta = {
  title: 'Componentes/Formulários',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '**06 / Componentes** — Inputs, Textarea e Select para formulários da Satsails.',
      },
    },
  },
};

export default meta;

export const TextInput: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Input label="Endereço Bitcoin" placeholder="bc1q…" hint="Aceita endereços on-chain e Lightning" />
      <Input label="Valor (BTC)" placeholder="0.001" type="number" />
    </div>
  ),
};

export const WithError: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ width: 320 }}>
      <Input label="Endereço" placeholder="bc1q…" error="Endereço inválido. Verifique e tente novamente." defaultValue="endereço-errado" />
    </div>
  ),
};

export const WithAddon: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Input
        label="Valor (sats)"
        placeholder="1000"
        leftAddon={<span style={{ fontSize: 14, fontWeight: 600 }}>₿</span>}
      />
      <Input
        label="Valor em BRL"
        placeholder="100,00"
        leftAddon={<span style={{ fontSize: 13, fontWeight: 600 }}>R$</span>}
      />
    </div>
  ),
};

export const Disabled: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ width: 320 }}>
      <Input label="ID da transação" value="a3f8c1d2e9b4…" disabled />
    </div>
  ),
};

export const TextareaField: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: 320 }}>
      <Textarea label="Nota da transação" placeholder="Adicione uma nota pessoal…" hint="Visível apenas para você" rows={4} />
    </div>
  ),
};

export const SelectField: StoryObj<typeof Select> = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        label="Rede"
        options={[
          { value: 'onchain', label: 'Bitcoin On-chain' },
          { value: 'lightning', label: 'Lightning Network' },
          { value: 'liquid', label: 'Liquid Network' },
          { value: 'depix', label: 'DePix' },
        ]}
        hint="Escolha a rede de envio"
      />
    </div>
  ),
};

export const FullForm: StoryObj = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 16, padding: 24, border: '1px solid #e8e8e8', borderRadius: 12 }}>
      <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600, color: '#0C0B0D' }}>Enviar Bitcoin</h3>
      <Select
        label="Rede"
        options={[
          { value: 'onchain', label: 'Bitcoin On-chain' },
          { value: 'lightning', label: 'Lightning Network' },
          { value: 'liquid', label: 'Liquid Network' },
        ]}
      />
      <Input label="Destinatário" placeholder="Endereço ou invoice Lightning…" />
      <Input label="Valor" placeholder="0.001" leftAddon={<span style={{ fontSize: 13, fontWeight: 600 }}>BTC</span>} />
      <Textarea label="Nota (opcional)" placeholder="Adicione uma nota…" rows={3} />
    </div>
  ),
  parameters: { layout: 'centered' },
};
