import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, Linkedin, ArrowRight } from "lucide-react";
import { SiFacebook, SiX, SiInstagram, SiYoutube } from "react-icons/si";
import { useState, useEffect } from "react";
import type { IconType } from "react-icons";
import { contactIcons, ICON } from "@/lib/siteIcons";
import { useLocation } from "@tanstack/react-router";
import {
  useContactForm,
  usePartnershipInquiry,
  useVolunteerForm,
  useLifetimeMembershipForm,
  type VolunteerFormData,
} from "@/hooks/useQueries";
import {
  VolunteerRegistrationForm,
  INITIAL_VOLUNTEER_FORM,
} from "@/components/VolunteerRegistrationForm";
import { toast } from "sonner";
import { getImageUrl } from "@/lib/images";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  GI_PAGE,
  GI_BTN_HERO,
  GI_BTN_PRIMARY,
  GetInvolvedHero,
  GetInvolvedSection,
  GetInvolvedContentWidth,
} from "@/components/get-involved/GetInvolvedLayout";

const CONTACT_TABS = [
  "general",
  "partnership",
  "volunteer",
  "lifetime-membership",
] as const;

type ContactTab = (typeof CONTACT_TABS)[number];

const navItems: {
  tab: ContactTab;
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    tab: "general",
    title: "General Inquiry",
    description: "Send us a message",
    icon: contactIcons.general,
  },
  {
    tab: "partnership",
    title: "CSR / Partnership",
    description: "Partner with us",
    icon: contactIcons.partnership,
  },
  {
    tab: "volunteer",
    title: "Volunteer",
    description: "Join as a volunteer",
    icon: contactIcons.volunteer,
  },
  {
    tab: "lifetime-membership",
    title: "Lifetime Membership",
    description: "Apply for membership",
    icon: contactIcons.membership,
  },
];

