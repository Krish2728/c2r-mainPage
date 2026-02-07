import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Award, Target, Users, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const MENTOR_PLATFORM_BASE = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_MENTOR_PLATFORM_URL)
  ? String(import.meta.env.VITE_MENTOR_PLATFORM_URL).replace(/\/$/, '')
  : '';
const MENTOR_AUTH_MENTEE = MENTOR_PLATFORM_BASE ? `${MENTOR_PLATFORM_BASE}/auth?role=mentee&mode=signup` : '';
const MENTOR_AUTH_MENTOR = MENTOR_PLATFORM_BASE ? `${MENTOR_PLATFORM_BASE}/auth?role=mentor&mode=signup` : '';

const SLIDE_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    alt: 'Team collaboration',
    feature: 'No Cost, Just Care — 100% Free for All Learners',
    progress: 25,
  },
  {
    url: '/mentor-landing/one-one-mentoring.jpg',
    alt: 'One-on-one mentoring',
    feature: 'One-on-One Guidance for Every Student',
    progress: 50,
  },
  {
    url: '/mentor-landing/Progress_tracker.jpg',
    alt: 'Progress tracking',
    feature: 'Progress Tracking to Help Students Stay on Course',
    progress: 75,
  },
  {
    url: '/mentor-landing/online.jpg',
    alt: 'Online mentorship',
    feature: 'Accessible Mentorship Anytime, Anywhere',
    progress: 100,
  },
];

const BENEFITS = [
  {
    title: 'Personalized Mentorship',
    description: 'Get matched with mentors who understand your background and career aspirations, providing tailored guidance for your unique journey.',
  },
  {
    title: 'Industry Insights',
    description: 'Learn from professionals who have successfully built careers in your field, gaining valuable insights into industry trends and opportunities.',
  },
  {
    title: 'Network Building',
    description: 'Connect with like-minded individuals and build a strong professional network that spans across your hometown and current location.',
  },
  {
    title: 'Skill Development',
    description: 'Receive guidance on developing both technical and soft skills that are essential for career growth in your chosen field.',
  },
];

const ACTION_CARDS = [
  { id: 'mentee' as const, title: 'Become a', subtitle: 'Mentee', img: '/mentor-landing/mentee.jpg' },
  { id: 'mentor' as const, title: 'Become a', subtitle: 'Mentor', img: '/mentor-landing/mentor.jpg' },
  { id: 'work' as const, title: 'Work with', subtitle: 'Us', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
];

export default function MentorshipPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleActionCard = (id: 'mentee' | 'mentor' | 'work') => {
    if (id === 'mentor' && MENTOR_AUTH_MENTOR) {
      window.open(MENTOR_AUTH_MENTOR, '_blank');
    } else if (id === 'mentee' && MENTOR_AUTH_MENTEE) {
      window.open(MENTOR_AUTH_MENTEE, '_blank');
    } else if (id === 'work') {
      navigate({ to: '/get-involved' });
    } else {
      navigate({ to: '/contact' });
    }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero - mentor_module landing style */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#d4e6c7] via-[#f5f0e8] to-[#e8dcc4] py-12 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Free 1-on-1{' '}
                <span className="bg-gradient-to-r from-c2r-secondary to-c2r-primary bg-clip-text text-transparent">
                  Career Guidance
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To act as a platform where every citizen of India studying outside their city/village can connect to their own roots and fulfill their dreams of going back to the same land to which they belong to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {MENTOR_AUTH_MENTEE ? (
                  <Button size="lg" className="text-lg px-8 py-6 bg-c2r-primary hover:bg-c2r-primary/90" asChild>
                    <a href={MENTOR_AUTH_MENTEE} target="_blank" rel="noopener noreferrer">
                      Find Mentors
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/contact' })}>
                    Find Mentors
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                )}
                {MENTOR_AUTH_MENTOR ? (
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-amber-800 text-c2r-primary bg-[#f5f0e8] hover:bg-[#e8dcc4]" asChild>
                    <a href={MENTOR_AUTH_MENTOR} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-5 w-5" />
                      Become a Mentor
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/get-involved' })}>
                    <Play className="mr-2 h-5 w-5" />
                    Become a Mentor
                  </Button>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-80 relative">
                  <img
                    src={SLIDE_IMAGES[currentSlide].url}
                    alt={SLIDE_IMAGES[currentSlide].alt}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="font-semibold text-gray-900 mb-2">{SLIDE_IMAGES[currentSlide].feature}</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-c2r-secondary to-c2r-primary rounded-full transition-all duration-500"
                      style={{ width: `${SLIDE_IMAGES[currentSlide].progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-2 pb-4">
                  {SLIDE_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentSlide ? 'w-6 bg-c2r-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How does Connect2Roots career guidance will help?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our platform bridges the gap between ambitious students and experienced professionals, providing personalized career guidance that helps you navigate your journey back to your roots while building a successful career.
              </p>
              <Button size="lg" onClick={() => (MENTOR_AUTH_MENTEE ? window.open(MENTOR_AUTH_MENTEE, '_blank') : navigate({ to: '/contact' }))}>
                Get started
              </Button>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="aspect-[1.25] rounded-xl overflow-hidden">
                <img src="/mentor-landing/guidance.jpg" alt="Professional mentoring session" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-[#f5f0e8]">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div
                  className={`p-8 rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    index % 2 === 0 ? 'bg-gradient-to-br from-amber-700/90 to-amber-800/90 text-white' : 'bg-white'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className={index % 2 === 0 ? 'text-white/95' : 'text-gray-600'}>{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8 relative">
                <img src="/mentor-landing/benefits.jpg" alt="Professional mentor" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-lg shadow-md flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-c2r-primary" />
                  <span className="text-sm font-medium text-gray-700">Proofs & Stats</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                At your fingertips: A Dedicated Career Mentor
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect2Roots believes that every young individual has the potential to create impact – they just need the right direction, guidance, and support. Our Mentor-Mentee Platform is designed to empower young students, connecting them with experienced professionals who can contribute to the betterment of our society.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Star, text: 'Thousands of mentors available' },
                  { icon: Award, text: 'Flexible program structures' },
                  { icon: Target, text: 'Personalised goals' },
                  { icon: Users, text: '1-on-1 calls' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <item.icon className="h-5 w-5 text-c2r-primary shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-16 lg:py-24 bg-[#f5f0e8]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {ACTION_CARDS.map((card) => (
              <ScrollReveal key={card.id}>
                <button
                  type="button"
                  onClick={() => handleActionCard(card.id)}
                  className="relative h-80 rounded-xl overflow-hidden w-full text-left group shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <img
                    src={card.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="text-3xl font-bold mt-1">{card.subtitle}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
