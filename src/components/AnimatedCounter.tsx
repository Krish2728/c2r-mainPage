import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
  locale?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
  locale = "en-US",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    if (reducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const linearProgress = Math.min((currentTime - startTime) / duration, 1);
      const progress = easeOutCubic(linearProgress);

      if (decimals > 0) {
        setCount(progress * end);
      } else {
        setCount(Math.floor(progress * end));
      }

      if (linearProgress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration, decimals, reducedMotion]);

  const displayValue =
    decimals > 0
      ? count.toLocaleString(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : count.toLocaleString(locale);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
}
