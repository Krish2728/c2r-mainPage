import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { aboutIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";
import { TeamSectionHeader } from "@/components/team/TeamSectionHeader";
import { TeamMemberGrid } from "@/components/team/TeamMemberGrid";
import { TeamMemberDetailSheet } from "@/components/team/TeamMemberDetailSheet";
import { getImageUrl } from "@/lib/images";
import {
  coreTeam,
  advisoryCategories,
  additionalAdvisors,
  type TeamMember,
} from "@/data/teamMembers";

export default function OurTeamPage() {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openMember = (member: TeamMember) => setSelectedMember(member);
  const closeMember = () => setSelectedMember(null);

  const advisoryMemberCount = advisoryCategories.reduce(
    (sum, category) => sum + category.members.length,
    0,
  );

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="About Us"
        title="Our Team"
        subtitle="Behind every success story is a dedicated group of professionals united by a shared belief in mentorship, opportunity, and community impact."
        icon={<aboutIcons.team className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="outline"
          className={`${GI_BTN_HERO} border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-white`}
          onClick={() => navigate({ to: "/about" })}
        >
          About Us
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => {
            document
              .getElementById("advisory-panel")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Meet the Team
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      {/* Advisory panel */}
      {(advisoryMemberCount > 0 || additionalAdvisors.length > 0) && (
        <section
          id="advisory-panel"
          className="scroll-mt-20 bg-background py-10 sm:scroll-mt-24 sm:py-16 md:py-24"
        >
          <GetInvolvedContentWidth
            size="wide"
            className="max-w-7xl px-4 sm:px-6"
          >
            <TeamSectionHeader
              badge="Advisory Panel"
              title="Domain Advisors & Experts"
              description="Strategic advisors who ensure Connect2Roots programs stay aligned with evolving market realities and future workforce needs."
              showActions={false}
              align="center"
            />

            <div className="space-y-10 sm:space-y-16 md:space-y-20">
              {advisoryCategories.map((category) => (
                <div key={category.title}>
                  <ScrollReveal direction="fade">
                    <h3 className="mb-6 px-2 text-center text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-c2r-accent sm:mb-8 sm:text-xs md:mb-10 md:text-sm md:tracking-[0.14em]">
                      {category.title}
                    </h3>
                  </ScrollReveal>
                  <TeamMemberGrid
                    members={category.members}
                    onSelect={openMember}
                  />
                </div>
              ))}

              {additionalAdvisors.length > 0 && (
                <div>
                  <ScrollReveal direction="fade">
                    <h3 className="mb-6 px-2 text-center text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-muted-foreground sm:mb-8 sm:text-xs md:mb-10 md:text-sm md:tracking-[0.14em]">
                      Additional Domain Advisors
                    </h3>
                  </ScrollReveal>
                  <TeamMemberGrid
                    members={additionalAdvisors}
                    onSelect={openMember}
                  />
                </div>
              )}
            </div>
          </GetInvolvedContentWidth>
        </section>
      )}

      {/* Core Team — member grid */}
      {coreTeam.length > 0 && (
        <section
          id="core-team"
          className="scroll-mt-20 border-t border-border/40 bg-muted/25 py-10 sm:scroll-mt-24 sm:py-16 md:py-24"
        >
          <GetInvolvedContentWidth
            size="wide"
            className="max-w-7xl px-4 sm:px-6"
          >
            <ScrollReveal direction="fade">
              <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.14em] text-c2r-primary sm:mb-10 sm:text-sm">
                Core Team
              </h3>
            </ScrollReveal>

            <TeamMemberGrid
              members={coreTeam}
              onSelect={openMember}
              desktopColumns={5}
            />
          </GetInvolvedContentWidth>
        </section>
      )}

      <TeamMemberDetailSheet
        member={selectedMember}
        open={!!selectedMember}
        onOpenChange={(open) => !open && closeMember()}
      />

      {/* Community */}
      <GetInvolvedSection>
        <GetInvolvedContentWidth size="content">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-4 inline-flex rounded-full bg-c2r-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-c2r-primary">
                Our Community
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Powered by Mentors & Partners
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Beyond our core team and advisors, Connect2Roots is strengthened
                by{" "}
                <span className="font-semibold text-foreground">
                  50+ volunteer mentors
                </span>
                ,{" "}
                <span className="font-semibold text-foreground">
                  10+ partner colleges
                </span>
                , and supporters who believe in the power of mentorship to
                transform lives.
              </p>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      {/* Join CTA */}
      <GetInvolvedSection variant="muted">
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Join Our Team
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Whether as a mentor, volunteer, or team member — there&apos;s a
                place for you in our movement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className={GI_BTN_PRIMARY}
                  onClick={() => navigate({ to: "/get-involved" })}
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={GI_BTN_PRIMARY}
                  onClick={() => navigate({ to: "/contact" })}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
