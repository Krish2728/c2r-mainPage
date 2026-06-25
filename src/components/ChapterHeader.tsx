import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface ChapterHeaderProps {
  chapter?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  /** White text styling for green hero banners */
  variant?: "default" | "hero";
  /** Hero text alignment — charity-style heroes use left */
  align?: "left" | "center";
}

export function ChapterHeader({
  chapter,
  title,
  subtitle,
  icon,
  variant = "default",
  align: alignProp,
}: ChapterHeaderProps) {
  const isHero = variant === "hero";
  const align = alignProp ?? (variant === "default" ? "center" : "left");
  const isLeft = align === "left";

  return (
    <ScrollReveal direction="fade" className="overflow-visible">
      <div
        className={cn(
          "overflow-visible",
          isHero ? "mb-0" : "mb-16 text-center",
          isLeft && isHero && "text-left",
        )}
      >
        {icon && (
          <div
            className={cn(
              "mb-6",
              isHero ? "text-white" : "",
              isLeft ? "flex justify-start" : "flex justify-center",
            )}
          >
            {icon}
          </div>
        )}
        {chapter && (
          <div
            className={cn(
              "mb-4 inline-block rounded-full px-6 py-2.5 leading-normal",
              isHero ? "border border-white/25 bg-white/15" : "bg-c2r-accent/10",
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isHero ? "text-[oklch(0.88_0.1_68)]" : "text-c2r-accent",
              )}
            >
              {chapter}
            </span>
          </div>
        )}
        <h2
          className={cn(
            "heading-descender-safe mb-4 text-4xl font-bold md:text-5xl lg:text-6xl",
            isHero && "text-white",
          )}
        >
          {isHero ? (
            title
          ) : (
            <span
              className="chapter-title-gradient inline-block bg-gradient-to-r from-c2r-primary to-c2r-secondary bg-clip-text text-transparent"
              style={{ lineHeight: 1.5, paddingBottom: "0.12em" }}
            >
              {title}
            </span>
          )}
        </h2>
        {subtitle && (
          <p
            className={cn(
              isHero ? "c2r-hero-subtitle pb-0.5" : "c2r-section-subtitle pb-0.5",
              isLeft && isHero ? "mx-0 max-w-xl" : isHero && "mx-auto max-w-3xl",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
