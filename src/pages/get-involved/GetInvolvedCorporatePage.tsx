import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { Briefcase, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LogoSlider } from "@/components/ui/logo-slider";
import { getImageUrl } from "@/lib/images";

const partnershipModelsCards = [
  {
    title: "Hiring partnerships",
    description:
      "Internships and jobs with structured onboarding and mentor support for both employer and candidate.",
    iconBg: "bg-c2r-primary",
  },
  {
    title: "CSR-funded cohorts",
    description:
      "CSR-funded skill and mentoring cohorts tailored to your impact goals and talent needs.",
    iconBg: "bg-c2r-secondary",
  },
  {
    title: "Employee volunteering",
    description:
      "Employee volunteering as mentors—building leadership and empathy while creating impact.",
    iconBg: "bg-c2r-accent",
  },
  {
    title: "Curriculum co-creation",
    description:
      "Curriculum co-creation aligned to hiring needs so training matches your roles and culture.",
    iconBg: "bg-c2r-black",
  },
  {
    title: "Targeted programs",
    description:
      "Targeted programs for women, rural youth, or underserved regions to broaden your pipeline.",
    iconBg: "bg-c2r-primary",
  },
];

const corporatesCanCards = [
  {
    title: "Employee volunteering",
    description:
      "Engage your people as mentor volunteers. Connect2Roots enables employees to give back through structured mentoring—building leadership and empathy while creating real impact for youth.",
    iconBg: "bg-c2r-black",
  },
  {
    title: "CSR & funding",
    description:
      "Fund mentoring or skill-readiness programs through CSR. Partner with us to run cohorts that prepare underprivileged youth for jobs and align with your ESG and social impact goals.",
    iconBg: "bg-c2r-primary",
  },
  {
    title: "Internships",
    description:
      "Provide internships to targeted youth cohorts. We help you connect with pre-screened, mentor-supported candidates ready to contribute and grow within your organization.",
    iconBg: "bg-c2r-secondary",
  },
  {
    title: "Hire job-ready talent",
    description:
      "Hire job-ready candidates from our pipeline. Access motivated, role-aligned talent who have gone through career mentoring and skill readiness—reducing hiring risk and ramp-up time.",
    iconBg: "bg-c2r-accent",
  },
];

const whyEmployersCards = [
  {
    title: "Mentor-supported candidates",
    description:
      "Motivated, mentor-supported candidates who bring clarity and commitment to the role from day one.",
    iconBg: "bg-c2r-primary",
  },
  {
    title: "Pre-trained talent",
    description:
      "Role-aligned, pre-trained talent so you spend less time on basics and more on performance.",
    iconBg: "bg-c2r-secondary",
  },
  {
    title: "Lower hiring risk",
    description:
      "Lower hiring risk and faster ramp-up through structured readiness and employer feedback loops.",
    iconBg: "bg-c2r-accent",
  },
  {
    title: "Strong retention",
    description:
      "Strong retention through post-placement mentoring and career clarity built in from the start.",
    iconBg: "bg-c2r-black",
  },
  {
    title: "CSR & ESG outcomes",
    description:
      "Measurable CSR and ESG outcomes that align with your sustainability and social impact goals.",
    iconBg: "bg-c2r-primary",
  },
];

const whatWeDoCards = [
  {
    title: "Career mentoring first",
    description:
      "Career mentoring before training begins—so candidates choose the right path and stay motivated.",
    iconBg: "bg-c2r-primary",
  },
  {
    title: "Role-based readiness",
    description:
      "Role-based skill readiness (technical + behavioral) aligned to your hiring needs.",
    iconBg: "bg-c2r-secondary",
  },
  {
    title: "Workplace readiness",
    description:
      "Workplace communication and professional etiquette so new hires integrate smoothly.",
    iconBg: "bg-c2r-accent",
  },
  {
    title: "Ongoing mentoring",
    description:
      "Ongoing mentoring during early employment to support retention and performance.",
    iconBg: "bg-c2r-black",
  },
  {
    title: "Outcome tracking",
    description:
      "Outcome tracking and employer feedback loops to continuously improve the pipeline.",
    iconBg: "bg-c2r-primary",
  },
];

