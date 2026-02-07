import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, FileText, Download, Video, FileDown, ExternalLink, Play } from 'lucide-react';
import { useGalleryItems, useResourceVideos } from '@/hooks/useQueries';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getImageUrl } from '@/lib/images';
import { getYouTubeVideoId, getYouTubeThumbnailUrlSafe, getYouTubeThumbnailUrl, isValidYouTubeId } from '@/lib/youtube';

export default function ResourcesPage() {
  const { data: galleryItems = [] } = useGalleryItems();
  const { data: apiVideos = [] } = useResourceVideos();

  const defaultGalleryItems = [
    { title: 'Mentorship Workshop 2024', description: 'Annual mentorship training session', imageUrl: getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg'), category: 'workshops' },
    { title: 'Career Guidance Session', description: 'Students receiving career counseling', imageUrl: getImageUrl('/assets/generated/career-catalyst.dim_600x400.jpg'), category: 'mentoring' },
    { title: 'Skill Development Training', description: 'Technical skills workshop', imageUrl: getImageUrl('/assets/generated/skill-development.dim_600x400.jpg'), category: 'training' },
    { title: 'Entrepreneurship Bootcamp', description: 'Startup pitch competition', imageUrl: getImageUrl('/assets/generated/entrepreneurship-support.dim_600x400.jpg'), category: 'events' },
    { title: 'Team Collaboration', description: 'Our team working together', imageUrl: getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg'), category: 'team' },
    { title: 'Corporate Partnership Event', description: 'Partnership signing ceremony', imageUrl: getImageUrl('/assets/generated/corporate-partnership.dim_600x400.jpg'), category: 'events' },
  ];

  const displayGallery = galleryItems.length > 0 ? galleryItems : defaultGalleryItems;

  const careerGuides = [
    { title: 'Resume Writing Guide', description: 'Comprehensive guide to creating impactful resumes', category: 'Career Prep' },
    { title: 'Interview Success Tips', description: 'Master the art of interviewing with confidence', category: 'Career Prep' },
    { title: 'Networking Strategies', description: 'Build and leverage your professional network', category: 'Professional Development' },
    { title: 'Career Transition Guide', description: 'Navigate career changes successfully', category: 'Career Planning' },
    { title: 'Personal Branding 101', description: 'Establish your professional identity', category: 'Professional Development' },
  ];

  const mentorResources = [
    { title: 'Mentor Training Manual', description: 'Complete guide for effective mentorship' },
    { title: 'Session Planning Toolkit', description: 'Templates and frameworks for mentorship sessions' },
    { title: 'Goal Setting Framework', description: 'Help mentees set and achieve career goals' },
    { title: 'Communication Best Practices', description: 'Build strong mentor-mentee relationships' },
  ];

  const events = [
    { title: 'Monthly Mentorship Webinar', date: 'Every 3rd Thursday', type: 'Webinar' },
    { title: 'Career Fair 2025', date: 'March 15, 2025', type: 'Event' },
    { title: 'Skills Workshop Series', date: 'Ongoing', type: 'Workshop' },
    { title: 'Entrepreneurship Summit', date: 'June 20-21, 2025', type: 'Conference' },
  ];

  const publications = [
    { title: 'Annual Impact Report 2024', description: 'Our achievements and impact metrics', type: 'Annual Report' },
    { title: 'Skills Gap Analysis', description: 'Research on employment and skills needs', type: 'Research Paper' },
    { title: 'Mentorship Best Practices', description: 'Evidence-based mentorship guidelines', type: 'Whitepaper' },
    { title: 'Youth Employment Trends', description: 'Analysis of youth employment landscape', type: 'Research Paper' },
  ];

  const annualReports = [
    { year: '2024', title: 'Annual Report 2024', description: 'Our impact and achievements in 2024' },
    { year: '2023', title: 'Annual Report 2023', description: 'Growth and milestones from 2023' },
    { year: '2022', title: 'Annual Report 2022', description: 'Foundation year highlights' },
  ];

  // Educational videos: from API when available, else fallback (Connect2Roots Academy)
  const CONNECT2ROOTS_ACADEMY_CHANNEL = 'https://www.youtube.com/@connect2rootsacademy';
  const CONNECT2ROOTS_ACADEMY_VIDEOS = 'https://www.youtube.com/@connect2rootsacademy/videos';

  const defaultEducationalVideos = [
    { id: 0, title: 'Career Guidance & Mentorship', description: 'Learn how mentorship can shape your career path.', topic: 'Career Development', video_id: '' },
    { id: 0, title: 'Skills for the Modern Workplace', description: 'Essential skills to thrive in today\'s job market.', topic: 'Professional Skills', video_id: '' },
    { id: 0, title: 'Entrepreneurship & Starting Up', description: 'Insights on turning ideas into sustainable ventures.', topic: 'Entrepreneurship', video_id: '' },
    { id: 0, title: 'Personal Branding & Networking', description: 'Build your professional identity effectively.', topic: 'Career Development', video_id: '' },
    { id: 0, title: 'Interview & Resume Tips', description: 'Practical advice for interviews and applications.', topic: 'Career Prep', video_id: '' },
    { id: 0, title: 'Stories from Our Community', description: 'Hear from mentees and mentors.', topic: 'Community', video_id: '' },
  ];

  const educationalVideos = apiVideos.length > 0
    ? apiVideos
    : defaultEducationalVideos;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        <div className="container relative z-10 py-20">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Resources</h1>
              <p className="text-lg text-white/90">
                Access our library of guides, tools, and materials to support your career journey
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="w-full mb-8 flex overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-7">
              <TabsTrigger value="gallery" className="flex-shrink-0">Gallery</TabsTrigger>
              <TabsTrigger value="guides" className="flex-shrink-0">Career Guides</TabsTrigger>
              <TabsTrigger value="mentors" className="flex-shrink-0">For Mentors</TabsTrigger>
              <TabsTrigger value="videos" className="flex-shrink-0">Videos</TabsTrigger>
              <TabsTrigger value="reports" className="flex-shrink-0">Annual Reports</TabsTrigger>
              <TabsTrigger value="events" className="flex-shrink-0">Events</TabsTrigger>
              <TabsTrigger value="publications" className="flex-shrink-0">Publications</TabsTrigger>
            </TabsList>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Photo Gallery</h2>
                  <p className="text-muted-foreground">
                    Explore moments from our mentorship sessions, workshops, and community events
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayGallery.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
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

            {/* Career Guides Tab */}
            <TabsContent value="guides">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Career Guides & Blog</h2>
                  <p className="text-muted-foreground">
                    Practical resources to help you navigate your career journey
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                {careerGuides.map((guide, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{guide.title}</CardTitle>
                            <CardDescription>{guide.description}</CardDescription>
                          </div>
                          <BookOpen className="h-8 w-8 text-c2r-primary flex-shrink-0 ml-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{guide.category}</Badge>
                          <Button variant="ghost" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* For Mentors Tab */}
            <TabsContent value="mentors">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Resources for Mentors</h2>
                  <p className="text-muted-foreground">
                    Training materials and toolkits to help you be an effective mentor
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                {mentorResources.map((resource, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </div>
                          <FileText className="h-8 w-8 text-c2r-accent flex-shrink-0 ml-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab - Educational content from Connect2Roots Academy */}
            <TabsContent value="videos">
              <ScrollReveal>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="h-7 w-7 text-c2r-primary" />
                    <h2 className="text-2xl font-bold">Educational Videos</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Learn from Connect2Roots Academy — career guidance, mentorship insights, and success stories to support your growth.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>All videos are from</span>
                  <a
                    href={CONNECT2ROOTS_ACADEMY_CHANNEL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-c2r-primary hover:underline inline-flex items-center gap-1"
                  >
                    Connect2Roots Academy
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <span>on YouTube.</span>
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {educationalVideos.map((video, index) => (
                  <ScrollReveal key={video.id ? `v-${video.id}` : index} delay={index * 50}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group max-w-sm mx-auto w-full">
                      {video.video_id ? (
                        <>
                          <a
                            href={`https://www.youtube.com/watch?v=${getYouTubeVideoId(video.video_id)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block aspect-video w-full bg-muted overflow-hidden relative"
                          >
                            {isValidYouTubeId(getYouTubeVideoId(video.video_id)) ? (
                              <img
                                src={getYouTubeThumbnailUrlSafe(video.video_id)}
                                alt={video.title}
                                className="w-full h-full min-w-0 min-h-0 object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  const t = e.currentTarget;
                                  if (t.dataset.fallback === '1') return;
                                  t.dataset.fallback = '1';
                                  t.src = getYouTubeThumbnailUrl(video.video_id, 'hqdefault');
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
                            <Badge variant="secondary" className="w-fit mb-1">{video.topic}</Badge>
                            <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                            <CardDescription>{video.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button variant="ghost" size="sm" asChild>
                              <a href={`https://www.youtube.com/watch?v=${getYouTubeVideoId(video.video_id)}`} target="_blank" rel="noopener noreferrer">
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
                            <Badge variant="secondary" className="w-fit mb-1">{video.topic}</Badge>
                            <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                            <CardDescription>{video.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button variant="outline" size="sm" asChild>
                              <a href={CONNECT2ROOTS_ACADEMY_VIDEOS} target="_blank" rel="noopener noreferrer">
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
                  <h3 className="text-lg font-semibold mb-2">More on Connect2Roots Academy</h3>
                  <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
                    Subscribe to our YouTube channel for regular educational content, mentor talks, and community stories.
                  </p>
                  <Button asChild>
                    <a href={CONNECT2ROOTS_ACADEMY_CHANNEL} target="_blank" rel="noopener noreferrer">
                      <Video className="mr-2 h-4 w-4" />
                      Visit YouTube Channel
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </TabsContent>

            {/* Annual Reports Tab */}
            <TabsContent value="reports">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Annual Reports</h2>
                  <p className="text-muted-foreground">
                    Download our yearly contribution reports and impact assessments
                  </p>
                </div>
              </ScrollReveal>
              <div className="max-w-4xl mx-auto space-y-4">
                {annualReports.map((report, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:border-c2r-accent cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white text-2xl font-bold">
                              {report.year}
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-1">{report.title}</CardTitle>
                              <CardDescription>{report.description}</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <FileDown className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={200}>
                <div className="mt-12 text-center">
                  <img 
                    src={getImageUrl('/assets/generated/annual-report-cover.dim_400x600.jpg')} 
                    alt="Annual Report Cover" 
                    className="mx-auto rounded-lg shadow-xl max-w-xs hover:scale-105 transition-transform duration-300" 
                  />
                  <p className="mt-6 text-muted-foreground">
                    Our annual reports showcase the impact we've made together with our community
                  </p>
                </div>
              </ScrollReveal>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
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
                            <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
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
            <TabsContent value="publications">
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Publications & Reports</h2>
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
                            <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
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
