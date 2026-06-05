import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Componentes/Cards/Base',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',    value: '#080808' },
        { name: 'darker', value: '#000000' },
        { name: 'light',  value: '#f5f5f5' },
      ],
    },
    docs: {
      description: {
        component: 'Cards base extraídos do protótipo. Use como referência de dimensões, padding e border-radius para implementação no app.',
      },
    },
  },
};

export default meta;

// ─── 1. home-balance-card ─────────────────────────────────────────────────────
export const HomeBalanceCard: StoryObj = {
  name: '1 · home-balance-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Home, Bitcoin Detail  \n`width: 100%` · `height: 148px` · `padding: 24px 28px` · `border-radius: 16px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358 }}>
      <div style={{
        width: '100%',
        height: 148,
        padding: '24px 28px',
        borderRadius: 16,
        background: '#080808',
        border: '1px solid rgba(255,255,255,0.06)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 11 }}>Saldo total</span>
        <div>
          <div style={{ color: '#fff', fontFamily: 'Inter', fontSize: 33, fontWeight: 700 }}>R$ 68.420,00</div>
          <div style={{ color: '#727272', fontFamily: 'Inter', fontSize: 14 }}>≈ 0.18563 BTC</div>
        </div>
      </div>
    </div>
  ),
};

// ─── 2. asset-card ───────────────────────────────────────────────────────────
export const AssetCard: StoryObj = {
  name: '2 · asset-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Asset list  \n`width: 100%` · `height: auto` · `padding: 16px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {['Bitcoin', 'Lightning Bitcoin', 'Liquid Bitcoin'].map((name) => (
        <div key={name} style={{
          width: '100%',
          padding: 16,
          borderRadius: 8,
          background: '#080808',
          border: '1px solid #333333',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ color: '#fff', fontFamily: 'Inter', fontSize: 14 }}>{name}</span>
          <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 13 }}>0.00000 BTC</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 3. qa-btn (Quick Action) ─────────────────────────────────────────────────
export const QaBtn: StoryObj = {
  name: '3 · qa-btn',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Quick actions  \n`width: 61.813px` · `height: 58.643px` · `padding: 0` · `border-radius: 15.849px`',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      {['Receber', 'Enviar', 'Converter', 'Vender'].map((label) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 61.813,
            height: 58.643,
            borderRadius: 15.849,
            background: '#1A1A1A',
            border: '1px solid #333333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#333' }} />
          </div>
          <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 11 }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 4. tx-card ──────────────────────────────────────────────────────────────
