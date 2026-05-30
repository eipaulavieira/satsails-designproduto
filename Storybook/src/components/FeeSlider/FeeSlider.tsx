import { useState } from 'react';

export interface FeeOption {
  time: string;
  rate: string;
}

export interface FeeSliderProps {
  fees?: FeeOption[];
  defaultIndex?: number;
  onChange?: (fee: FeeOption, index: number) => void;
}

export const DEFAULT_FEES: FeeOption[] = [
  { time: '~24H',   rate: '1.0 sat/vb'  },
  { time: '~6H',    rate: '2.5 sat/vb'  },
  { time: '~1H',    rate: '5.0 sat/vb'  },
  { time: '~10min', rate: '10.0 sat/vb' },
];

const TRACK_W = 358;
const THUMB_R = 9;

export function FeeSlider({ fees = DEFAULT_FEES, defaultIndex = 1, onChange }: FeeSliderProps) {
  const [index, setIndex] = useState(defaultIndex);

  const pct   = fees.length > 1 ? index / (fees.length - 1) : 0;
  const fillW = pct * TRACK_W;
  const current = fees[index];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const i = Number(e.target.value);
    setIndex(i);
    onChange?.(fees[i], i);
  };

  const labelStyle: React.CSSProperties = {
    color: '#D1D2D2',
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: '120%',
  };

  return (
    <div style={{
      display: 'flex',
      width: 359,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
    }}>
      {/* ── Track ── */}
      <div style={{ position: 'relative', width: TRACK_W, height: 20, display: 'flex', alignItems: 'center' }}>

        {/* Trilho cinza (6px) */}
        <div style={{
          position: 'absolute',
          left: 0, top: '50%',
          transform: 'translateY(-50%)',
          width: TRACK_W,
          height: 6,
          borderRadius: 3,
          background: '#333',
        }} />

        {/* Preenchimento laranja (12px, centrado verticalmente no trilho) */}
        {fillW > 0 && (
          <div style={{
            position: 'absolute',
            left: 0, top: '50%',
            transform: 'translateY(-50%)',
            width: fillW,
            height: 6,
            borderRadius: 3,
            background: '#FF9800',
            pointerEvents: 'none',
          }} />
        )}

        {/* Marcadores de snap */}
        {fees.map((_, i) => {
          const x = i / (fees.length - 1) * TRACK_W;
          return (
            <div key={i} style={{
              position: 'absolute',
              left: x - 3,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: i <= index ? '#FF9800' : '#555',
              pointerEvents: 'none',
            }} />
          );
        })}

        {/* Thumb */}
        <div style={{
          position: 'absolute',
          left: fillW - THUMB_R,
          top: '50%',
          transform: 'translateY(-50%)',
          width: THUMB_R * 2,
          height: THUMB_R * 2,
          borderRadius: '50%',
          background: '#FF9800',
          boxShadow: '0 0 0 3px rgba(255,152,0,0.22)',
          pointerEvents: 'none',
        }} />

        {/* Range input invisível para interação */}
        <input
          type="range"
          min={0}
          max={fees.length - 1}
          step={1}
          value={index}
          onChange={handleChange}
          style={{
            position: 'absolute',
            left: 0, top: 0,
            width: '100%', height: '100%',
            opacity: 0,
            cursor: 'pointer',
            margin: 0, padding: 0,
          }}
        />
      </div>

      {/* ── Labels ── */}
      <div style={{
        display: 'flex',
        width: TRACK_W,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={labelStyle}>Lento</span>
        <span style={{ ...labelStyle, color: '#FFF', textAlign: 'center' }}>
          <span style={{ color: '#FF9800' }}>{current.time}</span>: {current.rate}
        </span>
        <span style={labelStyle}>Rápido</span>
      </div>
    </div>
  );
}
