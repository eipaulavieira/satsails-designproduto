import React from 'react';

export interface GlassCardProps {
  /** Conteúdo interno do card */
  children?: React.ReactNode;
  /** Intensidade do blur em px */
  blur?: number;
  /** Cor de fundo (rgba) */
  background?: string;
  /** Cor da borda */
  borderColor?: string;
  /** Raio da borda em px */
  borderRadius?: number;
  /** Padding interno */
  padding?: string;
  /** Largura */
  width?: string | number;
  /** Altura mínima */
  minHeight?: string | number;
  /** Classe extra */
  className?: string;
}

export function GlassCard({
  children,
  blur = 12,
  background = 'rgba(51, 51, 51, 0.34)',
  borderColor = 'rgba(255, 255, 255, 0.08)',
  borderRadius = 16,
  padding = '20px 24px',
  width = '100%',
  minHeight,
  className,
}: GlassCardProps) {
  return (
    <div
      className={className}
      style={{
        background,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: `1px solid ${borderColor}`,
        borderRadius,
        padding,
        width,
        minHeight,
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

export default GlassCard;
