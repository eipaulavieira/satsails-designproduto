import type { Meta, StoryObj } from '@storybook/react';
import { LoginCarousel } from './LoginCarousel';

const SLIDES = [
  {
    backgroundImage: '../../assets/imagens/background-satsails.png',
    title: 'Seja soberano com a Satsails',
    subtitle: 'Gerencie Bitcoin e stablecoins sem depender de ninguém.',
  },
  {
    backgroundImage: '../../assets/imagens/background-satsails.png',
    title: 'Do PIX direto para o Bitcoin',
    subtitle: 'Compre DePix e converta para Bitcoin sem intermediário.',
  },
  {
    backgroundImage: '../../assets/imagens/background-satsails.png',
    title: 'Rápido, barato e sem custódia',
    subtitle: 'Transações via Lightning e Liquid com total privacidade.',
  },
];

const meta: Meta<typeof LoginCarousel> = {
  title: 'Componentes/Login/LoginCarousel',
  component: LoginCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'darker',
      values: [
        { name: 'app',    value: '#080808' },
        { name: 'darker', value: '#000000' },
      ],
    },
    docs: {
      description: {
        component: `
Carrossel de login com 3 slides. Avança automaticamente a cada intervalo e exibe dots de navegação.

**Comportamento:**
- Auto-play a cada \`interval\` ms (padrão: 4500ms)
- Fade entre slides (350ms)
- Dot ativo: laranja \`#FF9800\` com largura 24px
- Dots inativos: branco 30% opacidade com largura 6px
- Clique nos dots para navegar diretamente

**Props por slide:**
\`\`\`ts
interface LoginSlide {
  backgroundImage: string; // URL da imagem de fundo
  title: string;           // Título principal (48px)
  subtitle: string;        // Subtítulo (24px)
}
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', background: '#000' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    interval: {
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
      description: 'Intervalo de auto-play em ms',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginCarousel>;

export const AutoPlay: Story = {
  name: 'Auto-play (3 slides)',
  args: {
    slides: SLIDES,
    interval: 4500,
    notificationImage: '../../assets/imagens/transação-bitcoin.svg',
  },
};

export const SemNotificacao: Story = {
  name: 'Sem notificação',
  args: {
    slides: SLIDES,
    interval: 4500,
  },
};

export const IntervaloCurto: Story = {
  name: 'Intervalo rápido (2s)',
  args: {
    slides: SLIDES,
    interval: 2000,
    notificationImage: '../../assets/imagens/transação-bitcoin.svg',
  },
};
