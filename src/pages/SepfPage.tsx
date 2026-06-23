import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import {
  MdEco,
  MdFavorite,
  MdRocketLaunch,
  MdLocationOn,
  MdTrackChanges,
  MdCampaign,
  MdGroups,
  MdLightbulb,
} from "react-icons/md";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sepfIcons, ICON } from "@/lib/siteIcons";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";
import { StoryCard } from "@/components/StoryCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const SEPF_SECTION_IDS = [
  "our-mission",
  "sdgs",
  "focus-areas",
  "join-sepf",
] as const;

const navItems: {
  slug: (typeof SEPF_SECTION_IDS)[number];
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    slug: "our-mission",
    title: "Shaping the Future of Work",
    description: "Our mission and what we do",
    icon: sepfIcons.mission,
  },
  {
    slug: "sdgs",
    title: "UN Sustainable Development Goals",
    description: "Global impact alignment",
    icon: sepfIcons.sdgs,
  },
  {
    slug: "focus-areas",
    title: "Five Core Skill Clusters",
    description: "Future-ready skills",
    icon: sepfIcons.skills,
  },
  {
    slug: "join-sepf",
    title: "Join Us in Shaping the Future",
    description: "Collaborate with SEPF",
    icon: sepfIcons.join,
  },
];

const sdgs = [
  {
    number: 4,
    title: "Quality Education",
    description:
      "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.",
    image: getImageUrl("/assets/generated/sdg-4-education.dim_200x200.png"),
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    description:
      "Promoting sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
    image: getImageUrl("/assets/generated/sdg-8-work.dim_200x200.png"),
  },
  {
    number: 9,
    title: "Industry, Innovation, and Infrastructure",
    description:
      "Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.",
    image: getImageUrl("/assets/generated/sdg-9-innovation.dim_200x200.png"),
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description:
      "Reducing inequality within and among countries through equitable access to opportunities.",
    image: getImageUrl("/assets/generated/sdg-10-equality.dim_200x200.png"),
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Strengthening the means of implementation and revitalizing global partnerships for sustainable development.",
    image: getImageUrl("/assets/generated/sdg-17-partnerships.dim_200x200.png"),
  },
];

const skillClusters = [
  {
    title: "Digital Skills",
    description:
      "Empowering youth with coding, data analytics, AI literacy, and digital marketing capabilities for the tech-driven future.",
    icon: MdTrackChanges,
    image: getImageUrl("/assets/generated/digital-skills.dim_400x300.jpg"),
  },
  {
    title: "Sustainability Skills",
    description:
      "Building awareness and competencies in green technologies, circular economy, and climate-conscious practices.",
    icon: MdEco,
    image: getImageUrl(
      "/assets/generated/sustainability-skills.dim_400x300.jpg",
    ),
  },
  {
    title: "Human Skills",
    description:
      "Cultivating critical thinking, emotional intelligence, communication, and adaptability for collaborative work environments.",
    icon: MdFavorite,
    image: getImageUrl("/assets/generated/human-skills.dim_400x300.jpg"),
  },
  {
    title: "Entrepreneurship Skills",
    description:
      "Fostering innovation mindset, business acumen, and self-employment capabilities for creating sustainable livelihoods.",
    icon: MdRocketLaunch,
    image: getImageUrl(
      "/assets/generated/entrepreneurship-skills.dim_400x300.jpg",
    ),
  },
  {
    title: "Local Livelihood Skills",
    description:
      "Strengthening traditional crafts, agriculture tech, and community-based enterprises rooted in local contexts.",
    icon: MdLocationOn,
    image: getImageUrl("/assets/generated/livelihood-skills.dim_400x300.jpg"),
  },
];

const contributionAreas = [
  {
    icon: MdCampaign,
    title: "Policy Advocacy",
    description:
      "We engage with government bodies, educational institutions, and industry leaders to advocate for policies that expand access to quality career guidance and skill development. Our research briefs inform policy decisions at state and national levels, ensuring the voices of first-generation learners are heard in corridors of power.",
  },
  {
    icon: MdLightbulb,
    title: "Research & Insights",
    description:
      "Our research team conducts longitudinal studies tracking career outcomes, analyzes labor market trends, and publishes white papers on emerging skill demands. We translate complex data into actionable insights that inform curriculum design, mentor training, and student guidance across the Connect2Roots ecosystem.",
  },
  {
    icon: MdGroups,
    title: "Strategic Partnerships",
    description:
      "SEPF convenes industry leaders, academic institutions, and civil society organizations to co-create solutions for youth employability. Through multi-stakeholder forums, we facilitate knowledge exchange, pilot innovative programs, and scale proven interventions that bridge the gap between education and employment.",
  },
];

function scrollToSection(slug: string) {
  document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
}

