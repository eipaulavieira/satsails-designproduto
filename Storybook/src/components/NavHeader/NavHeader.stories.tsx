import type { Meta, StoryObj } from '@storybook/react';
import { NavHeader } from './NavHeader';

const meta: Meta<typeof NavHeader> = {
  title: 'Componentes/Navegação/NavHeader',
  component: NavHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',    value: '#080808' },
        { name: 'darker', value: '#000000' },
      ],
    },
    docs: {
      description: {
        component: `
Cabeçalho de navegação usado em todas as telas internas do app.
Exibe um chevron stroke esquerdo e o título da tela.

**Dimensões:** altura 50px, padding 0 16px, gap 6px entre chevron e título.

**CSS:**
\`\`\`css
display: flex;
align-items: center;
gap: 6px;
height: 50px;
padding: 0 16px;
background: none;
border: none;

/* Chevron */
width: 10px; height: 18px;
stroke: white; stroke-width: 1.8;
stroke-linecap: round; stroke-linejoin: round;

/* Título */
color: #FAFDFE;
font-family: Inter;
font-size: 18px;
font-weight: 700;
line-height: normal;
\`\`\`

**Flutter:**
\`\`\`dart
AppBar(
  backgroundColor: const Color(0xFF080808),
  elevation: 0,
  leading: IconButton(
    icon: const Icon(Icons.chevron_left, color: Colors.white, size: 24),
    onPressed: () => Navigator.pop(context),
  ),
  title: const Text(
    'Título da tela',
    style: TextStyle(
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: FontWeight.w700,
      color: Color(0xFFFAFDFE),
    ),
  ),
  titleSpacing: 0,
)
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Título da tela' },
  },
};

export default meta;
type Story = StoryObj<typeof NavHeader>;

export const Padrao: Story = {
  name: 'Padrão',
  args: { title: 'Enviar' },
};

export const Enviar: Story = {
  name: 'Enviar',
  args: { title: 'Enviar' },
};

export const LightningBitcoin: Story = {
  name: 'Lightning Bitcoin',
  args: { title: 'Lightning Bitcoin' },
};

export const LiquidBitcoin: Story = {
  name: 'Liquid Bitcoin',
  args: { title: 'Liquid Bitcoin' },
};

export const Depix: Story = {
  name: 'Depix',
  args: { title: 'Depix' },
};

export const USDT: Story = {
  name: 'USDT',
  args: { title: 'USDT' },
};

export const TodasAsTelas: Story = {
  name: 'Todas as telas de envio',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#080808' }}>
      <NavHeader title="Enviar" />
      <NavHeader title="Lightning Bitcoin" />
      <NavHeader title="Liquid Bitcoin" />
      <NavHeader title="Depix" />
      <NavHeader title="USDT" />
    </div>
  ),
};