const impactCards = [
  {
    title: "Job-ready in 8–12 weeks",
    description:
      "Candidates become job-ready within 8–12 weeks through mentor-supported, role-aligned preparation.",
    iconBg: "bg-c2r-primary",
  },
  {
    title: "Placed within 3 months",
    description:
      "Candidates placed within 3 months of completing our skill development and specialization program.",
    iconBg: "bg-c2r-secondary",
  },
  {
    title: "High repeat hiring intent",
    description:
      "High repeat hiring intent from partner employers who see strong on-the-job performance.",
    iconBg: "bg-c2r-accent",
  },
  {
    title: "Performance-driven results",
    description:
      "Strong on-the-job performance driven by mentoring and soft-skills readiness.",
    iconBg: "bg-c2r-black",
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

// Company logos from public/company logo/ (tata strive.png, Mc donalds.png, sican.png).
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
    <div className="flex flex-col overflow-x-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/corporate-handshake.dim_600x400.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl animate-hero-line">
              Corporate Partnerships
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-hero-line animate-hero-line-delay">
              Build your future-ready workforce—with purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Partnership Models"
            title="Employers Can Engage Through:"
            icon={<Briefcase className="h-8 w-8" />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {partnershipModelsCards.map((card, i) => (
              <ScrollReveal key={i} delay={80 + i * 50} direction="up">
                <Card className="h-full rounded-2xl border-0 bg-[#F7F5F2] shadow-md hover:shadow-xl transition-all duration-300 overflow-visible card-hover-lift">
                  <CardContent className="relative pt-10 pb-6 px-6 text-left">
                    <div
                      className={`absolute -top-3 -left-3 w-14 h-14 rounded-full ${card.iconBg} shadow-lg`}
                    />
                    <h3 className="relative text-lg font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ScrollReveal direction="up" delay={40}>
            <h2 className="heading-descender-safe text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Corporates can
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto flex flex-col gap-1">
            {corporatesCanCards.map((card, i) => (
              <ScrollReveal key={i} delay={60 + i * 40} direction="left">
                <div className="group flex items-start gap-4 py-4 px-5 rounded-xl border border-transparent hover:border-c2r-primary/20 hover:bg-muted/30 transition-colors">
                  <div
                    className={`mt-0.5 w-3 h-3 rounded-full shrink-0 ${card.iconBg}`}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="As an employer"
            title="Build Your Future-Ready Workforce—With Purpose"
            subtitle="Find motivated, job-ready talent—while creating social impact."
          />
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect2Roots works closely with employers to identify talent
                needs, co-design training pathways, and prepare underprivileged
                youth for meaningful entry-level roles. Our mentor-first
                approach ensures candidates are not just trained—but
                career-aware, motivated, and prepared to contribute from Day
                One.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Quick Links"
            title="Quick Links (With Forms)"
            subtitle=""
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {quickLinks.map((link, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="right">
                <Link
                  to={link.path}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary rounded-lg"
                >
                  <Card className="card-hover-lift cursor-pointer border-border hover:border-c2r-primary/30">
                    <CardContent className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-muted-foreground">
                        {link.label}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="shrink-0 gap-1 pointer-events-none"
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
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Why Employers Choose Connect2Roots"
            title="Purpose-Led Hiring Meets Business Outcomes"
            subtitle="We help organizations address entry-level talent challenges while advancing inclusive growth and workforce resilience."
          />
          <ScrollReveal direction="up">
            <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
              Our employer partners value Connect2Roots because we deliver:
            </p>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-0">
            {whyEmployersCards.map((card, i) => (
              <ScrollReveal key={i} delay={50 + i * 45} direction="up">
                <div className="flex gap-5 py-5 border-b border-border/60 last:border-0">
                  <div
                    className={`w-1 shrink-0 self-stretch min-h-[3rem] rounded-full ${card.iconBg} opacity-80`}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Impact"
            title="Impact at a Glance (Illustrative – update as data grows)"
            subtitle="These outcomes reflect mentor-supported, role-aligned preparation rather than short-term training alone."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {impactCards.map((card, i) => (
              <ScrollReveal key={i} delay={60 + i * 50} direction="up">
                <div className="text-center p-6 rounded-xl bg-muted/50 border border-border/50">
                  <p className="text-lg font-bold text-c2r-primary mb-1">
                    {card.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="What We Do for Employers"
            title="We Identify, Prepare, and Support Talent"
            subtitle="Connect2Roots works as an extended workforce partner, not just a sourcing channel. Our support includes:"
          />
          <div className="max-w-2xl mx-auto">
            {whatWeDoCards.map((card, i) => (
              <ScrollReveal key={i} delay={40 + i * 55} direction="left">
                <div className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-background shrink-0 ${card.iconBg}`}
                    />
                    {i < whatWeDoCards.length - 1 && (
                      <div className="w-px flex-1 min-h-[2rem] mt-1 bg-gradient-to-b from-c2r-primary/50 to-c2r-accent/30" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-semibold text-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <p className="max-w-2xl mx-auto mt-10 text-center text-muted-foreground">
              This creates business value for employers and long-term career
              stability for youth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ScrollReveal direction="up">
            <Button
              variant="outline"
              size="lg"
              className="mb-12 transition-all duration-300 hover:border-c2r-primary/50 hover:shadow-lg"
              onClick={() => navigate({ to: "/get-involved/how-it-works" })}
            >
              How It Works – In 3 Simple Steps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
          <ChapterHeader
            chapter="Challenges We Help Solve"
            title="Employment Challenges We Help Solve"
            subtitle=""
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {employmentChallenges.map((ch, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="left">
                <Card className="challenge-card border-l-4 border-l-c2r-accent/80">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">🔹 {ch.title}</h3>
                    <p className="text-muted-foreground mb-2">{ch.problem}</p>
                    <p className="text-muted-foreground mb-1">
                      <strong>Our solution:</strong>
                    </p>
                    <p className="text-muted-foreground">{ch.solution}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="What Makes Connect2Roots Different"
            title="Mentor-First. Career-Aware. Outcome-Focused."
            subtitle=""
          />
          <ScrollReveal direction="up" delay={60}>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Unlike models that begin with training alone, Connect2Roots
                begins with the individual. We believe sustainable employment
                requires:
              </p>
              <ul className="stagger-children space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" />{" "}
                  Career clarity before skill training
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" />{" "}
                  Human mentoring alongside technology
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" />{" "}
                  Long-term thinking beyond the first job
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Voices from Our Ecosystem"
            title="Voices from Our Ecosystem (Placeholder)"
            subtitle=""
          />
          <div className="max-w-2xl mx-auto">
            <ScrollReveal direction="fade" delay={80}>
              <Card className="animate-quote-reveal border border-c2r-accent/20 shadow-lg">
                <CardContent className="pt-8">
                  <Quote className="h-10 w-10 text-c2r-accent/50 mb-4 transition-transform duration-300 hover:scale-110" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    “Connect2Roots candidates come with clarity, humility, and
                    readiness—qualities that make onboarding smoother and
                    performance stronger.”
                  </p>
                  <p className="mt-4 font-medium">
                    — Corporate Partner (HR / Hiring Manager)
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Partners"
            title="Let’s Build the Workforce of 2047—Together"
            subtitle="Whether you are: Hiring entry-level talent · Building future skill pipelines · Advancing CSR & ESG goals"
          />
          <p className="text-center font-semibold text-muted-foreground mb-6">
            Corporate Partners
          </p>
          <div className="flex justify-center mb-10">
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
          <ScrollReveal direction="up" delay={60}>
            <div className="text-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                onClick={() =>
                  navigate({ to: "/get-involved/corporate-partnerships" })
                }
              >
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
