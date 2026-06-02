export type CTAVariant = 'primary' | 'secondary' | 'secondary-subtitle' | 'success' | 'ghost' | 'danger' | 'cancel';

export type CTAState = 'idle' | 'active';

export interface CTAButtonProps {
  label: string;
  variant?: CTAVariant;
  buttonState?: CTAState;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

type StyleKey = `${CTAVariant}-${CTAState}` | CTAVariant;

const styles: Partial<Record<StyleKey, React.CSSProperties>> = {
  /* ── Primary (Login / Continuar) ── */
  'primary-idle': {
    background: '#FF9800',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  'primary-active': {
    background: '#CD7C04',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },

  /* ── Success (Afiliado / Configuração) ── */
  'success-idle': {
    background: '#00C853',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  'success-active': {
    background: '#026A2D',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },

  /* ── Secondary (Recuperar carteira — texto branco) ── */
  secondary: {
    background: 'transparent',
    color: '#ffffff',
    border: 'none',
    boxShadow: 'none',
  },

  /* ── Secondary Subtitle (Recuperar carteira — texto cinza) ── */
  'secondary-subtitle': {
    background: 'transparent',
    color: '#727272',   /* --color-subtitle */
    border: 'none',
    boxShadow: 'none',
  },

  /* ── Ghost (Cadastrar depois) ── */
  ghost: {
    background: 'none',
    color: '#727272',
    border: 'none',
    boxShadow: 'none',
  },

  /* ── Danger (Deletar conta) ── */
  'danger-idle': {
    background: '#EA2415',   /* --color-danger-medium */
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  'danger-active': {
    background: '#CF1C0E',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },

  /* ── Cancel (Cancelar) ── */
  'cancel-idle': {
    background: '#070506',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  'cancel-active': {
    background: '#191818',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
};

function getStyle(variant: CTAVariant, state: CTAState): React.CSSProperties {
  const key = `${variant}-${state}` as StyleKey;
  return styles[key] ?? styles[variant] ?? {};
}

export function CTAButton({
  label,
  variant = 'primary',
  buttonState = 'idle',
  leftIcon,
  disabled = false,
  onClick,
}: CTAButtonProps) {
  const variantStyle = getStyle(variant, buttonState);
  const hasIcon  = !!leftIcon;
  const isGhost  = variant === 'ghost';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        width: 328,
        height: isGhost ? 'auto' : 52,
        padding: hasIcon ? '0 16px' : '0 20px',
        justifyContent: hasIcon ? 'flex-start' : 'center',
        alignItems: 'center',
        gap: hasIcon ? 16 : 8,
        borderRadius: 8,
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        fontWeight: isGhost ? 400 : 700,
        letterSpacing: '-0.2px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.15s, opacity 0.15s',
        boxSizing: 'border-box',
        ...variantStyle,
      }}
    >
      {leftIcon && (
        <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {leftIcon}
        </span>
      )}
      {label}
    </button>
  );
}
