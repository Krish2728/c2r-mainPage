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
import { Mail, MapPin, Send, Heart, Crown, Linkedin } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "react-icons/si";
import { useState, useEffect } from "react";
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

const CONTACT_TABS = [
  "general",
  "partnership",
  "volunteer",
  "lifetime-membership",
] as const;

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
    // Scroll to tab section after tab content is in the DOM (one-click nav from header)
    const timeoutId = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  const contactMutation = useContactForm();
  const partnershipMutation = usePartnershipInquiry();
  const volunteerMutation = useVolunteerForm();
  const lifetimeMembershipMutation = useLifetimeMembershipForm();

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactMutation.mutateAsync(generalForm);
      toast.success("Thank you! Your message has been sent successfully.");
      setGeneralForm({ name: "", email: "", message: "" });
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getImageUrl("/assets/generated/team-collaboration.dim_800x500.jpg")})`,
          }}
        />
        <div className="absolute inset-0 c2r-gradient-hero-overlay" />
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="heading-descender-safe mb-6 text-5xl font-bold md:text-6xl">
              Contact Us
            </h1>
            <p className="c2r-hero-subtitle">
              We'd love to hear from you. Reach out with questions, partnership
              inquiries, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
                <TabsTrigger value="general">General Inquiry</TabsTrigger>
                <TabsTrigger value="partnership">CSR/Partnership</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                <TabsTrigger value="lifetime-membership">
                  Lifetime Membership
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" id="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon
                      as possible
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
                        className="text-lg px-8 py-6"
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
                <Card>
                  <CardHeader>
                    <CardTitle>Partnership Inquiry</CardTitle>
                    <CardDescription>
                      Interested in partnering with us? Let's discuss how we can
                      work together
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
                        className="text-lg px-8 py-6"
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-c2r-accent" />
                      C2R Volunteering Form
                    </CardTitle>
                    <CardDescription className="space-y-3 text-left">
                      <p className="font-medium text-foreground">Namaste,</p>
                      <p className="c2r-prose">
                        Thank you for your interest in volunteering with
                        Connect2Roots Foundation. Please submit the form below
                        to register as a volunteer with us.
                      </p>
                      <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-muted-foreground dark:border-amber-800 dark:bg-amber-950/50">
                        By submitting this form, you consent to be contacted for
                        volunteering opportunities with Connect2Roots. As a
                        volunteer you shall not share confidential information
                        or details about our organisation with any third party
                        without informing the Connect2Roots team.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        * Indicates required field
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-c2r-accent" />
                      Lifetime Membership Application
                    </CardTitle>
                    <CardDescription className="space-y-3 text-left">
                      <p className="font-medium text-foreground">Namaste,</p>
                      <p className="c2r-prose">
                        Thank you for your interest in Lifetime Membership with
                        Connect2Roots Foundation. Our team will contact you
                        within 2–3 working days with payment and onboarding
                        details.
                      </p>
                      <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-muted-foreground dark:border-amber-800 dark:bg-amber-950/50">
                        By submitting this form, you consent to be contacted
                        regarding your membership application. As a member you
                        shall not share confidential information about our
                        organisation with any third party without informing the
                        Connect2Roots team.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        * Indicates required field
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="heading-descender-safe mb-12 text-center text-3xl font-bold">
              Other Ways to Reach Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Mail className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle className="text-xl">Email</CardTitle>
                  <CardDescription className="text-base">
                    Reach out for general inquiries, volunteering, or CSR and
                    partnership opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
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

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <MapPin className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle className="text-xl">Corporate Office</CardTitle>
                  <CardDescription className="text-base">
                    Visit us at our office in Bengaluru. We welcome in-person
                    inquiries by prior appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">
                    Connect2Roots Foundation
                  </p>
                  <p>Yemalur, Kariammana Agrahara Road</p>
                  <p>Bengaluru- 560037</p>
                  <p>Karnataka, India</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Visit Our Office</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2 h-12 w-12" />
                    <p>Map integration placeholder</p>
                    <p className="text-sm">
                      Yemalur, Kariammana Agrahara Road, Bengaluru- 560037,
                      Karnataka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-descender-safe mb-6 text-3xl font-bold">
              Connect on Social Media
            </h2>
            <p className="mb-8 c2r-prose">
              Follow us for updates, success stories, and community news
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/share/1DwzSkCk6U/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110"
              >
                <SiFacebook className="h-8 w-8" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110"
              >
                <SiX className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/connect2roots/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com/connect2rootsfoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110"
              >
                <SiInstagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
