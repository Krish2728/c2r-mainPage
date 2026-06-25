import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Users,
  HandHelping,
  Briefcase,
  Heart,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type AudienceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  to: string;
};

const audiences: AudienceCard[] = [
  {
    icon: GraduationCap,
    title: "For students",
    description:
      "Looking for mentorship, skill development, and career direction to find your path.",
    cta: "Apply for the program",
    to: "/programs",
  },
  {
    icon: Users,
    title: "For mentors",
    description:
      "Guide students with mentorship, career direction, and real-world insight.",
    cta: "Become a mentor",
    to: "/get-involved/volunteer",
  },
  {
    icon: HandHelping,
    title: "For volunteers",
    description:
      "Passionate individuals ready to volunteer their time and skills to help our students thrive.",
    cta: "Join as volunteer",
    to: "/get-involved/other-volunteering-roles",
  },
  {
    icon: Briefcase,
    title: "For corporates",
    description:
      "A company or institution looking to collaborate, run CSR programs, or support our work.",
    cta: "Explore partnerships",
    to: "/get-involved/corporate-partnerships",
  },
  {
    icon: Heart,
    title: "For donors",
    description:
      "Want to contribute to the mission and help more students access guidance and opportunity.",
    cta: "Support the mission",
    to: "/donate",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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

function AudienceCardItem({
  item,
  index,
  reducedMotion,
}: {
  item: AudienceCard;
  index: number;
  reducedMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -5, transition: { duration: 0.22, ease: "easeOut" } }
      }
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-white/35 hover:bg-white/[0.14] hover:shadow-xl hover:shadow-black/15 xl:p-5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-c2r-gold transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white/25">
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-xs font-semibold tabular-nums tracking-widest text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-3 text-sm font-semibold leading-snug text-white xl:mt-4 xl:text-base">
        {item.title}
      </h3>

      <p className="relative mt-2 flex-1 text-xs leading-relaxed text-white/85 xl:text-sm">
        {item.description}
      </p>

      <Button
        asChild
        size="sm"
        className="relative mt-4 h-auto min-h-9 w-full shrink-0 whitespace-normal border border-c2r-gold-soft bg-c2r-gold-soft px-2.5 py-2 text-center text-[0.6875rem] font-medium leading-snug text-white shadow-none hover:border-c2r-gold hover:bg-c2r-gold-soft xl:mt-5 xl:min-h-10 xl:px-3 xl:py-2.5 xl:text-xs"
      >
        <Link to={item.to} className="inline-flex items-center justify-center gap-1.5">
          {item.cta}
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </motion.article>
  );
}

export function FindYourPlace() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mb-14 md:mb-16">
      <motion.div
        className="mb-8 text-center md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease }}
      >
        <h2 className="c2r-heading-dark mb-3 text-2xl md:text-3xl">
          Find your place at Connect2Roots
        </h2>
        <p className="c2r-hero-subtitle text-base md:text-lg">
          Every person has a role to play. Find yours.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {audiences.map((item, index) => (
          <AudienceCardItem
            key={item.title}
            item={item}
            index={index}
            reducedMotion={!!reducedMotion}
          />
        ))}
      </motion.div>
    </div>
  );
}