function BulletList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-c2r-primary" />
          <p className="text-sm text-muted-foreground sm:text-base">
            <strong className="text-foreground">{item.label}:</strong>{" "}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function SepfPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (!SEPF_SECTION_IDS.includes(hash as (typeof SEPF_SECTION_IDS)[number]))
      return;
    const timeoutId = setTimeout(() => scrollToSection(hash), 100);
    return () => clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/policy-research.dim_600x400.jpg",
        )}
        chapter="Policy & Research"
        title="C2R SEPF"
        subtitle="Skills & Entrepreneurship Policy Forum — the foresight, research, and policy arm of Connect2Roots, bridging aspirations with opportunities through evidence-based insights and collaborative action."
        icon={<sepfIcons.hub className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => scrollToSection("our-mission")}
        >
          Explore SEPF
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <GetInvolvedSection id="our-mission">
        <ChapterHeader
          chapter="Our Mission"
          title="Shaping the Future of Work"
          subtitle="SEPF serves as the strategic intelligence hub, analyzing emerging career pathways and advocating for policies that create sustainable opportunities for first-generation learners."
          icon={<sepfIcons.mission className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <div className="space-y-5">
                <h3 className="c2r-card-title">What We Do</h3>
                <GetInvolvedIntroCard>
                  <p className="c2r-prose">
                    SEPF conducts deep research into the evolving landscape of
                    skills, entrepreneurship, and employment. We identify
                    future-ready career pathways and translate complex labor
                    market trends into actionable guidance for youth, educators,
                    and policymakers.
                  </p>
                  <p className="c2r-prose">
                    Through partnerships with industry, academia, and
                    government, we advocate for inclusive policies that ensure
                    no talented individual is left behind due to lack of
                    information or opportunity.
                  </p>
                  <p className="c2r-prose">
                    Our work informs Connect2Roots&apos; mentorship curriculum,
                    ensuring every conversation between mentor and mentee is
                    grounded in real-world relevance and forward-looking
                    insights.
                  </p>
                </GetInvolvedIntroCard>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <img
                src={getImageUrl(
                  "/assets/generated/policy-research.dim_600x400.jpg",
                )}
                alt="Policy Research"
                className="w-full rounded-xl border border-border/60 object-cover shadow-md"
              />
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="sdgs" variant="muted">
        <ChapterHeader
          chapter="Global Impact"
          title="Aligned with UN Sustainable Development Goals"
          subtitle="Our work directly contributes to achieving the United Nations' vision for a more equitable and sustainable world."
          icon={<sepfIcons.sdgs className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <ScrollReveal delay={100}>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {sdgs.map((sdg) => (
                  <CarouselItem
                    key={sdg.number}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-md">
                      <CardHeader>
                        <div className="mb-4 flex items-center gap-4">
                          <img
                            src={sdg.image}
                            alt={`SDG ${sdg.number}`}
                            className="h-20 w-20"
                          />
                          <div>
                            <div className="mb-1 text-sm font-semibold text-c2r-accent">
                              SDG {sdg.number}
                            </div>
                            <CardTitle className="text-xl">
                              {sdg.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {sdg.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="focus-areas">
        <ChapterHeader
          chapter="Future-Ready Skills"
          title="Five Core Skill Clusters"
          subtitle="Preparing youth for the multi-dimensional demands of tomorrow's workforce through comprehensive skill development."
          icon={<sepfIcons.skills className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {skillClusters.map((cluster, index) => (
              <ScrollReveal key={cluster.title} delay={index * 80}>
                <Card className="flex h-full flex-col border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <CardHeader className="p-4 pb-2">
                    <cluster.icon className="mx-auto mb-2 h-8 w-8 text-c2r-primary" />
                    <CardTitle className="text-center text-base font-semibold leading-tight">
                      {cluster.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-4 pt-0">
                    <div className="mb-3 flex-shrink-0 overflow-hidden rounded-md border border-border/40">
                      <img
                        src={cluster.image}
                        alt={cluster.title}
                        className="h-28 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <p className="flex-1 text-center text-xs leading-snug text-muted-foreground">
                      {cluster.description}
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
          chapter="The Challenge"
          title="Youth & the Future of Work"
          subtitle="Understanding the seismic shifts reshaping careers and the unique challenges facing first-generation learners."
          icon={<sepfIcons.future className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <ScrollReveal delay={100}>
            <img
              src={getImageUrl(
                "/assets/generated/future-of-work.dim_800x500.jpg",
              )}
              alt="Future of Work"
              className="mb-8 w-full rounded-xl border border-border/60 object-cover shadow-md"
            />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={150}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="c2r-card-title">
                    Global Shifts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      {
                        label: "Automation & AI",
                        text: "Routine jobs are disappearing while demand for creative, analytical, and interpersonal skills is surging.",
                      },
                      {
                        label: "Gig Economy",
                        text: "Traditional employment models are giving way to flexible, project-based work requiring entrepreneurial mindsets.",
                      },
                      {
                        label: "Green Transition",
                        text: "Climate action is creating millions of new jobs in renewable energy, sustainable agriculture, and circular economy.",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="c2r-card-title">
                    First-Generation Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      {
                        label: "Information Gap",
                        text: "Limited access to career guidance and awareness of emerging opportunities beyond traditional paths.",
                      },
                      {
                        label: "Network Deficit",
                        text: "Lack of professional connections and mentors who can open doors and provide insider knowledge.",
                      },
                      {
                        label: "Skill Mismatch",
                        text: "Educational systems often lag behind industry needs, leaving youth unprepared for real-world demands.",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Critical Insights"
          title="Key Themes Shaping Careers"
          subtitle="Three fundamental shifts that every young person must understand and prepare for."
        />
        <GetInvolvedContentWidth size="wide">
          <div className="space-y-12">
            <StoryCard
              title="Multi-Career Life Paths"
              description="The era of single-career lifetimes is over. Today's youth will navigate 5-7 different careers, requiring continuous reinvention and adaptability. Success belongs to those who embrace lifelong learning and view career transitions as opportunities for growth rather than setbacks."
              image={getImageUrl(
                "/assets/generated/future-of-work.dim_800x500.jpg",
              )}
              delay={100}
            />
            <StoryCard
              title="The Gig Work Evolution"
              description="Freelancing, consulting, and project-based work are becoming mainstream. This shift demands entrepreneurial skills, personal branding, and the ability to manage uncertainty. Young people must learn to be their own CEOs, marketing their skills and building diverse income streams."
              image={getImageUrl(
                "/assets/generated/mentorship-workshop.dim_800x600.jpg",
              )}
              delay={200}
              reverse
            />
            <StoryCard
              title="Continuous Learning Imperative"
              description="Skills have a shorter shelf life than ever before. What you learn today may be obsolete in five years. The winners in tomorrow's economy will be those who cultivate curiosity, embrace discomfort, and commit to perpetual skill upgrading through micro-credentials, online courses, and experiential learning."
              image={getImageUrl(
                "/assets/generated/volunteer-mentoring.dim_800x500.jpg",
              )}
              delay={300}
            />
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ChapterHeader
          chapter="The Bridge"
          title="Why Career Mentoring Matters"
          subtitle="Mentoring is the critical link that transforms skills into sustainable livelihoods and aspirations into achievements."
          icon={<sepfIcons.mentoring className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <ScrollReveal delay={100}>
            <Card className="mb-8 border border-border/60 shadow-sm">
              <CardContent className="pt-8">
                <div className="grid gap-8 text-center md:grid-cols-3">
                  <div>
                    <AnimatedCounter
                      end={73}
                      duration={2000}
                      suffix="%"
                      className="text-5xl font-bold text-c2r-primary"
                    />
                    <p className="c2r-prose-emphasis mb-2 mt-4">
                      Career Clarity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      of mentored youth report clearer career goals
                    </p>
                  </div>
                  <div>
                    <AnimatedCounter
                      end={2.5}
                      duration={2000}
                      suffix="x"
                      decimals={1}
                      className="text-5xl font-bold text-c2r-secondary"
                    />
                    <p className="c2r-prose-emphasis mb-2 mt-4">
                      Higher Earnings
                    </p>
                    <p className="text-sm text-muted-foreground">
                      average income increase with mentorship
                    </p>
                  </div>
                  <div>
                    <AnimatedCounter
                      end={85}
                      duration={2000}
                      suffix="%"
                      className="text-5xl font-bold text-c2r-accent"
                    />
                    <p className="c2r-prose-emphasis mb-2 mt-4">
                      Job Placement
                    </p>
                    <p className="text-sm text-muted-foreground">
                      success rate within 6 months of program completion
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={150}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="c2r-card-title">
                    What Mentors Provide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      {
                        label: "Insider Knowledge",
                        text: "Real-world insights that textbooks can't teach",
                      },
                      {
                        label: "Network Access",
                        text: "Introductions to opportunities and key contacts",
                      },
                      {
                        label: "Confidence Building",
                        text: "Encouragement to pursue ambitious goals",
                      },
                      {
                        label: "Course Correction",
                        text: "Timely feedback to avoid costly mistakes",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="c2r-card-title">
                    SEPF&apos;s Role in Mentoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      {
                        label: "Curriculum Design",
                        text: "Evidence-based mentoring frameworks",
                      },
                      {
                        label: "Trend Analysis",
                        text: "Identifying emerging career pathways",
                      },
                      {
                        label: "Mentor Training",
                        text: "Equipping mentors with latest insights",
                      },
                      {
                        label: "Impact Measurement",
                        text: "Tracking outcomes and refining approaches",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="join-sepf">
        <ChapterHeader
          chapter="Our Impact"
          title="SEPF's Contribution to the Ecosystem"
          subtitle="Driving systemic change through research, advocacy, and strategic partnerships."
          icon={<sepfIcons.skills className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <div className="space-y-6">
            {contributionAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={100 + index * 50}>
                <Card className="border border-border/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 c2r-card-title">
                      <area.icon className="h-8 w-8 text-c2r-primary" />
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="c2r-prose">{area.description}</p>
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
          title="Join Us in Shaping the Future"
          subtitle="Whether you're a researcher, policymaker, industry leader, or passionate advocate for youth empowerment, there's a place for you in the SEPF community."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className={GI_BTN_PRIMARY}
                onClick={() => navigate({ to: "/contact" })}
              >
                Collaborate With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={GI_BTN_PRIMARY}
                asChild
              >
                <Link to="/resources">Access Resources</Link>
              </Button>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
