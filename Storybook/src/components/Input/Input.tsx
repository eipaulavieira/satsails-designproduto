import React from 'react';

// ── Text Input ─────────────────────────────────────────────────
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export function Input({ label, hint, error, leftAddon, rightAddon, id, disabled, style, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: '"Inter", -apple-system, sans-serif' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 13, fontWeight: 500, color: '#0C0B0D' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {leftAddon && (
          <div style={{ position: 'absolute', left: 12, color: '#9ca3af', display: 'flex', alignItems: 'center' }}>
            {leftAddon}
          </div>
        )}
        <input
          id={inputId}
          disabled={disabled}
          {...props}
          style={{
            width: '100%',
            height: 40,
            padding: `0 ${rightAddon ? 40 : 12}px 0 ${leftAddon ? 40 : 12}px`,
            fontSize: 14,
            color: '#0C0B0D',
            background: disabled ? '#f9f9f9' : '#ffffff',
            border: `1px solid ${hasError ? '#CF1C0E' : '#D1D2D2'}`,
            borderRadius: 8,
            outline: 'none',
            cursor: disabled ? 'not-allowed' : 'text',
            opacity: disabled ? 0.6 : 1,
            fontFamily: '"Inter", -apple-system, sans-serif',
            transition: 'border-color 0.15s, box-shadow 0.15s',
            ...style,
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = hasError ? '#CF1C0E' : '#F7931A';
            e.currentTarget.style.boxShadow = hasError ? '0 0 0 3px rgba(207,28,14,0.10)' : '0 0 0 3px rgba(247,147,26,0.12)';
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = hasError ? '#CF1C0E' : '#D1D2D2';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
        {rightAddon && (
          <div style={{ position: 'absolute', right: 12, color: '#9ca3af', display: 'flex', alignItems: 'center' }}>
            {rightAddon}
          </div>
        )}
      </div>
      {error && <p style={{ fontSize: 12, color: '#CF1C0E', margin: 0 }}>{error}</p>}
      {hint && !error && <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>{hint}</p>}
    </div>
  );
}

// ── Textarea ───────────────────────────────────────────────────
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, id, disabled, ...props }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: '"Inter", -apple-system, sans-serif' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 13, fontWeight: 500, color: '#0C0B0D' }}>{label}</label>
      )}
      <textarea
        id={inputId}
        disabled={disabled}
        {...props}
        style={{
          width: '100%',
          padding: '10px 12px',
          fontSize: 14,
          color: '#0C0B0D',
          background: disabled ? '#f9f9f9' : '#ffffff',
          border: `1px solid ${hasError ? '#CF1C0E' : '#D1D2D2'}`,
          borderRadius: 8,
          outline: 'none',
          resize: 'vertical',
          minHeight: 80,
          fontFamily: '"Inter", -apple-system, sans-serif',
          lineHeight: 1.5,
          transition: 'border-color 0.15s, box-shadow 0.15s',
        }}
      />
      {error && <p style={{ fontSize: 12, color: '#CF1C0E', margin: 0 }}>{error}</p>}
      {hint && !error && <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>{hint}</p>}
    </div>
  );
}

// ── Select ─────────────────────────────────────────────────────
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, hint, error, options, id, disabled, ...props }: SelectProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: '"Inter", -apple-system, sans-serif' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 13, fontWeight: 500, color: '#0C0B0D' }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={inputId}
          disabled={disabled}
          {...props}
          style={{
            width: '100%',
            height: 40,
            padding: '0 36px 0 12px',
            fontSize: 14,
            color: '#0C0B0D',
            background: disabled ? '#f9f9f9' : '#ffffff',
            border: `1px solid ${hasError ? '#CF1C0E' : '#D1D2D2'}`,
            borderRadius: 8,
            outline: 'none',
            appearance: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: '"Inter", -apple-system, sans-serif',
          }}
        >
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <svg style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {error && <p style={{ fontSize: 12, color: '#CF1C0E', margin: 0 }}>{error}</p>}
      {hint && !error && <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>{hint}</p>}
    </div>
  );
}
