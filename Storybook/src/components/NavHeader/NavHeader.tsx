export interface NavHeaderProps {
  title: string;
  onBack?: () => void;
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
    <path d="M9 1L1 9L9 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function NavHeader({ title, onBack }: NavHeaderProps) {
  return (
    <button
      onClick={onBack}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 50,
        padding: '0 16px',
        background: 'none',
        border: 'none',
        cursor: onBack ? 'pointer' : 'default',
        WebkitTapHighlightColor: 'transparent',
        flexShrink: 0,
      }}
    >
      <ChevronLeft />
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 700,
        color: '#FAFDFE',
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
      }}>
        {title}
      </span>
    </button>
  );
}
