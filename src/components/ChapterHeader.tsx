import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ChapterHeaderProps {
  chapter: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function ChapterHeader({
  chapter,
  title,
  subtitle,
  icon,
}: ChapterHeaderProps) {
  return (
    <ScrollReveal direction="fade" className="overflow-visible">
      <div className="text-center mb-16 overflow-visible">
        {icon && <div className="flex justify-center mb-6">{icon}</div>}
        <div className="inline-block mb-4 px-6 py-2.5 bg-c2r-accent/10 rounded-full leading-normal">
          <span className="text-sm font-semibold text-c2r-accent uppercase tracking-wider">
            {chapter}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span
            className="chapter-title-gradient inline-block bg-gradient-to-r from-c2r-primary to-c2r-secondary bg-clip-text text-transparent"
            style={{ lineHeight: 1.5, paddingBottom: "0.12em" }}
          >
            {title}
          </span>
        </h2>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pb-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
