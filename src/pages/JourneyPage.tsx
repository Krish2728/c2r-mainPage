import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import type { IconType } from "react-icons";
import {
  MdLocationOn,
  MdGroups,
  MdTrendingUp,
  MdBolt,
  MdVerified,
  MdTimeline,
} from "react-icons/md";
import { ArrowRight } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";
import { aboutIcons, ICON } from "@/lib/siteIcons";
import { Card, CardContent } from "@/components/ui/card";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

type Milestone = {
  year: string;
  title: string;
  description: string;
  icon: IconType;
  image: string;
  highlights: string[];
};

const milestones: Milestone[] = [
  {
    year: "2017",
    title: "The Seed is Planted",
    description:
      "Connect2Roots Foundation was founded with a vision to bridge the opportunity gap for underserved youth through mentorship.",
    icon: MdLocationOn,
    image: getImageUrl("/assets/generated/founder-headshot.dim_300x300.jpg"),
    highlights: [
      "Foundation established",
      "First mentorship pilot program launched",
      "Initial team of 5 volunteer mentors",
    ],
  },
  {
    year: "2018-2019",
    title: "Building the Foundation",
    description:
      "We developed our core mentorship curriculum and established partnerships with educational institutions.",
    icon: MdGroups,
    image: getImageUrl("/assets/generated/team-collaboration.dim_800x500.jpg"),
    highlights: [
      "Structured mentorship curriculum created",
      "Partnership with first 3 colleges",
      "Reached 100 students",
    ],
  },
  {
    year: "2020-2021",
    title: "Adapting and Growing",
    description:
      "Despite pandemic challenges, we pivoted to virtual mentorship and expanded our reach across multiple states.",
    icon: MdTrendingUp,
    image: getImageUrl("/assets/generated/mentorship-workshop.dim_800x600.jpg"),
    highlights: [
      "Transitioned to virtual mentorship platform",
      "Expanded to 8 states",
      "Reached 500+ students",
    ],
  },
  {
    year: "2022-2023",
    title: "Scaling Impact",
    description:
      "We introduced AI-powered mentor matching and launched the TRIANGLE Framework for sustainable career outcomes.",
    icon: MdBolt,
    image: getImageUrl("/assets/generated/skill-development.dim_600x400.jpg"),
    highlights: [
      "AI-powered mentor matching implemented",
      "TRIANGLE Framework launched",
      "Launched C2R SEPF",
    ],
  },
  {
    year: "2024",
    title: "Deepening Our Reach",
    description:
      "We strengthened our programs, expanded partnerships, and achieved significant milestones in student outcomes.",
    icon: MdVerified,
    image: getImageUrl("/assets/generated/volunteer-mentoring.dim_800x500.jpg"),
    highlights: [
      "Crossed 2,000 students mentored",
      "50+ volunteer mentors",
      "Published first annual impact report",
    ],
  },
  {
    year: "2025 & Beyond",
    title: "Vision for the Future",
    description:
      "We aim to reach 10,000 students annually and establish Connect2Roots as a leading model for career mentorship in India.",
    icon: MdTimeline,
    image: getImageUrl("/assets/generated/future-of-work.dim_800x500.jpg"),
    highlights: [
      "Target: 10,000 students annually",
      "Expand to all Indian states",
      "Create policy advocacy initiatives",
    ],
  },
];

export default function JourneyPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="About Us"
        title="Our Journey"
        subtitle="From a small idea to a growing movement—the story of Connect2Roots."
        icon={<aboutIcons.journey className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => {
            document
              .getElementById("milestones")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Milestones
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="Our Story"
          title="A Story of Growth and Impact"
          subtitle="What began as a vision to connect underserved youth with career mentors has grown into a platform transforming lives across India."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <GetInvolvedIntroCard>
              <p className="c2r-prose text-center">
                Here&apos;s how we&apos;ve evolved over the years—from our first
                pilot program to a national movement for mentorship and
                opportunity.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="milestones">
        <GetInvolvedContentWidth size="content">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 80}>
                <Card className="overflow-hidden border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="grid items-start gap-6 lg:grid-cols-[1fr,200px]">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-c2r-primary/10 text-c2r-primary">
                            <milestone.icon className="h-5 w-5" />
                          </span>
                          <span className="text-xl font-bold text-c2r-accent">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="c2r-card-title">{milestone.title}</h3>
                        <p className="c2r-prose">{milestone.description}</p>
                        <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                          <h4 className="mb-3 text-sm font-semibold text-c2r-primary">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {milestone.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-c2r-accent" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full rounded-lg border border-border/60 object-cover shadow-sm lg:mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Next Step"
          title="The Journey Continues"
          subtitle="Every milestone has been possible because of our mentors, students, partners, and team."
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
                onClick={() => navigate({ to: "/about/our-team" })}
              >
                Meet Our Team
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
