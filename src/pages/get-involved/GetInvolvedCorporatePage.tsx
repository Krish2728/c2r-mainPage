import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Briefcase, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

const partnershipModels = [
  'Hiring partnerships (internships & jobs)',
  'CSR-funded skill & mentoring cohorts',
  'Employee volunteering as mentors',
  'Curriculum co-creation aligned to hiring needs',
  'Targeted programs for women, rural youth, or underserved regions',
];

const corporatesCan = [
  'Engage employees as mentor volunteers',
  'Fund mentoring or skill-readiness programs through CSR',
  'Provide internships to targeted youth cohorts',
  'Hire job-ready candidates',
];

const quickLinks = [
  { label: 'Looking for job-ready candidates?', cta: 'Hire with Connect2Roots', path: '/contact' },
  { label: 'CSR & Workforce Development Partnerships', cta: 'Partner with Us', path: '/get-involved/corporate-partnerships' },
  { label: 'Government & Public Sector Collaboration', cta: 'Work with C2R', path: '/contact' },
];

const whyEmployers = [
  'Motivated, mentor-supported candidates',
  'Role-aligned, pre-trained talent',
  'Lower hiring risk and faster ramp-up',
  'Strong retention through post-placement mentoring',
  'Measurable CSR and ESG outcomes',
];

const impactItems = [
  'candidates job-ready within 8–12 weeks',
  'candidates placed within 3 months of skill development specialization program completion',
  'High repeat hiring intent from partner employers',
  'Strong on-the-job performance driven by mentoring and soft-skills readiness',
];

const whatWeDo = [
  'Career mentoring before training begins',
  'Role-based skill readiness (technical + behavioral)',
  'Workplace communication and professional etiquette',
  'Ongoing mentoring during early employment',
  'Outcome tracking and employer feedback loops',
];

const employmentChallenges = [
  {
    title: 'Talent Scarcity',
    problem: 'Many entry-level roles remain unfilled due to lack of job-ready candidates.',
    solution: 'A reliable pipeline of diverse, motivated youth trained for specific roles—ready in weeks, not months.',
  },
  {
    title: 'On-the-Job Performance',
    problem: 'New hires often struggle with workplace expectations, communication, and confidence.',
    solution: 'Mentor-led preparation ensures candidates understand the role, the sector, and the realities of the workplace. Result: faster productivity and smoother onboarding.',
  },
  {
    title: 'High Attrition in Entry-Level Roles',
    problem: 'Early-stage churn is costly and disruptive.',
    solution: 'Candidates receive pre-employment career clarity and post-placement mentoring support. This leads to higher commitment and longer retention.',
  },
  {
    title: 'Reskilling & Workforce Transition',
    problem: 'Automation, digitization, and new business models are reshaping roles.',
    solution: 'We partner with employers to reskill youth and early-career workers, prepare talent for emerging roles, and support transitions across sectors and job types.',
  },
];

// Use logoUrl (Clearbit or any URL), or add images to public/partner-logos/ and set localLogo (e.g. '/partner-logos/tata-strive.png').
const corporatePartners = [
  { name: 'TATA Strive', localLogo: '/partner-logos/tata-strive.png', logoUrl: 'https://logo.clearbit.com/tatastrive.com', website: 'https://www.tatastrive.com' },
  { name: 'MC Donalds', localLogo: '/partner-logos/mcdonalds.png', logoUrl: 'https://logo.clearbit.com/mcdonalds.com', website: 'https://www.mcdonalds.com' },
  { name: 'SICAN Finserve Pvt. Ltd.', localLogo: '/partner-logos/sican-finserve.png', logoUrl: 'https://logo.clearbit.com/sicanfinserve.com', website: undefined as string | undefined },
];

