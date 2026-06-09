import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PixKeySelector, PixKeyType } from './PixKeySelector';

const meta: Meta<typeof PixKeySelector> = {
  title: 'Componentes/Ações/Pix Key Selector',
  component: PixKeySelector,
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
Seletor de tipo de chave Pix para a tela de envio. O usuário toca em uma das 5 opções para selecionar o tipo de chave.

**Estados:**
- **Normal:** fundo \`#080808\`, ícone e label \`#727272\`
- **Selecionado:** \`border: 0.8px solid #00C853\` · \`background: rgba(0,200,83,0.25)\` · ícone e label \`#FFFFFF\`

---

**CSS:**
\`\`\`css
/* Wrapper */
display: inline-flex;
align-items: center;
gap: 4px;

/* Cada item */
display: flex;
flex-direction: column;
width: 64px;
height: 60px;
padding: 10px;
align-items: center;
justify-content: center;
gap: 6px;
border-radius: 8px;

/* Estado selecionado */
border: 0.8px solid #00C853;
background: rgba(0, 200, 83, 0.25);

/* Ícone */
width: 18px;
height: 18px;
\`\`\`

---

**Flutter:**
\`\`\`dart
Row(
  mainAxisSize: MainAxisSize.min,
  spacing: 4,
  children: PixKeyType.values.map((type) {
    final isSelected = selectedType == type;
    return GestureDetector(
      onTap: () => setState(() => selectedType = type),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        width: 64, height: 60,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: isSelected ? const Color(0xFF00C853) : Colors.transparent,
            width: 0.8,
          ),
          color: isSelected
              ? const Color(0xFF00C853).withOpacity(0.25)
              : const Color(0xFF080808),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(type.icon, size: 18,
              color: isSelected ? Colors.white : const Color(0xFF727272)),
            const SizedBox(height: 6),
            Text(type.label,
              style: TextStyle(
                fontFamily: 'Inter', fontSize: 12,
                color: isSelected ? Colors.white : const Color(0xFF727272),
              )),
          ],
        ),
      ),
    );
  }).toList(),
)
\`\`\`
        `,
      },
    },
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
type Story = StoryObj<typeof PixKeySelector>;

export const Padrao: Story = {
  name: 'Padrão (nenhum selecionado)',
  args: {},
};

export const CpfSelecionado: Story = {
  name: 'CPF selecionado',
  args: { value: 'cpf' },
};

export const EmailSelecionado: Story = {
  name: 'Email selecionado',
  args: { value: 'email' },
};

export const Interativo: Story = {
  name: 'Interativo',
  parameters: { controls: { disable: true } },
  render: () => {
    const [selected, setSelected] = useState<PixKeyType>('cpf');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#727272', margin: 0 }}>
          Tipo de Chave Pix:
        </p>
        <PixKeySelector value={selected} onChange={setSelected} />
        <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#00C853', margin: 0 }}>
          Selecionado: <strong>{selected.toUpperCase()}</strong>
        </p>
      </div>
    );
  },
};
