import React from 'react';

export interface PopupCardProps {
  /** Conteúdo interno */
  children: React.ReactNode;
  /** Largura em px (padrão 390 — largura do iPhone) */
  width?: number;
  /** Altura em px (padrão 504) */
  height?: number;
  /** Intensidade do blur em px (padrão 12) */
  blur?: number;
  /** Exibe a alça de arrastar no topo */
  showHandle?: boolean;
  /** Override de estilos */
  style?: React.CSSProperties;
}

export function PopupCard({
  children,
  width = 390,
  height = 504,
  blur = 12,
  showHandle = true,
  style,
}: PopupCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width,
        height,
        padding: '16px 16px 48px 16px',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: '20px 20px 0 0',
        background: 'var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {showHandle && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{
            width: 36,
            height: 4,
            borderRadius: 8,
            background: '#000000',
          }} />
        </div>
      )}
      {children}
    </div>
  );
}

// ── Subcomponentes de uso comum ───────────────────────────────────

export interface PopupTitleProps {
  children: React.ReactNode;
}

export function PopupTitle({ children }: PopupTitleProps) {
  return (
    <p style={{
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 500,
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      margin: '0 0 28px',
      flexShrink: 0,
    }}>
      {children}
    </p>
  );
}

export interface CoinOptionProps {
  /** Caminho para o ícone da moeda (src/assets/coins/*.svg) */
  icon: string;
  /** Nome da moeda */
  label: string;
  /** Exibe chevron (indica sub-opções de rede) */
  hasChevron?: boolean;
  /** Opção selecionada — opacidade 100%; não selecionada — 55% */
  isSelected?: boolean;
  onClick?: () => void;
}

export function CoinOption({ icon, label, hasChevron = false, isSelected = false, onClick }: CoinOptionProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: '#080808',
        borderRadius: 10,
        padding: '0 16px',
        width: '100%',
        height: 52,
        boxSizing: 'border-box',
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
        opacity: isSelected ? 1 : 0.55,
        transition: 'opacity 0.15s ease',
      }}
    >
      <img
        src={icon}
        alt={label}
        style={{ width: 18, height: 18, flexShrink: 0 }}
      />
      <span style={{
        flex: 1,
        fontSize: 14,
        fontWeight: 500,
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.2,
      }}>
        {label}
      </span>
      {hasChevron && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M7 4.5L11.5 9L7 13.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}

export default PopupCard;
