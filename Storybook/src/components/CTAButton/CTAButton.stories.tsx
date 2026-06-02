import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CTAButton } from './CTAButton';

const meta: Meta<typeof CTAButton> = {
  title: 'Componentes/Ações/Botões/CTAs',
  component: CTAButton,
  tags: ['autodocs'],
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
Botões de Call to Action do fluxo do app. Cada variante tem dois estados:

| Estado | Quando usar |
|---|---|
| **idle** | Usuário pode avançar — cor Medium (mais brilhante) |
| **active** | Botão pressionado ou bloqueado — cor Dark (mais escura) |

**CSS base:**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 20px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 8px;
box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 15px;
font-weight: 700;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant:     { control: 'select', options: ['primary', 'secondary', 'success', 'ghost', 'danger'] },
    buttonState: { control: 'radio',  options: ['idle', 'active'] },
    label:       { control: 'text' },
    disabled:    { control: 'boolean' },
  },
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

// ── Helpers ──────────────────────────────────────────────────────

const label11: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  color: '#727272',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  marginBottom: 8,
};

function StateGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <span style={label11}>{title}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  );
}

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M11.5 2H9V1.5C9 1.10218 8.84196 0.720644 8.56066 0.43934C8.27936 0.158035 7.89782 0 7.5 0H4.5C4.10218 0 3.72064 0.158035 3.43934 0.43934C3.15804 0.720644 3 1.10218 3 1.5V2H0.5C0.367392 2 0.240215 2.05268 0.146447 2.14645C0.0526785 2.24021 0 2.36739 0 2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3H1V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V3H11.5C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5C12 2.36739 11.9473 2.24021 11.8536 2.14645C11.7598 2.05268 11.6326 2 11.5 2ZM4 1.5C4 1.36739 4.05268 1.24021 4.14645 1.14645C4.24021 1.05268 4.36739 1 4.5 1H7.5C7.63261 1 7.75979 1.05268 7.85355 1.14645C7.94732 1.24021 8 1.36739 8 1.5V2H4V1.5ZM10 12H2V3H10V12ZM5 5.5V9.5C5 9.63261 4.94732 9.75979 4.85355 9.85355C4.75979 9.94732 4.63261 10 4.5 10C4.36739 10 4.24021 9.94732 4.14645 9.85355C4.05268 9.75979 4 9.63261 4 9.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5ZM8 5.5V9.5C8 9.63261 7.94732 9.75979 7.85355 9.85355C7.75979 9.94732 7.63261 10 7.5 10C7.36739 10 7.24021 9.94732 7.14645 9.85355C7.05268 9.75979 7 9.63261 7 9.5V5.5C7 5.36739 7.05268 5.24021 7.14645 5.14645C7.24021 5.05268 7.36739 5 7.5 5C7.63261 5 7.75979 5.05268 7.85355 5.14645C7.94732 5.24021 8 5.36339 8 5.5Z" fill="white"/>
  </svg>
);

// ── Login ────────────────────────────────────────────────────────

export const LoginEscala: Story = {
  name: 'Login — escala de estados',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <StateGroup title="idle — pronto para clicar">
        <CTAButton label="Criar carteira" variant="primary" buttonState="idle" />
        <CTAButton label="Continuar"      variant="primary" buttonState="idle" />
      </StateGroup>
      <StateGroup title="active — selecionado / bloqueado">
        <CTAButton label="Criar carteira" variant="primary" buttonState="active" />
        <CTAButton label="Continuar"      variant="primary" buttonState="active" />
      </StateGroup>
    </div>
  ),
};

export const CriarCarteiraIdle: Story = {
  name: 'Criar carteira (idle)',
  args: { label: 'Criar carteira', variant: 'primary', buttonState: 'idle' },
};

export const CriarCarteiraActive: Story = {
  name: 'Criar carteira (active)',
  args: { label: 'Criar carteira', variant: 'primary', buttonState: 'active' },
};

export const ContinuarIdle: Story = {
  name: 'Continuar (idle)',
  args: { label: 'Continuar', variant: 'primary', buttonState: 'idle' },
};

export const ContinuarActive: Story = {
  name: 'Continuar (active)',
  args: { label: 'Continuar', variant: 'primary', buttonState: 'active' },
};

export const RecuperarCarteira: Story = {
  name: 'Recuperar carteira (branco)',
  args: { label: 'Recuperar carteira', variant: 'secondary' },
};

export const RecuperarCarteiraSubtitle: Story = {
  name: 'Recuperar carteira (cinza)',
  args: { label: 'Recuperar carteira', variant: 'secondary-subtitle' },
};

export const RecuperarCarteiraEscala: Story = {
  name: 'Recuperar carteira — escala',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <CTAButton label="Recuperar carteira" variant="secondary" />
      <CTAButton label="Recuperar carteira" variant="secondary-subtitle" />
    </div>
  ),
};

