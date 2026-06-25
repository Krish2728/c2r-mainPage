import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MdEmojiEvents, MdVerified, MdGroups } from "react-icons/md";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { VolunteerRoleCategories } from "@/components/VolunteerRoleCategories";
import { YouthUnemploymentStats } from "@/components/YouthUnemploymentStats";
import { VolunteerClosingCTA } from "@/components/VolunteerClosingCTA";
import { getHeroImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedBenefitGrid,
  GetInvolvedSectionCta,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const VolunteerIcon = getInvolvedIcons.volunteer;

const volunteerBenefits = [
  {
    icon: MdEmojiEvents,
    title: "Certificate of Volunteering",
    description:
      "Official recognition from Connect2Roots for your time and contribution.",
  },
  {
    icon: MdVerified,
    title: "Platform recognition",
    description:
      "Acknowledgement across our community for the impact you help create.",
  },
  {
    icon: MdGroups,
    title: "Changemaker network",
    description:
      "Access to an exclusive network of professionals giving back across India.",
  },
];

export default function GetInvolvedOtherVolunteeringPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("volunteering")}
        chapter="Volunteer"
        title="Why Volunteer at Connect2Roots"
        subtitle="Your expertise can open doors that talent alone cannot."
        icon={<VolunteerIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/contact", hash: "volunteer" })}
        >
          Apply as a Volunteer
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="content">
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <GetInvolvedIntroCard>
                <p className="text-base font-medium leading-relaxed text-foreground">
                  Volunteering with Connect2Roots goes far beyond one-on-one
                  mentoring. Whether you&apos;re a designer, a data analyst, a
                  corporate professional, or simply someone with a skill worth
                  sharing — there&apos;s a role here built for you.
                </p>
                <p className="c2r-prose">
                  You can run a single workshop, tell student stories through
                  video and design, help us measure our impact through research,
                  manage our digital platforms, or drive community outreach in
                  your city. Every contribution, however big or small, becomes
                  part of something that outlasts a single session.
                </p>
                <p className="c2r-prose">
                  The most meaningful reward isn&apos;t on a résumé — it&apos;s
                  the moment a student lands their first internship because you
                  helped them prepare. You invest a few hours; a student gains a
                  future.
                </p>
              </GetInvolvedIntroCard>
            </ScrollReveal>
            <GetInvolvedBenefitGrid
              items={volunteerBenefits}
              columns="grid-cols-1 sm:grid-cols-3"
              delay={150}
            />
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Ways to Contribute"
          title="Here's how you can contribute"
          subtitle="Find a role that fits your skills, schedule, and passion."
          icon={<VolunteerIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="wide">
          <VolunteerRoleCategories />
          <GetInvolvedSectionCta
            label="Apply as a Volunteer"
            onClick={() => navigate({ to: "/contact", hash: "volunteer" })}
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <YouthUnemploymentStats />
      <VolunteerClosingCTA />
    </div>
  );
}
