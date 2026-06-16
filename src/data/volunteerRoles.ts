export type VolunteerRole = {
  roleCode: string;
  title: string;
  description: string;
  audience: string;
};

export type VolunteerRoleCategory = {
  category: string;
  roles: VolunteerRole[];
};

export const volunteerRoleCategories: VolunteerRoleCategory[] = [
  {
    category: "Outreach & Advocacy",
    roles: [
      {
        roleCode: "Roots Ambassador",
        title: "Corporate & Community Outreach",
        description:
          "Pitch to CSR teams, bring in corporate volunteers, and grow Connect2Roots' reach in your city.",
        audience: "Corporate professionals",
      },
      {
        roleCode: "Creative Contributor",
        title: "Storytelling, Design & Video",
        description:
          "Tell student stories through illustrations, short videos, social content, or written features.",
        audience: "Designers, writers, and filmmakers",
      },
    ],
  },
  {
    category: "Learning & Development",
    roles: [
      {
        roleCode: "Session Facilitator",
        title: "Workshops & Webinars",
        description:
          "Run a single online session — resume help, Excel, public speaking, or financial literacy.",
        audience: "Anyone with a skill to share",
      },
      {
        roleCode: "Learning Associate",
        title: "Career Guidance Support",
        description:
          "Support guidance sessions, curate learning resources, and follow up with students on progress.",
        audience: "Working professionals with 2+ years of experience",
      },
    ],
  },
  {
    category: "Research & Strategy",
    roles: [
      {
        roleCode: "Impact Analyst",
        title: "Impact Measurement & Program Design",
        description:
          "Build surveys, analyse district data, and design programs — bring rigor to how we scale.",
        audience: "Researchers, strategists, and data analysts",
      },
    ],
  },
  {
    category: "Operations & Management",
    roles: [
      {
        roleCode: "Program Coordinator",
        title: "Mentor & Student Management",
        description:
          "Onboard mentors and students, coordinate sessions, and track progress across the program.",
        audience: "Organised and people-oriented volunteers",
      },
      {
        roleCode: "Tech & Community Associate",
        title: "Platforms, Tools & Dashboards",
        description:
          "Manage digital tools, maintain forms and dashboards, and support platform operations.",
        audience: "Tech-savvy volunteers",
      },
    ],
  },
];