// ── Afiliado / Configuração ──────────────────────────────────────

export const AfiliadoEscala: Story = {
  name: 'Afiliado — escala de estados',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <StateGroup title="idle — pronto para clicar">
        <CTAButton label="Cadastrar agora" variant="success" buttonState="idle" />
      </StateGroup>
      <StateGroup title="active — selecionado / bloqueado">
        <CTAButton label="Cadastrar agora" variant="success" buttonState="active" />
      </StateGroup>
      <StateGroup title="ghost — pular etapa">
        <CTAButton label="Cadastrar depois" variant="ghost" />
      </StateGroup>
    </div>
  ),
};

export const CadastrarAgoraIdle: Story = {
  name: 'Cadastrar agora (idle)',
  args: { label: 'Cadastrar agora', variant: 'success', buttonState: 'idle' },
};

export const CadastrarAgoraActive: Story = {
  name: 'Cadastrar agora (active)',
  args: { label: 'Cadastrar agora', variant: 'success', buttonState: 'active' },
};

export const CadastrarDepois: Story = {
  name: 'Cadastrar depois',
  args: { label: 'Cadastrar depois', variant: 'ghost' },
};

// ── Deletar conta ────────────────────────────────────────────────

export const DeletarContaEscala: Story = {
  name: 'Deletar conta — escala de estados',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <StateGroup title="com ícone — idle (#EA2415)">
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" leftIcon={<IconTrash />} />
      </StateGroup>
      <StateGroup title="com ícone — active (#CF1C0E)">
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" leftIcon={<IconTrash />} />
      </StateGroup>
      <StateGroup title="sem ícone — idle (#EA2415)">
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" />
      </StateGroup>
      <StateGroup title="sem ícone — active (#CF1C0E)">
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" />
      </StateGroup>
    </div>
  ),
};

export const DeletarContaIconeIdle: Story = {
  name: 'Deletar conta — com ícone (idle)',
  args: { label: 'Deletar conta', variant: 'danger', buttonState: 'idle', leftIcon: <IconTrash /> },
};

export const DeletarContaIconeActive: Story = {
  name: 'Deletar conta — com ícone (active)',
  args: { label: 'Deletar conta', variant: 'danger', buttonState: 'active', leftIcon: <IconTrash /> },
};

export const DeletarContaIdle: Story = {
  name: 'Deletar conta — sem ícone (idle)',
  args: { label: 'Deletar conta', variant: 'danger', buttonState: 'idle' },
};

export const DeletarContaActive: Story = {
  name: 'Deletar conta — sem ícone (active)',
  args: { label: 'Deletar conta', variant: 'danger', buttonState: 'active' },
};

// ── Cancelar ─────────────────────────────────────────────────────

export const CancelarEscala: Story = {
  name: 'Cancelar — escala de estados',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <StateGroup title="idle (#070506)">
        <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />
      </StateGroup>
      <StateGroup title="active / clicável (#191818)">
        <CTAButton label="Cancelar" variant="cancel" buttonState="active" />
      </StateGroup>
    </div>
  ),
};

export const CancelarIdle: Story = {
  name: 'Cancelar (idle)',
  args: { label: 'Cancelar', variant: 'cancel', buttonState: 'idle' },
};

export const CancelarActive: Story = {
  name: 'Cancelar (active)',
  args: { label: 'Cancelar', variant: 'cancel', buttonState: 'active' },
};

// ── Visão geral ──────────────────────────────────────────────────

export const TodoosCTAs: Story = {
  name: 'Todos os CTAs',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <StateGroup title="Primary — Login / E-mail">
        <CTAButton label="Criar carteira (idle)"   variant="primary" buttonState="idle"   />
        <CTAButton label="Criar carteira (active)" variant="primary" buttonState="active" />
        <CTAButton label="Recuperar carteira"      variant="secondary" />
      </StateGroup>
      <StateGroup title="Success — Afiliado / Configuração">
        <CTAButton label="Cadastrar agora (idle)"   variant="success" buttonState="idle"   />
        <CTAButton label="Cadastrar agora (active)" variant="success" buttonState="active" />
        <CTAButton label="Cadastrar depois"         variant="ghost" />
      </StateGroup>
      <StateGroup title="Danger — com ícone">
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle"   leftIcon={<IconTrash />} />
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" leftIcon={<IconTrash />} />
      </StateGroup>
      <StateGroup title="Danger — sem ícone">
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle"   />
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" />
      </StateGroup>
      <StateGroup title="Cancel">
        <CTAButton label="Cancelar" variant="cancel" buttonState="idle"   />
        <CTAButton label="Cancelar" variant="cancel" buttonState="active" />
      </StateGroup>
    </div>
  ),
};
