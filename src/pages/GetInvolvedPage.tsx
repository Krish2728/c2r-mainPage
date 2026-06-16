import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Users,
  HandHelping,
  Briefcase,
  Handshake,
  Crown,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";

const sections = [
  {
    id: "mentor",
    title: "Mentor",
    description: "Become a mentor",
    icon: Users,
    path: "/get-involved/volunteer",
    className: "border-t-4 border-t-c2r-primary",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Workshops, design, outreach & more",
    icon: HandHelping,
    path: "/get-involved/other-volunteering-roles",
    className: "border-t-4 border-t-c2r-secondary",
  },
  {
    id: "corporate",
    title: "Corporate Partnerships",
    description: "Partner with us for hiring, CSR, and workforce development",
    icon: Briefcase,
    path: "/get-involved/corporate-partnerships",
    className: "border-t-4 border-t-c2r-accent",
  },
  {
    id: "alliances",
    title: "Other Alliances",
    description: "University, NGO, and institutional partnerships",
    icon: Handshake,
    path: "/get-involved/other-alliances",
    className: "border-t-4 border-t-c2r-primary",
  },
  {
    id: "membership",
    title: "Lifetime Membership",
    description: "Join our professional community with a one-time contribution",
    icon: Crown,
    path: "/get-involved/lifetime-membership",
    className: "border-t-4 border-t-c2r-accent",
  },
];

export default function GetInvolvedPage() {
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
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Get Involved
              </h1>
              <p className="c2r-hero-subtitle">
                Mentor, volunteer, partner, or collaborate—choose how you want
                to make an impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Ways to Engage"
            title="Get Involved"
            subtitle="Mentor · Volunteer · Corporate Partnerships · Other Alliances · Lifetime Membership"
          />

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sections.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <Link
                  to={item.path}
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary focus-visible:ring-offset-2 rounded-lg"
                >
                  <Card
                    className={`h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${item.className}`}
                  >
                    <CardContent className="pt-8 pb-8 text-center flex flex-col items-center gap-4">
                      <item.icon className="h-12 w-12 text-c2r-primary" />
                      <h3 className="c2r-card-title leading-snug">
                        {item.title}
                      </h3>
                      <p className="c2r-prose-sm">{item.description}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-c2r-primary pointer-events-none"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" className="text-muted-foreground" asChild>
              <Link to="/get-involved/lifetime-membership">
                Learn about Lifetime Membership
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
