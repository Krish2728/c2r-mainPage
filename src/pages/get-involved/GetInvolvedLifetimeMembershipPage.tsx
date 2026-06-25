import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LifetimeMembershipBenefits } from "@/components/LifetimeMembershipBenefits";
import { LifetimeMembershipFlow } from "@/components/LifetimeMembershipFlow";
import {
  LIFETIME_MEMBERSHIP_AMOUNT,
  membershipNote,
} from "@/data/lifetimeMembershipBenefits";
import { getHeroImageUrl } from "@/lib/images";
import { ArrowRight, Heart } from "lucide-react";
import { MdAutoAwesome, MdAllInclusive, MdVerifiedUser } from "react-icons/md";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
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
  "Leadership Circle of accomplished professionals",
  "Nation-building & community development focus",
  "Mentoring, advisory, and strategic pathways",
  "Lifelong association with Connect2Roots",
];

export default function GetInvolvedLifetimeMembershipPage() {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("membership")}
        chapter="Leadership Circle"
        title="Lifetime Membership"
        subtitle="Join accomplished professionals, entrepreneurs, educators, and social impact leaders contributing to nation-building and community development."
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
                <p className="c2r-prose-emphasis">
                  Thank you for joining the Connect2Roots Leadership Circle
                </p>
                <p className="c2r-prose">
                  The Leadership Circle brings together accomplished
                  professionals, entrepreneurs, educators, policymakers, and
                  social impact leaders who wish to contribute their knowledge,
                  network, and experience towards nation-building and community
                  development.
                </p>
                <p className="c2r-prose">
                  Complete the membership form below, then proceed to the
                  one-time contribution to activate your lifetime membership.
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
                    Leadership Circle Lifetime Membership
                  </p>
                </div>
                <CardContent className="space-y-3 p-4">
                  <div className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-muted/40 p-3">
                    <MdVerifiedUser className="mt-0.5 h-4 w-4 shrink-0 text-c2r-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Apply first, then pay online. Registered Section 8
                      nonprofit under the Companies Act, 2013.
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
          title="Leadership Circle – Lifetime Membership Form"
          subtitle="Connect2Roots Foundation — complete all sections, then proceed to payment."
          icon={<Heart className="h-8 w-8" />}
        />
        <GetInvolvedContentWidth size="content">
          <ScrollReveal delay={100}>
            <LifetimeMembershipFlow idPrefix="lm-page" />
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
