import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  MdSchedule,
  MdMenuBook,
  MdAutoAwesome,
  MdEmojiEvents,
} from "react-icons/md";
import { getInvolvedIcons, ICON } from "@/lib/siteIcons";
import { ChapterHeader } from "@/components/ChapterHeader";
import { RoleCategories } from "@/components/RoleCategories";
import { MentorClosingCTA } from "@/components/MentorClosingCTA";
import { mentorRoleCategories } from "@/data/mentorRoles";
import { getHeroImageUrl } from "@/lib/images";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedBenefitGrid,
  GetInvolvedSectionCta,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const MentorIcon = getInvolvedIcons.mentor;

const mentorBenefits = [
  {
    icon: MdSchedule,
    title: "Flexible time commitment",
    description:
      "Mentor on your schedule — even a few hours a month creates lasting impact.",
  },
  {
    icon: MdMenuBook,
    title: "Training & ongoing support",
    description:
      "Onboarding, resources, and team support so you never mentor alone.",
  },
  {
    icon: MdAutoAwesome,
    title: "AI tools to enhance mentoring",
    description:
      "Smart tools that help you prepare, track progress, and follow up with students.",
  },
  {
    icon: MdEmojiEvents,
    title: "Meaningful impact",
    description:
      "Turn your career journey into guidance that changes a student's trajectory.",
  },
];

export default function GetInvolvedVolunteerPage() {
  const navigate = useNavigate();

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("volunteer")}
        chapter="Mentor"
        title="Why Mentor with Connect2Roots"
        subtitle="Your experience can become someone else's turning point."
        icon={<MentorIcon className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => navigate({ to: "/contact" })}
        >
          Apply as a Mentor
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <GetInvolvedBenefitGrid items={mentorBenefits} />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="How You Mentor"
          title="Ways you can mentor with us"
          subtitle="Structured, flexible, and designed around real student needs."
          icon={<MentorIcon className={ICON.hero} />}
        />
        <GetInvolvedContentWidth size="wide">
          <RoleCategories categories={mentorRoleCategories} />
          <GetInvolvedSectionCta
            label="Apply as a Mentor"
            onClick={() => navigate({ to: "/contact" })}
          />
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <MentorClosingCTA />
    </div>
  );
}