export const TxCard: StoryObj = {
  name: '4 · tx-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Transaction history  \n`width: 100%` · `height: auto` · `padding: 12px 8px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[
        { name: 'Bitcoin', date: '06/05/2026', value: '+0.00420 BTC', type: 'recebido' },
        { name: 'Bitcoin', date: '04/05/2026', value: '-0.00100 BTC', type: 'enviado' },
        { name: 'Bitcoin', date: '02/05/2026', value: '+0.01200 BTC', type: 'recebido' },
      ].map((tx, i) => (
        <div key={i} style={{
          width: '100%',
          padding: '12px 8px',
          borderRadius: 8,
          background: '#080808',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ color: '#fff', fontFamily: 'Inter', fontSize: 14 }}>{tx.name}</div>
            <div style={{ color: '#727272', fontFamily: 'Inter', fontSize: 11 }}>{tx.date}</div>
          </div>
          <span style={{
            color: tx.type === 'recebido' ? '#00C853' : '#D1D2D2',
            fontFamily: 'Inter',
            fontSize: 13,
          }}>{tx.value}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 5. tc-card ──────────────────────────────────────────────────────────────
export const TcCard: StoryObj = {
  name: '5 · tc-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Tipo de conta  \n`width: 358px` · `height: 102px` · `padding: 27px 24px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {['Individual', 'Empresa'].map((tipo) => (
        <div key={tipo} style={{
          width: 358,
          height: 102,
          padding: '27px 24px',
          borderRadius: 8,
          background: '#0C0B0D',
          border: '1px solid #333333',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#333' }} />
          <span style={{ color: '#fff', fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}>{tipo}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 6. tc-subcard ───────────────────────────────────────────────────────────
export const TcSubcard: StoryObj = {
  name: '6 · tc-subcard',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Subcards de tipo de conta  \n`width: auto` · `height: 102px` · `padding: 24px` · `border-radius: 0`',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 0, border: '1px solid #333', borderRadius: 8, overflow: 'hidden', width: 358 }}>
      {['Opção A', 'Opção B'].map((op, i) => (
        <div key={op} style={{
          flex: 1,
          height: 102,
          padding: 24,
          background: i === 0 ? '#1A1A1A' : '#0C0B0D',
          borderRight: i === 0 ? '1px solid #333' : 'none',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ color: '#fff', fontFamily: 'Inter', fontSize: 13 }}>{op}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 7. email-input ──────────────────────────────────────────────────────────
export const EmailInput: StoryObj = {
  name: '7 · email-input',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Email field  \n`width: auto` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358 }}>
      <div style={{
        width: '100%',
        height: 52,
        padding: '0 20px',
        borderRadius: 8,
        background: '#0C0B0D',
        border: '1px solid #333333',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 14 }}>Digite seu e-mail</span>
      </div>
    </div>
  ),
};

// ─── 8. enviar-input-field ───────────────────────────────────────────────────
export const EnviarInputField: StoryObj = {
  name: '8 · enviar-input-field',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Input fields (enviar)  \n`width: 100%` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {['Endereço do destinatário', 'Quantidade'].map((placeholder) => (
        <div key={placeholder} style={{
          width: '100%',
          height: 52,
          padding: '0 20px',
          borderRadius: 8,
          background: '#0C0B0D',
          border: '1px solid #333333',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 14 }}>{placeholder}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 9. tc-input-wrap ────────────────────────────────────────────────────────
export const TcInputWrap: StoryObj = {
  name: '9 · tc-input-wrap',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Tipo conta inputs  \n`width: auto` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`',
      },
    },
  },
  render: () => (
    <div style={{ width: 358 }}>
      <div style={{
        width: '100%',
        height: 52,
        padding: '0 20px',
        borderRadius: 8,
        background: '#0C0B0D',
        border: '1px solid #333333',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 14 }}>Nome completo</span>
      </div>
    </div>
  ),
};

// ─── 10. vc-box ──────────────────────────────────────────────────────────────
export const VcBox: StoryObj = {
  name: '10 · vc-box',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Verify code  \n`width: 54px` · `height: 54px` · `border-radius: 14px`',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      {['1', '2', '3', '4', '·', '·'].map((digit, i) => (
        <div key={i} style={{
          width: 54,
          height: 54,
          borderRadius: 14,
          background: '#0C0B0D',
          border: `1px solid ${i < 4 ? '#F7931A' : '#333333'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ color: '#fff', fontFamily: 'Inter', fontSize: 20, fontWeight: 500 }}>{digit}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── 11. popup-sheet (inline enviar) ─────────────────────────────────────────
export const PopupSheet: StoryObj = {
  name: '11 · popup-sheet (inline enviar)',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Popup sheets  \n`width: 359px` · `height: 504px` · `padding: 16px 16px 48px 16px` · `border-radius: 20px 20px 0 0`',
      },
    },
  },
  render: () => (
    <div style={{
      width: 359,
      height: 504,
      padding: '16px 16px 48px 16px',
      borderRadius: '20px 20px 0 0',
      background: '#0C0B0D',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <div style={{ width: 40, height: 4, borderRadius: 2, background: '#333', alignSelf: 'center' }} />
      <span style={{ color: '#fff', fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}>Enviar para:</span>
      <div style={{ flex: 1, background: '#080808', borderRadius: 8 }} />
    </div>
  ),
};

// ─── 12. phone-frame ─────────────────────────────────────────────────────────
export const PhoneFrame: StoryObj = {
  name: '12 · phone-frame',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '**Onde:** Main container (protótipo)  \n`width: 390px` · `height: 844px` · `border-radius: 30px`',
      },
    },
  },
  render: () => (
    <div style={{
      width: 390,
      height: 844,
      borderRadius: 30,
      background: '#000000',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ color: '#727272', fontFamily: 'Inter', fontSize: 13 }}>390 × 844 · radius 30px</span>
    </div>
  ),
};
