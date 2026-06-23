import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { mentorshipIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";
import { ChapterHeader } from "@/components/ChapterHeader";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const MENTOR_PLATFORM_BASE =
  typeof import.meta !== "undefined" &&
  import.meta.env?.VITE_MENTOR_PLATFORM_URL
    ? String(import.meta.env.VITE_MENTOR_PLATFORM_URL).replace(/\/$/, "")
    : "";
const MENTOR_AUTH_MENTEE = MENTOR_PLATFORM_BASE
  ? `${MENTOR_PLATFORM_BASE}/auth?role=mentee&mode=signup`
  : "";
const MENTOR_AUTH_MENTOR = MENTOR_PLATFORM_BASE
  ? `${MENTOR_PLATFORM_BASE}/auth?role=mentor&mode=signup`
  : "";

const MENTORSHIP_SLUGS = ["why-mentorship", "mentee", "mentor"] as const;

const navItems: {
  slug: (typeof MENTORSHIP_SLUGS)[number];
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    slug: "why-mentorship",
    title: "Why Mentorship Matters",
    description: "The power of connection",
    icon: mentorshipIcons.why,
  },
  {
    slug: "mentee",
    title: "Become a Mentee",
    description: "Your journey begins here",
    icon: mentorshipIcons.mentee,
  },
  {
    slug: "mentor",
    title: "Become a Mentor",
    description: "Share your light",
    icon: mentorshipIcons.mentor,
  },
];

const SEEKER_GAINS = [
  "Personalized career guidance from experienced professionals",
  "Industry insights and real-world advice",
  "Networking opportunities and professional connections",
  "Resume review and interview preparation",
  "Goal setting and accountability support",
  "Confidence building and skill development",
];

const JOURNEY_STEPS = [
  {
    title: "Share Your Story",
    description: "Tell us about your dreams, challenges, and aspirations",
  },
  {
    title: "Meet Your Guide",
    description: "Connect with a mentor who understands your path",
  },
  {
    title: "Grow Together",
    description: "Regular sessions, honest conversations, real progress",
  },
  {
    title: "Achieve & Inspire",
    description: "Reach your goals and become a guide for others",
  },
];

const MENTOR_BENEFITS = [
  "Make a meaningful impact on someone's life",
  "Develop leadership and coaching skills",
  "Expand your professional network",
  "Give back to your community",
  "Gain fresh perspectives and insights",
  "Recognition and professional development opportunities",
];

function scrollToSection(slug: string) {
  document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
}

