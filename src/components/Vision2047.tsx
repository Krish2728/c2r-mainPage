import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  BookOpen,
  HandHelping,
  School,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type VisionTarget = {
  icon: LucideIcon;
  end: number;
  suffix: string;
  label: string;
  description: string;
  locale?: string;
};

const targets: VisionTarget[] = [
  {
    icon: GraduationCap,
    end: 1,
    suffix: " Million+",
    label: "Students to be Mentored",
    description:
      "Targeting 1 million students guided to brighter futures by 2047.",
  },
  {
    icon: HeartHandshake,
    end: 500,
    suffix: "+",
    label: "Corporate Partnerships",
    description:
      "500 companies investing in India's underserved talent by 2047.",
  },
  {
    icon: BookOpen,
    end: 20,
    suffix: "+",
    label: "States to be Covered",
    description: "A pan-India presence across 20+ states.",
  },
  {
    icon: HandHelping,
    end: 150000,
    suffix: "+",
    label: "Volunteer Mentors",
    description: "1.5 lakh professionals giving back to the society.",
    locale: "en-IN",
  },
  {
    icon: School,
    end: 500,
    suffix: "+",
    label: "Partner Colleges",
    description:
      "500 institutions opening doors for first-generation learners by 2047.",
  },
  {
    icon: UserRound,
    end: 350000,
    suffix: "+",
    label: "Girl Students",
    description: "3.5 lakh girl students empowered to lead their own futures.",
    locale: "en-IN",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Vision2047() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-c2r-primary">
            Our Target — Vision 2047
          </p>
          <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
            &ldquo;Our Vision 2047 is simple — a future where a student&apos;s
            potential is never limited by their background, and mentorship
            reaches every corner of this country.&rdquo;
          </blockquote>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {targets.map((target, index) => {
            const Icon = target.icon;
            return (
              <motion.article
                key={target.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow duration-300 hover:border-c2r-primary/25 hover:shadow-lg hover:shadow-c2r-primary/5 md:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary transition-colors group-hover:bg-c2r-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-md bg-rose-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                    Vision 2047
                  </span>
                </div>

                <AnimatedCounter
                  end={target.end}
                  suffix={target.suffix}
                  locale={target.locale}
                  className="heading-descender-safe mb-2 text-4xl font-bold text-[oklch(0.58_0.12_45)] md:text-5xl"
                  duration={2200}
                />

                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {target.label}
                </h3>

                <p className="mt-auto flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-c2r-accent" />
                  {target.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
