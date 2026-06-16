export type RoleCategory = {
  roleCode: string;
  title: string;
  description: string;
  audience: string;
};

export type RoleCategoryGroup = {
  category: string;
  roles: RoleCategory[];
};

export const mentorRoleCategories: RoleCategoryGroup[] = [
  {
    category: "Career Guidance",
    roles: [
      {
        roleCode: "Career Navigator",
        title: "One-on-One Mentoring",
        description:
          "Walk students through career choices, goals, and realistic pathways based on your industry experience and lived journey.",
        audience: "Working professionals with 3+ years of experience",
      },
      {
        roleCode: "Industry Insider",
        title: "Sector & Role Insights",
        description:
          "Share what your field actually looks like — the skills that matter, the paths in, and the realities students won't learn in a classroom.",
        audience: "Domain experts across sectors",
      },
    ],
  },
  {
    category: "Readiness & Growth",
    roles: [
      {
        roleCode: "Readiness Coach",
        title: "Interview & Placement Prep",
        description:
          "Help students sharpen resumes, practice interviews, and build the confidence to show up as their best selves.",
        audience: "HR leaders and hiring managers",
      },
      {
        roleCode: "Session Mentor",
        title: "Structured Check-Ins",
        description:
          "Regular mentoring conversations to track progress, answer questions, and keep students accountable to their goals.",
        audience: "Patient and consistent mentors",
      },
    ],
  },
  {
    category: "Ongoing Support",
    roles: [
      {
        roleCode: "Confidence Builder",
        title: "Soft Skills & Communication",
        description:
          "Guide students on professional communication, workplace etiquette, and the confidence to navigate new environments.",
        audience: "Leaders, managers, and coaches",
      },
      {
        roleCode: "Placement Guide",
        title: "Early Career Follow-Up",
        description:
          "Stay connected during internships and first jobs — helping students navigate early challenges and stay on track.",
        audience: "Senior professionals",
      },
    ],
  },
];
