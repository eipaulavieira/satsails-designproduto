import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SlideButton } from './SlideButton';

const meta: Meta<typeof SlideButton> = {
  title: 'Componentes/Ações/Slide Button',
  component: SlideButton,
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
Botão de deslize para confirmar transações. O usuário arrasta o thumb laranja da esquerda para a direita — ao atingir o fim, o botão confirma e fica verde com ✓.

**Clique no botão verde para resetar.**

---

**CSS:**
\`\`\`css
/* Container */
display: flex;
width: 356px;
height: 61px;
padding: 3px 2px 3px 0;
align-items: center;

/* Thumb (laranja) */
width: 55.552px;
height: 55px;
border-radius: 40px;
background: #FF9800; /* --Warning */

/* Thumb (confirmado) */
border-radius: 40px;
background: #00C853; /* --Success */

/* Label */
color: #727272; /* --subtitulo */
font-family: Inter;
font-size: 16px;
font-weight: 300;
\`\`\`

---

**Flutter:**
\`\`\`dart
// Pacote recomendado: slide_to_act (pub.dev)
SlideAction(
  height: 61,
  borderRadius: 40,
  elevation: 0,
  outerColor: Colors.transparent,
  innerColor: const Color(0xFFFF9800),
  sliderButtonIcon: const Icon(
    Icons.chevron_right,
    color: Colors.black,
    size: 24,
  ),
  submittedIcon: const Icon(
    Icons.check,
    color: Color(0xFF080808),
    size: 24,
  ),
  text: 'Deslize para enviar',
  textStyle: const TextStyle(
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: FontWeight.w300,
    color: Color(0xFF727272),
  ),
  onSubmit: () => _confirmarTransacao(),
)
\`\`\`

> **Alternativa manual Flutter:** use \`GestureDetector\` + \`AnimatedPositioned\` + \`AnimationController\` para controle total do comportamento.
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text',  description: 'Texto do botão' },
    color: { control: 'color', description: 'Cor do thumb e fill (#FF9800 padrão, #026A2D para vender)' },
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
type Story = StoryObj<typeof SlideButton>;

export const Enviar: Story = {
  name: 'Deslize para enviar',
  args: { label: 'Deslize para enviar' },
};

export const Trocar: Story = {
  name: 'Deslize para trocar',
  args: { label: 'Deslize para trocar' },
};

export const Receber: Story = {
  name: 'Deslize para receber',
  args: { label: 'Deslize para receber' },
};

export const Converter: Story = {
  name: 'Deslize para converter',
  args: { label: 'Deslize para converter' },
};

export const Vender: Story = {
  name: 'Deslize para vender',
  args: { label: 'Deslize para vender', color: '#026A2D' },
};

export const TodosLabels: Story = {
  name: 'Todos os labels',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SlideButton label="Deslize para enviar"    />
      <SlideButton label="Deslize para trocar"    />
      <SlideButton label="Deslize para receber"   />
      <SlideButton label="Deslize para converter" />
      <SlideButton label="Deslize para vender"    color="#026A2D" />
    </div>
  ),
};
