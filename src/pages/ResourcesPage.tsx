import { useState, useEffect } from "react";
import { useLocation, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  Download,
  Video,
  ExternalLink,
  Play,
  LogIn,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import {
  useGalleryItems,
  useResourceVideos,
} from "@/hooks/useQueries";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getImageUrl, getHeroImageUrl } from "@/lib/images";
import {
  GetInvolvedHero,
  GI_BTN_HERO,
} from "@/components/get-involved/GetInvolvedLayout";
import { ICON, programIcons } from "@/lib/siteIcons";
import {
  getYouTubeVideoId,
  getYouTubeThumbnailUrlSafe,
  getYouTubeThumbnailUrl,
  isValidYouTubeId,
} from "@/lib/youtube";

const API_BASE = (
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  ""
)
  .trim()
  .replace(/\/$/, "");
const COURSE_ACCESS_KEY = "c2r_free_course_access";

const RESOURCE_TAB_VALUES = [
  "gallery",
  "videos",
  "events",
  "publications",
] as const;

export default function ResourcesPage() {
  const location = useLocation();
  const [hasCourseAccess, setHasCourseAccess] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("gallery");

  useEffect(() => {
    setHasCourseAccess(localStorage.getItem(COURSE_ACCESS_KEY) === "true");
  }, []);

  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (!(RESOURCE_TAB_VALUES as readonly string[]).includes(hash)) return;
    setActiveTab(hash);
    // Scroll to tab section after tab content is in the DOM (one-click nav from header)
    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };
    const t1 = setTimeout(() => {
      if (!scrollToHash()) setTimeout(scrollToHash, 200);
    }, 300);
    return () => clearTimeout(t1);
  }, [location.hash]);
  const { data: galleryItems = [] } = useGalleryItems();
  const { data: apiVideos = [] } = useResourceVideos();

  const defaultGalleryItems = [
    {
      title: "Mentorship Workshop 2024",
      description: "Annual mentorship training session",
      imageUrl: getImageUrl(
        "/assets/generated/mentorship-workshop.dim_800x600.jpg",
      ),
      category: "workshops",
    },
    {
      title: "Career Guidance Session",
      description: "Students receiving career counseling",
      imageUrl: getImageUrl(
        "/assets/generated/career-catalyst.dim_600x400.jpg",
      ),
      category: "mentoring",
    },
    {
      title: "Skill Development Training",
      description: "Technical skills workshop",
      imageUrl: getImageUrl(
        "/assets/generated/skill-development.dim_600x400.jpg",
      ),
      category: "training",
    },
    {
      title: "Entrepreneurship Bootcamp",
      description: "Startup pitch competition",
      imageUrl: getImageUrl(
        "/assets/generated/entrepreneurship-support.dim_600x400.jpg",
      ),
      category: "events",
    },
    {
      title: "Team Collaboration",
      description: "Our team working together",
      imageUrl: getImageUrl(
        "/assets/generated/team-collaboration.dim_800x500.jpg",
      ),
      category: "team",
    },
    {
      title: "Corporate Partnership Event",
      description: "Partnership signing ceremony",
      imageUrl: getImageUrl(
        "/assets/generated/corporate-partnership.dim_600x400.jpg",
      ),
      category: "events",
    },
  ];

  const displayGallery =
    galleryItems.length > 0 ? galleryItems : defaultGalleryItems;

  const events = [
    {
      title: "Monthly Mentorship Webinar",
      date: "Every 3rd Thursday",
      type: "Webinar",
    },
    { title: "Career Fair 2025", date: "March 15, 2025", type: "Event" },
    { title: "Skills Workshop Series", date: "Ongoing", type: "Workshop" },
    {
      title: "Entrepreneurship Summit",
      date: "June 20-21, 2025",
      type: "Conference",
    },
  ];

  const publications = [
    {
      title: "Community Impact Highlights 2024",
      description: "Stories and outcomes from our programs nationwide",
      type: "Impact Summary",
    },
    {
      title: "Skills Gap Analysis",
      description: "Research on employment and skills needs",
      type: "Research Paper",
    },
    {
      title: "Mentorship Best Practices",
      description: "Evidence-based mentorship guidelines",
      type: "Whitepaper",
    },
    {
      title: "Youth Employment Trends",
      description: "Analysis of youth employment landscape",
      type: "Research Paper",
    },
  ];

  // Educational videos: from API when available, else fallback (Connect2Roots Academy)
  const CONNECT2ROOTS_ACADEMY_CHANNEL =
    "https://www.youtube.com/@connect2rootsacademy";
  const CONNECT2ROOTS_ACADEMY_VIDEOS =
    "https://www.youtube.com/@connect2rootsacademy/videos";

  const defaultEducationalVideos = [
    {
      id: 0,
      title: "Career Guidance & Mentorship",
      description: "Learn how mentorship can shape your career path.",
      topic: "Career Development",
      video_id: "",
    },
    {
      id: 0,
      title: "Skills for the Modern Workplace",
      description: "Essential skills to thrive in today's job market.",
      topic: "Professional Skills",
      video_id: "",
    },
    {
      id: 0,
      title: "Entrepreneurship & Starting Up",
      description: "Insights on turning ideas into sustainable ventures.",
      topic: "Entrepreneurship",
      video_id: "",
    },
    {
      id: 0,
      title: "Personal Branding & Networking",
      description: "Build your professional identity effectively.",
      topic: "Career Development",
      video_id: "",
    },
    {
      id: 0,
      title: "Interview & Resume Tips",
      description: "Practical advice for interviews and applications.",
      topic: "Career Prep",
      video_id: "",
    },
    {
      id: 0,
      title: "Stories from Our Community",
      description: "Hear from mentees and mentors.",
      topic: "Community",
      video_id: "",
    },
  ];

  const educationalVideos =
    apiVideos.length > 0 ? apiVideos : defaultEducationalVideos;

  const scrollToResources = () => {
    const section = document.getElementById("resources-content");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col">
      <GetInvolvedHero
        backgroundImage={getHeroImageUrl("resources")}
        chapter="Resources"
        title="Resources"
        subtitle="Access our library of courses, events, publications, and community highlights"
        icon={<programIcons.hub className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={scrollToResources}
        >
          Explore Resources
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      {/* Main Content */}
      <section id="resources-content" className="py-16 md:py-24">
        <div className="container">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full mb-8 flex flex-nowrap overflow-x-auto overflow-y-hidden gap-1 scroll-smooth scrollbar-hide pb-2 md:gap-2">
              <TabsTrigger value="gallery" className="flex-shrink-0">
                Gallery
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex-shrink-0">
                Courses
              </TabsTrigger>
              <TabsTrigger value="events" className="flex-shrink-0">
                Events
              </TabsTrigger>
              <TabsTrigger value="publications" className="flex-shrink-0">
                Publications
              </TabsTrigger>
            </TabsList>

            {/* Gallery Tab */}
            <TabsContent value="gallery" id="gallery">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Photo Gallery</h2>
                  <p className="text-muted-foreground">
                    Explore moments from our mentorship sessions, workshops, and
                    community events
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayGallery.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{item.category}</Badge>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Courses Tab - Educational content from Connect2Roots Academy */}
            <TabsContent value="videos" id="videos">
              <ScrollReveal>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="h-7 w-7 text-c2r-primary" />
                    <h2 className="text-2xl font-bold">Courses</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Learn from Connect2Roots Academy — career guidance,
                    mentorship insights, and success stories to support your
                    growth.
                  </p>
                </div>
              </ScrollReveal>

              {API_BASE && !hasCourseAccess ? (
                <>
                  <ScrollReveal>
                    <Card className="mb-8 border-c2r-primary/30 bg-gradient-to-br from-c2r-primary/5 to-c2r-secondary/5 overflow-hidden">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Video className="h-5 w-5 text-c2r-primary" />
                          Courses
                        </CardTitle>
                        <CardDescription>
                          Sign up or sign in to get access to our courses and
                          learning resources.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" className="gap-2" asChild>
                            <Link
                              to="/resources/free-courses-auth"
                              hash="signin"
                            >
                              <LogIn className="h-4 w-4" />
                              Sign in
                            </Link>
                          </Button>
                          <Button className="gap-2" asChild>
                            <Link
                              to="/resources/free-courses-auth"
                              hash="signup"
                            >
                              <UserPlus className="h-4 w-4" />
                              Sign up
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                  <ScrollReveal delay={50}>
                    <div className="p-6 rounded-xl bg-muted/50 border border-border text-center">
                      <h3 className="text-lg font-semibold mb-2">Find us on</h3>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={CONNECT2ROOTS_ACADEMY_CHANNEL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <Video className="h-4 w-4" />
                          YouTube – Connect2Roots Academy
                        </a>
                      </Button>
                    </div>
                  </ScrollReveal>
                </>
              ) : null}

              {!API_BASE || hasCourseAccess ? (
                <>
                  <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground">
                        Find us on
                      </span>
                      <a
                        href={CONNECT2ROOTS_ACADEMY_CHANNEL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-c2r-primary hover:underline inline-flex items-center gap-1"
                      >
                        Connect2Roots Academy (YouTube)
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <span>— all videos are from our channel.</span>
                    </p>
                  </div>

                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {educationalVideos.map((video, index) => (
                      <ScrollReveal
                        key={video.id ? `v-${video.id}` : index}
                        delay={index * 50}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group max-w-sm mx-auto w-full">
                          {video.video_id ? (
                            <>
                              <a
                                href={`https://www.youtube.com/watch?v=${getYouTubeVideoId(video.video_id)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block aspect-video w-full bg-muted overflow-hidden relative"
                              >
                                {isValidYouTubeId(
                                  getYouTubeVideoId(video.video_id),
                                ) ? (
                                  <img
                                    src={getYouTubeThumbnailUrlSafe(
                                      video.video_id,
                                    )}
                                    alt={video.title}
                                    className="w-full h-full min-w-0 min-h-0 object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      const t = e.currentTarget;
                                      if (t.dataset.fallback === "1") return;
                                      t.dataset.fallback = "1";
                                      t.src = getYouTubeThumbnailUrl(
                                        video.video_id,
                                        "hqdefault",
                                      );
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-c2r-primary/20 to-c2r-secondary/20" />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                  <div className="rounded-full bg-c2r-primary/90 p-3 text-white group-hover:scale-110 transition-transform shadow-lg">
                                    <Play className="h-8 w-8 fill-current ml-0.5" />
                                  </div>
                                </div>
                              </a>
                              <CardHeader className="pb-2">
                                <Badge
                                  variant="secondary"
                                  className="w-fit mb-1"
                                >
                                  {video.topic}
                                </Badge>
                                <CardTitle className="text-lg leading-tight">
                                  {video.title}
                                </CardTitle>
                                <CardDescription>
                                  {video.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <Button variant="ghost" size="sm" asChild>
                                  <a
                                    href={`https://www.youtube.com/watch?v=${getYouTubeVideoId(video.video_id)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Play className="mr-2 h-4 w-4" />
                                    Watch on YouTube
                                  </a>
                                </Button>
                              </CardContent>
                            </>
                          ) : (
                            <>
                              <a
                                href={CONNECT2ROOTS_ACADEMY_VIDEOS}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <div className="aspect-video w-full bg-gradient-to-br from-c2r-primary/20 to-c2r-secondary/20 flex items-center justify-center overflow-hidden group-hover:from-c2r-primary/30 group-hover:to-c2r-secondary/30 transition-colors">
                                  <div className="rounded-full bg-c2r-primary/90 p-4 text-white group-hover:scale-110 transition-transform">
                                    <Play className="h-10 w-10 fill-current" />
                                  </div>
                                </div>
                              </a>
                              <CardHeader className="pb-2">
                                <Badge
                                  variant="secondary"
                                  className="w-fit mb-1"
                                >
                                  {video.topic}
                                </Badge>
                                <CardTitle className="text-lg leading-tight">
                                  {video.title}
                                </CardTitle>
                                <CardDescription>
                                  {video.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={CONNECT2ROOTS_ACADEMY_VIDEOS}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Watch on Connect2Roots Academy
                                  </a>
                                </Button>
                              </CardContent>
                            </>
                          )}
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>

                  <ScrollReveal delay={100}>
                    <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-c2r-primary/10 to-c2r-secondary/10 border border-c2r-primary/20 text-center">
                      <h3 className="text-lg font-semibold mb-2">Find us on</h3>
                      <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                        Subscribe to Connect2Roots Academy for regular
                        educational content, mentor talks, and community
                        stories.
                      </p>
                      <Button asChild>
                        <a
                          href={CONNECT2ROOTS_ACADEMY_CHANNEL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Video className="mr-2 h-4 w-4" />
                          YouTube
                        </a>
                      </Button>
                    </div>
                  </ScrollReveal>
                </>
              ) : null}
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" id="events">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
                  <p className="text-muted-foreground">
                    Join our webinars, workshops, and seminars
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                {events.map((event, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge>{event.type}</Badge>
                          <Button variant="outline" size="sm">
                            Register
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" id="publications">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Publications & Reports
                  </h2>
                  <p className="text-muted-foreground">
                    Research papers, whitepapers, and policy documents
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                {publications.map((pub, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              {pub.title}
                            </CardTitle>
                            <CardDescription>{pub.description}</CardDescription>
                          </div>
                          <FileText className="h-8 w-8 text-c2r-primary flex-shrink-0 ml-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{pub.type}</Badge>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
