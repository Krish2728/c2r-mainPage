import { Handshake } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LogoSlider } from "@/components/ui/logo-slider";
import { getImageUrl } from "@/lib/images";

// Institution logos: images from public/Institution logos/ (WeSchool.jpeg, icfai.jpeg, Christ.PNG).
type Institution = {
  name: string;
  localLogo: string;
  logoUrl?: string;
  website?: string;
};
const institutions: Institution[] = [
  {
    name: "WeSchool",
    localLogo: "/Institution logos/WeSchool.jpeg",
    website: "https://www.weschool.edu.in",
  },
  {
    name: "ICFAI",
    localLogo: "/Institution logos/icfai.jpeg",
    website: "https://www.icfai.org",
  },
  {
    name: "Christ University",
    localLogo: "/Institution logos/Christ.PNG",
    website: "https://christuniversity.in",
  },
];

export default function GetInvolvedOtherAlliancesPage() {
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
          <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Other Alliances
              </h1>
              <p className="c2r-hero-subtitle">
                University, NGO, and institutional partnerships.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Other Alliances"
            title="University & Academic Institutional Alliances"
            icon={<Handshake className="h-8 w-8" />}
          />
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-background p-6 md:p-8 shadow-sm">
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Universities onboard cohorts of students.
                </p>
                <p className="mt-4 text-base font-medium text-foreground leading-relaxed">
                  Internship cum volunteering with Connect2Roots{" "}
                  <span className="text-c2r-primary font-semibold">
                    (For Professional Courses)
                  </span>
                  .
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-semibold">
                Academic & institutional collaborators include:
              </p>
              <div className="mt-6 mb-8 flex justify-center">
                <LogoSlider
                  logos={institutions.map((inst, i) => (
                    <img
                      key={i}
                      src={inst.localLogo || inst.logoUrl}
                      alt={inst.name}
                      className="object-contain"
                    />
                  ))}
                  speed={40}
                  direction="right"
                  pauseOnHover
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader
            chapter="NGO Partners"
            title="NGO Partners"
            subtitle=""
          />
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="c2r-prose">
                Integrate C2R mentoring modules into existing programs for
                training & sourcing of students.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
