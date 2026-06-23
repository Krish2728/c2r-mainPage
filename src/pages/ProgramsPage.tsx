import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { programIcons, ICON } from "@/lib/siteIcons";
import { usePrograms } from "@/hooks/useQueries";
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

type ProgramData = {
  id: number;
  slug: string;
  chapter: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconType;
  image: string;
  story: string;
  objective: string;
  focusAreas: string[];
  modules: string[];
  outcomes: string[];
};

const PROGRAM_SLUGS = ["career-catalyst", "skill-development", "livelihoods"];

const defaultPrograms: ProgramData[] = [
  {
    id: 1,
    slug: "career-catalyst",
    chapter: "Dream",
    shortTitle: "Career Catalyst",
    title: "C2R Career Catalyst Mentorship Program",
    description: "Career guidance and mentorship",
    icon: programIcons.career,
    image: getImageUrl("/assets/generated/career-catalyst.dim_600x400.jpg"),
    story:
      "Meet Priya, a first-generation college student who dreamed of becoming a software engineer but didn't know where to start. Through our mentorship program, she connected with an industry professional who guided her journey, reviewed her resume, and opened doors she never knew existed.",
    objective:
      "To provide personalized career guidance and mentorship to students and young professionals from underserved communities, helping them navigate their career paths and achieve their professional goals.",
    focusAreas: [
      "Career exploration and goal setting",
      "Resume building and interview preparation",
      "Professional networking and personal branding",
      "Industry insights and workplace readiness",
    ],
    modules: [
      "One-on-one mentorship sessions",
      "Career assessment and planning workshops",
      "Mock interviews and feedback sessions",
      "Networking events with industry professionals",
    ],
    outcomes: [
      "Increased career clarity and confidence",
      "Improved job application success rates",
      "Expanded professional networks",
      "Higher employment rates among participants",
    ],
  },
  {
    id: 2,
    slug: "skill-development",
    chapter: "Learn",
    shortTitle: "Skill Development",
    title: "C2R Skill Development Program",
    description: "Industry-relevant training and certifications",
    icon: programIcons.skills,
    image: getImageUrl("/assets/generated/skill-development.dim_600x400.jpg"),
    story:
      "Rahul had the passion but lacked the technical skills employers demanded. Our skill development program equipped him with industry-recognized certifications and hands-on project experience. Today, he works at a leading tech company, mentoring others who were once in his shoes.",
    objective:
      "To bridge the skills gap by providing industry-relevant training programs that prepare participants for in-demand careers and enhance their employability.",
    focusAreas: [
      "Technical skills training (IT, digital marketing, data analysis)",
      "Soft skills development (communication, leadership, teamwork)",
      "Industry certifications and credentials",
      "Hands-on project experience",
    ],
    modules: [
      "Structured training courses with expert instructors",
      "Practical assignments and real-world projects",
      "Certification preparation and exam support",
      "Job placement assistance and career counseling",
    ],
    outcomes: [
      "Industry-recognized certifications",
      "Enhanced technical and soft skills",
      "Portfolio of completed projects",
      "Improved job market competitiveness",
    ],
  },
  {
    id: 3,
    slug: "livelihoods",
    chapter: "Thrive",
    shortTitle: "Livelihoods & Entrepreneurship",
    title: "C2R Livelihoods & Entrepreneurship Support Program",
    description: "Entrepreneurship and sustainable ventures",
    icon: programIcons.livelihoods,
    image: getImageUrl(
      "/assets/generated/entrepreneurship-support.dim_600x400.jpg",
    ),
    story:
      "Ayesha had a vision to create sustainable fashion from recycled materials. With our entrepreneurship support, she developed a business plan, secured funding, and launched her venture. Now, her business employs 15 people from her community, creating a ripple effect of opportunity.",
    objective:
      "To empower aspiring entrepreneurs and small business owners with the knowledge, resources, and support needed to launch and grow sustainable ventures that create economic opportunities within their communities.",
    focusAreas: [
      "Business planning and strategy development",
      "Financial literacy and funding access",
      "Marketing and customer acquisition",
      "Operations management and scaling",
    ],
    modules: [
      "Entrepreneurship bootcamps and workshops",
      "Business mentorship and advisory services",
      "Pitch preparation and investor connections",
      "Access to microfinance and grant opportunities",
    ],
    outcomes: [
      "Viable business plans and models",
      "Launched or scaled businesses",
      "Access to funding and resources",
      "Job creation within communities",
    ],
  },
];

const sectionVariants = ["gradient", "default", "muted"] as const;

