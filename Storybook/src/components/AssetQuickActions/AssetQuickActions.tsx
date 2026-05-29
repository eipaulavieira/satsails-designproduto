import { colors } from '../../tokens/colors';

import arrowDownIcon from '../../assets/icons/phosphor/arrow-down.svg';
import arrowUpIcon   from '../../assets/icons/phosphor/arrow-up.svg';
import convertIcon   from '../../assets/icons/phosphor/arrows-left-right.svg';
import venderIcon    from '../../assets/icons/phosphor/vender.svg';

export type AssetActionItem = 'receber' | 'enviar' | 'converter' | 'vender';

export interface AssetQuickActionsProps {
  assetName?: string;
}

const ACTIONS: { id: AssetActionItem; label: string; icon: string }[] = [
  { id: 'receber',   label: 'Receber',   icon: arrowDownIcon },
  { id: 'enviar',    label: 'Enviar',    icon: arrowUpIcon   },
  { id: 'converter', label: 'Converter', icon: convertIcon   },
  { id: 'vender',    label: 'Vender',    icon: venderIcon    },
];

export function AssetQuickActions({ assetName: _ }: AssetQuickActionsProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: '0 16px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {ACTIONS.map(({ id, label, icon }) => (
        <button
          key={id}
          style={{
            width: 61.813,
            height: 58.643,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            borderRadius: 15.849,
            border: `1px solid ${colors.borderLinear.value}`,
            background: 'var(--dark-new, #080808)',
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
          }}
        >
          <img
            src={icon}
            width={18}
            height={18}
            alt={label}
            style={{ display: 'block' }}
          />
          <span style={{
            color: '#727272',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 400,
            lineHeight: '120%',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default AssetQuickActions;
