import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GI_BTN_PRIMARY } from "@/components/get-involved/GetInvolvedLayout";

type TeamSectionHeaderProps = {
  badge?: string;
  title: string;
  description: string;
  showActions?: boolean;
  onAboutClick?: () => void;
  onJoinClick?: () => void;
  align?: "split" | "center";
};

export function TeamSectionHeader({
  badge = "Join Our Mission",
  title,
  description,
  showActions = true,
  onAboutClick,
  onJoinClick,
  align = "split",
}: TeamSectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal direction="up">
      <div
        className={
          isCenter
            ? "mb-8 px-1 text-center sm:mb-12 md:mb-16"
            : "mb-8 flex flex-col gap-6 px-1 sm:mb-12 sm:gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
        }
      >
        <div className={isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}>
          {badge && (
            <span className="mb-3 inline-flex rounded-full bg-c2r-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-c2r-primary sm:mb-4 sm:px-3.5">
              {badge}
            </span>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {showActions && !isCenter && (
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3 lg:shrink-0 lg:pb-1">
            <Button
              size="lg"
              variant="outline"
              className={`${GI_BTN_PRIMARY} w-full border-border/80 bg-background hover:bg-muted/50 sm:w-auto`}
              onClick={onAboutClick}
            >
              About Us
            </Button>
            <Button
              size="lg"
              className={`${GI_BTN_PRIMARY} w-full sm:w-auto`}
              onClick={onJoinClick}
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
