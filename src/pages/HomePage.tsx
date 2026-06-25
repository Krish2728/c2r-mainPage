import { motion } from "framer-motion";
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

const enableItems = [
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
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

function EnableFeatureCard({
  item,
}: {
  item: (typeof enableItems)[number];
}) {
  const Icon = item.icon;

  return (
    <motion.div variants={cardVariants}>
      <Card
        className="card-hover-lift group h-full border border-border/60 shadow-sm hover:border-c2r-primary/20"
      >
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary transition-colors duration-300 group-hover:bg-c2r-primary group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="c2r-card-title mb-3">{item.title}</h3>
          <p className="c2r-prose-sm flex-1">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function HomePage() {
  const { data: testimonials = [] } = useTestimonials();

  return (
    <div className="flex flex-col">
      <HomeHero />

      {/* Intro Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <ScrollReveal direction="left">
            <ContentWithImage
              className="mx-auto max-w-6xl"
              imageSrc={getImageUrl(
                "/assets/generated/team-collaboration.dim_800x500.jpg",
              )}
              imageAlt="Indian students collaborating and learning together"
            >
              <div className="space-y-6">
                <h2 className="heading-descender-safe mb-6 text-4xl font-bold">
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
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-c2r-primary">
                  Our Approach
                </p>
                <h2 className="heading-descender-safe mb-6 text-4xl font-bold">
                  What We Enable
                </h2>
                <p className="c2r-prose mx-auto max-w-3xl">
                  Through our comprehensive approach, we empower students to
                  achieve their full potential.
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {enableItems.map((item) => (
                <EnableFeatureCard key={item.title} item={item} />
              ))}
            </motion.div>

            <ScrollReveal delay={200}>
              <motion.div
                className="mx-auto mt-16 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease }}
              >
                <Card className="border-none bg-gradient-to-br from-c2r-primary/5 to-c2r-secondary/5 shadow-xl">
                  <CardContent className="pt-8">
                    <h3 className="mb-6 text-center text-2xl font-bold">
                      Impact at a Glance
                    </h3>
                    <div className="grid gap-6 text-left md:grid-cols-2">
                      <div className="space-y-4">
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
                      <div className="space-y-4">
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
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Vision2047 />

      {/* Find Your Place & Testimonials */}
      <section className="c2r-gradient-section py-20 text-white md:py-28">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <FindYourPlace />

            {testimonials.length > 0 && (
              <motion.div
                className="mx-auto max-w-4xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease }}
              >
                <h3 className="heading-descender-safe mb-10 text-center text-3xl font-bold md:mb-12">
                  Mentor Stories
                </h3>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-3">
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem
                        key={testimonial.name + index}
                        className="basis-full pl-3 md:basis-1/2 lg:basis-1/3"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06, duration: 0.45 }}
                          className="h-full"
                        >
                          <Card className="flex h-full min-h-[220px] flex-col border-white/20 bg-white/10 backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-white/35 hover:bg-white/[0.14]">
                            <CardContent className="flex flex-1 flex-col pt-6">
                              <div className="mb-4 flex items-center gap-4">
                                {testimonial.photoUrl ? (
                                  <img
                                    src={testimonial.photoUrl}
                                    alt={testimonial.name}
                                    className="h-14 w-14 rounded-full border-2 border-white/30 object-cover"
                                  />
                                ) : (
                                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-lg font-bold text-white">
                                    {testimonial.name.charAt(0)}
                                  </div>
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
                              <p className="flex-1 italic leading-relaxed text-white/90">
                                &ldquo;{testimonial.message}&rdquo;
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-white/30 text-white hover:bg-white/20" />
                  <CarouselNext className="border-white/30 text-white hover:bg-white/20" />
                </Carousel>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
