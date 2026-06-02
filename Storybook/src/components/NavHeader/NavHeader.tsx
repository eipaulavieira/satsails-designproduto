export interface NavHeaderProps {
  title: string;
  onBack?: () => void;
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11.6479 14.2273C11.7002 14.2796 11.7416 14.3417 11.7699 14.4099C11.7982 14.4782 11.8128 14.5514 11.8128 14.6253C11.8128 14.6992 11.7982 14.7724 11.7699 14.8407C11.7416 14.909 11.7002 14.971 11.6479 15.0233C11.5957 15.0755 11.5336 15.117 11.4653 15.1453C11.397 15.1736 11.3239 15.1881 11.25 15.1881C11.176 15.1881 11.1029 15.1736 11.0346 15.1453C10.9663 15.117 10.9042 15.0755 10.852 15.0233L5.22699 9.39828C5.17469 9.34604 5.1332 9.284 5.10489 9.21572C5.07658 9.14743 5.06201 9.07423 5.06201 9.00031C5.06201 8.92639 5.07658 8.8532 5.10489 8.78491C5.1332 8.71662 5.17469 8.65458 5.22699 8.60234L10.852 2.97734C10.9575 2.8718 11.1007 2.8125 11.25 2.8125C11.3992 2.8125 11.5424 2.8718 11.6479 2.97734C11.7535 3.08289 11.8128 3.22605 11.8128 3.37531C11.8128 3.52458 11.7535 3.66773 11.6479 3.77328L6.42019 9.00031L11.6479 14.2273Z" fill="white"/>
  </svg>
);

export function NavHeader({ title, onBack }: NavHeaderProps) {
  return (
    <div
      onClick={onBack}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        cursor: onBack ? 'pointer' : 'default',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <ChevronLeft />
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 18,
          fontStyle: 'normal',
          fontWeight: 700,
          color: '#FAFDFE',
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
        }}>
          {title}
        </span>
      </div>
    </div>
  );
}