function scrollToProgram(slug: string) {
  document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
}

function ProgramBlock({
  program,
  index,
}: {
  program: ProgramData;
  index: number;
}) {
  const Icon = program.icon;
  const imageRight = index % 2 === 1;

  return (
    <GetInvolvedSection
      id={program.slug}
      variant={sectionVariants[index] ?? "default"}
    >
      <ChapterHeader
        chapter={`Chapter ${index + 1}: ${program.chapter}`}
        title={program.title}
        icon={<Icon className="h-8 w-8" />}
      />
      <GetInvolvedContentWidth size="wide">
        <div className="space-y-8">
          <ScrollReveal delay={100}>
            <GetInvolvedIntroCard>
              <h3 className="c2r-card-title">A Story of {program.chapter}</h3>
              <p className="c2r-prose italic">{program.story}</p>
            </GetInvolvedIntroCard>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Card className="overflow-hidden border border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <div className="overflow-hidden">
                  <div
                    className={`relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md sm:mb-0 sm:max-w-[40%] sm:w-72 ${
                      imageRight
                        ? "sm:float-right sm:ml-6"
                        : "sm:float-left sm:mr-6"
                    }`}
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="c2r-card-title mb-3">Our Approach</h4>
                      <p className="c2r-prose">{program.objective}</p>
                    </div>

                    <div>
                      <h4 className="c2r-card-title mb-3">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.focusAreas.map((area) => (
                          <Badge
                            key={area}
                            variant="secondary"
                            className="border border-border/60 text-sm"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="c2r-card-title mb-3">
                          What You&apos;ll Experience
                        </h4>
                        <ul className="space-y-2">
                          {program.modules.map((module) => (
                            <li
                              key={module}
                              className="flex items-start gap-2 text-sm text-muted-foreground sm:text-base"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-c2r-accent" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="c2r-card-title mb-3">
                          Your Transformation
                        </h4>
                        <ul className="space-y-2">
                          {program.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-2 text-sm text-muted-foreground sm:text-base"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-c2r-primary" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </GetInvolvedContentWidth>
    </GetInvolvedSection>
  );
}

export default function ProgramsPage() {
  const navigate = useNavigate();
  const { data: programs = [] } = usePrograms();
  const location = useLocation();

  const displayPrograms: ProgramData[] =
    programs.length > 0
      ? programs.map((p, index) => {
          const defaultProg =
            defaultPrograms.find((dp) => dp.id === Number(p.id)) ??
            defaultPrograms[index] ??
            defaultPrograms[0];
          return {
            ...defaultProg,
            ...p,
            id: Number(p.id),
            slug: PROGRAM_SLUGS[index] ?? defaultProg.slug,
            chapter: defaultProg.chapter,
            shortTitle: defaultProg.shortTitle,
            description: defaultProg.description,
            story: defaultProg.story,
            icon: defaultProg.icon,
            image: defaultProg.image,
            focusAreas: defaultProg.focusAreas,
            modules: defaultProg.modules,
            outcomes: defaultProg.outcomes,
          };
        })
      : defaultPrograms;

  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (!PROGRAM_SLUGS.includes(hash)) return;
    const timeoutId = setTimeout(() => scrollToProgram(hash), 100);
    return () => clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/career-catalyst.dim_600x400.jpg",
        )}
        chapter="Our Programs"
        title="Three Chapters of Transformation"
        subtitle="Dream, Learn, Thrive—these are the chapters we write together."
        icon={<programIcons.hub className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => scrollToProgram("career-catalyst")}
        >
          Explore Programs
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-3">
            {displayPrograms.map((program, index) => (
              <ScrollReveal key={program.slug} delay={index * 100}>
                <button
                  type="button"
                  onClick={() => scrollToProgram(program.slug)}
                  className="block h-full w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary focus-visible:ring-offset-2"
                >
                  <Card className="h-full cursor-pointer border border-border/60 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <CardContent className="flex h-full flex-col items-center gap-4 pt-8 pb-8 text-center">
                      <program.icon
                        className={`${ICON.nav} text-c2r-primary`}
                      />
                      <h3 className="c2r-card-title leading-snug">
                        {program.shortTitle}
                      </h3>
                      <p className="c2r-prose-sm">{program.description}</p>
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

      {displayPrograms.map((program, index) => (
        <ProgramBlock key={program.slug} program={program} index={index} />
      ))}

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="Next Step"
          title="Ready to Write Your Chapter?"
          subtitle="Every great story begins with a single step. Take yours today."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/mentorship" })}
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/contact" })}
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
