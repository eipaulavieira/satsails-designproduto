export const fontFamilies = {
  sans: { value: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', token: '--font-sans', label: 'Inter (Sans)' },
  mono: { value: '"JetBrains Mono", "Fira Code", monospace',                           token: '--font-mono', label: 'JetBrains Mono' },
} as const;

export const fontSizes = [
  { name: 'xs',   size: '11px', rem: '0.6875rem', lineHeight: '16px', token: '--text-xs',   flutter: { sp: 11, textTheme: 'labelSmall' },             sample: 'Labels e tags de suporte' },
  { name: 'sm',   size: '12px', rem: '0.75rem',   lineHeight: '18px', token: '--text-sm',   flutter: { sp: 12, textTheme: 'labelMedium · bodySmall' }, sample: 'Texto auxiliar e captions' },
  { name: 'base', size: '14px', rem: '0.875rem',  lineHeight: '22px', token: '--text-base', flutter: { sp: 14, textTheme: 'bodyMedium · labelLarge' }, sample: 'Corpo de texto padrão' },
  { name: 'md',   size: '16px', rem: '1rem',      lineHeight: '24px', token: '--text-md',   flutter: { sp: 16, textTheme: 'bodyLarge · titleMedium' }, sample: 'Texto de destaque e subtítulos' },
  { name: 'lg',   size: '18px', rem: '1.125rem',  lineHeight: '28px', token: '--text-lg',   flutter: { sp: 18, textTheme: null },                     sample: 'Títulos de seção' },
  { name: 'xl',   size: '20px', rem: '1.25rem',   lineHeight: '30px', token: '--text-xl',   flutter: { sp: 20, textTheme: null },                     sample: 'Títulos de página' },
  { name: '2xl',  size: '24px', rem: '1.5rem',    lineHeight: '32px', token: '--text-2xl',  flutter: { sp: 24, textTheme: 'headlineSmall' },          sample: 'Display e headings maiores' },
  { name: '3xl',  size: '30px', rem: '1.875rem',  lineHeight: '38px', token: '--text-3xl',  flutter: { sp: 30, textTheme: null },                     sample: 'Display principal' },
];

export const fontWeights = [
  { name: 'Regular',  value: 400, token: '--font-regular' },
  { name: 'Medium',   value: 500, token: '--font-medium' },
  { name: 'Semibold', value: 600, token: '--font-semibold' },
  { name: 'Bold',     value: 700, token: '--font-bold' },
] as const;

// Maps px → rem string (base 16px)
export function pxToRem(px: number): string {
  const val = px / 16;
  return `${parseFloat(val.toFixed(4))}rem`;
}

// Maps px → Flutter TextTheme name(s) for Material 3
export function flutterTextTheme(px: number): string | null {
  const map: Record<number, string> = {
    11: 'labelSmall',
    12: 'labelMedium · bodySmall',
    14: 'bodyMedium · labelLarge',
    16: 'bodyLarge · titleMedium',
    24: 'headlineSmall',
    28: 'headlineMedium',
    32: 'headlineLarge',
  };
  return map[px] ?? null;
}
