export interface AssetBalanceCardProps {
  icon: string;
  assetName: string;
  fiatBalance: string;
  cryptoEquivalent: string;
  isPrivate?: boolean;
}

export function AssetBalanceCard({
  icon,
  assetName,
  fiatBalance,
  cryptoEquivalent,
  isPrivate = false,
}: AssetBalanceCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        width: 358,
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        background: 'var(--dark-new, #080808)',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={icon} alt={assetName} style={{ width: 20, height: 20, flexShrink: 0 }} />
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.2,
          }}
        >
          {assetName}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
        <span
          style={{
            color: 'var(--White, #FFF)',
            textAlign: 'right',
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: '120%',
          }}
        >
          {isPrivate ? '******' : fiatBalance}
        </span>
        <span
          style={{
            color: 'var(--subtitulo, #727272)',
            textAlign: 'right',
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: '120%',
          }}
        >
          {isPrivate ? '*****' : cryptoEquivalent}
        </span>
      </div>
    </div>
  );
}

export default AssetBalanceCard;
