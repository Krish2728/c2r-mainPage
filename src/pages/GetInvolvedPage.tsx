import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import type { SiteIconType } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getHeroImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const sections: {
  id: string;
  title: string;
  description: string;
  icon: SiteIconType;
  path: string;
}[] = [
  {
    id: "mentor",
    title: "Mentor",
    description: "Become a mentor",
    icon: getInvolvedIcons.mentor,
    path: "/get-involved/volunteer",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Workshops, design, outreach & more",
    icon: getInvolvedIcons.volunteer,
    path: "/get-involved/other-volunteering-roles",
  },
  {
    id: "corporate",
    title: "Corporate Partnerships",
    description: "Partner with us for hiring, CSR, and workforce development",
    icon: getInvolvedIcons.corporate,
    path: "/get-involved/corporate-partnerships",
  },
  {
    id: "alliances",
    title: "Other Alliances",
    description: "University, NGO, and institutional partnerships",
    icon: getInvolvedIcons.alliances,
    path: "/get-involved/other-alliances",
  },
  {
    id: "membership",
    title: "Lifetime Membership",
    description: "Join our professional community with a one-time contribution",
    icon: getInvolvedIcons.membership,
    path: "/get-involved/lifetime-membership",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("getInvolved")}
        chapter="Ways to Engage"
        title="Get Involved"
        subtitle="Mentor, volunteer, partner, or collaborate—choose how you want to make an impact."
        icon={<getInvolvedIcons.hub className={ICON.hero} />}
      />

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sections.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="pointer-events-none gap-2 text-c2r-primary"
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
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
