import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Satsails Design System',
  brandUrl: '/',
  brandTarget: '_self',

  // Layout
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e8e8e8',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',

  // Text
  textColor: '#0C0B0D',
  textMutedColor: '#6b7280',
  textInverseColor: '#ffffff',

  // Toolbar
  barTextColor: '#6b7280',
  barHoverColor: '#0C0B0D',
  barSelectedColor: '#F7931A',
  barBg: '#ffffff',

  // Colors
  colorPrimary: '#F7931A',
  colorSecondary: '#F7931A',

  // Inputs
  inputBg: '#ffffff',
  inputBorder: '#D1D2D2',
  inputTextColor: '#0C0B0D',
  inputBorderRadius: 4,

  // Buttons
  buttonBg: '#f9f9f9',
  buttonBorder: '#e8e8e8',
});
