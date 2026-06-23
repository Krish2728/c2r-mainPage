import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export const GI_PAGE = "flex flex-col overflow-hidden";
export const GI_BTN_PRIMARY = "text-lg px-8 py-6";
export const GI_BTN_HERO = "text-lg px-8 py-6";

type GetInvolvedHeroProps = {
  backgroundImage: string;
  chapter: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
};

export function GetInvolvedHero({
  backgroundImage,
  chapter,
  title,
  subtitle,
  icon,
  children,
}: GetInvolvedHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 c2r-gradient-hero-overlay" />
      </ParallaxSection>
      <div className="container relative z-10 py-20">
        <div className="mx-auto max-w-3xl text-white">
          <ChapterHeader
            variant="hero"
            chapter={chapter}
            title={title}
            subtitle={subtitle}
            icon={icon}
          />
          {children && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type GetInvolvedSectionProps = {
  variant?: "default" | "gradient" | "muted";
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function GetInvolvedSection({
  variant = "default",
  id,
  children,
  className,
  innerClassName,
}: GetInvolvedSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16",
        variant === "gradient" &&
          "bg-gradient-to-b from-background to-muted/30",
        variant === "muted" && "bg-muted/30",
        className,
      )}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}

export function GetInvolvedIntroCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-background p-6 md:p-8 shadow-sm space-y-5">
      {children}
    </div>
  );
}

export function GetInvolvedNoteCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-background px-6 py-8 shadow-sm md:px-10">
      <h2 className="c2r-card-title mb-4 text-center">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground text-center">
        {children}
      </div>
    </div>
  );
}

type BenefitItem = {
  icon: IconType | LucideIcon;
  title: string;
  description: string;
};

export function GetInvolvedBenefitGrid({
  items,
  columns = "grid-cols-2 sm:gap-4 lg:grid-cols-4",
  delay = 100,
}: {
  items: BenefitItem[];
  columns?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className={cn("grid gap-3 sm:gap-4", columns)}>
        {items.map((item) => (
          <Card
            key={item.title}
            className="h-full border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <CardContent className="p-4">
              <item.icon className="mb-3 h-8 w-8 text-c2r-primary" />
              <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="m-0 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollReveal>
  );
}

export function GetInvolvedSectionCta({
  label,
  onClick,
  href,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const button = (
    <Button size="lg" className={GI_BTN_PRIMARY} onClick={onClick}>
      {label}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );

  return (
    <ScrollReveal delay={200}>
      <div className="mt-12 text-center">
        {href ? (
          <Button size="lg" className={GI_BTN_PRIMARY} asChild>
            <a href={href}>{label}</a>
          </Button>
        ) : (
          button
        )}
      </div>
    </ScrollReveal>
  );
}

export function GetInvolvedContentWidth({
  size = "wide",
  children,
  className,
}: {
  size?: "narrow" | "content" | "wide";
  children: ReactNode;
  className?: string;
}) {
  const widthClass =
    size === "narrow"
      ? "max-w-3xl"
      : size === "content"
        ? "max-w-4xl"
        : "max-w-6xl";
  return (
    <div className={cn("mx-auto", widthClass, className)}>{children}</div>
  );
}
