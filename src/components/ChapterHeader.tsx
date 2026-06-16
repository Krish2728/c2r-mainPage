import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ChapterHeaderProps {
  chapter: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  /** White text styling for green hero banners */
  variant?: "default" | "hero";
}

export function ChapterHeader({
  chapter,
  title,
  subtitle,
  icon,
  variant = "default",
}: ChapterHeaderProps) {
  const isHero = variant === "hero";

  return (
    <ScrollReveal direction="fade" className="overflow-visible">
      <div
        className={`text-center overflow-visible ${isHero ? "mb-0" : "mb-16"}`}
      >
        {icon && (
          <div
            className={`flex justify-center mb-6 ${isHero ? "text-white" : ""}`}
          >
            {icon}
          </div>
        )}
        <div
          className={`inline-block mb-4 px-6 py-2.5 rounded-full leading-normal ${
            isHero ? "border border-white/25 bg-white/15" : "bg-c2r-accent/10"
          }`}
        >
          <span
            className={`text-sm font-semibold uppercase tracking-wider ${
              isHero ? "text-[oklch(0.88_0.1_68)]" : "text-c2r-accent"
            }`}
          >
            {chapter}
          </span>
        </div>
        <h2
          className={`heading-descender-safe text-4xl font-bold mb-4 md:text-5xl ${
            isHero ? "text-white" : ""
          }`}
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
            className={
              isHero
                ? "c2r-hero-subtitle max-w-3xl mx-auto pb-0.5"
                : "c2r-section-subtitle pb-0.5"
            }
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
