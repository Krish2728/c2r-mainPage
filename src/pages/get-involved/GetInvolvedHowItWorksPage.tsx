import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getHeroImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedSectionCta,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const CorporateIcon = getInvolvedIcons.corporate;

const steps = [
  {
    num: "1",
    title: "Align",
    content:
      "Share your entry-level hiring needs, role requirements, and future workforce plans. We assess whether an existing C2R program fits your needs, or co-create a custom mentorship + skill readiness pathway aligned to your roles.",
  },
  {
    num: "2",
    title: "Equip",
    content:
      "Equip learners during the program. Culture sessions, talks, mock interviews. Early exposure to your workplace expectations. Build familiarity and confidence on both sides. This reduces hiring friction and improves candidate–role fit.",
  },
  {
    num: "3",
    title: "Integrate",
    content:
      "Interview and onboard pre-mentored, job-ready candidates. Candidates are prepared for real-world expectations. Post-placement mentoring improves retention. C2R supports tracking and feedback.",
  },
];

export default function GetInvolvedHowItWorksPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("howItWorks")}
        chapter="Partnership Process"
        title="How It Works — In 3 Simple Steps"
        subtitle="A clear path from alignment to equipped, job-ready talent."
        icon={<CorporateIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() =>
            navigate({ to: "/get-involved/corporate-partnerships" })
          }
        >
          Explore Corporate Partnerships
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="content">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="overflow-hidden border border-border/60 shadow-sm">
                  <CardContent className="flex gap-5 pt-6 sm:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full c2r-gradient-accent text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-2xl">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold sm:mb-3 sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {step.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <GetInvolvedSectionCta
            label="Explore Corporate Partnerships"
            onClick={() =>
              navigate({ to: "/get-involved/corporate-partnerships" })
            }
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
