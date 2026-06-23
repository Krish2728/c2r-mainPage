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
  Heart,
} from "lucide-react";
import {
  MdAutoAwesome,
  MdAllInclusive,
  MdVerifiedUser,
} from "react-icons/md";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { toast } from "sonner";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedNoteCard,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const MembershipIcon = getInvolvedIcons.membership;

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
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="Lifetime Membership"
        title="Join a Community That Builds Lasting Impact"
        subtitle="Support youth empowerment while gaining lifelong access to a vibrant network of professionals, mentors, and changemakers."
        icon={<MembershipIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={scrollToApply}
        >
          Apply for Membership
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
            <ScrollReveal delay={100}>
              <div className="space-y-5">
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
                      <MdAutoAwesome className="mt-0.5 h-4 w-4 shrink-0 text-c2r-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="overflow-hidden border-c2r-primary/20 shadow-lg lg:sticky lg:top-24 lg:self-start">
                <div className="c2r-gradient-accent px-5 py-5 text-center text-white">
                  <MdAllInclusive className="mx-auto mb-2 h-7 w-7 opacity-90" />
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/80">
                    One-time contribution
                  </p>
                  <p className="mt-0.5 text-3xl font-bold tracking-tight">
                    {LIFETIME_MEMBERSHIP_AMOUNT}
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Lifetime association with Connect2Roots
                  </p>
                </div>
                <CardContent className="space-y-3 p-4">
                  <div className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-muted/40 p-3">
                    <MdVerifiedUser className="mt-0.5 h-4 w-4 shrink-0 text-c2r-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Registered Section 8 nonprofit under the Companies Act,
                      2013. Your contribution supports charitable objectives.
                    </p>
                  </div>
                  <Button className="w-full" onClick={scrollToApply}>
                    Start Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Benefits"
          title="What Lifetime Membership Includes"
          subtitle="Facilitative benefits designed to connect, learn, and contribute."
          icon={<MembershipIcon className={ICON.hero} />}
        />
        <LifetimeMembershipBenefits />
      </GetInvolvedSection>

      <GetInvolvedSection variant="muted">
        <ScrollReveal>
          <GetInvolvedNoteCard title="A Note on Membership">
            {membershipNote}
          </GetInvolvedNoteCard>
        </ScrollReveal>
      </GetInvolvedSection>

      <GetInvolvedSection id="apply">
        <ChapterHeader
          chapter="Apply"
          title="Apply for Lifetime Membership"
          subtitle="Complete the form below. Our team will reach out within 2–3 working days with payment and onboarding details."
          icon={<Heart className="h-8 w-8" />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <Card className="overflow-hidden border-border/60 shadow-lg">
              <div className="border-b border-border/60 bg-gradient-to-r from-c2r-primary/5 via-background to-c2r-secondary/5 px-6 py-5 md:px-8">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Heart className="h-5 w-5 text-c2r-accent" />
                  Lifetime Membership Application
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  Join professionals who believe in mentoring, opportunity, and
                  giving back to their roots.
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
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
