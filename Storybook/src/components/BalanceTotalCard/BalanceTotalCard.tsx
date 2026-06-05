import { GlassCard } from '../GlassCard/GlassCard';
import { colors } from '../../tokens/colors';

export interface BalanceTotalCardProps {
  totalBalance: string;
  cryptoEquivalent: string;
  isPrivate?: boolean;
  blur?: number;
  background?: string;
  borderColor?: string;
}

export function BalanceTotalCard({
  totalBalance,
  cryptoEquivalent,
  isPrivate = false,
  blur = 12,
  background = 'var(--dark-new, #080808)',
  borderColor = colors.borderLinear.value,
}: BalanceTotalCardProps) {
  return (
    <GlassCard
      width={359}
      minHeight={148}
      padding="24px 28px"
      borderRadius={16}
      blur={blur}
      background={background}
      borderColor={borderColor}
      style={{
        display: 'flex',
        height: 148,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
          alignSelf: 'stretch',
        }}
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: '120%',
          }}
        >
          Saldo total:
        </span>

        <span
          style={{
            color: '#FFF',
            fontFamily: 'Inter, sans-serif',
            fontSize: 33,
            fontWeight: 700,
            lineHeight: '120%',
          }}
        >
          {isPrivate ? '******' : totalBalance}
        </span>

        <span
          style={{
            color: '#FFF',
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '120%',
          }}
        >
          {isPrivate ? '*****' : cryptoEquivalent}
        </span>
      </div>
    </GlassCard>
  );
}

export default BalanceTotalCard;
