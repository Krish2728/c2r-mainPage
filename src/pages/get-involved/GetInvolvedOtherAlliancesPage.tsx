import { ArrowRight } from "lucide-react";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChapterHeader } from "@/components/ChapterHeader";
import { LogoSlider } from "@/components/ui/logo-slider";
import { getHeroImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedIntroCard,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const AlliancesIcon = getInvolvedIcons.alliances;

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
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("alliances")}
        chapter="Other Alliances"
        title="University & Academic Institutional Alliances"
        subtitle="University, NGO, and institutional partnerships."
        icon={<AlliancesIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/contact" })}
        >
          Partner With Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="content">
          <div className="space-y-8">
            <ScrollReveal>
              <GetInvolvedIntroCard>
                <p className="text-base font-medium leading-relaxed text-foreground">
                  Universities onboard cohorts of students.
                </p>
                <p className="text-base font-medium leading-relaxed text-foreground">
                  Internship cum volunteering with Connect2Roots{" "}
                  <span className="font-semibold text-c2r-primary">
                    (For Professional Courses)
                  </span>
                  .
                </p>
              </GetInvolvedIntroCard>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-semibold text-foreground">
                Academic & institutional collaborators include:
              </p>
              <div className="mt-6 flex justify-center">
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
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="NGO Partners"
          title="NGO Partners"
          subtitle="Integrate mentoring modules into existing programs."
          icon={<AlliancesIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <p className="c2r-prose text-center">
              Integrate C2R mentoring modules into existing programs for
              training & sourcing of students.
            </p>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
