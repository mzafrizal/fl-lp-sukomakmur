"use client";

import { useRef, useEffect, useState, ReactNode, CSSProperties, ElementType } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in"
  | "zoom-out";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;   // 0–1
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

const variants: Record<AnimationVariant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: 0, transform: "translateY(-40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, transform: "scale(0.85)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "zoom-out": {
    hidden: { opacity: 0, transform: "scale(1.1)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className,
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { hidden, visible } = variants[variant];

  const animStyle: CSSProperties = {
    ...hidden,
    ...(inView ? visible : {}),
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={animStyle}>
      {children}
    </Tag>
  );
}
