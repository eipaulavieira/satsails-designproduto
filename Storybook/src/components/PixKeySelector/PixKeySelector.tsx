import { useState } from 'react';

export type PixKeyType = 'cpf' | 'cnpj' | 'email' | 'tel' | 'aleatorio';

export interface PixKeySelectorProps {
  value?: PixKeyType;
  onChange?: (key: PixKeyType) => void;
}

const CpfIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="6" r="3" stroke={color} strokeWidth="1.4" />
    <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CnpjIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="5" width="9" height="11" rx="1" stroke={color} strokeWidth="1.4" />
    <path d="M11 8h3a1 1 0 0 1 1 1v7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="4.5" y="8" width="2" height="2" stroke={color} strokeWidth="1.1" />
    <rect x="7.5" y="8" width="2" height="2" stroke={color} strokeWidth="1.1" />
    <rect x="4.5" y="11.5" width="2" height="2" stroke={color} strokeWidth="1.1" />
    <rect x="7.5" y="11.5" width="2" height="2" stroke={color} strokeWidth="1.1" />
    <line x1="13.5" y1="12" x2="13.5" y2="16" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const EmailIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="4" width="15" height="10" rx="2" stroke={color} strokeWidth="1.4" />
    <path d="M1.5 6.5L9 11l7.5-4.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const TelIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="5" y="1.5" width="8" height="15" rx="2" stroke={color} strokeWidth="1.4" />
    <circle cx="9" cy="13.5" r="0.8" fill={color} />
  </svg>
);

const AleatorioIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="6.5" cy="9" r="3.5" stroke={color} strokeWidth="1.4" />
    <path d="M9.5 9H16M13.5 7l2 2-2 2" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const KEYS: { id: PixKeyType; label: string; Icon: ({ color }: { color: string }) => JSX.Element }[] = [
  { id: 'cpf',      label: 'CPF',       Icon: CpfIcon },
  { id: 'cnpj',     label: 'CNPJ',      Icon: CnpjIcon },
  { id: 'email',    label: 'Email',     Icon: EmailIcon },
  { id: 'tel',      label: 'Tel',       Icon: TelIcon },
  { id: 'aleatorio',label: 'Aleatório', Icon: AleatorioIcon },
];

export function PixKeySelector({ value, onChange }: PixKeySelectorProps) {
  const [internal, setInternal] = useState<PixKeyType | undefined>(value);
  const selected = value !== undefined ? value : internal;

  const handleClick = (id: PixKeyType) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
    }}>
      {KEYS.map(({ id, label, Icon }) => {
        const isSelected = selected === id;
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 64,
              height: 60,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              borderRadius: 8,
              border: isSelected
                ? '0.8px solid #00C853'
                : '0.8px solid transparent',
              background: isSelected
                ? 'rgba(0, 200, 83, 0.25)'
                : '#080808',
              cursor: 'pointer',
              boxSizing: 'border-box',
              transition: 'background 0.15s ease, border-color 0.15s ease',
              flexShrink: 0,
            }}
          >
            <Icon color={isSelected ? '#00C853' : '#727272'} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 'normal',
              color: isSelected ? '#00C853' : '#727272',
              whiteSpace: 'nowrap',
              transition: 'color 0.15s ease',
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PixKeySelector;
