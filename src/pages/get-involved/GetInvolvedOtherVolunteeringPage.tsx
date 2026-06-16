import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  HandHelping,
  ArrowRight,
  Award,
  BadgeCheck,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { VolunteerRoleCategories } from "@/components/VolunteerRoleCategories";
import { YouthUnemploymentStats } from "@/components/YouthUnemploymentStats";
import { VolunteerClosingCTA } from "@/components/VolunteerClosingCTA";
import { getImageUrl } from "@/lib/images";

const volunteerBenefits = [
  {
    icon: Award,
    title: "Certificate of Volunteering",
    description:
      "Official recognition from Connect2Roots for your time and contribution.",
  },
  {
    icon: BadgeCheck,
    title: "Platform recognition",
    description:
      "Acknowledgement across our community for the impact you help create.",
  },
  {
    icon: Users,
    title: "Changemaker network",
    description:
      "Access to an exclusive network of professionals giving back across India.",
  },
];

export default function GetInvolvedOtherVolunteeringPage() {
  const navigate = useNavigate();

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
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Volunteer
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Other volunteering roles — share your skills beyond mentoring
                and help students build their futures.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Volunteer"
            title="Why Volunteer at Connect2Roots"
            subtitle="Your expertise can open doors that talent alone cannot."
            icon={<HandHelping className="h-8 w-8" />}
          />

          <div className="max-w-4xl mx-auto space-y-10">
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-background p-6 md:p-8 shadow-sm space-y-5">
                <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed tracking-tight">
                  Volunteering with Connect2Roots goes far beyond one-on-one
                  mentoring. Whether you&apos;re a designer, a data analyst, a
                  corporate professional, or simply someone with a skill worth
                  sharing — there&apos;s a role here built for you.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  You can run a single workshop, tell student stories through
                  video and design, help us measure our impact through research,
                  manage our digital platforms, or drive community outreach in
                  your city. Every contribution, however big or small, becomes
                  part of something that outlasts a single session.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The most meaningful reward isn&apos;t on a résumé — it&apos;s
                  the moment a student lands their first internship because you
                  helped them prepare. You invest a few hours; a student gains a
                  future.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid gap-6 sm:grid-cols-3">
                {volunteerBenefits.map((item, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-c2r-accent h-full"
                  >
                    <CardContent className="pt-6 pb-6 space-y-3">
                      <item.icon className="h-9 w-9 text-c2r-primary" />
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed m-0">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Ways to Contribute"
            title="Here's how you can contribute"
            subtitle="Find a role that fits your skills, schedule, and passion."
            icon={<HandHelping className="h-8 w-8" />}
          />

          <VolunteerRoleCategories />

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => navigate({ to: "/contact", hash: "volunteer" })}
              >
                Apply as a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <YouthUnemploymentStats />

      <VolunteerClosingCTA />
    </div>
  );
}
