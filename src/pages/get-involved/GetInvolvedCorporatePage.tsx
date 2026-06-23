import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  MdBusinessCenter,
  MdPayments,
  MdGroups,
  MdMenuBook,
  MdTrackChanges,
  MdSchool,
  MdPersonSearch,
  MdEmojiEvents,
  MdShield,
  MdTrendingUp,
  MdEco,
  MdForum,
  MdBuild,
  MdBusiness,
  MdSync,
  MdBarChart,
  MdSchedule,
  MdEvent,
  MdRepeat,
  MdFormatQuote,
} from "react-icons/md";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LogoSlider } from "@/components/ui/logo-slider";
import { getImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedBenefitGrid,
  GetInvolvedSectionCta,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const CorporateIcon = getInvolvedIcons.corporate;

const partnershipModels = [
  {
    icon: MdBusinessCenter,
    title: "Hiring partnerships",
    description:
      "Internships and jobs with structured onboarding and mentor support for both employer and candidate.",
  },
  {
    icon: MdPayments,
    title: "CSR-funded cohorts",
    description:
      "CSR-funded skill and mentoring cohorts tailored to your impact goals and talent needs.",
  },
  {
    icon: MdGroups,
    title: "Employee volunteering",
    description:
      "Employee volunteering as mentors—building leadership and empathy while creating impact.",
  },
  {
    icon: MdMenuBook,
    title: "Curriculum co-creation",
    description:
      "Curriculum co-creation aligned to hiring needs so training matches your roles and culture.",
  },
  {
    icon: MdTrackChanges,
    title: "Targeted programs",
    description:
      "Targeted programs for women, rural youth, or underserved regions to broaden your pipeline.",
  },
];

const corporatesCan = [
  {
    icon: MdGroups,
    title: "Employee volunteering",
    description:
      "Engage your people as mentor volunteers. Connect2Roots enables employees to give back through structured mentoring—building leadership and empathy while creating real impact for youth.",
  },
  {
    icon: MdPayments,
    title: "CSR & funding",
    description:
      "Fund mentoring or skill-readiness programs through CSR. Partner with us to run cohorts that prepare underprivileged youth for jobs and align with your ESG and social impact goals.",
  },
  {
    icon: MdSchool,
    title: "Internships",
    description:
      "Provide internships to targeted youth cohorts. We help you connect with pre-screened, mentor-supported candidates ready to contribute and grow within your organization.",
  },
  {
    icon: MdPersonSearch,
    title: "Hire job-ready talent",
    description:
      "Hire job-ready candidates from our pipeline. Access motivated, role-aligned talent who have gone through career mentoring and skill readiness—reducing hiring risk and ramp-up time.",
  },
];

const whyEmployers = [
  {
    icon: MdGroups,
    title: "Mentor-supported candidates",
    description:
      "Motivated, mentor-supported candidates who bring clarity and commitment to the role from day one.",
  },
  {
    icon: MdEmojiEvents,
    title: "Pre-trained talent",
    description:
      "Role-aligned, pre-trained talent so you spend less time on basics and more on performance.",
  },
  {
    icon: MdShield,
    title: "Lower hiring risk",
    description:
      "Lower hiring risk and faster ramp-up through structured readiness and employer feedback loops.",
  },
  {
    icon: MdTrendingUp,
    title: "Strong retention",
    description:
      "Strong retention through post-placement mentoring and career clarity built in from the start.",
  },
  {
    icon: MdEco,
    title: "CSR & ESG outcomes",
    description:
      "Measurable CSR and ESG outcomes that align with your sustainability and social impact goals.",
  },
];

const whatWeDo = [
  {
    icon: MdForum,
    title: "Career mentoring first",
    description:
      "Career mentoring before training begins—so candidates choose the right path and stay motivated.",
  },
  {
    icon: MdBuild,
    title: "Role-based readiness",
    description:
      "Role-based skill readiness (technical + behavioral) aligned to your hiring needs.",
  },
  {
    icon: MdBusiness,
    title: "Workplace readiness",
    description:
      "Workplace communication and professional etiquette so new hires integrate smoothly.",
  },
  {
    icon: MdSync,
    title: "Ongoing mentoring",
    description:
      "Ongoing mentoring during early employment to support retention and performance.",
  },
  {
    icon: MdBarChart,
    title: "Outcome tracking",
    description:
      "Outcome tracking and employer feedback loops to continuously improve the pipeline.",
  },
];

const impact = [
  {
    icon: MdSchedule,
    title: "Job-ready in 8–12 weeks",
    description:
      "Candidates become job-ready within 8–12 weeks through mentor-supported, role-aligned preparation.",
  },
  {
    icon: MdEvent,
    title: "Placed within 3 months",
    description:
      "Candidates placed within 3 months of completing our skill development and specialization program.",
  },
  {
    icon: MdRepeat,
    title: "High repeat hiring intent",
    description:
      "High repeat hiring intent from partner employers who see strong on-the-job performance.",
  },
  {
    icon: MdTrendingUp,
    title: "Performance-driven results",
    description:
      "Strong on-the-job performance driven by mentoring and soft-skills readiness.",
  },
];

const quickLinks = [
  {
    label: "Looking for job-ready candidates?",
    cta: "Hire with Connect2Roots",
    path: "/contact",
  },
  {
    label: "CSR & Workforce Development Partnerships",
    cta: "Partner with Us",
    path: "/get-involved/corporate-partnerships",
  },
  {
    label: "Government & Public Sector Collaboration",
    cta: "Work with C2R",
    path: "/contact",
  },
];

const employmentChallenges = [
  {
    title: "Talent Scarcity",
    problem:
      "Many entry-level roles remain unfilled due to lack of job-ready candidates.",
    solution:
      "A reliable pipeline of diverse, motivated youth trained for specific roles—ready in weeks, not months.",
  },
  {
    title: "On-the-Job Performance",
    problem:
      "New hires often struggle with workplace expectations, communication, and confidence.",
    solution:
      "Mentor-led preparation ensures candidates understand the role, the sector, and the realities of the workplace. Result: faster productivity and smoother onboarding.",
  },
  {
    title: "High Attrition in Entry-Level Roles",
    problem: "Early-stage churn is costly and disruptive.",
    solution:
      "Candidates receive pre-employment career clarity and post-placement mentoring support. This leads to higher commitment and longer retention.",
  },
  {
    title: "Reskilling & Workforce Transition",
    problem:
      "Automation, digitization, and new business models are reshaping roles.",
    solution:
      "We partner with employers to reskill youth and early-career workers, prepare talent for emerging roles, and support transitions across sectors and job types.",
  },
];

const corporatePartners = [
  {
    name: "TATA Strive",
    localLogo: "/company logo/tata strive.png",
    website: "https://www.tatastrive.com",
  },
  {
    name: "MC Donalds",
    localLogo: "/company logo/Mc donalds.png",
    website: "https://www.mcdonalds.com",
  },
  {
    name: "SICAN Finserve Pvt. Ltd.",
    localLogo: "/company logo/sican.png",
    website: undefined as string | undefined,
  },
];

export default function GetInvolvedCorporatePage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/corporate-handshake.dim_600x400.jpg",
        )}
        chapter="Corporate Partnerships"
        title="Build your future-ready workforce—with purpose."
        subtitle="Find motivated, job-ready talent while creating social impact."
        icon={<CorporateIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/contact" })}
        >
          Partner With Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <ChapterHeader
          chapter="Partnership Models"
          title="Employers Can Engage Through"
          icon={<CorporateIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid
            items={partnershipModels}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Engagement"
          title="Corporates Can"
          subtitle="Multiple ways to partner with Connect2Roots."
          icon={<CorporateIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="content">
          <GetInvolvedBenefitGrid
            items={corporatesCan}
            columns="grid-cols-1 sm:grid-cols-2"
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="As an employer"
          title="Build Your Future-Ready Workforce—With Purpose"
          subtitle="Find motivated, job-ready talent—while creating social impact."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <p className="c2r-prose text-center">
              Connect2Roots works closely with employers to identify talent
              needs, co-design training pathways, and prepare underprivileged
              youth for meaningful entry-level roles. Our mentor-first approach
              ensures candidates are not just trained—but career-aware,
              motivated, and prepared to contribute from Day One.
            </p>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader chapter="Quick Links" title="Quick Links" />
        <GetInvolvedContentWidth size="narrow">
          <div className="space-y-4">
            {quickLinks.map((link, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link
                  to={link.path}
                  className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary"
                >
                  <Card className="cursor-pointer border border-border/60 shadow-sm transition-shadow duration-300 hover:border-c2r-primary/30 hover:shadow-md">
                    <CardContent className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-muted-foreground">
                        {link.label}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="pointer-events-none shrink-0 gap-1"
                      >
                        {link.cta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Why Employers Choose Connect2Roots"
          title="Purpose-Led Hiring Meets Business Outcomes"
          subtitle="We help organizations address entry-level talent challenges while advancing inclusive growth and workforce resilience."
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <p className="mb-8 text-center text-muted-foreground">
              Our employer partners value Connect2Roots because we deliver:
            </p>
          </ScrollReveal>
          <GetInvolvedBenefitGrid
            items={whyEmployers}
            columns="grid-cols-1 sm:grid-cols-2"
            delay={100}
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Impact"
          title="Impact at a Glance"
          subtitle="These outcomes reflect mentor-supported, role-aligned preparation rather than short-term training alone."
        />
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid
            items={impact}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="What We Do for Employers"
          title="We Identify, Prepare, and Support Talent"
          subtitle="Connect2Roots works as an extended workforce partner, not just a sourcing channel."
        />
        <GetInvolvedContentWidth size="content">
          <GetInvolvedBenefitGrid
            items={whatWeDo}
            columns="grid-cols-1 sm:grid-cols-2"
            delay={100}
          />
          <ScrollReveal delay={200}>
            <p className="mt-10 text-center text-muted-foreground">
              This creates business value for employers and long-term career
              stability for youth.
            </p>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate({ to: "/get-involved/how-it-works" })}
              >
                How It Works – In 3 Simple Steps
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
          <ChapterHeader
            chapter="Challenges"
            title="Employment Challenges We Help Solve"
          />
          <div className="space-y-6">
            {employmentChallenges.map((ch, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="border border-border/60 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="c2r-card-title mb-2">{ch.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {ch.problem}
                    </p>
                    <p className="mb-1 text-sm font-medium text-foreground">
                      Our solution:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {ch.solution}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="What Makes Connect2Roots Different"
          title="Mentor-First. Career-Aware. Outcome-Focused."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal delay={60}>
            <div className="space-y-4 text-muted-foreground">
              <p className="c2r-prose text-center">
                Unlike models that begin with training alone, Connect2Roots
                begins with the individual. We believe sustainable employment
                requires:
              </p>
              <ul className="space-y-2">
                {[
                  "Career clarity before skill training",
                  "Human mentoring alongside technology",
                  "Long-term thinking beyond the first job",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-c2r-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Voices"
          title="Voices from Our Ecosystem"
          subtitle="What partners say about working with Connect2Roots."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal delay={80}>
            <Card className="border border-border/60 shadow-lg">
              <CardContent className="pt-8">
                <MdFormatQuote className="mb-4 h-10 w-10 text-c2r-accent/50" />
                <p className="italic leading-relaxed text-muted-foreground">
                  "Connect2Roots candidates come with clarity, humility, and
                  readiness—qualities that make onboarding smoother and
                  performance stronger."
                </p>
                <p className="mt-4 font-medium">
                  — Corporate Partner (HR / Hiring Manager)
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Partners"
          title="Let's Build the Workforce of 2047—Together"
          subtitle="Whether you are hiring entry-level talent, building future skill pipelines, or advancing CSR & ESG goals."
        />
        <p className="mb-6 text-center font-semibold text-muted-foreground">
          Corporate Partners
        </p>
        <div className="mb-10 flex justify-center">
          <LogoSlider
            logos={corporatePartners.map((partner, i) => (
              <img
                key={i}
                src={partner.localLogo}
                alt={partner.name}
                className="object-contain"
              />
            ))}
            speed={40}
            direction="right"
            pauseOnHover
          />
        </div>
        <GetInvolvedSectionCta
          label="Partner with Us"
          onClick={() => navigate({ to: "/contact" })}
        />
      </GetInvolvedSection>
    </div>
  );
}
