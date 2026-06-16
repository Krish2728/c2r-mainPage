import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Crown, Heart } from "lucide-react";
import { toast } from "sonner";

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

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Lifetime Membership
              </h1>
              <p className="c2r-hero-subtitle">
                Join a community committed to empowering youth and strengthening
                roots across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Membership"
            title="Become a Lifetime Member"
            subtitle="Support our mission while gaining access to a vibrant professional community."
            icon={<Crown className="h-8 w-8" />}
          />

          <ScrollReveal delay={100}>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="c2r-prose">
                Connect2Roots Foundation invites professionals, entrepreneurs,
                mentors, and changemakers to become Lifetime Members — a
                community of individuals committed to empowering youth,
                strengthening communities, and building meaningful connections
                across India and beyond.
              </p>
              <p className="c2r-prose">
                Lifetime Membership is offered through a one-time contribution
                of{" "}
                <span className="c2r-card-title">
                  {LIFETIME_MEMBERSHIP_AMOUNT}
                </span>
                , which directly supports the Foundation&apos;s programs in
                mentoring, career development, knowledge exchange, and community
                engagement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect2Roots Foundation is registered as a Section 8 nonprofit
                company under the Companies Act, 2013. Your contribution
                supports our charitable objectives and is not a commercial
                purchase.
              </p>
            </div>
          </ScrollReveal>
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

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="c2r-card-title mb-3 text-center">
                A Note on Membership
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-c2r-accent" />
                    Lifetime Membership Application
                  </CardTitle>
                  <CardDescription className="space-y-3 text-left">
                    <p className="font-medium text-foreground">Namaste,</p>
                    <p className="c2r-prose">
                      Thank you for your interest in Lifetime Membership with
                      Connect2Roots Foundation. Please submit the form below to
                      apply.
                    </p>
                    <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-muted-foreground dark:border-amber-800 dark:bg-amber-950/50">
                      By submitting this form, you consent to be contacted
                      regarding your membership application, including payment
                      and onboarding details. As a member you shall not share
                      confidential information about our organisation with any
                      third party without informing the Connect2Roots team.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      * Indicates required field
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
