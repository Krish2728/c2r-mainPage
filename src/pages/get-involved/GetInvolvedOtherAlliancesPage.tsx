import { Handshake } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

const academicPartners = ['Welingkar Institute of Management', 'Christ University', 'ICFAI Group'];

export default function GetInvolvedOtherAlliancesPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Other Alliances</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                University, NGO, and institutional partnerships.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader chapter="Other Alliances" title="University & Academic Institutional Alliances" icon={<Handshake className="h-8 w-8" />} />
          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollReveal>
              <p className="text-muted-foreground leading-relaxed">
                Universities onboard cohorts of students.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Internship cum volunteering with Connect2Roots (For Professional Courses).
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-semibold">Academic & institutional collaborators include:</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {academicPartners.map((name, i) => (
                  <li key={i}>• {name}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ChapterHeader chapter="NGO Partners" title="NGO Partners" subtitle="" />
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-muted-foreground leading-relaxed">
                Integrate C2R mentoring modules into existing programs for training & sourcing of students.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
