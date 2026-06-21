import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Users,
  HandHelping,
  Briefcase,
  Heart,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const accentGold = "oklch(0.82_0.11_68)";

function AudienceCard({ item, index }: { item: AudienceCard; index: number }) {
  const Icon = item.icon;
  const isLastOdd =
    index === audiences.length - 1 && audiences.length % 2 !== 0;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group flex h-full flex-col rounded-xl border border-white/25 bg-white/15 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[oklch(0.82_0.11_68/0.5)] hover:bg-white/20 sm:p-5 ${
        isLastOdd
          ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none"
          : ""
      }`}
    >
      <div
        className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition-colors duration-300 group-hover:bg-white/20"
        style={{ color: accentGold }}
      >
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="mb-2 text-base font-semibold leading-snug text-white sm:text-sm">
        {item.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/90">
        {item.description}
      </p>

      <Button
        asChild
        size="sm"
        className="h-auto min-h-9 w-full shrink-0 whitespace-normal border border-[oklch(0.82_0.11_68/0.4)] bg-[oklch(0.82_0.11_68/0.18)] px-3 py-2.5 text-center text-xs font-medium leading-snug text-white shadow-none hover:border-[oklch(0.82_0.11_68/0.6)] hover:bg-[oklch(0.82_0.11_68/0.28)] sm:text-sm"
      >
        <Link to={item.to}>{item.cta}</Link>
      </Button>
    </motion.article>
  );
}

export function FindYourPlace() {
  return (
    <div className="mb-12">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="c2r-heading-dark mb-3 text-2xl md:text-3xl">
          Find your place at Connect2Roots
        </h2>
        <p className="c2r-hero-subtitle text-base md:text-lg">
          Every person has a role to play. Find yours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
        {audiences.map((item, index) => (
          <AudienceCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
