import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedSectionCta,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const DonationIcon = getInvolvedIcons.donation;

const packages = [
  { name: "Job Readiness Package", amount: "₹15,000", per: "per student" },
  {
    name: "Skill Development & Livelihood Package",
    amount: "₹25,000",
    per: "per student",
  },
];

export default function GetInvolvedDonationPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/donation-impact.dim_600x400.jpg",
        )}
        chapter="Donation"
        title="Why Donate?"
        subtitle="Every contribution directly supports mentoring, skilling, and job readiness — with transparent impact tracking."
        icon={<DonationIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/donate" })}
        >
          Donate Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <p className="c2r-prose text-center">
              Your contribution ensures that career mentoring and skill pathway
              guidance remain free for youth who need it most.
            </p>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Packages"
          title="Donation Packages"
          subtitle="Choose a package that matches the impact you want to create."
          icon={<DonationIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="h-full border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <CardContent className="pt-8 text-center">
                    <h3 className="c2r-card-title mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-c2r-primary">
                      {pkg.amount}
                    </p>
                    <p className="text-sm text-muted-foreground">{pkg.per}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <GetInvolvedSectionCta
            label="Donate Now"
            onClick={() => navigate({ to: "/donate" })}
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
