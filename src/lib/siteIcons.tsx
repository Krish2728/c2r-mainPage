/**
 * Professional Material Design Outlined icons (react-icons/md).
 * Used for page heroes, nav cards, and section headers — similar to
 * nonprofit / education sites without adding @mui/material (~300KB).
 */
import type { IconType } from "react-icons";
import {
  MdInfo,
  MdGroups,
  MdVisibility,
  MdTrackChanges,
  MdPeople,
  MdHub,
  MdExplore,
  MdTimeline,
  MdFavorite,
  MdVolunteerActivism,
  MdSchool,
  MdWork,
  MdTrendingUp,
  MdPsychology,
  MdPersonPin,
  MdHandshake,
  MdPublic,
  MdPolicy,
  MdContactMail,
  MdMail,
  MdBusinessCenter,
  MdWorkspacePremium,
  MdMenuBook,
  MdLightbulb,
  MdAutoGraph,
  MdRoute,
  MdSupervisorAccount,
  MdDiversity3,
  MdVerified,
  MdShield,
  MdBolt,
  MdLocationOn,
  MdRocketLaunch,
  MdEco,
  MdPsychologyAlt,
  MdBuild,
  MdAccountTree,
  MdCheckCircle,
  MdEmojiObjects,
  MdConnectWithoutContact,
  MdCampaign,
  MdCorporateFare,
  MdPayments,
  MdFormatQuote,
  MdArrowForward,
} from "react-icons/md";

/** Standard Tailwind size classes for consistent iconography */
export const ICON = {
  hero: "h-8 w-8",
  nav: "h-10 w-10",
  benefit: "h-8 w-8",
  section: "h-8 w-8",
  inline: "h-5 w-5",
  button: "h-5 w-5",
} as const;

export type SiteIconType = IconType;

/** About Us */
export const aboutIcons = {
  hub: MdInfo,
  whoWeAre: MdGroups,
  visionMission: MdVisibility,
  mission: MdTrackChanges,
  team: MdPeople,
  advisory: MdDiversity3,
  workingModel: MdHub,
  values: MdExplore,
  journey: MdTimeline,
  purpose: MdFavorite,
  community: MdVolunteerActivism,
  founder: MdFormatQuote,
} as const;

/** Programs */
export const programIcons = {
  hub: MdMenuBook,
  career: MdSchool,
  skills: MdWork,
  livelihoods: MdTrendingUp,
} as const;

/** Mentorship */
export const mentorshipIcons = {
  hub: MdConnectWithoutContact,
  why: MdPsychology,
  mentee: MdPersonPin,
  mentor: MdSupervisorAccount,
  journey: MdRoute,
} as const;

/** SEPF */
export const sepfIcons = {
  hub: MdPolicy,
  mission: MdLightbulb,
  sdgs: MdPublic,
  skills: MdWork,
  future: MdAutoGraph,
  mentoring: MdPsychologyAlt,
  impact: MdCorporateFare,
  join: MdCampaign,
} as const;

/** Contact & Get Involved */
export const contactIcons = {
  hub: MdContactMail,
  general: MdMail,
  partnership: MdBusinessCenter,
  volunteer: MdVolunteerActivism,
  membership: MdWorkspacePremium,
  location: MdLocationOn,
  social: MdConnectWithoutContact,
} as const;

export const getInvolvedIcons = {
  hub: MdVolunteerActivism,
  mentor: MdSupervisorAccount,
  volunteer: MdHandshake,
  corporate: MdCorporateFare,
  alliances: MdHandshake,
  membership: MdWorkspacePremium,
  donation: MdPayments,
  quote: MdFormatQuote,
} as const;

/** Shared benefit / feature icons */
export const featureIcons = {
  humanCentered: MdFavorite,
  technology: MdBolt,
  community: MdGroups,
  impact: MdTrackChanges,
  integrity: MdShield,
  excellence: MdVerified,
  innovation: MdEmojiObjects,
  build: MdBuild,
  tree: MdAccountTree,
  check: MdCheckCircle,
  eco: MdEco,
  rocket: MdRocketLaunch,
  compass: MdExplore,
  lightbulb: MdLightbulb,
  users: MdPeople,
  target: MdTrackChanges,
  arrow: MdArrowForward,
} as const;

export function renderSiteIcon(
  Icon: SiteIconType,
  className: string = ICON.hero,
) {
  return <Icon className={className} aria-hidden />;
}
