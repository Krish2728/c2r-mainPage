import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      node.classList.add("reveal-visible");
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  const directionClass = {
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
    fade: "reveal-fade",
  }[direction];

  return (
    <div ref={ref} className={`reveal ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
