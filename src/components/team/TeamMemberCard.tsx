import { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { getMemberSummaryLines, getMemberInitials } from "./teamUtils";

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
  onSelect: () => void;
  staggerCols?: 4 | 5;
  compact?: boolean;
};

function getTeamCardRevealDelay(index: number, cols: number): number {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return row * 150 + col * 40;
}

function TeamMemberSummaryTip({
  member,
  summaryLines,
  open,
}: {
  member: TeamMember;
  summaryLines: string[];
  open: boolean;
}) {
  return (
    <div
      role="tooltip"
      className={cn(
        "absolute left-1/2 top-[calc(100%+0.5rem)] z-30 w-[min(calc(100vw-2rem),18rem)] -translate-x-1/2 rounded-xl border border-border/80 bg-popover px-4 py-3 shadow-lg transition-all duration-200",
        "translate-y-1 opacity-0 pointer-events-none",
        /* Mobile: tap to toggle */
        open && "translate-y-0 opacity-100 pointer-events-auto",
        /* Desktop: hover / focus on avatar */
        "md:group-hover/avatar:translate-y-0 md:group-hover/avatar:opacity-100",
        "md:group-focus-within/avatar:translate-y-0 md:group-focus-within/avatar:opacity-100",
        open && "md:translate-y-1 md:opacity-0 md:pointer-events-none",
        "lg:left-0 lg:translate-x-0 lg:group-hover/avatar:translate-x-0 lg:group-focus-within/avatar:translate-x-0",
        open && "lg:translate-x-0",
      )}
    >
      <p className="text-sm font-semibold text-foreground">{member.name}</p>
      <div className="mt-2 space-y-2">
        {summaryLines.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
      <p className="mt-2.5 text-[11px] font-medium text-c2r-primary md:hidden">
        Tap card for full profile
      </p>
      <p className="mt-2.5 hidden text-[11px] font-medium text-c2r-primary md:block">
        Click for full profile
      </p>
    </div>
  );
}

export function TeamMemberCard({
  member,
  index,
  onSelect,
  staggerCols = 4,
  compact = false,
}: TeamMemberCardProps) {
  const [photoError, setPhotoError] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const showPhoto = member.photoUrl && !photoError;
  const summaryLines = (
    member.summary ?? getMemberSummaryLines(member.bio)
  ).filter((line): line is string => Boolean(line));

  useEffect(() => {
    if (!summaryOpen) return;
    const close = () => setSummaryOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [summaryOpen]);

  const avatarCircle = (
    <div
      className={cn(
        "overflow-hidden rounded-full bg-muted ring-0 transition-shadow duration-300 group-hover/avatar:ring-4 group-hover/avatar:ring-c2r-primary/20",
        compact
          ? "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-[7.5rem] lg:w-[7.5rem]"
          : "h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36",
      )}
    >
      {showPhoto ? (
        <img
          src={member.photoUrl}
          alt=""
          loading="lazy"
          onError={() => setPhotoError(true)}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover/avatar:scale-105 ${member.photoClass ?? ""}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-c2r-primary/90 to-c2r-secondary text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {getMemberInitials(member.name)}
        </div>
      )}
    </div>
  );

  return (
    <ScrollReveal
      delay={getTeamCardRevealDelay(index, staggerCols)}
      direction="up"
    >
      <article
        role="button"
        tabIndex={0}
        onClick={() => {
          setSummaryOpen(false);
          onSelect();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSummaryOpen(false);
            onSelect();
          }
        }}
        className="team-member-card group flex h-full min-w-0 cursor-pointer flex-col items-center text-center outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary/40 focus-visible:ring-offset-2 md:items-start md:text-left"
      >
        <div className="group/avatar relative mb-3 shrink-0 sm:mb-4 md:mb-5">
          {/* Mobile / tablet: tap avatar to show same summary popover as desktop hover */}
          <button
            type="button"
            aria-label={`Show summary for ${member.name}`}
            aria-expanded={summaryOpen}
            onClick={(e) => {
              e.stopPropagation();
              setSummaryOpen((open) => !open);
            }}
            className="relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary/40 focus-visible:ring-offset-2 md:pointer-events-none md:focus-visible:ring-0"
          >
            {avatarCircle}
          </button>

          {summaryLines.length > 0 && (
            <TeamMemberSummaryTip
              member={member}
              summaryLines={summaryLines}
              open={summaryOpen}
            />
          )}
        </div>

        <h3
          className={cn(
            "w-full break-words font-bold leading-snug text-foreground transition-colors group-hover:text-c2r-primary",
            compact
              ? "text-sm sm:text-base lg:text-[0.95rem]"
              : "text-sm sm:text-base md:text-lg",
          )}
        >
          {member.name}
        </h3>

        <p className="mt-1 line-clamp-2 w-full break-words text-xs font-medium leading-snug text-c2r-primary sm:text-sm">
          {member.role}
        </p>

        {member.linkedinUrl && (
          <div className="mt-3 flex items-center justify-center gap-3 md:mt-4 md:justify-start">
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/70 transition-all duration-200 hover:bg-c2r-primary/10 hover:text-c2r-primary sm:h-9 sm:w-9"
            >
              <Linkedin
                className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                strokeWidth={1.75}
              />
            </a>
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}
