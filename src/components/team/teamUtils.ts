import type { TeamMember } from "@/data/teamMembers";

/** Split bio into up to two complete sentences — no ellipsis truncation */
export function getMemberSummaryLines(bio: string): [string, string?] {
  const sentences =
    bio
      .match(/[^.!?]+[.!?]+/g)
      ?.map((s) => s.trim())
      .filter(Boolean) ?? [];

  if (sentences.length === 0) {
    return [bio];
  }
  if (sentences.length === 1) {
    return [sentences[0]];
  }
  return [sentences[0], sentences[1]];
}

export function getMemberInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export type TeamMemberSelectHandler = (member: TeamMember) => void;
