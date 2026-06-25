import { useState } from "react";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { getMemberInitials } from "./teamUtils";

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

export function TeamMemberCard({
  member,
  index,
  onSelect,
  staggerCols = 4,
  compact = false,
}: TeamMemberCardProps) {
  const [photoError, setPhotoError] = useState(false);
  const showPhoto = member.photoUrl && !photoError;

  return (
    <ScrollReveal
      delay={getTeamCardRevealDelay(index, staggerCols)}
      direction="up"
    >
      <article
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
        className="team-member-card group flex h-full min-w-0 cursor-pointer flex-col items-center text-center outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary/40 focus-visible:ring-offset-2 md:items-start md:text-left"
      >
        <div className="mb-3 shrink-0 sm:mb-4 md:mb-5">
          <div
            className={cn(
              "overflow-hidden rounded-full bg-muted",
              compact
                ? "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-[7.5rem] lg:w-[7.5rem]"
                : "h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36",
            )}
          >
            {showPhoto ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                loading="lazy"
                onError={() => setPhotoError(true)}
                className={`h-full w-full object-cover ${member.photoClass ?? ""}`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-c2r-primary/90 to-c2r-secondary text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {getMemberInitials(member.name)}
              </div>
            )}
          </div>
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
