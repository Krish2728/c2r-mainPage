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
import { getImageUrl } from "@/lib/images";

const benefits = [
  { icon: Clock, title: "Flexible time commitment" },
  { icon: BookOpen, title: "Training & ongoing support" },
  { icon: Sparkles, title: "AI tools to enhance mentoring effectiveness" },
  { icon: Award, title: "Opportunity to give back meaningfully" },
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
                Become a Mentor Volunteer
              </h1>
              <p className="text-2xl text-white/95 font-medium">
                “A few hours a week can change a student’s future.”
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Volunteer"
            title="Why Mentor with Connect2Roots"
            subtitle=""
            icon={<Users className="h-8 w-8" />}
          />

          <div className="max-w-4xl mx-auto space-y-10">
            <ScrollReveal delay={100}>
              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((item, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-c2r-accent flex"
                  >
                    <CardContent className="flex-1 flex items-center justify-center gap-4 py-6">
                      <item.icon className="h-10 w-10 text-c2r-primary shrink-0" />
                      <p className="font-medium m-0">{item.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
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
        </div>
      </section>
    </div>
  );
}
