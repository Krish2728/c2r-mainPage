import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  MdGroups,
  MdAutoAwesome,
  MdExplore,
  MdTrendingUp,
  MdCheckCircle,
  MdAccountTree,
  MdArrowForward,
} from "react-icons/md";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { TriangleFramework } from "@/components/TriangleFramework";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getHeroImageUrl } from "@/lib/images";
import { aboutIcons, featureIcons, ICON } from "@/lib/siteIcons";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedNoteCard,
  GetInvolvedBenefitGrid,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const thesisPoints = [
  {
    icon: featureIcons.humanCentered,
    title: "Human-Centered",
    description:
      "Technology enables us, but human connection transforms lives. Every student gets personalized attention from mentors who care.",
  },
  {
    icon: MdAccountTree,
    title: "Holistic Support",
    description:
      "We address the full journey—from career clarity to skill building to opportunity access—not just isolated pieces.",
  },
  {
    icon: featureIcons.community,
    title: "Community-Driven",
    description:
      "Built on the principle of giving back—successful professionals helping the next generation succeed.",
  },
];

const howItWorksSteps = [
  {
    icon: MdGroups,
    title: "Students Register",
    description:
      "Students create profiles with their career aspirations, educational background, and areas of interest.",
  },
  {
    icon: MdAutoAwesome,
    title: "Platform Matches Mentors",
    description:
      "Our AI-powered platform matches students with suitable mentors based on industry, experience, and goals.",
  },
  {
    icon: MdExplore,
    title: "C2R Mentorship Curriculum",
    description:
      "Students and mentors follow our structured curriculum covering career planning, skill development, and growth.",
  },
  {
    icon: MdTrendingUp,
    title: "Skills & Livelihood Programs",
    description:
      "Students gain access to skill development workshops and livelihood support to enhance employability.",
  },
];

const mentorPathwaySteps = [
  {
    stage: "Discovery",
    description: "Students explore career options through mentor interactions",
    outcome: "Career clarity and direction",
  },
  {
    stage: "Guidance",
    description: "Personalized mentorship sessions focused on goals",
    outcome: "Actionable career roadmap",
  },
  {
    stage: "Skill Building",
    description: "Targeted skill development aligned with career path",
    outcome: "Job-ready competencies",
  },
  {
    stage: "Opportunity",
    description: "Access to internships, jobs, and entrepreneurship support",
    outcome: "Career launch or advancement",
  },
];

const triangleFramework = [
  {
    icon: MdGroups,
    title: "Mentorship",
    description: "One-on-one guidance from experienced professionals",
  },
  {
    icon: featureIcons.lightbulb,
    title: "Skills",
    description: "Practical training in in-demand competencies",
  },
  {
    icon: featureIcons.target,
    title: "Opportunities",
    description: "Pathways to employment and entrepreneurship",
  },
];

export default function WorkingModelPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("workingModel")}
        chapter="About Us"
        title="Our Working Model"
        subtitle="A proven framework for transforming aspirations into achievements."
        icon={<aboutIcons.workingModel className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/programs" })}
        >
          Explore Programs
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="The Context"
          title="India's Future Readiness Challenge"
          subtitle="Understanding the landscape we're working to transform."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <p className="c2r-prose-emphasis">
                India stands at a critical juncture—with unprecedented
                potential, yet millions face{" "}
                <span className="font-bold text-foreground">
                  the gap between education and employability
                </span>
                .
              </p>
              <p className="c2r-prose">
                Traditional education systems often fail to provide the
                practical skills, industry connections, and career guidance
                needed in today&apos;s job market—particularly in underserved
                communities.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <GetInvolvedNoteCard title="The Challenge">
              How do we bridge this gap and ensure that every talented
              individual, regardless of background, has the guidance and skills
              needed to thrive in the modern economy?
            </GetInvolvedNoteCard>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Our Thesis"
          title="The Connect2Roots Approach"
          subtitle="A mentor-first pathway to career success."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <p className="c2r-prose-emphasis">
                We believe that meaningful career guidance is the missing link
                between education and employment.
              </p>
              <p className="c2r-prose">
                When aspiring professionals have access to experienced mentors,
                combined with skill development and clear pathways to
                opportunity, they don&apos;t just find jobs—they build careers.
              </p>
            </GetInvolvedIntroCard>
          </ScrollReveal>
          <div className="mt-8">
            <GetInvolvedBenefitGrid
              items={thesisPoints}
              columns="grid-cols-1 sm:grid-cols-3"
              delay={150}
            />
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Our Method"
          title="How It Works"
          subtitle="Four steps from registration to career success."
        />
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid
            items={howItWorksSteps}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Our Process"
          title="The Mentor-First Pathway"
          subtitle="A structured journey from aspiration to achievement."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <Card className="border border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Stage</TableHead>
                      <TableHead className="font-bold">What Happens</TableHead>
                      <TableHead className="font-bold">Outcome</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mentorPathwaySteps.map((step) => (
                      <TableRow key={step.stage}>
                        <TableCell className="font-semibold text-c2r-primary">
                          {step.stage}
                        </TableCell>
                        <TableCell>{step.description}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {step.outcome}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-6">
              <GetInvolvedNoteCard title="The Mentor Advantage">
                Unlike traditional career counseling, our mentor-first approach
                ensures students receive guidance from professionals who have
                walked the path they aspire to take.
              </GetInvolvedNoteCard>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Our Framework"
          title="The TRIANGLE Framework"
          subtitle="Three interconnected pillars of transformation."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <p className="c2r-prose mb-8 text-center">
              Success requires mentorship for direction, skills for capability,
              and opportunities for application—working together to create
              lasting impact.
            </p>
          </ScrollReveal>
        </GetInvolvedContentWidth>
        <TriangleFramework />
        <GetInvolvedContentWidth size="wide">
          <div className="mt-8">
            <GetInvolvedBenefitGrid
              items={triangleFramework}
              columns="grid-cols-1 sm:grid-cols-3"
              delay={100}
            />
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Our Impact"
          title="What We Contribute"
          subtitle="Tangible outcomes that transform lives and communities."
        />
        <GetInvolvedContentWidth size="content">
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="c2r-card-title mb-4 flex items-center gap-2">
                    <MdArrowForward className="h-5 w-5 text-c2r-primary" />
                    For Students
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Clear career direction and actionable roadmaps",
                      "Industry-relevant skills and certifications",
                      "Professional networks and mentorship relationships",
                      "Access to internships, jobs, and entrepreneurship support",
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
                  <h3 className="c2r-card-title mb-4 flex items-center gap-2">
                    <MdCheckCircle className="h-5 w-5 text-c2r-accent" />
                    For Communities
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Increased employability and economic mobility",
                      "Local talent development and retention",
                      "Culture of mentorship and giving back",
                      "Entrepreneurial ecosystem development",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-c2r-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Next Step"
          title="See Our Model in Action"
          subtitle="Explore our programs and discover how we're transforming lives through mentorship."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/programs" })}
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/get-involved" })}
              >
                Get Involved
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
