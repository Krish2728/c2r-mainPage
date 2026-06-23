import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";
import { aboutIcons, ICON } from "@/lib/siteIcons";
import type { SiteIconType } from "@/lib/siteIcons";
import {
  GI_PAGE,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const sections: {
  title: string;
  description: string;
  icon: SiteIconType;
  path: string;
}[] = [
  {
    title: "Who We Are",
    description: "Our mission and founding story",
    icon: aboutIcons.whoWeAre,
    path: "/about/who-we-are",
  },
  {
    title: "Vision & Mission",
    description: "Our guiding principles",
    icon: aboutIcons.visionMission,
    path: "/about/vision-mission",
  },
  {
    title: "Our Team",
    description: "Meet the people behind C2R",
    icon: aboutIcons.team,
    path: "/about/our-team",
  },
  {
    title: "Our Working Model",
    description: "How we create impact",
    icon: aboutIcons.workingModel,
    path: "/about/working-model",
  },
  {
    title: "Our Values",
    description: "What drives us forward",
    icon: aboutIcons.values,
    path: "/about/our-values",
  },
  {
    title: "Journey",
    description: "Our story and milestones",
    icon: aboutIcons.journey,
    path: "/about/journey",
  },
];

export default function AboutPage() {
  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="About Us"
        title="Our Story, Our People, Our Purpose"
        subtitle="Learn who we are, how we work, and the values that guide everything we do."
        icon={<aboutIcons.hub className={ICON.hero} />}
      />

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item, index) => (
              <ScrollReveal key={item.path} delay={index * 100}>
                <Link
                  to={item.path}
                  className="block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary focus-visible:ring-offset-2"
                >
                  <Card className="h-full cursor-pointer border border-border/60 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <CardContent className="flex h-full flex-col items-center gap-4 pt-8 pb-8 text-center">
                      <item.icon className={`${ICON.nav} text-c2r-primary`} />
                      <h3 className="c2r-card-title leading-snug">
                        {item.title}
                      </h3>
                      <p className="c2r-prose-sm">{item.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-c2r-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
