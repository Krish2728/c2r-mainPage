import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  MdFavorite,
  MdGroups,
  MdTrackChanges,
  MdEmojiObjects,
  MdShield,
  MdVerified,
  MdMenuBook,
  MdSupervisorAccount,
  MdHandshake,
  MdSettings,
} from "react-icons/md";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getHeroImageUrl } from "@/lib/images";
import { aboutIcons, ICON } from "@/lib/siteIcons";
import { Card, CardContent } from "@/components/ui/card";
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

const values = [
  {
    icon: MdFavorite,
    title: "Empathy First",
    description:
      "We believe in understanding the unique challenges faced by underserved communities and approaching every interaction with compassion and respect.",
    story:
      "Every student we work with has a unique story. We listen, understand, and tailor our support to meet individual needs.",
  },
  {
    icon: MdGroups,
    title: "Community-Driven",
    description:
      "Our strength lies in the collective power of mentors, students, partners, and volunteers working together toward a common goal.",
    story:
      "From volunteer mentors to corporate partners, our community is the backbone of our impact.",
  },
  {
    icon: MdTrackChanges,
    title: "Impact-Oriented",
    description:
      "We measure success not by numbers alone, but by the real, tangible changes we create in the lives of students and their communities.",
    story:
      "Every mentorship session, skill learned, and job secured represents a life transformed.",
  },
  {
    icon: MdEmojiObjects,
    title: "Innovation & Adaptability",
    description:
      "We embrace technology and innovative approaches to scale our impact while remaining flexible to evolving needs.",
    story:
      "From AI-powered mentor matching to adaptive learning pathways, we continuously innovate.",
  },
  {
    icon: MdShield,
    title: "Integrity & Transparency",
    description:
      "We operate with the highest standards of honesty, accountability, and transparency in all our programs and partnerships.",
    story:
      "Our stakeholders trust us because we maintain open communication and celebrate successes together.",
  },
  {
    icon: MdVerified,
    title: "Excellence in Execution",
    description:
      "We are committed to delivering high-quality programs, resources, and support that truly make a difference.",
    story:
      "From comprehensive mentor training to structured curricula, we ensure the highest standards.",
  },
];

const livingValues = [
  {
    icon: MdMenuBook,
    title: "In Our Programs",
    description:
      "We design mentorship curricula that prioritize empathy, cultural sensitivity, and personalized support.",
  },
  {
    icon: MdSupervisorAccount,
    title: "With Our Mentors",
    description:
      "We provide comprehensive training that emphasizes our values and equips mentors to make meaningful impact.",
  },
  {
    icon: MdHandshake,
    title: "Through Our Partnerships",
    description:
      "We collaborate with organizations that share our commitment to equity, excellence, and community empowerment.",
  },
  {
    icon: MdSettings,
    title: "In Our Operations",
    description:
      "We maintain transparent reporting, ethical practices, and continuous improvement in all our activities.",
  },
];

export default function OurValuesPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("ourValues")}
        chapter="About Us"
        title="Our Values"
        subtitle="The principles that guide our mission and shape every decision we make."
        icon={<aboutIcons.values className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/about/journey" })}
        >
          Our Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="What Drives Us"
          title="What Drives Us Forward"
          subtitle="At Connect2Roots, our values are the foundation of everything we do."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <GetInvolvedIntroCard>
              <p className="c2r-prose text-center">
                They guide how we serve our students, engage with our mentors,
                collaborate with partners, and measure our impact.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <GetInvolvedContentWidth size="wide">
          <div className="space-y-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 80}>
                <Card className="border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="grid items-start gap-6 md:grid-cols-[auto,1fr]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary/10 text-c2r-primary">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="c2r-card-title">{value.title}</h3>
                        <p className="c2r-prose">{value.description}</p>
                        <p className="rounded-lg border border-border/60 bg-muted/40 p-4 text-sm italic text-muted-foreground">
                          {value.story}
                        </p>
                      </div>
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
          chapter="In Practice"
          title="Living Our Values Every Day"
          subtitle="Our values are reflected in every program we run and every partnership we forge."
        />
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid
            items={livingValues}
            columns="grid-cols-1 sm:grid-cols-2"
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Next Step"
          title="Join Us in Living These Values"
          subtitle="Whether you're a student, mentor, partner, or supporter, be part of a community that puts these values into action."
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
                onClick={() => navigate({ to: "/contact" })}
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
