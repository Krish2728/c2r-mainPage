import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const gaps = [
  {
    title: "Lack of Career Guidance",
    description:
      "India has fewer than 10,000 trained career counsellors for over 265 million school students — a ratio of 1:3,000, far above the internationally recommended 1:250.",
    source:
      "National Education Policy 2020, Ministry of Education, Govt. of India & ILO global counsellor ratio standards",
  },
  {
    title: "Skills Gap",
    description:
      "Only 4.4% of working-age Indians have received formal vocational training — compared to 52% in the USA, 80% in Japan, and 96% in South Korea.",
    source:
      "Periodic Labour Force Survey (PLFS) 2022–23, Ministry of Statistics & Programme Implementation, Govt. of India",
  },
  {
    title: "Limited Livelihood Opportunities",
    description:
      "India must create 7.85 million new non-farm jobs every year until 2030 — yet most first-generation youth have no structured pathway to reach them.",
    source: "Economic Survey 2023–24, Ministry of Finance, Govt. of India",
  },
  {
    title: "Disconnect Between Education and Industry",
    description:
      "Only 51.25% of Indian graduates are considered employable by industry — because what students learn rarely matches what employers actually need.",
    source:
      "India Skills Report 2024, Wheebox & Confederation of Indian Industry (CII)",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

type GapCardProps = {
  gap: (typeof gaps)[number];
  index: number;
  reducedMotion: boolean;
};

function RealityGapCard({ gap, index, reducedMotion }: GapCardProps) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -5, transition: { duration: 0.25, ease: "easeOut" } }
      }
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-white/40 hover:bg-white/[0.14] hover:shadow-xl hover:shadow-black/20 md:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <motion.div
          initial={reducedMotion ? false : { scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 22,
            delay: index * 0.08 + 0.12,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-c2r-gold transition-colors duration-300 group-hover:border-white/50 group-hover:bg-white/30"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.div>

        <span className="text-xs font-semibold tabular-nums tracking-widest text-white/45">
          {indexLabel}
        </span>
      </div>

      <h3 className="relative mt-4 text-base font-bold uppercase leading-snug tracking-wide text-white md:text-lg">
        {gap.title}
      </h3>

      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.18, duration: 0.45, ease }}
        className="relative mt-3 flex-1 text-sm leading-relaxed text-white/90 md:text-[0.9375rem] md:leading-7"
      >
        {gap.description}
      </motion.p>

      <motion.div
        initial={reducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.24, duration: 0.55, ease }}
        className="relative my-5 h-px origin-left bg-gradient-to-r from-white/45 via-white/20 to-transparent"
      />

      <p className="relative mt-auto text-xs leading-relaxed text-white/75 md:text-sm">
        <span className="font-semibold text-c2r-gold-muted">Source:</span>{" "}
        {gap.source}
      </p>
    </motion.article>
  );
}

export function RealityOnGround() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 c2r-gradient-section" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-5xl text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-c2r-gold md:text-sm">
            The Reality on the Ground
          </p>
          <h2 className="c2r-heading-dark-lg mb-5">
            Four gaps standing between India&apos;s youth and their{" "}
            <span className="text-c2r-gold">future</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/95 md:text-lg">
            Not lack of talent. Not lack of ambition. Lack of access — to
            guidance, skills, opportunity, and the right connections.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {gaps.map((gap, index) => (
            <RealityGapCard
              key={gap.title}
              gap={gap}
              index={index}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