function MenteeButton({
  navigate,
}: {
  navigate: ReturnType<typeof useNavigate>;
}) {
  if (MENTOR_AUTH_MENTEE) {
    return (
      <Button size="lg" className={GI_BTN_PRIMARY} asChild>
        <a href={MENTOR_AUTH_MENTEE} target="_blank" rel="noopener noreferrer">
          Become a Mentee
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    );
  }
  return (
    <Button
      size="lg"
      className={GI_BTN_PRIMARY}
      onClick={() => navigate({ to: "/contact" })}
    >
      Become a Mentee
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}

function MentorButton({
  navigate,
}: {
  navigate: ReturnType<typeof useNavigate>;
}) {
  if (MENTOR_AUTH_MENTOR) {
    return (
      <Button size="lg" className={GI_BTN_PRIMARY} asChild>
        <a href={MENTOR_AUTH_MENTOR} target="_blank" rel="noopener noreferrer">
          Join as a Mentor
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    );
  }
  return (
    <Button
      size="lg"
      className={GI_BTN_PRIMARY}
      onClick={() => navigate({ to: "/get-involved" })}
    >
      Join as a Mentor
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}

export default function MentorshipPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (!MENTORSHIP_SLUGS.includes(hash as (typeof MENTORSHIP_SLUGS)[number]))
      return;
    const timeoutId = setTimeout(() => scrollToSection(hash), 100);
    return () => clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/mentorship-workshop.dim_800x600.jpg",
        )}
        chapter="Mentorship"
        title="Where Paths Cross, Lives Change"
        subtitle="The story of mentorship is the story of human connection—where experience meets aspiration, and guidance transforms into possibility."
        icon={<mentorshipIcons.hub className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => scrollToSection("why-mentorship")}
        >
          Explore Mentorship
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-3">
            {navItems.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 100}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.slug)}
                  className="block h-full w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary focus-visible:ring-offset-2"
                >
                  <Card className="h-full cursor-pointer border border-border/60 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <CardContent className="flex h-full flex-col items-center gap-4 pt-8 pb-8 text-center">
                      <item.icon className={`${ICON.nav} text-c2r-primary`} />
                      <h3 className="c2r-card-title leading-snug">
                        {item.title}
                      </h3>
                      <p className="c2r-prose-sm">{item.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-c2r-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="why-mentorship" variant="default">
        <ChapterHeader
          chapter="The Power of Connection"
          title="Why Mentorship Matters"
          subtitle="One conversation can change everything"
          icon={<mentorshipIcons.why className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <img
                src={getImageUrl(
                  "/assets/generated/mentorship-workshop.dim_800x600.jpg",
                )}
                alt="Mentoring session"
                className="aspect-[4/3] w-full rounded-xl border border-border/60 object-cover shadow-md"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <GetInvolvedIntroCard>
                <h3 className="c2r-card-title">The Ripple Effect</h3>
                <p className="c2r-prose">
                  Mentorship isn&apos;t just about career advice—it&apos;s about
                  seeing potential where others see obstacles. It&apos;s about
                  opening doors, sharing wisdom, and believing in someone&apos;s
                  journey. When a mentor invests in a mentee, they don&apos;t
                  just change one life; they create ripples that touch families,
                  communities, and future generations.
                </p>
                <blockquote className="border-l-2 border-c2r-primary pl-4 italic text-muted-foreground">
                  My mentor didn&apos;t just teach me skills; they taught me to
                  believe in myself. That belief changed everything.
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — Former Mentee, Now a Mentor
                </p>
              </GetInvolvedIntroCard>
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="mentee" variant="muted">
        <ChapterHeader
          chapter="For Seekers"
          title="Your Journey Begins Here"
          subtitle="Every expert was once a beginner. Every success story started with a question."
          icon={<mentorshipIcons.mentee className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="space-y-8">
            <ScrollReveal>
              <GetInvolvedIntroCard>
                <h3 className="c2r-card-title">
                  How Mentoring Changed Ayesha&apos;s Journey
                </h3>
                <p className="italic text-muted-foreground">
                  &ldquo;I was lost, unsure of which path to take. My mentor
                  didn&apos;t give me all the answers—they helped me discover
                  them myself. Through our conversations, I found clarity,
                  confidence, and a career I love. Now, I&apos;m paying it
                  forward by mentoring others.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">
                  — Ayesha, Software Engineer
                </p>
              </GetInvolvedIntroCard>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal delay={100}>
                <Card className="h-full border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="c2r-card-title mb-6">
                      What You&apos;ll Gain
                    </h3>
                    <ul className="mb-8 space-y-3">
                      {SEEKER_GAINS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-c2r-accent" />
                          <span className="text-sm text-muted-foreground sm:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <MenteeButton navigate={navigate} />
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <Card className="h-full border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="c2r-card-title mb-6">
                      Your Journey Unfolds
                    </h3>
                    <ol className="space-y-5">
                      {JOURNEY_STEPS.map((step, i) => (
                        <li key={step.title} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full c2r-gradient-accent text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <div>
                            <p className="c2r-card-title">{step.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="mentor" variant="default">
        <ChapterHeader
          chapter="For Guides"
          title="Share Your Light"
          subtitle="The greatest gift you can give is your experience, wisdom, and belief in someone's potential."
          icon={<mentorshipIcons.mentor className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="space-y-8">
            <ScrollReveal>
              <GetInvolvedIntroCard>
                <h3 className="c2r-card-title">
                  How Mentoring Changed Rajesh&apos;s Perspective
                </h3>
                <p className="italic text-muted-foreground">
                  &ldquo;I thought I was just sharing career advice. But through
                  mentoring, I rediscovered my own purpose. Watching my mentee
                  overcome challenges and achieve their dreams reminded me why I
                  fell in love with my profession in the first place. Mentoring
                  doesn&apos;t just change their life—it enriches yours.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">
                  — Rajesh, Senior Product Manager & Mentor
                </p>
              </GetInvolvedIntroCard>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal delay={100}>
                <Card className="h-full border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="c2r-card-title mb-6">Your Commitment</h3>
                    <div className="mb-8 space-y-4">
                      <div>
                        <p className="c2r-card-title">Time Investment</p>
                        <p className="text-sm text-muted-foreground">
                          2–4 hours per month—small moments that create lasting
                          impact
                        </p>
                      </div>
                      <div>
                        <p className="c2r-card-title">Duration</p>
                        <p className="text-sm text-muted-foreground">
                          Minimum 6 months to build meaningful relationships
                        </p>
                      </div>
                    </div>
                    <h3 className="c2r-card-title mb-4">What We Provide</h3>
                    <ul className="space-y-2">
                      {[
                        "Comprehensive training and resources",
                        "Community of fellow mentors",
                        "Ongoing support and guidance",
                        "Recognition and appreciation",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-c2r-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <Card className="h-full border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="c2r-card-title mb-6">Why Become a Mentor</h3>
                    <ul className="mb-8 space-y-3">
                      {MENTOR_BENEFITS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-c2r-primary" />
                          <span className="text-sm text-muted-foreground sm:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <MentorButton navigate={navigate} />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Next Step"
          title="Join the Next Chapter"
          subtitle="Whether you're seeking guidance or ready to give back, your story begins here."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {MENTOR_AUTH_MENTEE ? (
                <Button size="lg" className={GI_BTN_PRIMARY} asChild>
                  <a
                    href={MENTOR_AUTH_MENTEE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className={GI_BTN_PRIMARY}
                  onClick={() => navigate({ to: "/contact" })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/get-involved" })}
              >
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
