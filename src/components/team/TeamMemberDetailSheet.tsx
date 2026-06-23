import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getMemberInitials } from "./teamUtils";

type TeamMemberDetailSheetProps = {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function TeamMemberDetailSheet({
  member,
  open,
  onOpenChange,
}: TeamMemberDetailSheetProps) {
  if (!member) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full max-w-full flex-col p-0 sm:max-w-md data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right"
      >
        <SheetHeader className="border-b p-6 pb-4">
          <div className="flex flex-col items-center gap-4 text-center">
            {member.photoUrl ? (
              <div className="h-32 w-32 overflow-hidden rounded-full shadow-md ring-4 ring-c2r-primary/15">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className={`h-full w-full object-cover ${member.photoClass ?? ""}`}
                />
              </div>
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-4xl font-bold text-white">
                {getMemberInitials(member.name)}
              </div>
            )}
            <SheetTitle className="text-2xl">{member.name}</SheetTitle>
            <p className="text-sm font-medium text-c2r-primary">
              {member.role}
            </p>
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-c2r-primary/10 hover:text-c2r-primary"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="p-6 pt-4">
            <p className="leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
