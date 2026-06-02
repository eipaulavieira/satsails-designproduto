export interface NotificationPopupProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  blur?: number;
}

export function NotificationPopup({
  title,
  subtitle,
  children,
  width = 363,
  height = 284,
  blur = 12,
}: NotificationPopupProps) {
  return (
    <div
      style={{
        display: 'flex',
        width,
        height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        borderRadius: 20,
        background: 'var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxSizing: 'border-box',
        padding: '24px 16px',
      }}
    >
      {/* Container único: título + subtítulo + botões */}
      <div style={{
        display: 'flex',
        width: 328,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 23,
          fontStyle: 'normal',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: '120%',
          textAlign: 'center',
        }}>
          {title}
        </span>

        {subtitle && (
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 400,
            color: '#D1D2D2',
            lineHeight: '120%',
            textAlign: 'center',
          }}>
            {subtitle}
          </span>
        )}

        {children}
      </div>
    </div>
  );
}
