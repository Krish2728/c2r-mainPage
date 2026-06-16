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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

export function Vision2047() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-c2r-primary">
            Our Target — Vision 2047
          </p>
          <blockquote className="c2r-quote text-center">
            &ldquo;Our Vision 2047 is simple — a future where a student&apos;s
            potential is never limited by their background, and mentorship
            reaches every corner of this country.&rdquo;
          </blockquote>
        </motion.div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
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
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex min-h-[200px] flex-col rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-shadow duration-300 hover:border-c2r-primary/25 hover:shadow-md xl:min-h-0"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-c2r-primary/10 text-c2r-primary transition-colors group-hover:bg-c2r-primary group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="rounded bg-rose-50 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-tight tracking-wide text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                    Vision 2047
                  </span>
                </div>

                <AnimatedCounter
                  end={target.end}
                  suffix={target.suffix}
                  locale={target.locale}
                  className="heading-descender-safe mb-1.5 text-2xl font-bold leading-tight text-[oklch(0.58_0.12_45)] xl:text-[1.65rem]"
                  duration={2200}
                />

                <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
                  {target.label}
                </h3>

                <p className="mt-auto flex items-start gap-1.5 text-xs leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-c2r-accent" />
                  <span>{target.description}</span>
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
