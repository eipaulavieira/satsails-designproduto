import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NotificationPopup } from '../NotificationPopup';
import { CTAButton } from '../../CTAButton/CTAButton';

const meta: Meta = {
  title: 'Componentes/Popups/Notificações/Excluir Conta',
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
Popup de confirmação de exclusão de conta. Reutiliza **NotificationPopup** + **CTAButton**.

---

## CSS

\`\`\`css
/* Container do popup */
display: flex;
width: 363px;
height: 284px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 20px;
background: rgba(51, 51, 51, 0.34);
backdrop-filter: blur(12px);

/* Container interno (título + subtítulo + botões) */
display: flex;
width: 328px;
flex-direction: column;
align-items: center;
gap: 16px;

/* Título */
color: #FFFFFF;
font-family: Inter;
font-size: 23px;
font-weight: 700;
line-height: 120%;
text-align: center;

/* Subtítulo */
color: #D1D2D2;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 120%;
text-align: center;
\`\`\`

---

## Flutter

\`\`\`dart
showDialog(
  context: context,
  builder: (context) => Dialog(
    backgroundColor: Colors.transparent,
    child: ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
        child: Container(
          width: 363,
          height: 284,
          decoration: BoxDecoration(
            color: const Color(0x57333333), // rgba(51,51,51,0.34)
            borderRadius: BorderRadius.circular(20),
          ),
          child: Center(
            child: SizedBox(
              width: 328,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    'Excluir carteira?',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Inter',
                      fontSize: 23,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      color: Color(0xFFD1D2D2),
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Botão Cancelar
                  SizedBox(
                    width: 328,
                    height: 52,
                    child: ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF070506), // --Color-Gray-900
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                        elevation: 4,
                        shadowColor: Colors.black.withOpacity(0.25),
                      ),
                      child: const Text(
                        'Cancelar',
                        style: TextStyle(
                          fontFamily: 'Inter',
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  // Botão Deletar conta
                  SizedBox(
                    width: 328,
                    height: 52,
                    child: ElevatedButton(
                      onPressed: () => _deletarConta(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFFEA2415),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      child: const Text(
                        'Deletar conta',
                        style: TextStyle(
                          fontFamily: 'Inter',
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    ),
  ),
);
\`\`\`

> **Dependência Flutter:** adicione \`import 'dart:ui';\` para usar \`ImageFilter.blur\`.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ExcluirConta: Story = {
  name: 'Excluir conta',
  render: () => (
    <NotificationPopup
      title="Excluir carteira?"
      subtitle="Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup"
    >
      <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />
      <CTAButton label="Deletar conta" variant="danger" buttonState="idle" />
    </NotificationPopup>
  ),
};

export const ExcluirContaActive: Story = {
  name: 'Excluir conta (deletar active)',
  render: () => (
    <NotificationPopup
      title="Excluir carteira?"
      subtitle="Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup"
    >
      <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />
      <CTAButton label="Deletar conta" variant="danger" buttonState="active" />
    </NotificationPopup>
  ),
};
