import React from 'react';

export interface CurrencyPopupCardProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  blur?: number;
  showHandle?: boolean;
  style?: React.CSSProperties;
}

export function CurrencyPopupCard({
  children,
  width = 390,
  height = 523,
  blur = 12,
  showHandle = true,
  style,
}: CurrencyPopupCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width,
        height,
        padding: '16px 16px 48px 16px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: '20px 20px 0 0',
        background: 'rgba(51, 51, 51, 0.34)',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxSizing: 'border-box',
        position: 'relative',
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

// ── Subcomponentes ─────────────────────────────────────────────────

export interface CurrencyTitleProps {
  children: React.ReactNode;
}

export function CurrencyTitle({ children }: CurrencyTitleProps) {
  return (
    <p style={{
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 500,
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      margin: 0,
      flexShrink: 0,
    }}>
      {children}
    </p>
  );
}

export interface CurrencyOptionProps {
  code: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function CurrencyOption({ code, isSelected = false, onClick }: CurrencyOptionProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
      <span style={{
        fontSize: 14,
        fontWeight: 500,
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}>
        {code}
      </span>
    </div>
  );
}

export default CurrencyPopupCard;
