import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  MdExplore,
  MdLightbulb,
  MdTrendingUp,
  MdGroups,
  MdPublic,
  MdFavorite,
} from "react-icons/md";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getHeroImageUrl } from "@/lib/images";
import { aboutIcons, ICON } from "@/lib/siteIcons";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedBenefitGrid,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const missionPillars = [
  {
    icon: MdExplore,
    title: "Career Mentorship",
    description:
      "Connecting aspiring professionals with experienced mentors who provide personalized guidance, industry insights, and career navigation support.",
  },
  {
    icon: MdLightbulb,
    title: "Skill Development",
    description:
      "Offering practical training programs that equip individuals with in-demand skills for the modern workforce and emerging industries.",
  },
  {
    icon: MdTrendingUp,
    title: "Entrepreneurship Support",
    description:
      "Providing resources, mentorship, and pathways for individuals to create their own opportunities through entrepreneurial ventures.",
  },
];

const purposePoints = [
  {
    icon: MdGroups,
    title: "Empowering Individuals",
    description:
      "Every person we serve gains confidence, clarity, and the belief that their dreams are achievable.",
  },
  {
    icon: MdPublic,
    title: "Transforming Communities",
    description:
      "When individuals succeed, communities thrive through mentored students becoming future mentors and job creators.",
  },
  {
    icon: MdFavorite,
    title: "Building an Inclusive Future",
    description:
      "Success determined by talent and effort, not by circumstances of birth.",
  },
];

export default function VisionMissionPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("visionMission")}
        chapter="About Us"
        title="Vision & Mission"
        subtitle="Guided by vision, driven by mission, united by purpose."
        icon={<aboutIcons.visionMission className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/about/working-model" })}
        >
          See How We Work
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="Our Vision"
          title="The Future We're Building"
          subtitle="A world where opportunity knows no boundaries."
          icon={<aboutIcons.visionMission className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <Card className="border border-border/60 shadow-sm">
              <CardContent className="py-10">
                <aboutIcons.visionMission className="mx-auto mb-6 h-12 w-12 text-c2r-primary" />
                <p className="c2r-quote text-center">
                  &ldquo;A world where every individual, regardless of their
                  background, has access to the mentorship, skills, and
                  opportunities needed to achieve their career aspirations and
                  contribute meaningfully to society.&rdquo;
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-8 space-y-5">
              <p className="c2r-prose-emphasis text-center">
                We envision a future where geographical location, economic
                status, or social background no longer determine one&apos;s
                access to quality career guidance.
              </p>
              <p className="c2r-prose text-center">
                This is a commitment we work toward every day through our
                programs, partnerships, and community of mentors and supporters.
              </p>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Our Mission"
          title="How We Make It Happen"
          subtitle="Concrete actions driving meaningful change."
          icon={<aboutIcons.mission className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <p className="c2r-prose-emphasis text-center">
                To empower underserved communities by providing accessible,
                high-quality career mentorship, skill development programs, and
                entrepreneurship support that bridges the gap between education
                and employment.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
          <div className="mt-8">
            <GetInvolvedBenefitGrid
              items={missionPillars}
              columns="grid-cols-1 sm:grid-cols-3"
              delay={150}
            />
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Our Purpose"
          title="Why We Exist"
          subtitle="The deeper meaning behind everything we do."
          icon={<aboutIcons.purpose className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <p className="c2r-prose text-center">
                We exist to break down barriers and create pathways to success
                for those who need it most—transforming entire communities and
                building a more inclusive future for all.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
          <div className="mt-8 space-y-4">
            {purposePoints.map((point, index) => (
              <ScrollReveal key={point.title} delay={150 + index * 50}>
                <Card className="border border-border/60 shadow-sm">
                  <CardContent className="flex gap-5 pt-6">
                    <point.icon className="h-8 w-8 shrink-0 text-c2r-primary" />
                    <div>
                      <h3 className="c2r-card-title mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        {point.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Next Step"
          title="Join Us in This Mission"
          subtitle="Whether as a mentor, partner, or supporter—your contribution makes this vision a reality."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/get-involved" })}
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/about/working-model" })}
              >
                See How We Work
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
