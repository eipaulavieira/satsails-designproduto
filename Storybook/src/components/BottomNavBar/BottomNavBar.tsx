/**
 * BottomNavBar
 * Ícones: Phosphor Icons — https://phosphoricons.com/
 * Arquivos SVG em: src/assets/icons/phosphor/
 */
import { useState } from 'react';

// ── Importação dos SVGs locais (regular + fill) ───────────────────
import houseIcon           from '../../assets/icons/phosphor/house-inactive.svg';
import houseFillIcon       from '../../assets/icons/phosphor/house-active.svg';
import chartIcon           from '../../assets/icons/phosphor/chart-line-inactive.svg';
import chartFillIcon       from '../../assets/icons/phosphor/chart-line-active.svg';
import qrIcon              from '../../assets/icons/phosphor/qr-code.svg';
import cartIcon            from '../../assets/icons/phosphor/shopping-cart-inactive.svg';
import cartFillIcon        from '../../assets/icons/phosphor/shopping-cart-active.svg';
import clockIcon           from '../../assets/icons/phosphor/clock-counter-clockwise-inactive.svg';
import clockFillIcon       from '../../assets/icons/phosphor/clock-counter-clockwise-active.svg';

export type NavItem = 'home' | 'chart' | 'scan' | 'shop' | 'history';

export interface BottomNavBarProps {
  defaultActive?: NavItem;
  onChange?: (item: NavItem) => void;
}

export function BottomNavBar({ defaultActive = 'home', onChange }: BottomNavBarProps) {
  const [active, setActive] = useState<NavItem>(defaultActive);

  const handleSelect = (item: NavItem) => {
    setActive(item);
    onChange?.(item);
  };

  return (
    <div style={{
      width: 390,
      height: 95,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: '#000000',
      boxSizing: 'border-box',
      padding: '0 8px',
      flexShrink: 0,
    }}>
      <NavButton
        id="home"
        active={active}
        onSelect={handleSelect}
        label="Home"
        icon={houseIcon}
        iconFill={houseFillIcon}
      />
      <NavButton
        id="chart"
        active={active}
        onSelect={handleSelect}
        label="Analíticas"
        icon={chartIcon}
        iconFill={chartFillIcon}
      />

      <CenterButton id="scan" active={active} onSelect={handleSelect} />

      <NavButton
        id="shop"
        active={active}
        onSelect={handleSelect}
        label="Serviços"
        icon={cartIcon}
        iconFill={cartFillIcon}
      />
      <NavButton
        id="history"
        active={active}
        onSelect={handleSelect}
        label="Histórico"
        icon={clockIcon}
        iconFill={clockFillIcon}
      />
    </div>
  );
}

// ── Botão lateral ─────────────────────────────────────────────────

interface NavButtonProps {
  id: NavItem;
  active: NavItem;
  onSelect: (id: NavItem) => void;
  label: string;
  icon: string;
  iconFill: string;
}

function NavButton({ id, active, onSelect, label, icon, iconFill }: NavButtonProps) {
  const isActive = active === id;
  return (
    <button
      onClick={() => onSelect(id)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 12px',
        minWidth: 52,
      }}
    >
      <img
        src={isActive ? iconFill : icon}
        width={18}
        height={18}
        alt={label}
        style={{ filter: isActive ? undefined : 'brightness(0) invert(1)' }}
      />
      {isActive && (
        <span style={{
          fontSize: 11,
          fontWeight: 400,
          fontFamily: 'Inter, sans-serif',
          lineHeight: '120%',
          color: '#FF9800',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </span>
      )}
    </button>
  );
}

// ── Botão central ─────────────────────────────────────────────────

interface CenterButtonProps {
  id: NavItem;
  active: NavItem;
  onSelect: (id: NavItem) => void;
}

function CenterButton({ id, active, onSelect }: CenterButtonProps) {
  const isActive = active === id;
  return (
    <button
      onClick={() => onSelect(id)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52.127,
        height: 52.127,
        padding: 12.063,
        gap: 12.063,
        borderRadius: 8,
        background: isActive ? '#D07E05' : '#FF9800',
        border: 'none',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 0.15s ease',
        boxSizing: 'border-box',
      }}
    >
      <img
        src={qrIcon}
        width={28}
        height={28}
        alt="QR Code"
      />
    </button>
  );
}

export default BottomNavBar;
