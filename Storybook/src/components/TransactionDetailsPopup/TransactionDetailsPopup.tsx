export interface TransactionDetailRow {
  label: string;
  value: string;
}

export interface TransactionDetailsPopupProps {
  title?: string;
  rows?: TransactionDetailRow[];
  blur?: number;
}

const titleStyle: React.CSSProperties = {
  color: '#FFF',
  textAlign: 'center',
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  width: '100%',
  flexShrink: 0,
};

const rowTextStyle: React.CSSProperties = {
  color: '#FFF',
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
};

export function TransactionDetailsPopup({
  title = 'Detalhes da Transação',
  rows = [],
  blur = 12,
}: TransactionDetailsPopupProps) {
  return (
    <div style={{
      display: 'flex',
      width: 390,
      height: 316,
      padding: '16px 16px 48px 16px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 10,
      borderRadius: '20px 20px 0 0',
      background: 'rgba(51, 51, 51, 0.34)',
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      boxSizing: 'border-box',
      position: 'relative',
    }}>

      {/* Handle */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 36, height: 4, borderRadius: 8, background: '#000' }} />
      </div>

      {/* Título */}
      <span style={titleStyle}>{title}</span>

      {/* Linhas de detalhe */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 0, marginTop: 28 }}>
        {rows.map((row, i) => (
          <div key={i}>
            {i > 0 && (
              <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)' }} />
            )}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
            }}>
              <span style={rowTextStyle}>{row.label}</span>
              <span style={rowTextStyle}>{row.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
