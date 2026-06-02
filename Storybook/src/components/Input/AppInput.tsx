import React from 'react';

const labelStyle: React.CSSProperties = {
  color: '#D1D2D2',
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
};

export interface AppInputProps {
  label?: string;
  labelRight?: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function AppInput({ label, labelRight, icon, rightIcon, type = 'text', placeholder, value, onChange, disabled }: AppInputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>

      {(label || labelRight) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {label    && <span style={labelStyle}>{label}</span>}
          {labelRight && <div style={{ display: 'flex', alignItems: 'center' }}>{labelRight}</div>}
        </div>
      )}

      <div style={{
        display: 'flex',
        height: 52,
        padding: '0 20px',
        alignItems: 'center',
        gap: 10,
        borderRadius: 8,
        border: 'none',
        background: '#080808',
        boxShadow: '0 4px 11px 0 rgba(0,0,0,0.25)',
        width: '100%',
        boxSizing: 'border-box',
        opacity: disabled ? 0.4 : 1,
      }}>
        {icon && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {icon}
          </div>
        )}
        <input
          className="app-input-field"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 400,
            flex: 1,
            width: '100%',
            cursor: disabled ? 'not-allowed' : 'text',
          } as React.CSSProperties}
        />
        {rightIcon && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}
