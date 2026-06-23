import type { TeamMember } from "@/data/teamMembers";
import { TeamMemberCard } from "./TeamMemberCard";
import type { TeamMemberSelectHandler } from "./teamUtils";

type TeamMemberGridProps = {
  members: TeamMember[];
  onSelect: TeamMemberSelectHandler;
  /** 5 columns on large screens — used for Core Team */
  desktopColumns?: 4 | 5;
};

export function TeamMemberGrid({
  members,
  onSelect,
  desktopColumns = 4,
}: TeamMemberGridProps) {
  if (members.length === 0) return null;

  const isSingle = members.length === 1;
  const isFiveCol = desktopColumns === 5;

  return (
    <div
      className={[
        "team-member-grid grid w-full min-w-0",
        "grid-cols-2 gap-x-4 gap-y-8",
        "sm:gap-x-6 sm:gap-y-10",
        "md:grid-cols-3 md:gap-y-12",
        isFiveCol
          ? "lg:grid-cols-5 lg:gap-x-5 lg:gap-y-12 xl:gap-x-6 xl:gap-y-14"
          : "xl:grid-cols-4 xl:gap-x-8 xl:gap-y-14",
        isSingle &&
          (isFiveCol
            ? "mx-auto max-w-[12rem] grid-cols-1 sm:max-w-none sm:grid-cols-2 md:max-w-xs md:grid-cols-1 lg:max-w-none lg:grid-cols-5"
            : "mx-auto max-w-[12rem] grid-cols-1 sm:max-w-none sm:grid-cols-2 md:max-w-xs md:grid-cols-1 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {members.map((member, index) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          index={index}
          staggerCols={desktopColumns}
          compact={isFiveCol}
          onSelect={() => onSelect(member)}
        />
      ))}
    </div>
  );
}
