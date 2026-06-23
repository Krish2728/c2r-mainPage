import { aboutIcons, ICON } from "@/lib/siteIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const FounderQuoteIcon = aboutIcons.founder;

const paragraphs = [
  "When we started Connect2roots in 2017, our work began with a simple but powerful observation — young people across India have aspirations, talent, and ambition, but far too often lack guidance at the moments that matter most.",
  "Working closely with students in Bihar and Jharkhand, we saw first-hand how a lack of career clarity leads to missed opportunities, frustration, and underutilized potential. At the same time, we met professionals across sectors who wanted to give back but lacked a meaningful platform to do so.",
  "Connect2roots was born to bridge this gap.",
  "Our belief is simple: career guidance should not be a privilege reserved for a few; it should be accessible to all. Mentoring, when done at scale and rooted in community participation, has the power to transform individual lives and shape the future of our nation.",
  "As Connect2roots expands nationally, our commitment remains unchanged — to stay grounded, inclusive, and youth-first, while building partnerships that strengthen opportunities across jobs, entrepreneurship, and livelihoods.",
  "We invite you to join us — as a mentor, partner, supporter, or contributor — in building a future where every young person has the clarity and confidence to choose their path.",
  "Let's co-create the workforce of 2047—today.",
];

export default function GetInvolvedFoundersMessagePage() {
  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/founder-headshot.dim_300x300.jpg",
        )}
        chapter="Founder's Message"
        title="From the Founder's Desk"
        subtitle="A note on why Connect2Roots exists and where we are headed."
        icon={<FounderQuoteIcon className={ICON.hero} />}
      />

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="narrow">
          <div className="space-y-6">
            {paragraphs.map((text, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <p className="c2r-prose">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
