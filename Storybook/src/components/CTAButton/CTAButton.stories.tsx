import type { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from './CTAButton';

const meta: Meta<typeof CTAButton> = {
  title: 'Componentes/Ações/CTAs',
  component: CTAButton,
  parameters: {
    layout: 'centered',
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
Botões de Call to Action (CTA) do app Satsails.

**Especificação base (CSS):**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 20px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 8px;
background: var(--Color-Primary-Dark, #CD7C04);
box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 15px;
font-weight: 700;
color: #000;
\`\`\`

**Flutter (ElevatedButton base):**
\`\`\`dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    padding: const EdgeInsets.symmetric(horizontal: 20),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
    ),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text(
    'Label',
    style: TextStyle(
      fontFamily: 'Inter',
      fontSize: 15,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.2,
    ),
  ),
)
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant:  { control: 'select', options: ['primary', 'secondary', 'success', 'ghost'] },
    label:    { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '32px 16px', background: '#080808', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

// ── Login ────────────────────────────────────────────────────────

export const CriarCarteira: Story = {
  name: 'Login — Criar carteira',
  args: { label: 'Criar carteira', variant: 'primary' },
  parameters: {
    docs: {
      description: {
        story: `
**Tela:** Login · **Ação:** inicia o fluxo de criação de PIN

\`\`\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/criar-pin'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Criar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `,
      },
    },
  },
};

export const RecuperarCarteira: Story = {
  name: 'Login — Recuperar carteira',
  args: { label: 'Recuperar carteira', variant: 'secondary' },
  parameters: {
    docs: {
      description: {
        story: `
**Tela:** Login · **Ação:** recuperação de carteira existente

\`\`\`css
background: #080808;
color: #fff;
border: 1px solid #333333;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF080808),
    foregroundColor: Colors.white,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
      side: const BorderSide(color: Color(0xFF333333)),
    ),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Recuperar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `,
      },
    },
  },
};

// ── E-mail ───────────────────────────────────────────────────────

export const Continuar: Story = {
  name: 'E-mail — Continuar',
  args: { label: 'Continuar', variant: 'primary' },
  parameters: {
    docs: {
      description: {
        story: `
**Tela:** Inserir e-mail · **Ação:** avança para verificação de código

\`\`\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/verify-code'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
  ),
  child: const Text('Continuar',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `,
      },
    },
  },
};

// ── Afiliado ─────────────────────────────────────────────────────

export const CadastrarAgora: Story = {
  name: 'Afiliado — Cadastrar agora',
  args: { label: 'Cadastrar agora', variant: 'success' },
  parameters: {
    docs: {
      description: {
        story: `
**Tela:** Afiliado · **Ação:** salva código e vai para Home

\`\`\`css
background: #00C853; /* --Color-Secondary */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF00C853),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Cadastrar agora',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `,
      },
    },
  },
};

export const CadastrarDepois: Story = {
  name: 'Afiliado — Cadastrar depois',
  args: { label: 'Cadastrar depois', variant: 'ghost' },
  parameters: {
    docs: {
      description: {
        story: `
**Tela:** Afiliado · **Ação:** pula o código e vai para Home

\`\`\`css
background: none;
color: #727272; /* --Color-Subtitle */
font-size: 14px;
font-weight: 400;
\`\`\`

**Flutter:**
\`\`\`dart
TextButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: TextButton.styleFrom(
    foregroundColor: const Color(0xFF727272),
    minimumSize: const Size(328, 44),
  ),
  child: const Text('Cadastrar depois',
    style: TextStyle(fontFamily: 'Inter', fontSize: 14, fontWeight: FontWeight.w400)),
)
\`\`\`
        `,
      },
    },
  },
};

// ── Visão geral ──────────────────────────────────────────────────

export const TodosCTAs: Story = {
  name: 'Todos os CTAs',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '32px 16px', background: '#080808', borderRadius: 12 }}>
      <CTAButton label="Criar carteira"      variant="primary"   />
      <CTAButton label="Recuperar carteira"  variant="secondary" />
      <CTAButton label="Continuar"           variant="primary"   />
      <CTAButton label="Cadastrar agora"     variant="success"   />
      <CTAButton label="Cadastrar depois"    variant="ghost"     />
    </div>
  ),
};
