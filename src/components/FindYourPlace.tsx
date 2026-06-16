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
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function FindYourPlace() {
  return (
    <div className="mb-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="heading-descender-safe font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Find your place at Connect2Roots
        </h2>
        <p className="text-lg md:text-xl text-white/85">
          Every person has a role to play. Find yours.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[oklch(0.82_0.11_68/0.45)] hover:bg-white/15 hover:shadow-xl hover:shadow-black/20 md:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[oklch(0.82_0.11_68)] transition-all duration-300 group-hover:border-[oklch(0.82_0.11_68/0.4)] group-hover:bg-[oklch(0.82_0.11_68/0.15)] group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/75 md:text-base">
                {item.description}
              </p>

              <Button
                asChild
                className="w-full border border-[oklch(0.82_0.11_68/0.35)] bg-[oklch(0.82_0.11_68/0.12)] text-[oklch(0.88_0.08_68)] shadow-none hover:border-[oklch(0.82_0.11_68/0.55)] hover:bg-[oklch(0.82_0.11_68/0.22)] hover:text-white"
              >
                <Link to={item.to}>{item.cta}</Link>
              </Button>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
