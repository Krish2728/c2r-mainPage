import { Outlet, Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Users,
  MapPin,
  BookOpen,
  UserCircle,
  LogOut,
  LayoutGrid,
  Video,
  FileText,
  Calendar,
  Linkedin,
  Heart,
} from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";
import {
  aboutIcons,
  programIcons,
  mentorshipIcons,
  sepfIcons,
  contactIcons,
  getInvolvedIcons,
} from "@/lib/siteIcons";
import { useState, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/sonner";

const FOOTER_CONTACT_EMAILS = [
  {
    label: "General",
    addresses: ["info@connect2roots.org", "connect2rootsindia@gmail.com"],
  },
  {
    label: "Volunteering",
    addresses: ["volunteer@connect2roots.org"],
  },
  {
    label: "CSR & Partnerships",
    addresses: ["csr@connect2roots.org"],
  },
] as const;

const FOOTER_SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DwzSkCk6U/",
    Icon: SiFacebook,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    Icon: SiX,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/connect2roots/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/connect2rootsfoundation/",
    Icon: SiInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@connect2rootsacademy",
    Icon: SiYoutube,
  },
] as const;

const COURSE_ACCESS_KEY = "c2r_free_course_access";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );
  const [hasCourseAccess, setHasCourseAccess] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mentorshipDropdownOpen, setMentorshipDropdownOpen] = useState(false);
  const [sepfDropdownOpen, setSepfDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [donateDropdownOpen, setDonateDropdownOpen] = useState(false);
  const [getInvolvedDropdownOpen, setGetInvolvedDropdownOpen] = useState(false);
  const aboutOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const aboutCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const loginOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const loginCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const programsOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const programsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const mentorshipOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const mentorshipCloseTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const sepfOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sepfCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const resourcesOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const resourcesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const contactOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const contactCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const donateOpenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const donateCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const getInvolvedOpenTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const getInvolvedCloseTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const isFreeCoursesAuthPage =
    location.pathname === "/resources/free-courses-auth";

  const clearAboutCloseTimeout = () => {
    if (aboutCloseTimeoutRef.current) {
      clearTimeout(aboutCloseTimeoutRef.current);
      aboutCloseTimeoutRef.current = null;
    }
  };
  const clearLoginCloseTimeout = () => {
    if (loginCloseTimeoutRef.current) {
      clearTimeout(loginCloseTimeoutRef.current);
      loginCloseTimeoutRef.current = null;
    }
  };
  const clearAboutOpenTimeout = () => {
    if (aboutOpenTimeoutRef.current) {
      clearTimeout(aboutOpenTimeoutRef.current);
      aboutOpenTimeoutRef.current = null;
    }
  };
  const clearLoginOpenTimeout = () => {
    if (loginOpenTimeoutRef.current) {
      clearTimeout(loginOpenTimeoutRef.current);
      loginOpenTimeoutRef.current = null;
    }
  };
  const HOVER_OPEN_DELAY_MS = 80;
  const HOVER_CLOSE_DELAY_MS = 200;

  const scheduleAboutClose = () => {
    clearAboutOpenTimeout();
    clearAboutCloseTimeout();
    aboutCloseTimeoutRef.current = setTimeout(
      () => setAboutDropdownOpen(false),
      HOVER_CLOSE_DELAY_MS,
    );
  };
  const scheduleLoginClose = () => {
    clearLoginOpenTimeout();
    clearLoginCloseTimeout();
    loginCloseTimeoutRef.current = setTimeout(
      () => setLoginDropdownOpen(false),
      HOVER_CLOSE_DELAY_MS,
    );
  };

  const clearProgramsCloseTimeout = () => {
    if (programsCloseTimeoutRef.current) {
      clearTimeout(programsCloseTimeoutRef.current);
      programsCloseTimeoutRef.current = null;
    }
  };
  const clearProgramsOpenTimeout = () => {
    if (programsOpenTimeoutRef.current) {
      clearTimeout(programsOpenTimeoutRef.current);
      programsOpenTimeoutRef.current = null;
    }
  };
  const scheduleProgramsClose = () => {
    clearProgramsOpenTimeout();
    clearProgramsCloseTimeout();
    programsCloseTimeoutRef.current = setTimeout(
      () => setProgramsDropdownOpen(false),
      HOVER_CLOSE_DELAY_MS,
    );
  };

  const makeDropdownHandlers = (
    setOpen: (v: boolean) => void,
    openRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    closeRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
  ) => {
    const clearClose = () => {
      if (closeRef.current) {
        clearTimeout(closeRef.current);
        closeRef.current = null;
      }
    };
    const clearOpen = () => {
      if (openRef.current) {
        clearTimeout(openRef.current);
        openRef.current = null;
      }
    };
    const scheduleClose = () => {
      clearOpen();
      clearClose();
      closeRef.current = setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY_MS);
    };
    const onTriggerEnter = () => {
      clearClose();
      clearOpen();
      openRef.current = setTimeout(() => setOpen(true), HOVER_OPEN_DELAY_MS);
    };
    return { clearClose, onTriggerEnter, scheduleClose };
  };

  const mentorshipHandlers = makeDropdownHandlers(
    setMentorshipDropdownOpen,
    mentorshipOpenTimeoutRef,
    mentorshipCloseTimeoutRef,
  );
  const sepfHandlers = makeDropdownHandlers(
    setSepfDropdownOpen,
    sepfOpenTimeoutRef,
    sepfCloseTimeoutRef,
  );
  const resourcesHandlers = makeDropdownHandlers(
    setResourcesDropdownOpen,
    resourcesOpenTimeoutRef,
    resourcesCloseTimeoutRef,
  );
  const contactHandlers = makeDropdownHandlers(
    setContactDropdownOpen,
    contactOpenTimeoutRef,
    contactCloseTimeoutRef,
  );
  const donateHandlers = makeDropdownHandlers(
    setDonateDropdownOpen,
    donateOpenTimeoutRef,
    donateCloseTimeoutRef,
  );
  const getInvolvedHandlers = makeDropdownHandlers(
    setGetInvolvedDropdownOpen,
    getInvolvedOpenTimeoutRef,
    getInvolvedCloseTimeoutRef,
  );

  useEffect(() => {
    setHasCourseAccess(
      typeof window !== "undefined" &&
        localStorage.getItem(COURSE_ACCESS_KEY) === "true",
    );
  }, [location.pathname]);

  // Scroll to top when navigating to a new page (skip when hash is set so Login as Mentee/Mentor can scroll to section)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  if (isFreeCoursesAuthPage) {
    return (
      <>
        <Outlet />
        <Toaster />
      </>
    );
  }

  const programsDropdownItems = [
    {
      label: "C2R Career Catalyst Mentorship Program",
      description: "Career guidance and mentorship",
      path: "/programs",
      hash: "career-catalyst",
      icon: programIcons.career,
    },
    {
      label: "C2R Skill Development Program",
      description: "Industry-relevant training and certifications",
      path: "/programs",
      hash: "skill-development",
      icon: programIcons.skills,
    },
    {
      label: "C2R Livelihoods & Entrepreneurship Support",
      description: "Entrepreneurship and sustainable ventures",
      path: "/programs",
      hash: "livelihoods",
      icon: programIcons.livelihoods,
    },
  ];

  const mentorshipDropdownItems = [
    {
      label: "Why Mentorship Matters",
      description: "The power of connection",
      path: "/mentorship",
      hash: "why-mentorship",
      icon: mentorshipIcons.why,
    },
    {
      label: "Become a Mentee",
      description: "Your journey begins here",
      path: "/mentorship",
      hash: "mentee",
      icon: mentorshipIcons.mentee,
    },
    {
      label: "Become a Mentor",
      description: "Share your light",
      path: "/mentorship",
      hash: "mentor",
      icon: mentorshipIcons.mentor,
    },
  ];

  const sepfDropdownItems = [
    {
      label: "Shaping the Future of Work",
      description: "Our mission and what we do",
      path: "/sepf",
      hash: "our-mission",
      icon: sepfIcons.mission,
    },
    {
      label: "UN Sustainable Development Goals",
      description: "Global impact alignment",
      path: "/sepf",
      hash: "sdgs",
      icon: sepfIcons.sdgs,
    },
    {
      label: "Five Core Skill Clusters",
      description: "Future-ready skills",
      path: "/sepf",
      hash: "focus-areas",
      icon: sepfIcons.skills,
    },
    {
      label: "Join Us in Shaping the Future",
      description: "Collaborate with SEPF",
      path: "/sepf",
      hash: "join-sepf",
      icon: sepfIcons.join,
    },
  ];

  const resourcesDropdownItems = [
    {
      label: "For Students",
      description: "Career guides and resources",
      path: "/resources",
      hash: "guides",
      icon: BookOpen,
    },
    {
      label: "For Mentors",
      description: "Training and toolkits",
      path: "/resources",
      hash: "mentors",
      icon: Users,
    },
    {
      label: "Gallery",
      description: "Photos and moments",
      path: "/resources",
      hash: "gallery",
      icon: LayoutGrid,
    },
    {
      label: "Free Courses",
      description: "Educational videos",
      path: "/resources",
      hash: "videos",
      icon: Video,
    },
    {
      label: "Annual Reports",
      description: "Impact and achievements",
      path: "/resources",
      hash: "reports",
      icon: FileText,
    },
    {
      label: "Events",
      description: "Webinars and workshops",
      path: "/resources",
      hash: "events",
      icon: Calendar,
    },
    {
      label: "Publications",
      description: "Research and reports",
      path: "/resources",
      hash: "publications",
      icon: FileText,
    },
  ];

  const contactDropdownItems = [
    {
      label: "General Inquiry",
      description: "Send us a message",
      path: "/contact",
      hash: "general",
      icon: contactIcons.general,
    },
    {
      label: "CSR / Partnership",
      description: "Partner with us",
      path: "/get-involved/corporate-partnerships",
      hash: undefined,
      icon: contactIcons.partnership,
    },
    {
      label: "Volunteer",
      description: "Join as a volunteer",
      path: "/contact",
      hash: "volunteer",
      icon: contactIcons.volunteer,
    },
  ];

  const donateDropdownItems = [
    {
      label: "Donate",
      description: "Support our mission",
      path: "/donate",
      hash: undefined,
      icon: Heart,
    },
  ];

  const loginDropdownItems = [
    {
      label: "Accessing Resources",
      path: "/resources/free-courses-auth",
      hash: undefined,
      icon: BookOpen,
      description: "Sign up to access free courses",
    },
    {
      label: "Login as Mentor",
      path: "/mentorship",
      hash: "mentor",
      icon: Users,
      description: "Mentor section",
    },
    {
      label: "Login as Mentee",
      path: "/mentorship",
      hash: "mentee",
      icon: UserCircle,
      description: "Mentee section",
    },
  ];

  const aboutDropdownItems = [
    {
      label: "Who We Are",
      path: "/about/who-we-are",
      icon: aboutIcons.whoWeAre,
      description: "Our mission and founding story",
    },
    {
      label: "Vision & Mission",
      path: "/about/vision-mission",
      icon: aboutIcons.visionMission,
      description: "Our guiding principles",
    },
    {
      label: "Our Team",
      path: "/about/our-team",
      icon: aboutIcons.team,
      description: "Meet the people behind C2R",
    },
    {
      label: "Our Working Model",
      path: "/about/working-model",
      icon: aboutIcons.workingModel,
      description: "How we create impact",
    },
    {
      label: "Our Values",
      path: "/about/our-values",
      icon: aboutIcons.values,
      description: "What drives us forward",
    },
    {
      label: "Journey",
      path: "/about/journey",
      icon: aboutIcons.journey,
      description: "Our story and milestones",
    },
  ];

  const getInvolvedDropdownItems = [
    {
      label: "Mentor",
      path: "/get-involved/volunteer",
      icon: getInvolvedIcons.mentor,
      description: "Become a mentor",
    },
    {
      label: "Volunteer",
      path: "/get-involved/other-volunteering-roles",
      icon: getInvolvedIcons.volunteer,
      description: "Workshops, design, outreach & more",
    },
    {
      label: "Corporate Partnerships",
      path: "/get-involved/corporate-partnerships",
      icon: getInvolvedIcons.corporate,
      description: "Partner for impact",
    },
    {
      label: "Other Alliances",
      path: "/get-involved/other-alliances",
      icon: getInvolvedIcons.alliances,
      description: "Universities & NGOs",
    },
    {
      label: "Lifetime Membership",
      path: "/get-involved/lifetime-membership",
      icon: getInvolvedIcons.membership,
      description: "Join our professional community",
    },
  ];

  const handleNavigation = (path: string, hash?: string) => {
    // Pass hash in navigate so the destination page sees it on first render (one-click to subsection)
    navigate({
      to: path as string,
      ...(hash && { hash: hash as `#${string}` }),
      hashScrollIntoView: false, // pages handle scroll after tab/section is mounted
    });
  };

  const handleCourseLogout = () => {
    localStorage.removeItem(COURSE_ACCESS_KEY);
    setHasCourseAccess(false);
    setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="container flex h-16 items-center justify-between">
          {(() => {
            const isHome =
              location.pathname === "/" ||
              location.pathname === "" ||
              location.pathname === "/index.html";
            const scrollToTop = () => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              document.documentElement.scrollTo?.({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              document.body.scrollTo?.({ top: 0, left: 0, behavior: "smooth" });
            };
            if (isHome) {
              return (
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="flex items-center transition-opacity hover:opacity-80 flex-shrink-0 overflow-visible bg-transparent border-0 p-0 cursor-pointer"
                  aria-label="Scroll to top"
                >
                  <img
                    src="/logo.png"
                    alt="Connect2Roots Foundation"
                    className="h-12 w-auto max-w-[220px] object-contain object-left"
                  />
                </button>
              );
            }
            return (
              <Link
                to="/"
                className="flex items-center transition-opacity hover:opacity-80 flex-shrink-0 overflow-visible"
              >
                <img
                  src="/logo.png"
                  alt="Connect2Roots Foundation"
                  className="h-12 w-auto max-w-[220px] object-contain object-left"
                />
              </Link>
            );
          })()}

          <nav className="hidden items-center gap-8 min-[1180px]:flex">
            <DropdownMenu
              open={aboutDropdownOpen}
              onOpenChange={setAboutDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={() => {
                  clearAboutCloseTimeout();
                  clearAboutOpenTimeout();
                  aboutOpenTimeoutRef.current = setTimeout(
                    () => setAboutDropdownOpen(true),
                    HOVER_OPEN_DELAY_MS,
                  );
                }}
                onMouseLeave={scheduleAboutClose}
              >
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={clearAboutCloseTimeout}
                onMouseLeave={scheduleAboutClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    asChild
                    className="cursor-pointer"
                  >
                    <Link
                      to={item.path}
                      className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-sm">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={programsDropdownOpen}
              onOpenChange={setProgramsDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={() => {
                  clearProgramsCloseTimeout();
                  clearProgramsOpenTimeout();
                  programsOpenTimeoutRef.current = setTimeout(
                    () => setProgramsDropdownOpen(true),
                    HOVER_OPEN_DELAY_MS,
                  );
                }}
                onMouseLeave={scheduleProgramsClose}
              >
                Programs <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={clearProgramsCloseTimeout}
                onMouseLeave={scheduleProgramsClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {programsDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.hash}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={mentorshipDropdownOpen}
              onOpenChange={setMentorshipDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={mentorshipHandlers.onTriggerEnter}
                onMouseLeave={mentorshipHandlers.scheduleClose}
              >
                Mentorship <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={mentorshipHandlers.clearClose}
                onMouseLeave={mentorshipHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {mentorshipDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.hash}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash!)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={sepfDropdownOpen}
              onOpenChange={setSepfDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={sepfHandlers.onTriggerEnter}
                onMouseLeave={sepfHandlers.scheduleClose}
              >
                SEPF <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={sepfHandlers.clearClose}
                onMouseLeave={sepfHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {sepfDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.hash}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={getInvolvedDropdownOpen}
              onOpenChange={setGetInvolvedDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={getInvolvedHandlers.onTriggerEnter}
                onMouseLeave={getInvolvedHandlers.scheduleClose}
              >
                Get Involved <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={getInvolvedHandlers.clearClose}
                onMouseLeave={getInvolvedHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {getInvolvedDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    asChild
                    className="cursor-pointer"
                  >
                    <Link
                      to={item.path}
                      className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-sm">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={resourcesDropdownOpen}
              onOpenChange={setResourcesDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={resourcesHandlers.onTriggerEnter}
                onMouseLeave={resourcesHandlers.scheduleClose}
              >
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={resourcesHandlers.clearClose}
                onMouseLeave={resourcesHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {resourcesDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.hash}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={contactDropdownOpen}
              onOpenChange={setContactDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={contactHandlers.onTriggerEnter}
                onMouseLeave={contactHandlers.scheduleClose}
              >
                Contact Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={contactHandlers.clearClose}
                onMouseLeave={contactHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {contactDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={donateDropdownOpen}
              onOpenChange={setDonateDropdownOpen}
              modal={false}
            >
              <DropdownMenuTrigger
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                onMouseEnter={donateHandlers.onTriggerEnter}
                onMouseLeave={donateHandlers.scheduleClose}
              >
                Donate <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={2}
                className="z-[100] w-72 p-2"
                onMouseEnter={donateHandlers.clearClose}
                onMouseLeave={donateHandlers.scheduleClose}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {donateDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                    onSelect={() => handleNavigation(item.path, item.hash)}
                  >
                    <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {hasCourseAccess ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-primary"
                    aria-label="Profile"
                  >
                    <UserCircle className="h-8 w-8" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2">
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Resources access
                    </p>
                    <p className="text-xs mt-0.5">
                      You are signed in for free courses
                    </p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/resources"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <BookOpen className="h-4 w-4" />
                      Go to Resources
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive"
                    onSelect={handleCourseLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu
                open={loginDropdownOpen}
                onOpenChange={setLoginDropdownOpen}
                modal={false}
              >
                <DropdownMenuTrigger
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
                  onMouseEnter={() => {
                    clearLoginCloseTimeout();
                    clearLoginOpenTimeout();
                    loginOpenTimeoutRef.current = setTimeout(
                      () => setLoginDropdownOpen(true),
                      HOVER_OPEN_DELAY_MS,
                    );
                  }}
                  onMouseLeave={scheduleLoginClose}
                >
                  Login / Sign Up <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={2}
                  className="z-[100] w-72 p-2"
                  onMouseEnter={clearLoginCloseTimeout}
                  onMouseLeave={scheduleLoginClose}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {loginDropdownItems.map((item) =>
                    item.hash ? (
                      <DropdownMenuItem
                        key={item.label}
                        className="flex items-start gap-3 rounded-md p-3 cursor-pointer focus:bg-accent"
                        onSelect={() => handleNavigation(item.path, item.hash)}
                      >
                        <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem
                        key={item.label}
                        asChild
                        className="cursor-pointer"
                      >
                        <Link
                          to={item.path}
                          className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
                        >
                          <item.icon className="h-5 w-5 text-c2r-accent mt-0.5 shrink-0" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          <Sheet
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) setOpenMobileSection(null);
            }}
          >
            <SheetTrigger asChild className="min-[1180px]:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <nav className="flex flex-col gap-6 pt-8">
                <Collapsible
                  open={openMobileSection === "about"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "about" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground">
                    About Us
                    {openMobileSection === "about" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {aboutDropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 rounded-md p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          activeProps={{ className: "bg-accent text-primary" }}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                          <div className="flex flex-col gap-0.5">
                            <span>{item.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "programs"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "programs" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Programs
                    {openMobileSection === "programs" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {programsDropdownItems.map((item) => (
                        <button
                          key={item.hash}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "mentorship"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "mentorship" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Mentorship
                    {openMobileSection === "mentorship" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {mentorshipDropdownItems.map((item) => (
                        <button
                          key={item.hash}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash!);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "sepf"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "sepf" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    SEPF
                    {openMobileSection === "sepf" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {sepfDropdownItems.map((item) => (
                        <button
                          key={item.hash}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "getInvolved"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "getInvolved" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Get Involved
                    {openMobileSection === "getInvolved" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {getInvolvedDropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 rounded-md p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          activeProps={{ className: "bg-accent text-primary" }}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                          <div className="flex flex-col gap-0.5">
                            <span>{item.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "resources"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "resources" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Resources
                    {openMobileSection === "resources" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {resourcesDropdownItems.map((item) => (
                        <button
                          key={item.hash}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "contact"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "contact" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Contact Us
                    {openMobileSection === "contact" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {contactDropdownItems.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSection === "donate"}
                  onOpenChange={(open) =>
                    setOpenMobileSection(open ? "donate" : null)
                  }
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base c2r-card-title hover:bg-accent hover:text-accent-foreground border-t pt-4">
                    Donate
                    {openMobileSection === "donate" ? (
                      <ChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-1 pl-1 pt-1">
                      {donateDropdownItems.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="flex items-start gap-3 rounded-md p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0 text-c2r-accent" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {hasCourseAccess ? (
                  <div className="border-t pt-4 flex flex-col gap-1">
                    <span className="text-base c2r-card-title px-2">
                      Profile
                    </span>
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">
                        Resources access
                      </p>
                      <p className="text-xs mt-0.5">
                        Signed in for free courses
                      </p>
                    </div>
                    <Link
                      to="/resources"
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <BookOpen className="h-4 w-4 shrink-0" />
                      Go to Resources
                    </Link>
                    <button
                      type="button"
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
                      onClick={handleCourseLogout}
                    >
                      <LogOut className="h-4 w-4 shrink-0" />
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="border-t pt-4 flex flex-col gap-1">
                    <span className="text-base c2r-card-title px-2">
                      Login / Sign Up
                    </span>
                    {loginDropdownItems.map((item) =>
                      item.hash ? (
                        <button
                          key={item.label}
                          type="button"
                          className="flex items-start gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            handleNavigation(item.path, item.hash);
                          }}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                          <div className="flex flex-col gap-0.5">
                            <span>{item.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="flex items-start gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                          <div className="flex flex-col gap-0.5">
                            <span>{item.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-12 md:py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-3">
              <div className="flex flex-col gap-2 items-start">
                <img
                  src="/logo.png"
                  alt="Connect2Roots Logo"
                  className="h-11 w-auto max-w-[180px] object-contain object-left"
                />
                <p className="text-sm font-medium text-foreground leading-relaxed max-w-xs">
                  Empowering Communities for a Brighter Future
                </p>
              </div>
              <div className="mt-5 max-w-xs border-t border-border/60 pt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  Office
                </p>
                <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-c2r-primary" />
                    <span className="font-medium text-foreground">
                      Connect2Roots Foundation
                    </span>
                  </div>
                  <p className="pl-6">
                    Yemalur, Kariammana Agrahara Road
                    <br />
                    Bengaluru 560037, Karnataka
                  </p>
                </address>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/about/who-we-are"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mentorship"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sepf"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    C2R SEPF
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Get Involved</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/get-involved"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved/volunteer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mentor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved/other-volunteering-roles"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved/corporate-partnerships"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Corporate Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved/other-alliances"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Other Alliances
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved/lifetime-membership"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Lifetime Membership
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-4">
                {FOOTER_CONTACT_EMAILS.map((group) => (
                  <li key={group.label} className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.addresses.map((email) => (
                        <li key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed max-w-xs lg:max-w-sm">
                Connect with us on social media for updates and stories from the
                community.
              </p>
              <div className="grid grid-cols-5 gap-1.5 w-fit max-w-full">
                {FOOTER_SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-c2r-primary/40 hover:text-primary sm:h-10 sm:w-10"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>All Rights Reserved © 2026.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
