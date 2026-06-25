/**
 * Placeholder imagery via Unsplash (free license).
 * Curated for Indian students, classrooms, youth & community.
 * Replace with Connect2Roots own photos when available.
 */

function unsplash(id: string, w: number, h: number, q = 80): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=${q}&auto=format`;
}

/** Wide hero banners — 1920×1080, higher quality */
function hero(id: string): string {
  return unsplash(id, 1920, 1080, 85);
}

export const images = {
  // ── Page heroes (1920×1080) ─────────────────────────────────────────────
  "hero-home.jpg": hero("1573894998033-c0cef4ed722b"), // Girls in Indian classroom — homepage mask hero
  "hero-about.jpg": hero("1569173675610-42c361a86e37"), // Students in school — our story & people
  "hero-who-we-are.jpg": hero("1524069290683-0457abfe42c3"), // Indian youth group — community movement
  "hero-vision-mission.jpg": hero("1737825101103-c35677e6bd45"), // Young Indians walking — future & purpose
  "hero-our-team.jpg": hero("1686624386665-4cd01b96d0f6"), // Group learning session — team & mentors
  "hero-our-values.jpg": hero("1573894998033-c0cef4ed722b"), // Girls in classroom — education & equity
  "hero-working-model.jpg": hero("1692269725836-fbd72e98883f"), // Children in class — how we work
  "hero-journey.jpg": hero("1659985281435-d8d3ea55b55c"), // Young rural student — our story over time
  "hero-programs.jpg": hero("1588196749597-9ff8050756c5"), // Students with learning tools — programs & skills
  "hero-mentorship.jpg": hero("1623863568368-69e4cbe6cc0b"), // Mentor & mentee outdoors — mentorship
  "hero-sepf.jpg": hero("1709290749293-c6152a187b14"), // Classroom / policy & education research
  "hero-contact.jpg": hero("1623303366639-0e330d7c3d9f"), // Student with book — reach out & connect
  "hero-resources.jpg": hero("1623303366639-0e330d7c3d9f"), // Student reading — guides & learning
  "hero-get-involved.jpg": hero("1623863568368-69e4cbe6cc0b"), // Mentoring — join the mission
  "hero-volunteer.jpg": hero("1623863568368-69e4cbe6cc0b"), // Mentor guiding youth
  "hero-corporate.jpg": hero("1759738098462-90ffac98c554"), // Community livelihood — corporate partnership
  "hero-donation.jpg": hero("1524069290683-0457abfe42c3"), // Children together — giving & impact
  "hero-alliances.jpg": hero("1569173675610-42c361a86e37"), // School students — academic alliances
  "hero-volunteering.jpg": hero("1692269725836-fbd72e98883f"), // Classroom — community volunteering
  "hero-membership.jpg": hero("1737825101103-c35677e6bd45"), // Youth on the move — lifetime commitment
  "hero-how-it-works.jpg": hero("1573894998033-c0cef4ed722b"), // Girls learning — step-by-step pathway
  "hero-founders.jpg": hero("1623863568368-69e4cbe6cc0b"), // Mentoring moment — founder's vision

  // Legacy keys (sections, cards, SDG icons)
  "hero-banner.dim_1200x600.jpg": hero("1709290749293-c6152a187b14"),

  "team-collaboration.dim_800x500.jpg": unsplash(
    "1686624386665-4cd01b96d0f6",
    800,
    500,
  ),
  "founder-headshot.dim_300x300.jpg": unsplash(
    "1659985281435-d8d3ea55b55c",
    300,
    300,
  ),

  "mentorship-workshop.dim_800x600.jpg": unsplash(
    "1573894998033-c0cef4ed722b",
    800,
    600,
  ),
  "volunteer-mentoring.dim_800x500.jpg": unsplash(
    "1623863568368-69e4cbe6cc0b",
    800,
    500,
  ),
  "career-catalyst.dim_600x400.jpg": unsplash(
    "1737825101103-c35677e6bd45",
    600,
    400,
  ),

  "skill-development.dim_600x400.jpg": unsplash(
    "1623303366639-0e330d7c3d9f",
    600,
    400,
  ),
  "digital-skills.dim_400x300.jpg": unsplash(
    "1588196749597-9ff8050756c5",
    400,
    300,
  ),
  "sustainability-skills.dim_400x300.jpg": unsplash(
    "1625246333191-2139639dd1f72",
    400,
    300,
  ),
  "human-skills.dim_400x300.jpg": unsplash(
    "1524069290683-0457abfe42c3",
    400,
    300,
  ),
  "entrepreneurship-skills.dim_400x300.jpg": unsplash(
    "1605727216809-3a0ddd5a1bde",
    400,
    300,
  ),
  "livelihood-skills.dim_400x300.jpg": unsplash(
    "1692269725836-fbd72e98883f",
    400,
    300,
  ),

  "entrepreneurship-support.dim_600x400.jpg": unsplash(
    "1759738098462-90ffac98c554",
    600,
    400,
  ),
  "corporate-partnership.dim_600x400.jpg": unsplash(
    "1677132529121-3ea5b62ac9b5",
    600,
    400,
  ),
  "corporate-handshake.dim_600x400.jpg": unsplash(
    "1623863568368-69e4cbe6cc0b",
    600,
    400,
  ),

  "future-of-work.dim_800x500.jpg": unsplash(
    "1737825101103-c35677e6bd45",
    800,
    500,
  ),
  "policy-research.dim_600x400.jpg": unsplash(
    "1709290749293-c6152a187b14",
    600,
    400,
  ),

  "donation-impact.dim_600x400.jpg": unsplash(
    "1524069290683-0457abfe42c3",
    600,
    400,
  ),

  "annual-report-cover.dim_400x600.jpg": unsplash(
    "1709290749293-c6152a187b14",
    400,
    600,
  ),

  "sdg-4-education.dim_200x200.png": unsplash(
    "1573894998033-c0cef4ed722b",
    200,
    200,
  ),
  "sdg-8-work.dim_200x200.png": unsplash(
    "1737825101103-c35677e6bd45",
    200,
    200,
  ),
  "sdg-9-innovation.dim_200x200.png": unsplash(
    "1588196749597-9ff8050756c5",
    200,
    200,
  ),
  "sdg-10-equality.dim_200x200.png": unsplash(
    "1569173675610-42c361a86e37",
    200,
    200,
  ),
  "sdg-17-partnerships.dim_200x200.png": unsplash(
    "1623863568368-69e4cbe6cc0b",
    200,
    200,
  ),

  "talent-scarcity-icon.dim_64x64.png": unsplash(
    "1737825101103-c35677e6bd45",
    64,
    64,
  ),
  "performance-icon.dim_64x64.png": unsplash(
    "1623303366639-0e330d7c3d9f",
    64,
    64,
  ),
  "attrition-icon.dim_64x64.png": unsplash(
    "1573894998033-c0cef4ed722b",
    64,
    64,
  ),
  "reskilling-icon.dim_64x64.png": unsplash(
    "1588196749597-9ff8050756c5",
    64,
    64,
  ),

  "c2r-logo-transparent.dim_200x200.png": unsplash(
    "1709290749293-c6152a187b14",
    200,
    200,
  ),
};

export function getImageUrl(imagePath: string): string {
  const filename = imagePath.split("/").pop() || imagePath;

  if (images[filename as keyof typeof images]) {
    return images[filename as keyof typeof images];
  }

  return imagePath;
}

/** Shorthand for page hero backgrounds */
export function getHeroImageUrl(heroKey: keyof typeof heroImageKeys): string {
  return images[heroImageKeys[heroKey] as keyof typeof images];
}

export const heroImageKeys = {
  home: "hero-home.jpg",
  about: "hero-about.jpg",
  whoWeAre: "hero-who-we-are.jpg",
  visionMission: "hero-vision-mission.jpg",
  ourTeam: "hero-our-team.jpg",
  ourValues: "hero-our-values.jpg",
  workingModel: "hero-working-model.jpg",
  journey: "hero-journey.jpg",
  programs: "hero-programs.jpg",
  mentorship: "hero-mentorship.jpg",
  sepf: "hero-sepf.jpg",
  contact: "hero-contact.jpg",
  resources: "hero-resources.jpg",
  getInvolved: "hero-get-involved.jpg",
  volunteer: "hero-volunteer.jpg",
  corporate: "hero-corporate.jpg",
  donation: "hero-donation.jpg",
  alliances: "hero-alliances.jpg",
  volunteering: "hero-volunteering.jpg",
  membership: "hero-membership.jpg",
  howItWorks: "hero-how-it-works.jpg",
  founders: "hero-founders.jpg",
} as const;

export function getImageUrlOrDefault(
  imagePath: string,
  defaultUrl?: string,
): string {
  const url = getImageUrl(imagePath);
  if (url === imagePath && defaultUrl) {
    return defaultUrl;
  }
  return url;
}
