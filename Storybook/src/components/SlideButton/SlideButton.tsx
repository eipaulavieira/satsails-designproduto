import { useState, useRef, useCallback } from 'react';

export interface SlideButtonProps {
  label?: string;
  onComplete?: () => void;
  color?: string;
}

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M12.7729 9.39828L7.14792 15.0233C7.09565 15.0755 7.03361 15.117 6.96533 15.1453C6.89704 15.1736 6.82386 15.1881 6.74995 15.1881C6.67604 15.1881 6.60285 15.1736 6.53457 15.1453C6.46628 15.117 6.40424 15.0755 6.35198 15.0233C6.29972 14.971 6.25826 14.909 6.22998 14.8407C6.20169 14.7724 6.18713 14.6992 6.18713 14.6253C6.18713 14.5514 6.20169 14.4782 6.22998 14.4099C6.25826 14.3417 6.29972 14.2796 6.35198 14.2273L11.5797 9.00031L6.35198 3.77328C6.24643 3.66773 6.18713 3.52458 6.18713 3.37531C6.18713 3.22605 6.24643 3.08289 6.35198 2.97734C6.45753 2.8718 6.60068 2.8125 6.74995 2.8125C6.89921 2.8125 7.04237 2.8718 7.14792 2.97734L12.7729 8.60234C12.8252 8.65458 12.8667 8.71662 12.895 8.78491C12.9233 8.8532 12.9379 8.92639 12.9379 9.00031C12.9379 9.07423 12.9233 9.14743 12.895 9.21572C12.8667 9.284 12.8252 9.34604 12.7729 9.39828Z" fill="black"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M16.1479 5.46078L7.14792 14.4608C7.09567 14.5131 7.03364 14.5546 6.96535 14.5829C6.89706 14.6112 6.82387 14.6258 6.74995 14.6258C6.67603 14.6258 6.60283 14.6112 6.53454 14.5829C6.46626 14.5546 6.40422 14.5131 6.35198 14.4608L2.41448 10.5233C2.30893 10.4177 2.24963 10.2746 2.24963 10.1253C2.24963 9.97605 2.30893 9.83289 2.41448 9.72734C2.52003 9.6218 2.66318 9.5625 2.81245 9.5625C2.96171 9.5625 3.10487 9.6218 3.21042 9.72734L6.74995 13.2676L15.352 4.66484C15.4575 4.5593 15.6007 4.5 15.7499 4.5C15.8992 4.5 16.0424 4.5593 16.1479 4.66484C16.2535 4.77039 16.3128 4.91355 16.3128 5.06281C16.3128 5.21208 16.2535 5.35523 16.1479 5.46078Z" fill="#080808"/>
  </svg>
);

const TRACK_W    = 356;
const THUMB_W    = 56;
const PADDING    = 3;
const MAX_TRAVEL = TRACK_W - THUMB_W - PADDING * 2;
const CENTER_X   = (TRACK_W - THUMB_W) / 2;

export function SlideButton({ label = 'Deslize para enviar', onComplete, color = '#FF9800' }: SlideButtonProps) {
  const [progress, setProgress]   = useState(0); // 0–1
  const [completed, setCompleted] = useState(false);

  const isDragging     = useRef(false);
  const dragStartX     = useRef(0);
  const dragStartProg  = useRef(0);

  const complete = useCallback(() => {
    setCompleted(true);
    setProgress(1);
    onComplete?.();
  }, [onComplete]);

  const reset = () => { setCompleted(false); setProgress(0); };

  /* ── Mouse ── */
  const onMouseDown = (e: React.MouseEvent) => {
    if (completed) return;
    isDragging.current   = true;
    dragStartX.current   = e.clientX;
    dragStartProg.current = progress;
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || completed) return;
    const delta   = e.clientX - dragStartX.current;
    const next    = Math.max(0, Math.min(1, dragStartProg.current + delta / MAX_TRAVEL));
    setProgress(next);
    if (next >= 0.95) complete();
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (!completed) setProgress(0);
  };

  /* ── Touch ── */
  const onTouchStart = (e: React.TouchEvent) => {
    if (completed) return;
    isDragging.current    = true;
    dragStartX.current    = e.touches[0].clientX;
    dragStartProg.current = progress;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || completed) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    const next  = Math.max(0, Math.min(1, dragStartProg.current + delta / MAX_TRAVEL));
    setProgress(next);
    if (next >= 0.95) complete();
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (!completed) setProgress(0);
  };

  const thumbLeft   = completed ? CENTER_X : PADDING + progress * MAX_TRAVEL;
  const fillWidth   = thumbLeft + THUMB_W;
  const textOpacity = Math.max(0, 1 - progress * 2.5);

  return (
    <div
      style={{
        width: TRACK_W,
        height: 61,
        position: 'relative',
        userSelect: 'none',
        flexShrink: 0,
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Preenchimento laranja — some quando completo */}
      {progress > 0 && !completed && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: PADDING,
          width: fillWidth,
          height: 55,
          borderRadius: 40,
          background: color,
          pointerEvents: 'none',
        }} />
      )}

      {/* Label */}
      {!completed && (
        <span style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          fontWeight: 300,
          color: '#727272',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: textOpacity,
          transition: 'opacity 0.05s',
        }}>
          {label}
        </span>
      )}

      {/* Thumb */}
      <div
        style={{
          position: 'absolute',
          left: thumbLeft,
          top: PADDING,
          width: THUMB_W,
          height: 55,
          borderRadius: 40,
          background: completed ? '#00C853' : color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: completed ? 'pointer' : 'grab',
          transition: completed ? 'left 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s ease' : 'none',
          zIndex: 2,
          flexShrink: 0,
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={completed ? reset : undefined}
        title={completed ? 'Clique para resetar' : undefined}
      >
        {completed ? <CheckIcon /> : <ChevronRight />}
      </div>
    </div>
  );
}
