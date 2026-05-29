import arrowDownIcon    from '../../assets/icons/phosphor/arrow-down.svg';
import arrowUpIcon      from '../../assets/icons/phosphor/arrow-up.svg';
import arrowsLRIcon     from '../../assets/icons/phosphor/arrows-left-right.svg';

export type TransactionType = 'compra' | 'venda' | 'conversao';

export interface TransactionHistoryCardProps {
  assetName: string;
  date: string;
  amount: string;
  amountBrl: string;
  type: TransactionType;
  isPrivate?: boolean;
}

const TYPE_CONFIG: Record<TransactionType, { bg: string; iconSrc: string; filter: string }> = {
  compra: {
    bg: '#000000',
    iconSrc: arrowDownIcon,
    filter: 'brightness(0) saturate(100%) invert(56%) sepia(74%) saturate(528%) hue-rotate(103deg) brightness(104%)',
  },
  venda: {
    bg: '#000000',
    iconSrc: arrowUpIcon,
    filter: 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(6000%) hue-rotate(358deg) brightness(85%)',
  },
  conversao: {
    bg: '#000000',
    iconSrc: arrowsLRIcon,
    filter: 'brightness(0) saturate(100%) invert(60%) sepia(93%) saturate(1058%) hue-rotate(2deg) brightness(103%)',
  },
};

export function TransactionHistoryCard({
  assetName,
  date,
  amount,
  amountBrl,
  type,
  isPrivate = false,
}: TransactionHistoryCardProps) {
  const { bg, iconSrc, filter } = TYPE_CONFIG[type];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: 358,
      padding: '12px 8px',
      gap: 8,
      borderRadius: 8,
      background: 'var(--dark-new, #080808)',
      boxSizing: 'border-box',
    }}>

      {/* Ícone do tipo de transação */}
      <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
        <div style={{
          width: 40, height: 40,
          borderRadius: '50%',
          background: bg,
        }} />
        <img
          src={iconSrc}
          width={18}
          height={18}
          alt={type}
          style={{
            position: 'absolute',
            top: 11, left: 11,
            display: 'block',
            filter,
          }}
        />
      </div>

      {/* Texto + valor */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        gap: 8,
        minWidth: 0,
      }}>
        {/* Nome + data */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: '120%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {assetName}
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            color: '#D1D2D2',
            lineHeight: '120%',
          }}>
            {date}
          </span>
        </div>

        {/* Valores */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'flex-end',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: '120%',
            textAlign: 'right',
          }}>
            {isPrivate ? '******' : amount}
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: '120%',
            textAlign: 'right',
          }}>
            {isPrivate ? '*****' : amountBrl}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistoryCard;
