export const fontFamilies = {
  sans: { value: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', token: '--font-sans', label: 'Inter (Sans)' },
  mono: { value: '"JetBrains Mono", "Fira Code", monospace',                           token: '--font-mono', label: 'JetBrains Mono' },
} as const;

export const fontSizes = [
  { name: 'xs',   size: '11px', lineHeight: '16px', token: '--text-xs',   sample: 'Labels e tags de suporte' },
  { name: 'sm',   size: '12px', lineHeight: '18px', token: '--text-sm',   sample: 'Texto auxiliar e captions' },
  { name: 'base', size: '14px', lineHeight: '22px', token: '--text-base', sample: 'Corpo de texto padrão' },
  { name: 'md',   size: '16px', lineHeight: '24px', token: '--text-md',   sample: 'Texto de destaque e subtítulos' },
  { name: 'lg',   size: '18px', lineHeight: '28px', token: '--text-lg',   sample: 'Títulos de seção' },
  { name: 'xl',   size: '20px', lineHeight: '30px', token: '--text-xl',   sample: 'Títulos de página' },
  { name: '2xl',  size: '24px', lineHeight: '32px', token: '--text-2xl',  sample: 'Display e headings maiores' },
  { name: '3xl',  size: '30px', lineHeight: '38px', token: '--text-3xl',  sample: 'Display principal' },
] as const;

export const fontWeights = [
  { name: 'Regular',  value: 400, token: '--font-regular' },
  { name: 'Medium',   value: 500, token: '--font-medium' },
  { name: 'Semibold', value: 600, token: '--font-semibold' },
  { name: 'Bold',     value: 700, token: '--font-bold' },
] as const;
