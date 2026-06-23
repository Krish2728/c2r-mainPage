import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";
import { aboutIcons, featureIcons, ICON } from "@/lib/siteIcons";
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

const differentiators = [
  {
    icon: featureIcons.humanCentered,
    title: "Human-Centered",
    description:
      "We put people first, understanding that every journey is unique and deserves personalized attention.",
  },
  {
    icon: featureIcons.technology,
    title: "Technology-Enabled",
    description:
      "AI-powered matching ensures students connect with mentors who truly understand their aspirations.",
  },
  {
    icon: featureIcons.community,
    title: "Community-Driven",
    description:
      "Built on the power of giving back—professionals helping the next generation succeed.",
  },
  {
    icon: featureIcons.impact,
    title: "Impact-Focused",
    description:
      "Every program, every initiative is designed with measurable outcomes and lasting transformation in mind.",
  },
];

export default function WhoWeArePage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="About Us"
        title="Who We Are"
        subtitle="A movement dedicated to empowering communities through mentorship, skills, and opportunity."
        icon={<aboutIcons.whoWeAre className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/about/vision-mission" })}
        >
          Our Vision & Mission
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="Our Identity"
          title="More Than an Organization"
          subtitle="We are a community of changemakers, united by a shared vision."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <p className="c2r-prose-emphasis">
                Connect2Roots Foundation is a social impact organization that
                bridges the gap between aspiration and achievement. We believe
                that{" "}
                <span className="font-bold text-foreground">
                  talent is everywhere, but opportunity is not
                </span>
                .
              </p>
              <p className="c2r-prose">
                Founded on the principle that every individual deserves access
                to quality mentorship and career guidance, we&apos;ve built a
                platform that connects aspiring professionals from underserved
                communities with experienced mentors who can guide them toward
                meaningful careers.
              </p>
              <p className="c2r-prose">
                Our work goes beyond traditional career counseling. We provide
                comprehensive support through mentorship programs, skill
                development initiatives, and entrepreneurship pathways—creating
                a holistic ecosystem that nurtures talent and transforms lives.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img
              src={getImageUrl(
                "/assets/generated/team-collaboration.dim_800x500.jpg",
              )}
              alt="Team Collaboration"
              className="mt-8 w-full rounded-xl border border-border/60 object-cover shadow-md"
            />
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Our Beginning"
          title="The Story of How We Started"
          subtitle="Every movement begins with a moment of clarity."
          icon={<aboutIcons.founder className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <Card className="overflow-hidden border border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                  <img
                    src={getImageUrl(
                      "/assets/generated/founder-headshot.dim_300x300.jpg",
                    )}
                    alt="Founder"
                    className="h-48 w-48 shrink-0 rounded-full border-4 border-c2r-accent/20 object-cover shadow-md"
                  />
                  <div className="space-y-5">
                    <p className="c2r-prose">
                      In 2017, our founder witnessed a troubling pattern:
                      brilliant young minds from underserved communities were
                      struggling not because they lacked talent or ambition, but
                      because they lacked access to the right guidance at the
                      right time.
                    </p>
                    <p className="c2r-prose">
                      A conversation with a talented student who was about to
                      give up on her dreams became the catalyst. That moment
                      sparked a question:{" "}
                      <span className="font-bold italic text-foreground">
                        &ldquo;What if we could connect every aspiring
                        professional with someone who&apos;s walked the path
                        they want to take?&rdquo;
                      </span>
                    </p>
                    <p className="c2r-prose">
                      From that simple question, Connect2Roots was born—growing
                      from informal mentoring sessions into a platform serving
                      thousands across multiple communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Our Approach"
          title="What Makes Us Different"
          subtitle="A unique blend of empathy, technology, and community."
        />
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid items={differentiators} />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Next Step"
          title="Learn More About Our Work"
          subtitle="Explore our vision, meet our team, and discover how we're making a difference."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/about/vision-mission" })}
              >
                Our Vision & Mission
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
