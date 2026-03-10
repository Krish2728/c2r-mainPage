import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";

const packages = [
  { name: "Job Readiness Package", amount: "₹15,000", per: "per student" },
  {
    name: "Skill Development & Livelihood Package",
    amount: "₹25,000",
    per: "per student",
  },
];

export default function GetInvolvedDonationPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/donation-impact.dim_600x400.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Donation
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Every contribution directly supports mentoring, skilling, and
                job readiness — with transparent impact tracking.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Donation"
            title="Why Donate?"
            icon={<Heart className="h-8 w-8" />}
          />
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your contribution ensures that career mentoring and skill
                pathway guidance remain free for youth who need it most.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="Donation Packages"
            title="Donation Packages"
            subtitle=""
          />
          <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="border-t-4 border-t-c2r-accent">
                  <CardContent className="pt-8 text-center">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-c2r-primary">
                      {pkg.amount}
                    </p>
                    <p className="text-sm text-muted-foreground">{pkg.per}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => navigate({ to: "/donate" })}
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
