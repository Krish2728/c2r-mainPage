import { motion, useReducedMotion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

function VisionStatCard({
  target,
  index,
  reducedMotion,
}: {
  target: VisionTarget;
  index: number;
  reducedMotion: boolean;
}) {
  const Icon = target.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -4, transition: { duration: 0.22, ease: "easeOut" } }
      }
      className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-c2r-primary/30 hover:shadow-lg md:min-h-[240px]"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <motion.div
          initial={reducedMotion ? false : { scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 22,
            delay: index * 0.07 + 0.1,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary transition-colors duration-300 group-hover:bg-c2r-primary group-hover:text-white"
        >
          <Icon className="h-4 w-4" />
        </motion.div>
        <span className="text-xs font-semibold tabular-nums tracking-widest text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <AnimatedCounter
        end={target.end}
        suffix={target.suffix}
        locale={target.locale}
        className="heading-descender-safe mb-2 text-2xl font-bold leading-tight text-c2r-primary md:text-3xl"
        duration={2000}
      />

      <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground md:text-base">
        {target.label}
      </h3>

      <p className="mt-auto flex items-start gap-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-c2r-accent" />
        <span>{target.description}</span>
      </p>
    </motion.article>
  );
}

export function Vision2047() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-gradient-to-b from-background via-muted/20 to-background py-16 md:py-20">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
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

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {targets.map((target, index) => (
            <VisionStatCard
              key={target.label}
              target={target}
              index={index}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
