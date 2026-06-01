export type CTAVariant = 'primary' | 'secondary' | 'success' | 'ghost';

export interface CTAButtonProps {
  label: string;
  variant?: CTAVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const styles: Record<CTAVariant, React.CSSProperties> = {
  primary: {
    background: '#CD7C04',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  secondary: {
    background: '#080808',
    color: '#ffffff',
    border: '1px solid #333333',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  success: {
    background: '#00C853',
    color: '#000000',
    border: 'none',
    boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
  },
  ghost: {
    background: 'none',
    color: '#727272',
    border: 'none',
    boxShadow: 'none',
  },
};

export function CTAButton({ label, variant = 'primary', disabled = false, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        width: 328,
        height: variant === 'ghost' ? 'auto' : 52,
        padding: '0 20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderRadius: 8,
        fontFamily: "'Inter', sans-serif",
        fontSize: variant === 'ghost' ? 14 : 15,
        fontWeight: variant === 'ghost' ? 400 : 700,
        letterSpacing: '-0.2px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'opacity 0.15s, transform 0.1s',
        boxSizing: 'border-box',
        ...styles[variant],
      }}
      onMouseDown={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; }}
      onMouseUp={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
    >
      {label}
    </button>
  );
}
