import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Users, Linkedin, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getImageUrl } from "@/lib/images";
import { coreTeam, domainAdvisors, type TeamMember } from "@/data/teamMembers";

const BIO_PREVIEW_LENGTH = 140;

function TeamMemberCard({
  member,
  index,
  variant,
  onSelect,
}: {
  member: TeamMember;
  index: number;
  variant: "core" | "advisor";
  onSelect: () => void;
}) {
  const borderClass =
    variant === "advisor" ? "border-l-4 border-l-c2r-accent" : "";
  const bioPreview =
    member.bio.length > BIO_PREVIEW_LENGTH
      ? member.bio.slice(0, BIO_PREVIEW_LENGTH).trim() + "…"
      : member.bio;
  return (
    <ScrollReveal key={member.name} delay={index * 50}>
      <Card
        className={`h-full cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${borderClass}`}
        onClick={onSelect}
      >
        <CardContent className="pt-6 pb-5 text-center flex flex-col items-center gap-3">
          <div className="relative group">
            {member.photoUrl ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                className={`h-28 w-28 rounded-full object-cover border-4 border-c2r-secondary/20 shadow-lg ${member.photoClass ?? ""}`}
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-c2r-secondary to-c2r-accent flex items-center justify-center text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
            )}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-popover border border-border shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 text-left">
              <p className="text-sm text-muted-foreground leading-snug line-clamp-4">
                {bioPreview}
              </p>
              <p className="text-xs text-c2r-primary font-medium mt-2">
                Click for full profile
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center rounded-full p-2 text-c2r-primary hover:bg-c2r-primary/10 hover:text-c2r-accent transition-colors"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin className="h-6 w-6" />
            </a>
          )}
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

function MemberDetailPanel({
  member,
  open,
  onOpenChange,
  variant,
}: {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "core" | "advisor";
}) {
  if (!member) return null;
  const accentClass =
    variant === "advisor" ? "text-c2r-accent" : "text-c2r-secondary";
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      >
        <SheetHeader className="p-6 pb-4 border-b">
          <div className="flex flex-col items-center text-center gap-4">
            {member.photoUrl ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                className={`h-32 w-32 rounded-full object-cover border-4 border-c2r-primary/20 shadow-lg ${member.photoClass ?? ""}`}
              />
            ) : (
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent flex items-center justify-center text-white text-4xl font-bold">
                {member.name.charAt(0)}
              </div>
            )}
            <SheetTitle className="text-2xl">{member.name}</SheetTitle>
            <p className={`text-sm font-semibold ${accentClass}`}>
              {member.role}
            </p>
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 text-c2r-primary hover:bg-c2r-primary/10 hover:text-c2r-accent transition-colors"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
          </div>
        </SheetHeader>
        <ScrollArea className="flex-1 min-h-0">
          <div className="p-6 pt-4">
            <p className="text-muted-foreground leading-relaxed">
              {member.bio}
            </p>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default function OurTeamPage() {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [panelVariant, setPanelVariant] = useState<"core" | "advisor">("core");

  const openPanel = (member: TeamMember, variant: "core" | "advisor") => {
    setSelectedMember(member);
    setPanelVariant(variant);
  };
  const closePanel = () => setSelectedMember(null);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/team-collaboration.dim_800x500.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Our Team
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                The passionate individuals driving our mission forward
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Our People"
            title="The People Behind the Movement"
            subtitle="United by purpose, driven by passion, committed to impact"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-center">
                <p className="text-xl">
                  Behind every success story, every transformed life, and every
                  empowered community is a team of dedicated individuals who
                  believe in the power of mentorship and the potential in every
                  person.
                </p>

                <p>
                  Our team brings together diverse expertise from education,
                  technology, social impact, and business—all united by a shared
                  commitment to creating opportunities for underserved
                  communities.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <img
                src={getImageUrl(
                  "/assets/generated/team-collaboration.dim_800x500.jpg",
                )}
                alt="Team Collaboration"
                className="rounded-lg shadow-2xl w-full transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Team */}
      {coreTeam.length > 0 && (
        <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-muted/30">
          <div className="container">
            <ChapterHeader
              chapter="Core Team"
              title="The Heart of Our Operations"
              subtitle="Dedicated professionals making it all happen"
              icon={<Users className="h-8 w-8" />}
            />

            <div className="max-w-7xl mx-auto">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                {coreTeam.map((member, index) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    variant="core"
                    onSelect={() => openPanel(member, "core")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Domain Advisors */}
      {domainAdvisors.length > 0 && (
        <section className="pt-8 md:pt-12 pb-24 md:pb-32">
          <div className="container">
            <ChapterHeader
              chapter="Domain Advisors"
              title="Guiding Voices"
              subtitle="Experienced mentors shaping our strategy and impact"
              icon={<Sparkles className="h-8 w-8" />}
            />

            <div className="max-w-7xl mx-auto">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                {domainAdvisors.map((member, index) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    variant="advisor"
                    onSelect={() => openPanel(member, "advisor")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <MemberDetailPanel
        member={selectedMember}
        open={!!selectedMember}
        onOpenChange={(open) => !open && closePanel()}
        variant={panelVariant}
      />

      {/* Community Contributors Note */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-c2r-primary/5 to-c2r-accent/5">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="mx-auto mb-6 h-16 w-16 text-c2r-accent" />
              <h2 className="heading-descender-safe text-3xl font-bold mb-6">
                Our Community of Contributors
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Beyond our core team, Connect2Roots is powered by a vibrant
                community of volunteer mentors, partner organizations, and
                supporters who contribute their time, expertise, and resources
                to make our mission possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">
                  50+ volunteer mentors
                </span>{" "}
                from diverse industries,
                <span className="font-bold text-foreground">
                  {" "}
                  10+ partner colleges
                </span>
                , and countless supporters who believe in the power of
                mentorship to transform lives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="heading-descender-safe text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether as a mentor, volunteer, or team member—there's a place for
              you in our movement
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={() => navigate({ to: "/get-involved" })}
              >
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => navigate({ to: "/contact" })}
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
