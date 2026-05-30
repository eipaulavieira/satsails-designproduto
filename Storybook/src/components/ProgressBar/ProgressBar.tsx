export interface ProgressBarProps {
  label?: string;
  /** Largura do preenchimento em px (máx 300) — espelha o prototype diretamente */
  fillPx?: number;
}

export function ProgressBar({ label, fillPx = 100 }: ProgressBarProps) {
  const clamp = Math.min(Math.max(fillPx, 0), 300);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    }}>
      {label && (
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '0.01em',
          fontFamily: "'Inter', sans-serif",
        }}>
          {label}
        </span>
      )}

      {/* Trilho */}
      <div style={{
        width: 300,
        height: 3,
        background: '#1c1c1c',
        borderRadius: 99,
      }}>
        {/* Preenchimento */}
        <div style={{
          width: clamp,
          height: 3,
          background: '#00C853',
          borderRadius: 99,
          transition: 'width 0.4s ease',
        }} />
      </div>
    </div>
  );
}
