import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Heart } from "lucide-react";
import { useTestimonials } from "@/hooks/useQueries";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HomeHero } from "@/components/home/HomeHero";
import { RealityOnGround } from "@/components/RealityOnGround";
import { Vision2047 } from "@/components/Vision2047";
import { FindYourPlace } from "@/components/FindYourPlace";
import { getImageUrl } from "@/lib/images";
import { ContentWithImage } from "@/components/get-involved/GetInvolvedLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  const { data: testimonials = [] } = useTestimonials();

  return (
    <div className="flex flex-col">
      <HomeHero />

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <ScrollReveal direction="left">
            <ContentWithImage
              className="max-w-6xl mx-auto"
              imageSrc={getImageUrl(
                "/assets/generated/team-collaboration.dim_800x500.jpg",
              )}
              imageAlt="Indian students collaborating and learning together"
            >
              <div className="space-y-6">
                <h2 className="heading-descender-safe text-4xl font-bold mb-6">
                  Welcome to Connect2Roots
                </h2>
                <p className="c2r-prose">
                  Connect2Roots Foundation is a non-profit working with
                  underserved students across India. Young people from smaller
                  towns, rural areas, and first-generation families who have the
                  ambition, the drive, and the potential, but never had access
                  to the right mentor, the right skills, or the right
                  opportunity to turn that potential into a career.
                </p>
                <p className="c2r-prose">
                  That&apos;s the gap we exist to close.
                </p>
                <p className="c2r-prose">
                  We connect these students with experienced mentors, practical
                  skill training, and livelihood support — because every young
                  person deserves a real shot at building the future they
                  imagined.
                </p>
              </div>
            </ContentWithImage>
          </ScrollReveal>
        </div>
      </section>

      <RealityOnGround />

      {/* What We Enable */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="heading-descender-safe text-4xl font-bold mb-6">
                  What We Enable
                </h2>
                <p className="c2r-prose max-w-3xl mx-auto">
                  Through our comprehensive approach, we empower students to
                  achieve their full potential.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Career Clarity",
                  description:
                    "Students gain clear direction on career paths, industry insights, and professional development strategies.",
                  icon: Target,
                },
                {
                  title: "Skill Development",
                  description:
                    "Access to industry-relevant training programs that bridge the gap between education and employment.",
                  icon: TrendingUp,
                },
                {
                  title: "Mentorship Network",
                  description:
                    "Connection with experienced professionals who provide guidance, support, and real-world perspectives.",
                  icon: Users,
                },
                {
                  title: "Livelihood Pathways",
                  description:
                    "Support for entrepreneurship and job placement to create sustainable career opportunities.",
                  icon: Heart,
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <item.icon className="h-10 w-10 mb-4 text-c2r-primary" />
                      <h3 className="c2r-card-title mb-3">{item.title}</h3>
                      <p className="c2r-prose-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-br from-c2r-primary/5 to-c2r-secondary/5 border-none shadow-xl max-w-4xl mx-auto">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Impact Snapshot (Extended)
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 text-left">
                      <div className="space-y-3">
                        <p className="c2r-prose">
                          <strong className="text-c2r-primary">
                            Diverse Reach:
                          </strong>{" "}
                          Students from 15+ states across India
                        </p>
                        <p className="c2r-prose">
                          <strong className="text-c2r-primary">
                            Industry Coverage:
                          </strong>{" "}
                          Mentors from 20+ industries including tech,
                          healthcare, finance, and education
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="c2r-prose">
                          <strong className="text-c2r-primary">
                            Success Rate:
                          </strong>{" "}
                          85% of mentored students report improved career
                          clarity
                        </p>
                        <p className="c2r-prose">
                          <strong className="text-c2r-primary">
                            Community Impact:
                          </strong>{" "}
                          Creating ripple effects in underserved communities
                          nationwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Vision2047 />

      {/* Find Your Place & Testimonials */}
      <section className="py-20 md:py-28 c2r-gradient-section text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <FindYourPlace />

            {/* Testimonials Carousel */}
            {testimonials.length > 0 && (
              <ScrollReveal delay={200}>
                <div className="max-w-4xl mx-auto">
                  <h3 className="heading-descender-safe text-3xl font-bold text-center mb-12">
                    Mentor Stories
                  </h3>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                            <CardContent className="pt-6">
                              <div className="flex items-center gap-4 mb-4">
                                {testimonial.photoUrl && (
                                  <img
                                    src={testimonial.photoUrl}
                                    alt={testimonial.name}
                                    className="h-14 w-14 rounded-full object-cover border-2 border-white/30"
                                  />
                                )}
                                <div>
                                  <div className="font-bold text-white">
                                    {testimonial.name}
                                  </div>
                                  <div className="text-sm text-white/70">
                                    {testimonial.role}
                                  </div>
                                </div>
                              </div>
                              <p className="text-white/90 italic leading-relaxed">
                                "{testimonial.message}"
                              </p>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-white/30 hover:bg-white/20" />
                    <CarouselNext className="text-white border-white/30 hover:bg-white/20" />
                  </Carousel>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
