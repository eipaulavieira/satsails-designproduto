export type ColorEntry = {
  value: string;
  token: string;
  flutter: string;
  label: string;
  use: string;
};

export type ColorGroup = {
  title: string;
  colors: Record<string, ColorEntry>;
};

export const colorGroups: Record<string, ColorGroup> = {

  // ── 1. Primary — Bitcoin Orange ──────────────────────────────────
  primary: {
    title: 'Primary — Bitcoin',
    colors: {
      primaryDark: {
        value: '#CD7C04', token: '--color-primary-dark',
        flutter: 'Color(0xFFCD7C04)',
        label: 'Primary Dark', use: 'Variante escura do laranja Bitcoin',
      },
      primary: {
        value: '#F7931A', token: '--color-primary',
        flutter: 'Color(0xFFF7931A)',
        label: 'Primary', use: 'Cor de marca — Bitcoin',
      },
      primaryMedium: {
        value: '#FF9800', token: '--color-primary-medium',
        flutter: 'Color(0xFFFF9800)',
        label: 'Primary Medium', use: 'Destaques, CTAs e hover states',
      },
      primaryLight: {
        value: '#FFB74D', token: '--color-primary-light',
        flutter: 'Color(0xFFFFB74D)',
        label: 'Primary Light', use: 'Variante clara e estados pressionados',
      },
      primaryTint: {
        value: 'rgba(255, 152, 0, 0.18)', token: '--color-primary-tint',
        flutter: 'Color(0x2EFF9800)',
        label: 'Primary Tint 18%', use: 'Fundo de ícones e superfícies laranja (18% opacidade)',
      },
    },
  },

  // ── 2. Secondary — Green ─────────────────────────────────────────
  secondary: {
    title: 'Secondary — Green',
    colors: {
      secondaryDark: {
        value: '#026A2D', token: '--color-secondary-dark',
        flutter: 'Color(0xFF026A2D)',
        label: 'Secondary Dark', use: 'Verde escuro — fundos de sucesso',
      },
      secondary: {
        value: '#00C853', token: '--color-secondary',
        flutter: 'Color(0xFF00C853)',
        label: 'Secondary', use: 'Sucesso, confirmações e saldos positivos',
      },
      secondaryMedium: {
        value: '#11B761', token: '--color-secondary-medium',
        flutter: 'Color(0xFF11B761)',
        label: 'Secondary Medium', use: 'Verde intermediário',
      },
      secondaryLight: {
        value: '#21A76B', token: '--color-secondary-light',
        flutter: 'Color(0xFF21A76B)',
        label: 'Secondary Light', use: 'Verde claro e hover de sucesso',
      },
      secondaryTint: {
        value: 'rgba(0, 200, 83, 0.18)', token: '--color-secondary-tint',
        flutter: 'Color(0x2E00C853)',
        label: 'Secondary Tint 18%', use: 'Fundo de ícones e superfícies verdes (18% opacidade)',
      },
    },
  },

  // ── 3. Feedback ──────────────────────────────────────────────────
  feedback: {
    title: 'Feedback',
    colors: {
      danger: {
        value: '#CF1C0E', token: '--color-danger',
        flutter: 'Color(0xFFCF1C0E)',
        label: 'Error', use: 'Erros e alertas críticos',
      },
      warning: {
        value: '#F59E0B', token: '--color-warning',
        flutter: 'Color(0xFFF59E0B)',
        label: 'Alert', use: 'Avisos e estados de atenção',
      },
    },
  },

  // ── 4. Neutral — Gray Scale (100% opacidade) ─────────────────────
  neutral: {
    title: 'Neutral — Gray Scale',
    colors: {
      pureBlack: {
        value: '#000000', token: '--color-pure-black',
        flutter: 'Color(0xFF000000)',
        label: 'Pure Black', use: 'Preto absoluto',
      },
      darkDeep: {
        value: '#070506', token: '--color-dark-deep',
        flutter: 'Color(0xFF070506)',
        label: 'Dark Deep', use: 'Fundo mais profundo do app',
      },
      dark: {
        value: '#080808', token: '--color-dark',
        flutter: 'Color(0xFF080808)',
        label: 'Dark', use: 'Fundo principal do app (splash, screens)',
      },
      black: {
        value: '#0C0B0D', token: '--color-black',
        flutter: 'Color(0xFF0C0B0D)',
        label: 'Black', use: 'Fundo de cards e modais',
      },
      darkMid: {
        value: '#191818', token: '--color-dark-mid',
        flutter: 'Color(0xFF191818)',
        label: 'Dark Mid', use: 'Fundos intermediários escuros',
      },
      neutralDark: {
        value: '#333333', token: '--color-neutral-dark',
        flutter: 'Color(0xFF333333)',
        label: 'Neutral Dark', use: 'Bordas, separadores e destaque de texto',
      },
      neutral: {
        value: '#4C4C4E', token: '--color-neutral',
        flutter: 'Color(0xFF4C4C4E)',
        label: 'Neutral', use: 'Ícones desabilitados e elementos secundários',
      },
      subtitle: {
        value: '#727272', token: '--color-subtitle',
        flutter: 'Color(0xFF727272)',
        label: 'Subtitle', use: 'Textos secundários e subtítulos',
      },
      grayMid: {
        value: '#8D8D8E', token: '--color-gray-mid',
        flutter: 'Color(0xFF8D8D8E)',
        label: 'Gray Mid', use: 'Placeholders e textos desabilitados',
      },
      gray: {
        value: '#D1D2D2', token: '--color-gray',
        flutter: 'Color(0xFFD1D2D2)',
        label: 'Gray', use: 'Bordas e divisores',
      },
      grayLight: {
        value: '#F3F4F6', token: '--color-gray-light',
        flutter: 'Color(0xFFF3F4F6)',
        label: 'Gray Light', use: 'Fundos de cards e inputs (light mode)',
      },
      white: {
        value: '#FFFFFF', token: '--color-white',
        flutter: 'Color(0xFFFFFFFF)',
        label: 'White', use: 'Fundo claro e texto sobre escuro',
      },
    },
  },

  // ── 5. Neutral — Alpha (opacidade < 100%) ────────────────────────
  neutralAlpha: {
    title: 'Neutral — Alpha',
    colors: {
      darkTint: {
        value: 'rgba(8, 8, 8, 0.54)', token: '--color-dark-tint',
        flutter: 'Color(0x8A080808)',
        label: 'Dark Tint 54%', use: 'Overlay escuro semi-transparente (54% opacidade)',
      },
      neutralDarkTint: {
        value: 'rgba(51, 51, 51, 0.34)', token: '--color-neutral-dark-tint',
        flutter: 'Color(0x57333333)',
        label: 'Neutral Dark Tint 34%', use: 'Bordas e superfícies sutis semi-transparentes (34% opacidade)',
      },
      borderLinear: {
        value: 'rgba(255, 255, 255, 0.06)', token: '--color-border-linear',
        flutter: 'Color(0x0FFFFFFF)',
        label: 'Border Linear 6%', use: 'Borda padrão de cards e botões — var(--linear)',
      },
    },
  },
};

// Flat export — retrocompatibilidade
export const colors = Object.fromEntries(
  Object.values(colorGroups).flatMap(g => Object.entries(g.colors))
) as Record<string, ColorEntry>;

export type ColorToken = keyof typeof colors;
