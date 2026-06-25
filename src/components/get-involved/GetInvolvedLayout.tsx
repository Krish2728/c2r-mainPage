import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export const GI_PAGE = "flex flex-col overflow-hidden";
export const GI_BTN_PRIMARY = "text-lg px-8 py-6";
export const GI_BTN_HERO =
  "text-lg rounded-full border-white/35 bg-white/10 px-8 py-6 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white";
export const GI_SECTION_IMAGE =
  "aspect-[4/3] w-full max-h-72 object-cover rounded-xl border border-border/60 shadow-md";

type PhotoPageHeroProps = {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
};

/** Full-bleed photo hero shell — left-aligned content, charity-style overlay */
export function PhotoPageHero({
  backgroundImage,
  children,
  className,
  contentClassName,
  id,
}: PhotoPageHeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[min(85vh,820px)] items-center overflow-hidden",
        className,
      )}
    >
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 c2r-hero-photo-overlay" />
      </ParallaxSection>
      <div className="container relative z-10 flex min-h-[min(85vh,820px)] flex-col justify-center py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "max-w-2xl text-left text-white lg:max-w-3xl",
            contentClassName,
          )}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

type GetInvolvedHeroProps = {
  backgroundImage: string;
  chapter?: string;
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
    <PhotoPageHero backgroundImage={backgroundImage}>
      <ChapterHeader
        variant="hero"
        align="left"
        chapter={chapter}
        title={title}
        subtitle={subtitle}
        icon={icon}
      />
      {children && (
        <div className="mt-8 flex flex-wrap justify-start gap-4">{children}</div>
      )}
    </PhotoPageHero>
  );
}

type ContentWithImageProps = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
};

/** Content first on small screens; image stacked on mobile, beside content on lg+ */
export function ContentWithImage({
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  className,
}: ContentWithImageProps) {
  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "overflow-hidden rounded-2xl border border-border/60 shadow-md",
        imagePosition === "left" && "lg:order-1",
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-[4/3] w-full object-cover lg:max-h-80"
        loading="lazy"
      />
    </motion.div>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-10",
        className,
      )}
    >
      <div className={cn(imagePosition === "left" && "lg:order-2")}>
        {children}
      </div>
      {image}
    </div>
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
            className="card-hover-lift h-full border border-border/60 shadow-sm"
          >
            <CardContent className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary">
                <item.icon className="h-5 w-5" />
              </div>
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
  return <div className={cn("mx-auto", widthClass, className)}>{children}</div>;
}
