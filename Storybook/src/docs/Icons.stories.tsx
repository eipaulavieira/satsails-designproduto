import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// ── Asset imports ─────────────────────────────────────────────────
import houseIcon     from '../assets/icons/phosphor/house-inactive.svg';
import chartIcon     from '../assets/icons/phosphor/chart-line-inactive.svg';
import qrIcon        from '../assets/icons/phosphor/qr-code.svg';
import cartIcon      from '../assets/icons/phosphor/shopping-cart-inactive.svg';
import clockIcon     from '../assets/icons/phosphor/clock-counter-clockwise-inactive.svg';
import arrowDownIcon from '../assets/icons/phosphor/arrow-down.svg';
import arrowUpIcon   from '../assets/icons/phosphor/arrow-up.svg';
import arrowsLRIcon  from '../assets/icons/phosphor/arrows-left-right.svg';
import currencyIcon  from '../assets/icons/phosphor/currency-dollar.svg';

// ── Icon data ─────────────────────────────────────────────────────

interface IconItem {
  name: string;
  dartName: string;
  size: string;
  usage: string;
  css?: string;
  src?: string;
  svgPath?: string;
}

const SECTIONS: { label: string; items: IconItem[] }[] = [
  {
    label: 'Bottom Nav Bar',
    items: [
      { name: 'House',                 dartName: 'house',                 size: '18px', usage: 'Navegação → Home',       src: houseIcon,  css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'ChartLine',             dartName: 'chartLine',             size: '18px', usage: 'Navegação → Analíticas', src: chartIcon,  css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'QrCode',                dartName: 'qrCode',                size: '28px', usage: 'Botão central Scan',     src: qrIcon,     css: 'width: 28px; height: 28px;\nfilter: brightness(0);' },
      { name: 'ShoppingCart',          dartName: 'shoppingCart',          size: '18px', usage: 'Navegação → Serviços',   src: cartIcon,   css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'ClockCounterClockwise', dartName: 'clockCounterClockwise', size: '18px', usage: 'Navegação → Histórico',  src: clockIcon,  css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
    ],
  },
  {
    label: 'Quick Actions',
    items: [
      { name: 'ArrowDown',       dartName: 'arrowDown',       size: '18px', usage: 'Receber',   src: arrowDownIcon, css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'ArrowUp',         dartName: 'arrowUp',         size: '18px', usage: 'Enviar',    src: arrowUpIcon,   css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'ArrowsLeftRight', dartName: 'arrowsLeftRight', size: '18px', usage: 'Converter', src: arrowsLRIcon,  css: 'width: 18px; height: 18px;\nfilter: brightness(0) invert(1);' },
      { name: 'CurrencyDollar',  dartName: 'currencyDollar',  size: '18px', usage: 'Depositar (fundo verde)', src: currencyIcon, css: 'width: 18px; height: 18px;\nfilter: brightness(0);' },
    ],
  },
  {
    label: 'Header — Home',
    items: [
      { name: 'User',  dartName: 'user',  size: '18px', usage: 'Avatar da conta',       svgPath: '<circle cx="9" cy="6.5" r="3" stroke="white" stroke-width="1.4"/><path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" stroke-width="1.4" stroke-linecap="round"/>' },
      { name: 'Info',  dartName: 'info',  size: '13px', usage: 'Alerta "Fazer backup"', svgPath: '<path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 8.5h2V13H8V8.5z" fill="white"/>' },
      { name: 'Eye',   dartName: 'eye',   size: '18px', usage: 'Toggle privacidade',    svgPath: '<path d="M1.5 9s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="9" r="2" stroke="white" stroke-width="1.4"/>' },
      { name: 'Gear',  dartName: 'gear',  size: '18px', usage: 'Configurações',         svgPath: '<circle cx="9" cy="9" r="2.5" stroke="white" stroke-width="1.4"/><path d="M9 2v1.5M9 14.5V16M2 9h1.5M14.5 9H16M3.7 3.7l1.1 1.1M13.2 13.2l1.1 1.1M14.3 3.7l-1.1 1.1M4.8 13.2l-1.1 1.1" stroke="white" stroke-width="1.4" stroke-linecap="round"/>' },
    ],
  },
  {
    label: 'Tipo de Conta',
    items: [
      { name: 'User',         dartName: 'user',         size: '18px',   usage: 'Individual / campo nome', svgPath: '<circle cx="9" cy="6" r="3.5" stroke="white" stroke-width="1.5"/><path d="M2.5 16c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>' },
      { name: 'ShoppingBag',  dartName: 'shoppingBag',  size: '18px',   usage: 'Comerciante',             svgPath: '<path d="M3 7h12M6 7V5a3 3 0 0 1 6 0v2M3.5 7l1 8h9l1-8H3.5z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
      { name: 'CheckCircle',  dartName: 'checkCircle',  size: '16px',   usage: 'Cabeçalho Benefícios',    svgPath: '<circle cx="9" cy="9" r="7" stroke="white" stroke-width="1.2"/><path d="M6 9l2 2 4-3" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' },
      { name: 'Rows',         dartName: 'rows',         size: '16px',   usage: 'Cabeçalho Condições',     svgPath: '<path d="M2 4h14M2 9h9M2 14h11" stroke="white" stroke-width="1.2" stroke-linecap="round"/>' },
      { name: 'CaretRight',   dartName: 'caretRight',   size: '8×14px', usage: 'Expandir / chevron',      svgPath: '<path d="M6 3l6 6-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' },
      { name: 'Phone',        dartName: 'phone',        size: '18px',   usage: 'Campo WhatsApp',          svgPath: '<path d="M14.7 11.1l-2.4-1a.5.5 0 0 0-.5.06l-1.5 1.34a8.5 8.5 0 0 1-3.76-3.76L7.84 6.2a.5.5 0 0 0 .06-.5L6.9 3.3A.5.5 0 0 0 6.44 3 5.62 5.62 0 0 0 3 8c0 3.87 3.13 7 7 7a5.62 5.62 0 0 0 5-3.44.5.5 0 0 0-.3-.46z" fill="white"/>' },
    ],
  },
  {
    label: 'Inserir E-mail',
    items: [
      { name: 'Envelope',      dartName: 'envelope',      size: '18px', usage: 'Campo e-mail',            svgPath: '<rect x="2" y="4" width="14" height="11" rx="1" stroke="white" stroke-width="1.4"/><path d="M2 5l7 6 7-6" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' },
    ],
  },
  {
    label: 'Afiliado',
    items: [
      { name: 'PaperPlaneTilt', dartName: 'paperPlaneTilt', size: '18px', usage: 'Campo código de afiliado', svgPath: '<path d="M15.5 2.5L1.5 8l5.5 2.5M15.5 2.5L9 15.5l-2-5M15.5 2.5L7 10.5" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────

function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return { copied, copy };
}

function CopyRow({ label, text, mono = true }: { label: string; text: string; mono?: boolean }) {
  const { copied, copy } = useCopy(text);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </span>
      <button
        onClick={copy}
        title={`Copiar ${text}`}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6,
          padding: '7px 10px',
          background: copied ? 'rgba(0,200,83,0.08)' : '#f9fafb',
          border: `1px solid ${copied ? 'rgba(0,200,83,0.3)' : '#e5e7eb'}`,
          borderRadius: 7, cursor: 'pointer',
          fontFamily: mono ? 'monospace' : 'Inter, sans-serif',
          fontSize: 11,
          color: copied ? '#007A3A' : '#1f2937',
          transition: 'all 0.15s',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
          {copied ? '✓ Copiado!' : text}
        </span>
        {!copied && (
          <svg width="11" height="11" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
            <rect x="6" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M4 12H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

function IconPreview({ src, svgPath, size }: { src?: string; svgPath?: string; size: string }) {
  const px = parseInt(size) || 18;
  return (
    <div style={{
      width: 52, height: 52,
      background: '#0C0B0D', borderRadius: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {src
        ? <img src={src} width={px} height={px} alt="" style={{ display: 'block', filter: 'brightness(0) invert(1)' }} />
        : svgPath
          ? <svg width={px} height={px} viewBox="0 0 18 18" fill="none" dangerouslySetInnerHTML={{ __html: svgPath }} />
          : null
      }
    </div>
  );
}

function IconCard({ name, dartName, size, usage, css, src, svgPath }: IconItem) {
  const phosphorUrl = `https://phosphoricons.com/?q=${name.toLowerCase().replace(/(?<=[a-z])(?=[A-Z])/g, '+')}`;
  const dartWidget  = `PhosphorIcon(PhosphorIcons.${dartName}())`;
  const dartImport  = `PhosphorIcons.${dartName}()`;

  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 12,
      padding: '16px 14px 14px',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {/* Top row: preview + name + link */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <IconPreview src={src} svgPath={svgPath} size={size} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{name}</span>
            <a
              href={phosphorUrl}
              target="_blank"
              rel="noreferrer"
              title="Ver no phosphoricons.com"
              style={{ color: '#F7931A', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path d="M10 3h5v5M15 3l-7 7M7 4H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.4, marginBottom: 6 }}>{usage}</div>
          <span style={{
            display: 'inline-block',
            padding: '2px 8px', borderRadius: 20,
            fontSize: 10, fontWeight: 600,
            background: 'rgba(247,147,26,0.08)', color: '#C97400',
            border: '1px solid rgba(247,147,26,0.2)',
          }}>
            {size}
          </span>
        </div>
      </div>

      {/* Copy rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {css && <CopyRow label="CSS" text={css} />}
        <CopyRow label="Flutter" text={dartWidget} />
        <CopyRow label="Flutter — só o ícone" text={dartImport} />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────

function IconsPage() {
  return (
    <div style={{ maxWidth: 940, fontFamily: 'Inter, -apple-system, sans-serif', padding: '32px 24px 80px' }}>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7931A', margin: '0 0 8px' }}>
          Fundação
        </p>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: '#0C0B0D', margin: '0 0 12px' }}>
          Ícones Phosphor
        </h1>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 580 }}>
          Todos os ícones do app Satsails. Clique em qualquer campo para copiar direto para o Flutter.
          O ícone de link <span style={{ color: '#F7931A' }}>↗</span> abre a busca no phosphoricons.com.
        </p>

        {/* Package install */}
        <div style={{
          background: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: 10,
          padding: '14px 16px', marginBottom: 16, maxWidth: 540,
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            Dependência (pubspec.yaml)
          </div>
          <CopyRow label="" text="phosphor_flutter: ^2.1.0" />
        </div>

        <a
          href="https://phosphoricons.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '9px 16px',
            background: 'rgba(247,147,26,0.08)',
            border: '1px solid rgba(247,147,26,0.25)',
            borderRadius: 8, color: '#C97400',
            fontSize: 13, fontWeight: 500, textDecoration: 'none',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path d="M10 3h5v5M15 3l-7 7M7 4H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          phosphoricons.com — biblioteca completa
        </a>
      </div>

      {/* Size chips */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
        {['18px — padrão', '28px — QR Code nav', '16px — painéis', '13px — info pequeno'].map(s => (
          <span key={s} style={{
            padding: '4px 12px', borderRadius: 20,
            fontSize: 12, fontWeight: 500,
            border: '1px solid #e5e7eb', color: '#374151', background: '#f9fafb',
          }}>{s}</span>
        ))}
      </div>

      {/* Sections */}
      {SECTIONS.map(({ label, items }) => (
        <div key={label} style={{ marginBottom: 44 }}>
          <p style={{
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#9ca3af', margin: '0 0 14px',
            paddingBottom: 10, borderBottom: '1px solid #e5e7eb',
          }}>
            {label}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12,
          }}>
            {items.map(item => (
              <IconCard key={`${item.name}-${item.usage}`} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Storybook ─────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Fundação/Ícones',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
};

export default meta;

export const Icones: StoryObj = {
  name: 'Ícones Phosphor',
  render: () => <IconsPage />,
};
