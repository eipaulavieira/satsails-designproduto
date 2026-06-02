import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ErrorToast } from './ErrorToast';

const meta: Meta<typeof ErrorToast> = {
  title: 'Componentes/Erros e Notificações/ErrorToast',
  component: ErrorToast,
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
Toast de erro com animação slide-down. Aparece de cima para baixo ao tentar enviar sem preencher o campo de destinatário.

**Dimensões:** 328 × 52 px (igual ao CTAButton)

**CSS:**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 16px;
align-items: center;
gap: 16px;
border-radius: 8px;
background: #EA2415;
animation: error-slide-down 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

@keyframes error-slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
\`\`\`

**Flutter:**
\`\`\`dart
AnimatedContainer(
  duration: const Duration(milliseconds: 350),
  curve: Curves.easeOut,
  // slideDown via SlideTransition + AnimationController
)
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    message: { control: 'text' },
    visible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorToast>;

export const EnderecoInvalido: Story = {
  name: 'Endereço inválido',
  args: {
    message: 'Endereço inválido',
    visible: true,
  },
};

export const SaldoInsuficiente: Story = {
  name: 'Saldo insuficiente',
  args: {
    message: 'Saldo insuficiente',
    visible: true,
  },
};

export const ErroGenerico: Story = {
  name: 'Erro genérico',
  args: {
    message: 'Algo deu errado. Tente novamente.',
    visible: true,
  },
};

export const AnimacaoInterativa: Story = {
  name: 'Animação interativa',
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [key, setKey] = useState(0);
    const [visible, setVisible] = useState(false);

    const trigger = () => {
      setVisible(false);
      setTimeout(() => {
        setKey(k => k + 1);
        setVisible(true);
      }, 50);
    };

    return (
      <div style={{
        height: '100vh',
        background: '#080808',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 48,
        gap: 32,
      }}>
        <div style={{ height: 52, display: 'flex', alignItems: 'flex-start' }}>
          {visible && <ErrorToast key={key} message="Endereço inválido" />}
        </div>

        <button
          onClick={trigger}
          style={{
            width: 328,
            height: 52,
            borderRadius: 8,
            background: '#FF9800',
            border: 'none',
            color: '#000',
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Simular erro de envio
        </button>
      </div>
    );
  },
};
