import React from 'react';

// ── Base Card ──────────────────────────────────────────────────
export interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  border?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
}

const paddings = { sm: 16, md: 24, lg: 32 };

export function Card({ children, padding = 'md', border = true, shadow = false, style }: CardProps) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 12,
      padding: paddings[padding],
      border: border ? '1px solid #e8e8e8' : 'none',
      boxShadow: shadow ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
      fontFamily: '"Inter", -apple-system, sans-serif',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Metric Card ────────────────────────────────────────────────
export interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  changePositive?: boolean;
  icon?: React.ReactNode;
}

export function MetricCard({ label, value, change, changePositive = true, icon }: MetricCardProps) {
  return (
    <Card padding="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 6px', fontWeight: 500 }}>{label}</p>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#0C0B0D', margin: 0, letterSpacing: '-0.02em' }}>{value}</p>
          {change && (
            <p style={{ fontSize: 12, color: changePositive ? '#00C853' : '#CF1C0E', margin: '4px 0 0', fontWeight: 500 }}>
              {changePositive ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        {icon && (
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#FFF8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7931A' }}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

// ── List Card ──────────────────────────────────────────────────
export interface ListCardItem {
  label: string;
  value: string;
  sub?: string;
}

export interface ListCardProps {
  title?: string;
  items: ListCardItem[];
}

export function ListCard({ title, items }: ListCardProps) {
  return (
    <Card padding="md">
      {title && <p style={{ fontSize: 13, fontWeight: 600, color: '#0C0B0D', margin: '0 0 16px' }}>{title}</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < items.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
            <div>
              <p style={{ fontSize: 13, color: '#0C0B0D', margin: 0, fontWeight: 500 }}>{item.label}</p>
              {item.sub && <p style={{ fontSize: 11, color: '#9ca3af', margin: '2px 0 0' }}>{item.sub}</p>}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#0C0B0D' }}>{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
