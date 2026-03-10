import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoSliderProps {
  logos: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  showBlur?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Custom infinite marquee logo slider with edge fade.
 * Duplicates the logo list for seamless loop; no external library.
 */
export const LogoSlider = ({
  logos,
  speed = 40,
  direction = "left",
  showBlur = true,
  className,
  pauseOnHover = false,
}: LogoSliderProps) => {
  const duration = speed;
  const trackRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden min-h-[80px] flex justify-center items-center",
        className,
      )}
      style={
        showBlur
          ? {
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            }
          : undefined
      }
    >
      <div
        ref={trackRef}
        className={cn(
          "logo-slider-track flex items-center w-max gap-4 sm:gap-5",
          direction === "right" && "logo-slider-track--right",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {/* Duplicate logos for seamless infinite scroll; no gap between copies */}
        {[1, 2].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-4 sm:gap-5 shrink-0 pr-4 sm:pr-5"
          >
            {logos.map((logo, index) => (
              <div
                key={`${copy}-${index}`}
                className="w-[120px] sm:w-[140px] lg:w-[160px] aspect-video shrink-0 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center [&>svg]:h-[65%] [&>svg]:w-auto [&>svg]:fill-zinc-800 dark:[&>svg]:fill-zinc-200 [&>img]:max-h-[60px] [&>img]:w-auto [&>img]:object-contain">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

LogoSlider.displayName = "LogoSlider";
export default LogoSlider;
