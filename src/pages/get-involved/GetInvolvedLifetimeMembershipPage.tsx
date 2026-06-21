import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LifetimeMembershipBenefits } from "@/components/LifetimeMembershipBenefits";
import {
  VolunteerRegistrationForm,
  INITIAL_VOLUNTEER_FORM,
} from "@/components/VolunteerRegistrationForm";
import {
  useLifetimeMembershipForm,
  type VolunteerFormData,
} from "@/hooks/useQueries";
import {
  LIFETIME_MEMBERSHIP_AMOUNT,
  membershipNote,
} from "@/data/lifetimeMembershipBenefits";
import { getImageUrl } from "@/lib/images";
import {
  ArrowRight,
  Crown,
  Heart,
  Infinity,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const membershipHighlights = [
  "Exclusive professional community access",
  "Priority invitations to events & meetups",
  "Learning resources & member-only sessions",
  "Mentor, volunteer & leadership pathways",
];

export default function GetInvolvedLifetimeMembershipPage() {
  const [form, setForm] = useState<VolunteerFormData>(INITIAL_VOLUNTEER_FORM);
  const membershipMutation = useLifetimeMembershipForm();

  const updateForm = (updates: Partial<VolunteerFormData>) =>
    setForm((prev) => ({ ...prev, ...updates }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.preferredDays || !form.preferredTimings) {
      toast.error("Please select your preferred days and timings.");
      return;
    }
    try {
      await membershipMutation.mutateAsync(form);
      toast.success(
        "Thank you! Your lifetime membership application has been submitted. Our team will contact you within 2–3 working days with payment and onboarding details.",
      );
      setForm(INITIAL_VOLUNTEER_FORM);
    } catch {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/team-collaboration.dim_800x500.jpg")})`,
            }}
          />
          <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-white">
            <ChapterHeader
              variant="hero"
              chapter="Lifetime Membership"
              title="Join a Community That Builds Lasting Impact"
              subtitle="Support youth empowerment while gaining lifelong access to a vibrant network of professionals, mentors, and changemakers."
              icon={<Crown className="h-8 w-8" />}
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={scrollToApply}
              >
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <ScrollReveal delay={100}>
              <div className="space-y-5">
                <div>
                  <span className="inline-block mb-3 rounded-full bg-c2r-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-c2r-accent">
                    Membership
                  </span>
                  <h2 className="heading-descender-safe mb-3 text-3xl font-bold md:text-4xl">
                    Become a Lifetime Member
                  </h2>
                  <p className="c2r-section-subtitle">
                    A one-time contribution that strengthens our mission and
                    connects you to a purpose-driven community.
                  </p>
                </div>
                <p className="c2r-prose">
                  Connect2Roots Foundation invites professionals, entrepreneurs,
                  mentors, and changemakers to become Lifetime Members — a
                  community committed to empowering youth, strengthening
                  communities, and building meaningful connections across India
                  and beyond.
                </p>
                <p className="c2r-prose">
                  Your contribution directly supports mentoring, career
                  development, knowledge exchange, and community engagement
                  programs that remain accessible to underserved youth.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {membershipHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-background/80 px-3 py-2.5 text-sm text-muted-foreground"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-c2r-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="overflow-hidden border-c2r-primary/20 shadow-lg lg:sticky lg:top-24">
                <div className="c2r-gradient-accent px-6 py-8 text-center text-white">
                  <Infinity className="mx-auto mb-3 h-10 w-10 opacity-90" />
                  <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                    One-time contribution
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight">
                    {LIFETIME_MEMBERSHIP_AMOUNT}
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    Lifetime association with Connect2Roots
                  </p>
                </div>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/40 p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-c2r-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Connect2Roots Foundation is registered as a Section 8
                      nonprofit under the Companies Act, 2013. Your contribution
                      supports charitable objectives and is not a commercial
                      purchase.
                    </p>
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={scrollToApply}
                  >
                    Start Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Benefits"
            title="What Lifetime Membership Includes"
            subtitle="Facilitative benefits designed to connect, learn, and contribute."
          />
          <LifetimeMembershipBenefits />
        </div>
      </section>

      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-background px-6 py-8 shadow-sm md:px-10">
              <h2 className="c2r-card-title mb-4 text-center">
                A Note on Membership
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground text-center">
                {membershipNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16" id="apply">
        <div className="container">
          <ChapterHeader
            chapter="Apply"
            title="Apply for Lifetime Membership"
            subtitle="Complete the form below. Our team will reach out within 2–3 working days with payment and onboarding details."
          />

          <div className="mx-auto max-w-4xl">
            <ScrollReveal delay={100}>
              <Card className="overflow-hidden border-border/60 shadow-lg">
                <div className="border-b border-border/60 bg-gradient-to-r from-c2r-primary/5 via-background to-c2r-secondary/5 px-6 py-5 md:px-8">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="h-5 w-5 text-c2r-accent" />
                    Lifetime Membership Application
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Join professionals who believe in mentoring, opportunity,
                    and giving back to their roots.
                  </CardDescription>
                </div>
                <CardHeader className="pb-0">
                  <CardDescription className="space-y-4 text-left">
                    <p className="font-medium text-foreground">Namaste,</p>
                    <p className="c2r-prose">
                      Thank you for your interest in Lifetime Membership with
                      Connect2Roots Foundation. Please submit the form below to
                      apply.
                    </p>
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 dark:border-amber-800/50 dark:bg-amber-950/30">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        By submitting this form, you consent to be contacted
                        regarding your membership application, including payment
                        and onboarding details. As a member you shall not share
                        confidential information about our organisation with any
                        third party without informing the Connect2Roots team.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * Indicates required field
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <VolunteerRegistrationForm
                    idPrefix="lm"
                    form={form}
                    onChange={updateForm}
                    onSubmit={handleSubmit}
                    isPending={membershipMutation.isPending}
                    submitLabel="Submit Application"
                  />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
