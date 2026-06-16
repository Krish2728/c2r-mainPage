import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ChapterHeader } from "@/components/ChapterHeader";
import { getImageUrl } from "@/lib/images";

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
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl("/assets/generated/founder-headshot.dim_300x300.jpg")})`,
            }}
          />
          <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
                Founder’s Message
              </h1>
              <p className="c2r-hero-subtitle">From the Founder’s Desk</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Founder's Message"
            title="From the Founder's Desk:"
            subtitle=""
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {paragraphs.map((text, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
