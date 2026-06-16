import { useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Check, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";

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

export default function MentorshipPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // When landing with hash (#mentee, #mentor, #why-mentorship), scroll to that section once DOM is ready
  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (hash !== "mentee" && hash !== "mentor" && hash !== "why-mentorship")
      return;
    const timeoutId = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return (
    <div className="flex flex-col">
      {/* Hero: Where Paths Cross, Lives Change */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${getImageUrl("/assets/generated/mentorship-workshop.dim_800x600.jpg")})`,
        }}
      >
        <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="heading-descender-safe mb-6 text-5xl font-bold tracking-tight md:text-6xl leading-tight">
              Where Paths Cross, Lives Change
            </h1>
            <p className="c2r-hero-subtitle max-w-2xl mx-auto">
              The story of mentorship is the story of human connection—where
              experience meets aspiration, and guidance transforms into
              possibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why Mentorship Matters */}
      <section id="why-mentorship" className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-c2r-accent/20 text-c2r-accent text-xs font-semibold uppercase tracking-wider mb-4">
                The Power of Connection
              </span>
              <h2 className="heading-descender-safe text-4xl font-bold text-c2r-primary mb-3">
                Why Mentorship Matters
              </h2>
              <p className="c2r-prose">
                One conversation can change everything
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-10 md:grid-cols-2 items-center mt-12">
            <ScrollReveal direction="left">
              <img
                src={getImageUrl(
                  "/assets/generated/mentorship-workshop.dim_800x600.jpg",
                )}
                alt="Mentoring session"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-xl shadow-md bg-card border border-border p-6 md:p-8 border-l-4 border-l-c2r-accent">
                <h3 className="c2r-card-title mb-4">The Ripple Effect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mentorship isn't just about career advice—it's about seeing
                  potential where others see obstacles. It's about opening
                  doors, sharing wisdom, and believing in someone's journey.
                  When a mentor invests in a mentee, they don't just change one
                  life; they create ripples that touch families, communities,
                  and future generations.
                </p>
                <blockquote className="pl-4 border-l-4 border-l-c2r-primary italic text-muted-foreground">
                  My mentor didn't just teach me skills; they taught me to
                  believe in myself. That belief changed everything.
                </blockquote>
                <p className="text-sm text-muted-foreground mt-2">
                  — Former Mentee, Now a Mentor
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Seekers - Your Journey Begins Here (id for navbar scroll) */}
      <section className="py-20 md:py-28 bg-muted/30" id="mentee">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Users className="h-12 w-12 mx-auto text-c2r-accent mb-4" />
              <span className="inline-block px-4 py-1.5 rounded-full bg-c2r-accent/20 text-c2r-accent text-xs font-semibold uppercase tracking-wider mb-4">
                For Seekers
              </span>
              <h2 className="heading-descender-safe text-4xl font-bold text-c2r-primary mb-3">
                Your Journey Begins Here
              </h2>
              <p className="c2r-prose max-w-xl mx-auto">
                Every expert was once a beginner. Every success story started
                with a question.
              </p>
            </div>
          </ScrollReveal>

          {/* Ayesha testimonial */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-16 rounded-xl shadow-md bg-card p-6 md:p-8 border-l-4 border-l-c2r-accent">
              <h3 className="text-lg font-bold mb-4">
                How Mentoring Changed Ayesha's Journey
              </h3>
              <p className="italic text-muted-foreground leading-relaxed mb-4">
                "I was lost, unsure of which path to take. My mentor didn't give
                me all the answers—they helped me discover them myself. Through
                our conversations, I found clarity, confidence, and a career I
                love. Now, I'm paying it forward by mentoring others."
              </p>
              <p className="text-sm text-muted-foreground">
                — Ayesha, Software Engineer
              </p>
            </div>
          </ScrollReveal>

          {/* Two columns: What You'll Gain | Your Journey Unfolds */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <ScrollReveal direction="left">
              <div>
                <h3 className="c2r-card-title mb-6">What You'll Gain</h3>
                <ul className="space-y-3 mb-8">
                  {SEEKER_GAINS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-c2r-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                {MENTOR_AUTH_MENTEE ? (
                  <Button
                    size="lg"
                    className="gap-3 text-lg font-semibold px-10 py-7 min-h-[56px] shadow-lg hover:shadow-xl transition-shadow bg-c2r-primary hover:bg-c2r-primary/90 text-white"
                    asChild
                  >
                    <a
                      href={MENTOR_AUTH_MENTEE}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Become a Mentee
                      <ArrowRight className="h-6 w-6" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="gap-3 text-lg font-semibold px-10 py-7 min-h-[56px] shadow-lg hover:shadow-xl transition-shadow bg-c2r-primary hover:bg-c2r-primary/90 text-white"
                    onClick={() => navigate({ to: "/contact" })}
                  >
                    Become a Mentee
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-xl shadow-md bg-gradient-to-br from-c2r-primary/10 to-c2r-secondary/10 p-6 md:p-8 border border-c2r-primary/20">
                <h3 className="c2r-card-title mb-6">Your Journey Unfolds</h3>
                <ol className="space-y-5">
                  {JOURNEY_STEPS.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-c2r-primary text-white text-sm font-bold">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Guides - Share Your Light (id for navbar scroll) */}
      <section className="py-20 md:py-28 bg-background" id="mentor">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Heart className="h-12 w-12 mx-auto text-c2r-primary stroke-2 mb-4" />
              <span className="inline-block px-4 py-1.5 rounded-full bg-c2r-accent/20 text-c2r-accent text-xs font-semibold uppercase tracking-wider mb-4">
                For Guides
              </span>
              <h2 className="heading-descender-safe text-4xl font-bold text-c2r-primary mb-3">
                Share Your Light
              </h2>
              <p className="c2r-prose max-w-xl mx-auto">
                The greatest gift you can give is your experience, wisdom, and
                belief in someone's potential.
              </p>
            </div>
          </ScrollReveal>

          {/* Rajesh testimonial */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-16 rounded-xl shadow-md bg-gradient-to-br from-c2r-primary/10 to-c2r-secondary/10 p-6 md:p-8 border border-c2r-primary/20">
              <h3 className="text-lg font-bold mb-4">
                How Mentoring Changed Rajesh's Perspective
              </h3>
              <p className="italic text-muted-foreground leading-relaxed mb-4">
                "I thought I was just sharing career advice. But through
                mentoring, I rediscovered my own purpose. Watching my mentee
                overcome challenges and achieve their dreams reminded me why I
                fell in love with my profession in the first place. Mentoring
                doesn't just change their life—it enriches yours."
              </p>
              <p className="text-sm text-muted-foreground">
                — Rajesh, Senior Product Manager & Mentor
              </p>
            </div>
          </ScrollReveal>

          {/* Two columns: Your Commitment + What We Provide | Why Become a Mentor */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <ScrollReveal direction="left">
              <div className="rounded-xl shadow-md bg-card p-6 md:p-8 border-l-4 border-l-c2r-accent">
                <h3 className="c2r-card-title mb-6">Your Commitment</h3>
                <div className="space-y-4 mb-8">
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
                <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                  <li>Comprehensive training and resources</li>
                  <li>Community of fellow mentors</li>
                  <li>Ongoing support and guidance</li>
                  <li>Recognition and appreciation</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-xl shadow-md bg-card p-6 md:p-8 border-l-4 border-l-c2r-primary">
                <h3 className="c2r-card-title mb-6">Why Become a Mentor</h3>
                <ul className="space-y-3 mb-8">
                  {MENTOR_BENEFITS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-c2r-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                {MENTOR_AUTH_MENTOR ? (
                  <Button
                    size="lg"
                    className="gap-3 text-lg font-semibold px-10 py-7 min-h-[56px] shadow-lg hover:shadow-xl transition-shadow bg-c2r-primary hover:bg-c2r-primary/90 text-white"
                    asChild
                  >
                    <a
                      href={MENTOR_AUTH_MENTOR}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join as a Mentor
                      <ArrowRight className="h-6 w-6" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="gap-3 text-lg font-semibold px-10 py-7 min-h-[56px] shadow-lg hover:shadow-xl transition-shadow bg-c2r-primary hover:bg-c2r-primary/90 text-white"
                    onClick={() => navigate({ to: "/get-involved" })}
                  >
                    Join as a Mentor
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join the Next Chapter - CTA */}
      <section className="py-20 md:py-28 c2r-gradient-section">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="heading-descender-safe text-4xl md:text-5xl font-bold mb-4">
                Join the Next Chapter
              </h2>
              <p className="c2r-hero-subtitle mb-10">
                Whether you're seeking guidance or ready to give back, your
                story begins here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {MENTOR_AUTH_MENTEE ? (
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6"
                    asChild
                  >
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
                    variant="secondary"
                    className="text-lg px-8 py-6"
                    onClick={() => navigate({ to: "/contact" })}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                )}
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20"
                  onClick={() => navigate({ to: "/get-involved" })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
