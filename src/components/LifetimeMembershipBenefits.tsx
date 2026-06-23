import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  lifetimeMembershipBenefits,
  commitmentText,
} from "@/data/lifetimeMembershipBenefits";

export function LifetimeMembershipBenefits() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {lifetimeMembershipBenefits.map((benefit, index) => {
          const isLastOdd =
            index === lifetimeMembershipBenefits.length - 1 &&
            lifetimeMembershipBenefits.length % 2 !== 0;

          return (
            <ScrollReveal
              key={benefit.title}
              delay={index * 60}
              direction="up"
              className={`w-full sm:w-[calc(50%-0.5rem)] ${
                isLastOdd
                  ? "sm:max-w-md lg:max-w-[calc(50%-0.5rem)]"
                  : "lg:max-w-[calc(50%-0.5rem)]"
              }`}
            >
              <Card className="h-full border border-border/60 shadow-sm transition-all duration-300 hover:border-c2r-primary/30 hover:shadow-md">
                <CardContent className="p-5 md:p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {benefit.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-c2r-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={300}>
        <div className="relative overflow-hidden rounded-2xl c2r-gradient-section px-6 py-8 md:px-10 md:py-10 text-center shadow-lg">
          <p
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none text-[clamp(3rem,14vw,8rem)] font-black uppercase tracking-[0.08em] text-white/[0.06]"
          >
            ROOTS
          </p>
          <div className="relative z-10 mx-auto max-w-2xl">
            <h3 className="c2r-heading-dark mb-3 text-xl md:text-2xl">
              Our Commitment
            </h3>
            <p className="c2r-prose-on-dark">{commitmentText}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
