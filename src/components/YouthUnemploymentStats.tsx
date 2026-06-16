import { motion } from "framer-motion";
import { TrendingUp, Users, MapPin, Info } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  youthUnemploymentSummary,
  highestYouthUnemployment,
  maxYouthUnemploymentRate,
  type StateUnemployment,
} from "@/data/youthUnemployment";

const accentBright = "text-[oklch(0.82_0.11_68)]";

type MetricCardProps = {
  icon: React.ReactNode;
  end: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
  variant?: "default" | "alert" | "positive";
  delay?: number;
};

function MetricCard({
  icon,
  end,
  suffix = "%",
  decimals = 1,
  label,
  sublabel,
  variant = "default",
  delay = 0,
}: MetricCardProps) {
  const valueColor =
    variant === "alert"
      ? "text-red-600"
      : variant === "positive"
        ? "text-c2r-primary"
        : "text-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-lg backdrop-blur-sm"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-c2r-primary/10 text-c2r-primary">
        {icon}
      </div>
      <AnimatedCounter
        end={end}
        suffix={suffix}
        decimals={decimals}
        className={`heading-descender-safe text-4xl font-bold ${valueColor}`}
        duration={1800}
      />
      <p className="mt-2 text-sm font-medium text-foreground leading-snug">
        {label}
      </p>
      {sublabel && (
        <p className="mt-1 text-xs text-muted-foreground">{sublabel}</p>
      )}
    </motion.div>
  );
}

function StateRankRow({
  row,
  variant,
  index,
}: {
  row: StateUnemployment;
  variant: "high" | "low";
  index: number;
}) {
  const isTop = row.rank <= 3;
  const barPercent = Math.max(
    (row.total / maxYouthUnemploymentRate) * 100,
    variant === "low" ? 10 : 6,
  );
  const barColor =
    variant === "high"
      ? "bg-gradient-to-r from-red-500/90 to-red-400/70"
      : "bg-gradient-to-r from-c2r-primary to-c2r-secondary";
  const rankBg =
    variant === "high" && isTop
      ? "bg-red-100 text-red-700"
      : variant === "low" && isTop
        ? "bg-c2r-primary/15 text-c2r-primary"
        : "bg-muted text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, x: variant === "high" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className={`rounded-xl border p-3 transition-shadow hover:shadow-md ${
        isTop
          ? "border-c2r-primary/20 bg-gradient-to-r from-white to-muted/30"
          : "border-border/50 bg-white"
      }`}
    >
      <div className="flex items-start gap-3 mb-2">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${rankBg}`}
        >
          {row.rank}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="c2r-card-title truncate">{row.state}</h4>
            <span
              className={`text-lg font-bold shrink-0 ${
                variant === "high" ? "text-red-600" : "text-c2r-primary"
              }`}
            >
              {row.total.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${barPercent}%` }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 + index * 0.05,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="flex gap-4 text-xs text-muted-foreground">
        <span>
          <span className="font-medium text-foreground">Male</span>{" "}
          {row.male.toFixed(1)}%
        </span>
        <span>
          <span className="font-medium text-foreground">Female</span>{" "}
          {row.female.toFixed(1)}%
        </span>
      </div>
    </motion.div>
  );
}

function StateRankingPanel({
  title,
  subtitle,
  rows,
  variant,
  icon,
}: {
  title: string;
  subtitle: string;
  rows: StateUnemployment[];
  variant: "high" | "low";
  icon: React.ReactNode;
}) {
  return (
    <ScrollReveal direction="up">
      <div className="h-full rounded-2xl border border-white/20 bg-white/95 p-4 md:p-5 shadow-xl backdrop-blur-sm">
        <div className="mb-4 flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              variant === "high"
                ? "bg-red-100 text-red-600"
                : "bg-c2r-primary/10 text-c2r-primary"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="c2r-card-title">{title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
          </div>
        </div>
        <div
          className={
            rows.length > 5 ? "grid gap-2 sm:grid-cols-2" : "space-y-2"
          }
        >
          {rows.map((row, index) => (
            <StateRankRow
              key={row.state}
              row={row}
              variant={variant}
              index={index}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function YouthUnemploymentStats() {
  const {
    dataPeriod,
    lastReviewed,
    nationalRate,
    highestRate,
    highestState,
    youthShareOfUnemployed,
    sources,
  } = youthUnemploymentSummary;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 c2r-gradient-section" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-c2r-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 mb-5">
            <Info className="h-3.5 w-3.5" />
            Official data · {dataPeriod}
          </span>
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${accentBright}`}
          >
            Youth Unemployment in India
          </p>
          <h2 className="c2r-heading-dark-lg mb-4">
            Youth Unemployment Rate in India
          </h2>
          <p className="c2r-prose-on-dark max-w-2xl mx-auto">
            State-wise rates for ages 15–29 — every percentage represents a
            young person searching for direction, opportunity, and a first
            break.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <MetricCard
            icon={<Users className="h-5 w-5" />}
            end={nationalRate}
            label="National youth unemployment"
            sublabel={`Age 15–29 · ${dataPeriod}`}
            delay={0}
          />
          <MetricCard
            icon={<TrendingUp className="h-5 w-5" />}
            end={highestRate}
            label={`Highest rate — ${highestState}`}
            sublabel="Among states & UTs surveyed"
            variant="alert"
            delay={0.08}
          />
          <MetricCard
            icon={<MapPin className="h-5 w-5" />}
            end={youthShareOfUnemployed}
            label="Of India's unemployed are youth"
            sublabel="ILO, 2024"
            delay={0.16}
          />
        </div>

        <div className="mx-auto max-w-4xl mb-10">
          <StateRankingPanel
            title="Highest youth unemployment"
            subtitle="States where young people face the steepest barriers to work"
            rows={highestYouthUnemployment}
            variant="high"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-3xl rounded-xl border border-white/15 bg-white/10 px-6 py-5 text-center backdrop-blur-sm">
            <p className="c2r-prose-sm italic text-white/90 mb-3">
              &ldquo;Talent is evenly distributed — opportunity is not. These
              numbers are why Connect2Roots exists: to reach students where
              guidance and pathways are hardest to find.&rdquo;
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              Source: {sources.join(" · ")}
            </p>
            <p className="text-xs text-white/50 mt-1">
              Data period: {dataPeriod} · Last reviewed: {lastReviewed}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
