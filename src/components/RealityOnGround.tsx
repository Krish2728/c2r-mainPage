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
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

const accentBright = "text-[oklch(0.82_0.11_68)]";
const accentSource = "text-[oklch(0.75_0.09_68)]";
const accentIcon =
  "border-[oklch(0.82_0.11_68/0.55)] bg-[oklch(0.82_0.11_68/0.12)] text-[oklch(0.82_0.11_68)] group-hover:bg-[oklch(0.82_0.11_68)] group-hover:text-c2r-primary";

export function RealityOnGround() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary via-c2r-primary to-c2r-secondary" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-c2r-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-5xl text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${accentBright}`}
          >
            The Reality on the Ground
          </p>
          <h2 className="heading-descender-safe mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Four gaps standing between India&apos;s youth and their{" "}
            <span className={accentBright}>future</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/85 md:text-xl">
            Not lack of talent. Not lack of ambition. Lack of access — to
            guidance, skills, opportunity, and the right connections.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
          {gaps.map((gap, index) => (
            <motion.article
              key={gap.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-shadow duration-300 hover:border-[oklch(0.82_0.11_68/0.45)] hover:bg-white/10 hover:shadow-xl hover:shadow-black/20 md:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${accentIcon}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
                <h3
                  className={`pt-1 text-sm font-bold uppercase tracking-wide md:text-base ${accentBright}`}
                >
                  {gap.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                {gap.description}
              </p>
              <div className="my-5 h-px bg-white/15" />
              <p
                className={`text-xs italic leading-relaxed md:text-sm ${accentSource}`}
              >
                Source: {gap.source}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
