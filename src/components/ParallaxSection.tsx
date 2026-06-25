import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    let frameId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (!node) return;
        const scrolled = window.scrollY;
        const rect = node.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const offset = (scrolled - elementTop) * speed;
        node.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
