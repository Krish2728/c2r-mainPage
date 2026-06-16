import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export function MentorClosingCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-c2r-primary via-c2r-primary to-c2r-secondary px-6 py-14 md:px-12 md:py-20 text-center shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none text-[clamp(4rem,18vw,11rem)] font-black uppercase tracking-[0.08em] text-white/[0.06]"
          >
            ROOTS
          </p>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="heading-descender-safe font-serif text-2xl md:text-4xl font-bold text-white leading-tight mb-5">
              You Have Walked the Path. That&apos;s Enough to Guide Someone
              Else.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8">
              A few hours a month from you can give a student the direction,
              confidence, and clarity they have been searching for.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base md:text-lg px-8 py-6"
              onClick={() => navigate({ to: "/contact" })}
            >
              Apply as a Mentor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
