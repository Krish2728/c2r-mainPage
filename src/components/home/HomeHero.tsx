import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getHeroImageUrl } from "@/lib/images";
import { GI_BTN_PRIMARY } from "@/components/get-involved/GetInvolvedLayout";

const HERO_IMAGE = getHeroImageUrl("home");

const TITLE_LINES = [
  "EMPOWERING",
  "COMMUNITIES",
  "FOR A BRIGHTER FUTURE",
] as const;

const MOBILE_TITLE_LINES = [
  "EMPOWERING",
  "COMMUNITIES",
  "FOR A BRIGHTER",
  "FUTURE",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function MaskedTitleLine({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease }}
      className={cn("hero-mask-line select-none", className)}
      aria-hidden
    >
      {children}
    </motion.span>
  );
}

export function HomeHero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative flex flex-col items-center overflow-hidden bg-background px-5 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-16 md:min-h-[min(88vh,920px)] md:justify-center md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(var(--c2r-primary)/0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[88rem] text-center">
        <h1
          id="home-hero-heading"
          className="hero-mask-heading hero-mask-block mx-auto uppercase"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <span className="hidden md:contents">
            {TITLE_LINES.map((line, index) => (
              <MaskedTitleLine
                key={line}
                delay={0.08 + index * 0.1}
                className={
                  index === TITLE_LINES.length - 1
                    ? "hero-mask-line--long"
                    : undefined
                }
              >
                {line}
              </MaskedTitleLine>
            ))}
          </span>

          <span className="contents md:hidden">
            {MOBILE_TITLE_LINES.map((line, index) => (
              <MaskedTitleLine
                key={line}
                delay={0.08 + index * 0.08}
                className={
                  index >= 2 ? "hero-mask-line--long" : undefined
                }
              >
                {line}
              </MaskedTitleLine>
            ))}
          </span>

          <span className="sr-only">
            Empowering Communities for a Brighter Future
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:max-w-2xl sm:text-lg md:mt-8 md:max-w-3xl"
        >
          Career guidance, skill development, and livelihood support — enabling
          young people to grow and citizens to give back to their roots and
          society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.62, ease }}
          className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 md:mt-10"
        >
          <Button
            size="lg"
            className={`${GI_BTN_PRIMARY} w-full rounded-full sm:w-auto`}
            onClick={() => navigate({ to: "/get-involved" })}
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-full border-foreground/20 bg-background/80 px-8 py-6 text-lg hover:bg-muted/50 sm:w-auto"
            onClick={() => navigate({ to: "/donate" })}
          >
            Support the Mission
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
