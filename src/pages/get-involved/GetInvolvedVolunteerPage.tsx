import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Users,
  Clock,
  BookOpen,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { RoleCategories } from "@/components/RoleCategories";
import { YouthUnemploymentStats } from "@/components/YouthUnemploymentStats";
import { MentorClosingCTA } from "@/components/MentorClosingCTA";
import { mentorRoleCategories } from "@/data/mentorRoles";
import { getImageUrl } from "@/lib/images";

const mentorBenefits = [
  {
    icon: Clock,
    title: "Flexible time commitment",
    description:
      "Mentor on your schedule — even a few hours a month creates lasting impact.",
  },
  {
    icon: BookOpen,
    title: "Training & ongoing support",
    description:
      "Onboarding, resources, and team support so you never mentor alone.",
  },
  {
    icon: Sparkles,
    title: "AI tools to enhance mentoring",
    description:
      "Smart tools that help you prepare, track progress, and follow up with students.",
  },
  {
    icon: Award,
    title: "Meaningful impact",
    description:
      "Turn your career journey into guidance that changes a student's trajectory.",
  },
];

export default function GetInvolvedVolunteerPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/volunteer-mentoring.dim_800x500.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Become a Mentor
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A few hours a week can change a student&apos;s future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Mentor"
            title="Why Mentor with Connect2Roots"
            subtitle="Your experience can become someone else's turning point."
            icon={<Users className="h-8 w-8" />}
          />

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="grid gap-6 sm:grid-cols-2">
                {mentorBenefits.map((item, index) => (
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
            chapter="How You Mentor"
            title="Ways you can mentor with us"
            subtitle="Structured, flexible, and designed around real student needs."
            icon={<Users className="h-8 w-8" />}
          />

          <RoleCategories categories={mentorRoleCategories} />

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => navigate({ to: "/contact" })}
              >
                Apply as a Mentor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <YouthUnemploymentStats />

      <MentorClosingCTA />
    </div>
  );
}
