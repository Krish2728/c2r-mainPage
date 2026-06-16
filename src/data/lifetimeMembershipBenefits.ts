import {
  Users,
  Network,
  BookOpen,
  HandHelping,
  Infinity,
  type LucideIcon,
} from "lucide-react";

export type LifetimeBenefit = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export const LIFETIME_MEMBERSHIP_AMOUNT = "₹15,000";

export const lifetimeMembershipBenefits: LifetimeBenefit[] = [
  {
    title: "Exclusive Community Access",
    icon: Users,
    items: [
      "Membership in the Connect2Roots professional community.",
      "Opportunities to connect with mentors, industry leaders, entrepreneurs, and fellow members.",
      "Access to curated networking groups and forums.",
    ],
  },
  {
    title: "Networking & Engagement Opportunities",
    icon: Network,
    items: [
      "Priority invitations to Foundation networking events, conferences, and community meetups.",
      "Access to member-only discussions and knowledge-sharing sessions.",
      "Opportunities to collaborate on social impact initiatives and projects.",
    ],
  },
  {
    title: "Learning & Resource Access",
    icon: BookOpen,
    items: [
      "Complimentary access to selected webinars, workshops, and mentoring sessions organized by the Foundation.",
      "Access to curated career, leadership, entrepreneurship, and professional development resources.",
      "Regular updates on opportunities, initiatives, and community programs.",
    ],
  },
  {
    title: "Volunteer & Leadership Opportunities",
    icon: HandHelping,
    items: [
      "Opportunities to contribute as a mentor, speaker, volunteer, or advisor.",
      "Participation in Foundation-led initiatives supporting youth and communities.",
      "Recognition for contributions to the Foundation's mission and impact.",
    ],
  },
  {
    title: "Long-Term Association",
    icon: Infinity,
    items: [
      "Lifetime association with the Connect2Roots community.",
      "Continued access to eligible member benefits as determined and updated by the Foundation from time to time.",
    ],
  },
];

export const membershipNote =
  "Lifetime Membership is granted as a recognition of support extended to the Foundation through a one-time donation. Membership benefits are facilitative in nature and do not constitute a commercial service, ownership interest, or entitlement to financial returns. Connect2Roots Foundation reserves the right to modify membership benefits and program offerings in alignment with its charitable objectives and applicable regulations.";

export const commitmentText =
  "Your contribution directly supports Connect2Roots Foundation's mission of empowering youth through mentoring, career development, knowledge exchange, and community engagement. Together, we can create a stronger bridge between aspirations, opportunities, and roots.";