const SOCIAL_LINKS = [
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

const CONSENT_NOTICE =
  "By submitting this form, you consent to be contacted regarding your inquiry. You shall not share confidential information about our organisation with any third party without informing the Connect2Roots team.";

function scrollToTab(tab: string) {
  document.getElementById(tab)?.scrollIntoView({ behavior: "smooth" });
}

export default function ContactPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("general");
  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [partnershipForm, setPartnershipForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    message: "",
  });
  const [volunteerForm, setVolunteerForm] = useState<VolunteerFormData>(
    INITIAL_VOLUNTEER_FORM,
  );
  const [lifetimeForm, setLifetimeForm] = useState<VolunteerFormData>(
    INITIAL_VOLUNTEER_FORM,
  );

  useEffect(() => {
    const hash = (location.hash ?? window.location.hash ?? "").replace(
      /^#/,
      "",
    );
    if (!(CONTACT_TABS as readonly string[]).includes(hash)) return;
    setActiveTab(hash);
    const timeoutId = setTimeout(() => scrollToTab(hash), 150);
    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  const contactMutation = useContactForm();
  const partnershipMutation = usePartnershipInquiry();
  const volunteerMutation = useVolunteerForm();
  const lifetimeMembershipMutation = useLifetimeMembershipForm();

  const selectTab = (tab: ContactTab) => {
    setActiveTab(tab);
    setTimeout(() => scrollToTab(tab), 50);
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactMutation.mutateAsync(generalForm);
      toast.success("Thank you! Your message has been sent successfully.");
      setGeneralForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await partnershipMutation.mutateAsync(partnershipForm);
      toast.success(
        "Thank you! We will get back to you soon regarding partnership opportunities.",
      );
      setPartnershipForm({
        companyName: "",
        contactPerson: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send inquiry. Please try again.");
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.preferredDays || !volunteerForm.preferredTimings) {
      toast.error(
        "Please select your preferred days and timings for volunteering.",
      );
      return;
    }
    try {
      await volunteerMutation.mutateAsync(volunteerForm);
      toast.success(
        "Thank you! Your volunteer registration has been submitted. We will be in touch.",
      );
      setVolunteerForm(INITIAL_VOLUNTEER_FORM);
    } catch {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  const updateVolunteer = (updates: Partial<VolunteerFormData>) =>
    setVolunteerForm((prev) => ({ ...prev, ...updates }));

  const handleLifetimeMembershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lifetimeForm.preferredDays || !lifetimeForm.preferredTimings) {
      toast.error("Please select your preferred days and timings.");
      return;
    }
    try {
      await lifetimeMembershipMutation.mutateAsync(lifetimeForm);
      toast.success(
        "Thank you! Your lifetime membership application has been submitted. Our team will contact you within 2–3 working days.",
      );
      setLifetimeForm(INITIAL_VOLUNTEER_FORM);
    } catch {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const updateLifetimeForm = (updates: Partial<VolunteerFormData>) =>
    setLifetimeForm((prev) => ({ ...prev, ...updates }));

  return (
    <div className={GI_PAGE}>
      <GetInvolvedHero
        backgroundImage={getImageUrl(
          "/assets/generated/team-collaboration.dim_800x500.jpg",
        )}
        chapter="Contact"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work."
        icon={<contactIcons.hub className={ICON.hero} />}
      >
        <Button
          size="lg"
          variant="secondary"
          className={GI_BTN_HERO}
          onClick={() => selectTab("general")}
        >
          Send a Message
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </GetInvolvedHero>

      <GetInvolvedSection variant="gradient">
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {navItems.map((item, index) => (
              <ScrollReveal key={item.tab} delay={index * 100}>
                <button
                  type="button"
                  onClick={() => selectTab(item.tab)}
                  className="block h-full w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-c2r-primary focus-visible:ring-offset-2"
                >
                  <Card
                    className={`h-full cursor-pointer border shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${
                      activeTab === item.tab
                        ? "border-c2r-primary/40 ring-1 ring-c2r-primary/20"
                        : "border-border/60"
                    }`}
                  >
                    <CardContent className="flex h-full flex-col items-center gap-4 pt-8 pb-8 text-center">
                      <item.icon className={`${ICON.nav} text-c2r-primary`} />
                      <h3 className="c2r-card-title leading-snug">
                        {item.title}
                      </h3>
                      <p className="c2r-prose-sm">{item.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-c2r-primary">
                        Open form
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="contact-forms">
        <ChapterHeader
          chapter="Get in Touch"
          title="How Can We Help?"
          subtitle="Choose a form below or use the cards above to jump directly to what you need."
          icon={<contactIcons.general className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="content">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
              <TabsTrigger value="general" className="text-xs sm:text-sm">
                General Inquiry
              </TabsTrigger>
              <TabsTrigger value="partnership" className="text-xs sm:text-sm">
                CSR/Partnership
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="text-xs sm:text-sm">
                Volunteer
              </TabsTrigger>
              <TabsTrigger
                value="lifetime-membership"
                className="text-xs sm:text-sm"
              >
                Lifetime Membership
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" id="general">
              <Card className="overflow-hidden border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleGeneralSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={generalForm.name}
                        onChange={(e) =>
                          setGeneralForm({
                            ...generalForm,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={generalForm.email}
                        onChange={(e) =>
                          setGeneralForm({
                            ...generalForm,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        value={generalForm.message}
                        onChange={(e) =>
                          setGeneralForm({
                            ...generalForm,
                            message: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className={GI_BTN_PRIMARY}
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partnership" id="partnership">
              <Card className="overflow-hidden border border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Partnership Inquiry</CardTitle>
                  <CardDescription>
                    Interested in partnering with us? Let&apos;s discuss how we
                    can work together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handlePartnershipSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="companyName">
                        Company/Organization Name *
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Your organization"
                        value={partnershipForm.companyName}
                        onChange={(e) =>
                          setPartnershipForm({
                            ...partnershipForm,
                            companyName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        placeholder="Your full name"
                        value={partnershipForm.contactPerson}
                        onChange={(e) =>
                          setPartnershipForm({
                            ...partnershipForm,
                            contactPerson: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnershipEmail">Email *</Label>
                      <Input
                        id="partnershipEmail"
                        type="email"
                        placeholder="your.email@company.com"
                        value={partnershipForm.email}
                        onChange={(e) =>
                          setPartnershipForm({
                            ...partnershipForm,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnershipMessage">
                        Tell us about your interest *
                      </Label>
                      <Textarea
                        id="partnershipMessage"
                        placeholder="Describe your partnership goals and how you'd like to collaborate..."
                        rows={6}
                        value={partnershipForm.message}
                        onChange={(e) =>
                          setPartnershipForm({
                            ...partnershipForm,
                            message: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className={GI_BTN_PRIMARY}
                      disabled={partnershipMutation.isPending}
                    >
                      {partnershipMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="volunteer" id="volunteer">
              <Card className="overflow-hidden border border-border/60 shadow-lg">
                <div className="border-b border-border/60 bg-gradient-to-r from-c2r-primary/5 via-background to-c2r-secondary/5 px-6 py-5 md:px-8">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <contactIcons.volunteer className="h-5 w-5 text-c2r-accent" />
                    C2R Volunteering Form
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Register your interest in volunteering with Connect2Roots.
                  </CardDescription>
                </div>
                <CardHeader className="pb-0">
                  <CardDescription className="space-y-4 text-left">
                    <p className="font-medium text-foreground">Namaste,</p>
                    <p className="c2r-prose">
                      Thank you for your interest in volunteering with
                      Connect2Roots Foundation. Please submit the form below to
                      register as a volunteer with us.
                    </p>
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 dark:border-amber-800/50 dark:bg-amber-950/30">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {CONSENT_NOTICE}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * Indicates required field
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <VolunteerRegistrationForm
                    form={volunteerForm}
                    onChange={updateVolunteer}
                    onSubmit={handleVolunteerSubmit}
                    isPending={volunteerMutation.isPending}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lifetime-membership" id="lifetime-membership">
              <Card className="overflow-hidden border border-border/60 shadow-lg">
                <div className="border-b border-border/60 bg-gradient-to-r from-c2r-primary/5 via-background to-c2r-secondary/5 px-6 py-5 md:px-8">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <contactIcons.membership className="h-5 w-5 text-c2r-accent" />
                    Lifetime Membership Application
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Apply to join our professional community.
                  </CardDescription>
                </div>
                <CardHeader className="pb-0">
                  <CardDescription className="space-y-4 text-left">
                    <p className="font-medium text-foreground">Namaste,</p>
                    <p className="c2r-prose">
                      Thank you for your interest in Lifetime Membership with
                      Connect2Roots Foundation. Our team will contact you within
                      2–3 working days with payment and onboarding details.
                    </p>
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 dark:border-amber-800/50 dark:bg-amber-950/30">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {CONSENT_NOTICE}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * Indicates required field
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <VolunteerRegistrationForm
                    idPrefix="lm-contact"
                    form={lifetimeForm}
                    onChange={updateLifetimeForm}
                    onSubmit={handleLifetimeMembershipSubmit}
                    isPending={lifetimeMembershipMutation.isPending}
                    submitLabel="Submit Application"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection id="reach-us" variant="muted">
        <ChapterHeader
          chapter="Reach Us"
          title="Other Ways to Reach Us"
          subtitle="Email us directly or visit our corporate office in Bengaluru."
          icon={<contactIcons.location className={ICON.section} />}
        />
        <GetInvolvedContentWidth size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader className="pb-2">
                  <contactIcons.general className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle className="c2r-card-title">Email</CardTitle>
                  <CardDescription>
                    Reach out for general inquiries, volunteering, or CSR and
                    partnership opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p className="c2r-prose">
                    <strong className="text-foreground">General:</strong>{" "}
                    <a
                      href="mailto:info@connect2roots.org"
                      className="text-c2r-primary hover:underline"
                    >
                      info@connect2roots.org
                    </a>
                    ,{" "}
                    <a
                      href="mailto:connect2rootsindia@gmail.com"
                      className="text-c2r-primary hover:underline"
                    >
                      connect2rootsindia@gmail.com
                    </a>
                  </p>
                  <p className="c2r-prose">
                    <strong className="text-foreground">Volunteer:</strong>{" "}
                    <a
                      href="mailto:volunteer@connect2roots.org"
                      className="text-c2r-primary hover:underline"
                    >
                      volunteer@connect2roots.org
                    </a>
                  </p>
                  <p className="c2r-prose">
                    <strong className="text-foreground">CSR:</strong>{" "}
                    <a
                      href="mailto:csr@connect2roots.org"
                      className="text-c2r-primary hover:underline"
                    >
                      csr@connect2roots.org
                    </a>
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="h-full border border-border/60 shadow-sm">
                <CardHeader className="pb-2">
                  <contactIcons.location className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle className="c2r-card-title">
                    Corporate Office
                  </CardTitle>
                  <CardDescription>
                    Visit us in Bengaluru. We welcome in-person inquiries by
                    prior appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Connect2Roots Foundation
                  </p>
                  <p>Yemalur, Kariammana Agrahara Road</p>
                  <p>Bengaluru- 560037</p>
                  <p>Karnataka, India</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <Card className="mt-6 border border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="c2r-card-title">
                  Visit Our Office
                </CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-border/60 bg-muted/40">
                  <div className="text-center text-muted-foreground">
                    <contactIcons.location className="mx-auto mb-2 h-12 w-12" />
                    <p>Map integration placeholder</p>
                    <p className="text-sm">
                      Yemalur, Kariammana Agrahara Road, Bengaluru- 560037,
                      Karnataka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>

      <GetInvolvedSection>
        <ChapterHeader
          chapter="Stay Connected"
          title="Connect on Social Media"
          subtitle="Follow us for updates, success stories, and community news."
        />
        <GetInvolvedContentWidth size="narrow">
          <ScrollReveal>
            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-2">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-c2r-primary/40 hover:text-primary sm:h-12 sm:w-12"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </GetInvolvedContentWidth>
      </GetInvolvedSection>
    </div>
  );
}
