import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";

const steps = [
  {
    num: "1",
    title: "Align",
    content:
      "Share your entry-level hiring needs, role requirements, and future workforce plans. We assess whether an existing C2R program fits your needs, or co-create a custom mentorship + skill readiness pathway aligned to your roles.",
  },
  {
    num: "2",
    title: "Equip",
    content:
      "Equip learners during the program. Culture sessions, talks, mock interviews. Early exposure to your workplace expectations. Build familiarity and confidence on both sides. This reduces hiring friction and improves candidate–role fit.",
  },
  {
    num: "3",
    title: "Integrate",
    content:
      "Interview and onboard pre-mentored, job-ready candidates. Candidates are prepared for real-world expectations. Post-placement mentoring improves retention. C2R supports tracking and feedback.",
  },
];

export default function GetInvolvedHowItWorksPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-x-hidden">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/corporate-handshake.dim_600x400.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                How It Works
              </h1>
              <p className="text-xl text-white/90">In 3 Simple Steps</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Partnership Process"
            title="How It Works – In 3 Simple Steps"
            subtitle=""
          />

          <div className="max-w-4xl mx-auto space-y-10">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-l-4 border-l-c2r-accent overflow-hidden">
                  <CardContent className="pt-6 flex gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent text-white text-2xl font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="max-w-4xl mx-auto mt-12 text-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() =>
                  navigate({ to: "/get-involved/corporate-partnerships" })
                }
              >
                Explore Corporate Partnerships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
