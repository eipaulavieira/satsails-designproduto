import React, { useState } from 'react';

import arrowDownIcon    from '../../assets/icons/phosphor/arrow-down.svg';
import arrowUpIcon      from '../../assets/icons/phosphor/arrow-up.svg';
import convertIcon      from '../../assets/icons/phosphor/arrows-left-right.svg';
import withdrawIcon     from '../../assets/icons/phosphor/arrow-line-down.svg';
import depositIcon      from '../../assets/icons/phosphor/currency-dollar.svg';

export type ActionItem = 'receber' | 'enviar' | 'converter' | 'sacar' | 'depositar';

export interface QuickActionsProps {
  defaultActive?: ActionItem;
  onChange?: (item: ActionItem) => void;
}

const ACTIONS: { id: ActionItem; label: string; icon: string }[] = [
  { id: 'receber',   label: 'Receber',   icon: arrowDownIcon  },
  { id: 'enviar',    label: 'Enviar',    icon: arrowUpIcon    },
  { id: 'converter', label: 'Converter', icon: convertIcon    },
  { id: 'sacar',     label: 'Sacar',     icon: withdrawIcon   },
  { id: 'depositar', label: 'Depositar', icon: depositIcon    },
];

export function QuickActions({ defaultActive, onChange }: QuickActionsProps) {
  const [active, setActive] = useState<ActionItem | undefined>(defaultActive);

  const handleSelect = (id: ActionItem) => {
    setActive(id);
    onChange?.(id);
  };

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
      {ACTIONS.map(({ id, label, icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            style={{
              width: 61.813,
              height: 58.643,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              borderRadius: 15.849,
              border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.32)',
              background: isActive ? '#00C853' : '#080808',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.15s ease, border 0.15s ease',
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
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '120%',
              whiteSpace: 'nowrap',
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default QuickActions;