function PartnerLogoCard({ partner }: { partner: typeof corporatePartners[0] }) {
  const [logoError, setLogoError] = useState(false);
  const [localError, setLocalError] = useState(false);
  const useLocal = partner.localLogo && !localError;
  const useRemote = partner.logoUrl && !logoError && !useLocal;
  const showLogo = useLocal || useRemote;
  const logoSrc = useLocal ? partner.localLogo! : (useRemote ? partner.logoUrl! : null);
  const content = (
    <div className="group flex flex-col items-center justify-center p-8 h-full min-h-[180px] rounded-2xl bg-background border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-c2r-primary/40 hover:-translate-y-1">
      <div className="relative w-32 h-20 flex items-center justify-center mb-4">
        {showLogo && logoSrc ? (
          <img
            src={logoSrc}
            alt={partner.name}
            className="max-h-16 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            onError={() => (logoSrc === partner.localLogo ? setLocalError(true) : setLogoError(true))}
          />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-c2r-primary/20 to-c2r-accent/20 text-2xl font-bold text-c2r-primary">
            {partner.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-center font-semibold text-foreground text-sm leading-tight">{partner.name}</span>
    </div>
  );
  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary rounded-2xl">
        {content}
      </a>
    );
  }
  return <div className="rounded-2xl">{content}</div>;
}

export default function GetInvolvedCorporatePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/corporate-handshake.dim_600x400.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Corporate Partnerships</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Build your future-ready workforce—with purpose.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader chapter="Partnership Models" title="Employers Can Engage Through:" icon={<Briefcase className="h-8 w-8" />} />
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {partnershipModels.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-6">Corporates can:</h2>
            <ul className="max-w-2xl mx-auto space-y-2 text-muted-foreground text-center">
              {corporatesCan.map((item, i) => (
                <li key={i} className="flex justify-center items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-c2r-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader chapter="As an employer" title="Build Your Future-Ready Workforce—With Purpose" subtitle="Find motivated, job-ready talent—while creating social impact." />
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect2Roots works closely with employers to identify talent needs, co-design training pathways, and prepare underprivileged youth for meaningful entry-level roles. Our mentor-first approach ensures candidates are not just trained—but career-aware, motivated, and prepared to contribute from Day One.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader chapter="Quick Links" title="Quick Links (With Forms)" subtitle="" />
          <div className="max-w-2xl mx-auto space-y-4">
            {quickLinks.map((link, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate({ to: link.path })}>
                  <CardContent className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-muted-foreground">{link.label}</span>
                    <Button variant="outline" size="sm" className="shrink-0 gap-1">
                      {link.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader chapter="Why Employers Choose Connect2Roots" title="Purpose-Led Hiring Meets Business Outcomes" subtitle="We help organizations address entry-level talent challenges while advancing inclusive growth and workforce resilience." />
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">Our employer partners value Connect2Roots because we deliver:</p>
            <ul className="space-y-2">
              {whyEmployers.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader chapter="Impact" title="Impact at a Glance (Illustrative – update as data grows)" subtitle="These outcomes reflect mentor-supported, role-aligned preparation rather than short-term training alone." />
          <ul className="max-w-2xl mx-auto space-y-2 text-muted-foreground">
            {impactItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-c2r-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader chapter="What We Do for Employers" title="We Identify, Prepare, and Support Talent" subtitle="Connect2Roots works as an extended workforce partner, not just a sourcing channel. Our support includes:" />
          <ul className="max-w-2xl mx-auto space-y-2 text-muted-foreground">
            {whatWeDo.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            This creates business value for employers and long-term career stability for youth.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Button variant="outline" size="lg" className="mb-12" onClick={() => navigate({ to: '/get-involved/how-it-works' })}>
            How It Works – In 3 Simple Steps
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <ChapterHeader chapter="Challenges We Help Solve" title="Employment Challenges We Help Solve" subtitle="" />
          <div className="max-w-4xl mx-auto space-y-8">
            {employmentChallenges.map((ch, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Card className="border-l-4 border-l-c2r-accent">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">🔹 {ch.title}</h3>
                    <p className="text-muted-foreground mb-2">{ch.problem}</p>
                    <p className="text-muted-foreground mb-1"><strong>Our solution:</strong></p>
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
          <ChapterHeader chapter="What Makes Connect2Roots Different" title="Mentor-First. Career-Aware. Outcome-Focused." subtitle="" />
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>Unlike models that begin with training alone, Connect2Roots begins with the individual. We believe sustainable employment requires:</p>
            <ul className="space-y-2">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" /> Career clarity before skill training</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" /> Human mentoring alongside technology</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-c2r-primary shrink-0" /> Long-term thinking beyond the first job</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader chapter="Voices from Our Ecosystem" title="Voices from Our Ecosystem (Placeholder)" subtitle="" />
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-8">
                <Quote className="h-10 w-10 text-c2r-accent/50 mb-4" />
                <p className="text-muted-foreground italic leading-relaxed">
                  “Connect2Roots candidates come with clarity, humility, and readiness—qualities that make onboarding smoother and performance stronger.”
                </p>
                <p className="mt-4 font-medium">— Corporate Partner (HR / Hiring Manager)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ChapterHeader chapter="Partners" title="Let’s Build the Workforce of 2047—Together" subtitle="Whether you are: Hiring entry-level talent · Building future skill pipelines · Advancing CSR & ESG goals" />
          <p className="text-center font-semibold text-muted-foreground mb-10">Corporate Partners</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
            {corporatePartners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 100}>
                <PartnerLogoCard partner={partner} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/get-involved/corporate-partnerships' })}>
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
