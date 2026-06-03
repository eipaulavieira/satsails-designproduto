import { useState, useEffect, useRef } from 'react';

export interface LoginSlide {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export interface LoginCarouselProps {
  slides: LoginSlide[];
  interval?: number;
  notificationImage?: string;
  onCreateWallet?: () => void;
  onRecoverWallet?: () => void;
}

export function LoginCarousel({
  slides,
  interval = 4500,
  notificationImage,
  onCreateWallet,
  onRecoverWallet,
}: LoginCarouselProps) {
  const [current, setCurrent]   = useState(0);
  const [fading, setFading]     = useState(false);
  const timerRef                = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 350);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setFading(false);
      }, 350);
    }, interval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slides.length, interval]);

  const slide = slides[current];

  return (
    <div style={{
      position: 'relative',
      width: 390,
      height: 844,
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
      background: '#080808',
    }}>
      {/* Progress bar segmentado — topo */}
      <div style={{
        position: 'absolute',
        top: 44, left: 0, right: 0,
        display: 'flex',
        gap: 4,
        padding: '0 4px',
        zIndex: 20,
        boxSizing: 'border-box' as const,
      }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background: i === current ? '#FF9800' : 'rgba(255,255,255,0.25)',
              transition: 'background 0.35s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${slide.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 420,
        background: 'linear-gradient(to bottom, transparent, #080808)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute',
        bottom: 16, left: 31, right: 31,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.35s ease',
      }}>

        {/* Notification */}
        {notificationImage && (
          <img
            src={notificationImage}
            alt="Notificação"
            style={{ display: 'block', flexShrink: 0 }}
          />
        )}

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'center', alignItems: 'center', width: '100%' }}>
          <h1 style={{
            fontSize: 48, fontWeight: 500, color: '#fff',
            letterSpacing: '-1.92px', lineHeight: 1.1, margin: 0,
          }}>
            {slide.title}
          </h1>
          <p style={{
            fontSize: 24, fontWeight: 300, color: '#727272',
            letterSpacing: '-0.96px', lineHeight: 1.1, margin: 0,
          }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          <button
            onClick={onCreateWallet}
            style={{
              width: '100%', height: 52, borderRadius: 8,
              background: '#FF9800', color: '#000', border: 'none',
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700,
              cursor: 'pointer', letterSpacing: '-0.2px',
              boxShadow: '0 4px 11px rgba(0,0,0,0.25)',
            }}>
            Criar nova carteira
          </button>
          <button
            onClick={onRecoverWallet}
            style={{
              width: '100%', height: 52, borderRadius: 8,
              background: 'transparent', color: '#fff', border: 'none',
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700,
              cursor: 'pointer', letterSpacing: '-0.2px',
            }}>
            Recuperar carteira
          </button>
        </div>


        {/* Terms */}
        <p style={{
          fontSize: 8, color: '#727272',
          textAlign: 'center', lineHeight: 1.5, margin: 0, width: 163,
        }}>
          Ao continuar, você concorda com nossos{' '}
          <strong style={{ color: '#fff', fontWeight: 500 }}>Termos de Uso</strong> e{' '}
          <strong style={{ color: '#fff', fontWeight: 500 }}>Política de Privacidade</strong>.
        </p>
      </div>
    </div>
  );
}
