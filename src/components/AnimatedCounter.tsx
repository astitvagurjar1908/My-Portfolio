import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({ value, suffix = '', duration = 1.4 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isFloat = value % 1 !== 0;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(isFloat ? Math.round(current * 100) / 100 : Math.round(current));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
