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
Exibe um chevron esquerdo e o título da tela.

**CSS:**
\`\`\`css
display: flex;
align-items: center;
padding: 8px 16px;
gap: 8px;

/* Título */
color: #FAFDFE; /* --Light */
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
    title:  { control: 'text', description: 'Título da tela' },
  },
};

export default meta;
type Story = StoryObj<typeof NavHeader>;

export const Padrao: Story = {
  name: 'Padrão',
  args: { title: 'Receber na rede Bitcoin' },
};

export const Exemplos: Story = {
  name: 'Exemplos de telas',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#080808' }}>
      <NavHeader title="Receber na rede Bitcoin" />
      <NavHeader title="Enviar Bitcoin" />
      <NavHeader title="Converter" />
      <NavHeader title="Histórico" />
      <NavHeader title="Configurações" />
      <NavHeader title="Scanear" />
    </div>
  ),
};
