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
          <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-white">
            <ChapterHeader
              variant="hero"
              chapter="Mentor"
              title="Why Mentor with Connect2Roots"
              subtitle="Your experience can become someone else's turning point."
              icon={<Users className="h-8 w-8" />}
            />
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={() => navigate({ to: "/contact" })}
              >
                Apply as a Mentor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {mentorBenefits.map((item, index) => (
                  <Card
                    key={index}
                    className="h-full border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <item.icon className="h-8 w-8 mb-3 text-c2r-primary" />
                      <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground m-0">
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

      <MentorClosingCTA />
    </div>
  );
}
