import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  lifetimeMembershipBenefits,
  commitmentText,
} from "@/data/lifetimeMembershipBenefits";

export function LifetimeMembershipBenefits() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {lifetimeMembershipBenefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} delay={index * 60} direction="up">
            <Card className="h-full border-l-4 border-l-c2r-primary shadow-sm">
              <CardContent className="pt-6 pb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-c2r-primary/10 text-c2r-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="c2r-card-title mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 c2r-prose-sm"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-c2r-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <Card className="border border-c2r-primary/20 bg-c2r-primary/5">
          <CardContent className="pt-6 pb-6">
            <h3 className="c2r-card-title mb-3">Our Commitment</h3>
            <p className="c2r-prose">{commitmentText}</p>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
}
