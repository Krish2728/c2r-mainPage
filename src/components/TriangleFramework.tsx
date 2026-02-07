import { useEffect, useRef, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Building2 } from 'lucide-react';

interface TriangleFrameworkProps {
  className?: string;
}

const MOBILE_BREAKPOINT = 640; // match Tailwind sm

export function TriangleFramework({ className = '' }: TriangleFrameworkProps) {
  const [activeStage, setActiveStage] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastStageRef = useRef(0);

  // Track mobile for faster animation on small screens
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const windowCenter = windowHeight * 0.5;

      if (sectionBottom < 0 || sectionTop > windowHeight) return;

      // When section is centered (middle of screen inside section), show all elements
      const viewportCenterInSection = windowCenter >= sectionTop && windowCenter <= sectionBottom;
      if (viewportCenterInSection) {
        if (lastStageRef.current !== 5) {
          setActiveStage(5);
          lastStageRef.current = 5;
        }
        return;
      }

      const sectionCenter = (sectionTop + sectionBottom) / 2;
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
      const maxDistance = windowHeight * 0.8;
      const scrollProgress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));

      // Mobile: all stages trigger almost immediately (fast). Desktop: original pacing.
      const thresholds = isMobile
        ? [0, 0.02, 0.04, 0.06, 0.10]  // T, R, I, lines, center – minimal scroll
        : [0, 0.05, 0.10, 0.20, 0.30];
      let newStage = 0;
      if (scrollProgress >= thresholds[0]) newStage = 1;
      if (scrollProgress >= thresholds[1]) newStage = 2;
      if (scrollProgress >= thresholds[2]) newStage = 3;
      if (scrollProgress >= thresholds[3]) newStage = 4;
      if (scrollProgress >= thresholds[4]) newStage = 5;

      if (newStage !== lastStageRef.current) {
        setActiveStage(newStage);
        lastStageRef.current = newStage;
      }
    });
  }, [isMobile]);

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start listening to scroll when section is visible
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial check
          } else {
            // Stop listening when section is not visible
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      {
        threshold: [0, 0.1],
        rootMargin: '20% 0px 20% 0px', // Trigger much earlier - 20% before entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Also listen on initial load
    handleScroll();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const topLeftVisible = activeStage >= 1;
  const topRightVisible = activeStage >= 2;
  const bottomVisible = activeStage >= 3;
  const linesVisible = activeStage >= 4;
  const centerVisible = activeStage >= 5;

  const duration = isMobile ? '180ms' : '400ms';
  const delay1 = isMobile ? '20ms' : '50ms';
  const delay2 = isMobile ? '40ms' : '100ms';
  const delay3 = isMobile ? '60ms' : '150ms';
  const lineDuration = isMobile ? '250ms' : '500ms';

  return (
    <div ref={sectionRef} className={`py-16 sm:py-24 md:py-32 ${className}`}>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Animated Triangle Visualization - compact on phone with extra bottom space for I card, full size on larger screens */}
          <div className="relative min-h-[360px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] mb-10 sm:mb-20 overflow-visible sm:overflow-hidden px-1 sm:px-4 md:px-0 pb-2 sm:pb-0">
            {/* SVG Triangle Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 700"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(var(--c2r-primary))" />
                  <stop offset="50%" stopColor="oklch(var(--c2r-secondary))" />
                  <stop offset="100%" stopColor="oklch(var(--c2r-accent))" />
                </linearGradient>
              </defs>
              
              {/* Triangle Lines - Faster animation */}
              <line 
                x1="200" y1="150" 
                x2="600" y2="150" 
                stroke="url(#lineGradient)" 
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset={linesVisible ? 0 : 400}
                className="ease-out"
                style={{ 
                  opacity: linesVisible ? 1 : 0,
                  willChange: 'stroke-dashoffset, opacity',
                  transition: `stroke-dashoffset ${lineDuration} ease-out, opacity ${lineDuration} ease-out`,
                }}
              />
              <line 
                x1="200" y1="150" 
                x2="400" y2="500" 
                stroke="url(#lineGradient)" 
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset={linesVisible ? 0 : 400}
                className="ease-out"
                style={{ 
                  opacity: linesVisible ? 1 : 0,
                  willChange: 'stroke-dashoffset, opacity',
                  transition: `stroke-dashoffset ${lineDuration} ease-out ${isMobile ? '40ms' : '75ms'}, opacity ${lineDuration} ease-out ${isMobile ? '40ms' : '75ms'}`,
                }}
              />
              <line 
                x1="600" y1="150" 
                x2="400" y2="500" 
                stroke="url(#lineGradient)" 
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset={linesVisible ? 0 : 400}
                className="ease-out"
                style={{ 
                  opacity: linesVisible ? 1 : 0,
                  willChange: 'stroke-dashoffset, opacity',
                  transition: `stroke-dashoffset ${lineDuration} ease-out ${isMobile ? '80ms' : '150ms'}, opacity ${lineDuration} ease-out ${isMobile ? '80ms' : '150ms'}`,
                }}
              />
            </svg>

            {/* Top Left Corner - T */}
            <div 
              className={`absolute top-0 left-0 md:left-10 w-full max-w-[100px] sm:max-w-[240px] md:w-64 transition-all ease-out ${
                topLeftVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-5 scale-95'
              }`}
              style={{ willChange: 'transform, opacity', transitionDuration: duration }}
            >
              <Card className="border border-c2r-primary sm:border-2 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow p-2 sm:py-6 sm:px-6">
                <CardContent className="p-0 sm:pt-6 sm:px-6">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                    <div className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary flex items-center justify-center text-white font-bold text-xs sm:text-xl shrink-0">
                      T
                    </div>
                    <Target className="h-4 w-4 sm:h-8 sm:w-8 text-c2r-primary shrink-0" />
                  </div>
                  <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight">Targeted Futuristic Career Pathways</h3>
                  <p className="text-[9px] sm:text-sm text-muted-foreground italic leading-tight">
                    Identifying where future opportunities lie.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Top Right Corner - R */}
            <div 
              className={`absolute top-0 right-0 md:right-10 w-full max-w-[100px] sm:max-w-[240px] md:w-64 transition-all ease-out ${
                topRightVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-5 scale-95'
              }`}
              style={{ willChange: 'transform, opacity', transitionDuration: duration, transitionDelay: delay1 }}
            >
              <Card className="border border-c2r-secondary sm:border-2 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow p-2 sm:py-6 sm:px-6">
                <CardContent className="p-0 sm:pt-6 sm:px-6">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                    <div className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-c2r-secondary to-c2r-accent flex items-center justify-center text-white font-bold text-xs sm:text-xl shrink-0">
                      R
                    </div>
                    <Users className="h-4 w-4 sm:h-8 sm:w-8 text-c2r-secondary shrink-0" />
                  </div>
                  <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight">Robust Mentor Network</h3>
                  <p className="text-[9px] sm:text-sm text-muted-foreground italic leading-tight">
                    Human guidance that converts aspiration into action.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Corner - I - on mobile positioned a little lower */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[100px] sm:max-w-[240px] md:w-64 transition-all ease-out bottom-[-10px] sm:bottom-0 ${
                bottomVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-5 scale-95'
              }`}
              style={{ willChange: 'transform, opacity', transitionDuration: duration, transitionDelay: delay2 }}
            >
              <Card className="border border-c2r-accent sm:border-2 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow p-2 sm:py-6 sm:px-6">
                <CardContent className="p-0 sm:pt-6 sm:px-6">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                    <div className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-c2r-accent to-c2r-primary flex items-center justify-center text-white font-bold text-xs sm:text-xl shrink-0">
                      I
                    </div>
                    <Building2 className="h-4 w-4 sm:h-8 sm:w-8 text-c2r-accent shrink-0" />
                  </div>
                  <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight">Industry–Academia–Government Alignment</h3>
                  <p className="text-[9px] sm:text-sm text-muted-foreground italic leading-tight">
                    Ecosystem support at scale.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Center Text */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[100px] sm:max-w-xs md:max-w-md transition-all ease-out ${
                centerVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-90'
              }`}
              style={{ willChange: 'transform, opacity', transitionDuration: duration, transitionDelay: delay3 }}
            >
              <div className="bg-gradient-to-br from-c2r-primary via-c2r-secondary to-c2r-black p-2 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-2xl shadow-xl sm:shadow-2xl text-center">
                <h3 className="text-[10px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-2 leading-tight">
                  Sustainable Career Outcomes
                </h3>
                <p className="text-white/90 text-[9px] sm:text-xs md:text-sm">The result of aligned efforts</p>
              </div>
            </div>
          </div>

          {/* Full TRIANGLE Framework Content */}
          <div className="mt-20 space-y-8">
            <Card className="border-t-4 border-t-c2r-primary">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6 text-center">The Complete TRIANGLE Framework</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-primary text-white flex items-center justify-center text-sm font-bold">T</span>
                      Targeted Futuristic Career Pathways
                    </h4>
                    <p className="ml-10">
                      We focus on emerging industries and future-ready skills, ensuring students are prepared for tomorrow's opportunities, not yesterday's jobs. Our career guidance is data-driven and forward-looking.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-secondary text-white flex items-center justify-center text-sm font-bold">R</span>
                      Robust Mentor Network
                    </h4>
                    <p className="ml-10">
                      Our network of experienced professionals provides personalized guidance that transforms aspirations into actionable plans. Human connection is at the heart of everything we do.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-primary text-white flex items-center justify-center text-sm font-bold">I</span>
                      Industry–Academia–Government Alignment
                    </h4>
                    <p className="ml-10">
                      We bridge the gap between educational institutions, industry needs, and policy frameworks to create systemic change at scale. Collaboration is key to sustainable impact.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-accent text-white flex items-center justify-center text-sm font-bold">A</span>
                      Accessible & Inclusive
                    </h4>
                    <p className="ml-10">
                      Our programs are designed to reach underserved communities, breaking down barriers of geography, language, and socioeconomic status. Everyone deserves access to quality mentorship.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-secondary text-white flex items-center justify-center text-sm font-bold">N</span>
                      Network-Driven Growth
                    </h4>
                    <p className="ml-10">
                      We build communities, not just connections. Our platform creates lasting relationships that extend beyond individual mentorship sessions, fostering a culture of continuous learning and support.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-primary text-white flex items-center justify-center text-sm font-bold">G</span>
                      Goal-Oriented Approach
                    </h4>
                    <p className="ml-10">
                      Every interaction is purposeful, with clear milestones and measurable outcomes. We help students set realistic goals and provide the support needed to achieve them.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-accent text-white flex items-center justify-center text-sm font-bold">L</span>
                      Livelihood-Focused
                    </h4>
                    <p className="ml-10">
                      Our ultimate goal is sustainable employment and entrepreneurship. We don't just prepare students for careers; we help them launch and thrive in them.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-c2r-secondary text-white flex items-center justify-center text-sm font-bold">E</span>
                      Empathy-Driven
                    </h4>
                    <p className="ml-10">
                      Technology enables us, but empathy guides us. We understand that career journeys are deeply personal, and we approach each student with compassion and respect.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
