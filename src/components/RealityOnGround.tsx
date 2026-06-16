import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
  }),
};

const gold = "oklch(0.88_0.1_68)";
const goldMuted = "oklch(0.82_0.08_68)";

export function RealityOnGround() {
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
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] md:text-sm"
            style={{ color: gold }}
          >
            The Reality on the Ground
          </p>
          <h2 className="c2r-heading-dark-lg mb-5">
            Four gaps standing between India&apos;s youth and their{" "}
            <span style={{ color: gold }}>future</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/95 md:text-lg">
            Not lack of talent. Not lack of ambition. Lack of access — to
            guidance, skills, opportunity, and the right connections.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 md:gap-5">
          {gaps.map((gap, index) => (
            <motion.article
              key={gap.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-xl border border-white/30 bg-white/20 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-white/25 md:p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/25 transition-colors group-hover:border-white/60 group-hover:bg-white/35"
                  style={{ color: gold }}
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
                <h3
                  className="pt-0.5 text-sm font-bold uppercase leading-snug tracking-wide md:text-base"
                  style={{ color: gold }}
                >
                  {gap.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-white md:text-base">
                {gap.description}
              </p>

              <div className="my-4 h-px bg-white/35" />

              <p className="text-xs leading-relaxed text-white/80 md:text-sm">
                <span
                  className="font-medium not-italic"
                  style={{ color: goldMuted }}
                >
                  Source:
                </span>{" "}
                {gap.source}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
