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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, MapPin, Send, Heart } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from "react-icons/si";
import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  useContactForm,
  usePartnershipInquiry,
  useVolunteerForm,
  type VolunteerFormData,
} from "@/hooks/useQueries";
import { toast } from "sonner";
import { getImageUrl } from "@/lib/images";

const CONTACT_TABS = ["general", "partnership", "volunteer"] as const;

const INITIAL_VOLUNTEER_FORM: VolunteerFormData = {
  email: "",
  fullName: "",
  gender: "",
  mobileNo: "",
  dateOfBirth: "",
  currentAddress: "",
  nativeCityVillage: "",
  languages: "",
  currentCompanyOrg: "",
  designation: "",
  linkedinProfile: "",
  yearsOfExperience: "",
  hasVolunteeredBefore: "",
  highestQualification: "",
  howCanYouContribute: "",
  preferredAreasMentoring: "",
  hoursPerWeek: "",
  preferredDays: "",
  preferredTimings: "",
  identityNumber: "",
};

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
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="heading-descender-safe mb-6 text-4xl font-bold md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
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
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General Inquiry</TabsTrigger>
                <TabsTrigger value="partnership">CSR/Partnership</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
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
                      <p>
                        Thank you for your interest in volunteering with
                        Connect2Roots Foundation. Please submit the form below
                        to register as a volunteer with us.
                      </p>
                      <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm dark:border-amber-800 dark:bg-amber-950/50">
                        By submitting this form, you consent to be contacted for
                        volunteering opportunities with Connect2Roots. As a
                        volunteer you shall not share confidential information
                        or details about our organisation with any third party
                        without informing the Connect2Roots team.
                      </p>
                      <p className="text-muted-foreground">
                        * Indicates required field
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleVolunteerSubmit}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="vol-email">Email *</Label>
                          <Input
                            id="vol-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={volunteerForm.email}
                            onChange={(e) =>
                              updateVolunteer({ email: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vol-fullName">Full Name *</Label>
                          <Input
                            id="vol-fullName"
                            placeholder="Your full name"
                            value={volunteerForm.fullName}
                            onChange={(e) =>
                              updateVolunteer({ fullName: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Gender *</Label>
                        <RadioGroup
                          value={volunteerForm.gender}
                          onValueChange={(v) => updateVolunteer({ gender: v })}
                          className="flex gap-6"
                        >
                          <label className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value="Male" />
                            <span>Male</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value="Female" />
                            <span>Female</span>
                          </label>
                        </RadioGroup>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="vol-mobileNo">Mobile No *</Label>
                          <Input
                            id="vol-mobileNo"
                            type="tel"
                            placeholder="+1 234 567 8900"
                            value={volunteerForm.mobileNo}
                            onChange={(e) =>
                              updateVolunteer({ mobileNo: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vol-dateOfBirth">
                            Date of Birth *
                          </Label>
                          <Input
                            id="vol-dateOfBirth"
                            type="date"
                            value={volunteerForm.dateOfBirth}
                            onChange={(e) =>
                              updateVolunteer({ dateOfBirth: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-currentAddress">
                          Current Address *
                        </Label>
                        <Textarea
                          id="vol-currentAddress"
                          placeholder="Your current address"
                          rows={2}
                          value={volunteerForm.currentAddress}
                          onChange={(e) =>
                            updateVolunteer({ currentAddress: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-nativeCityVillage">
                          Native City/Village (Your roots) *
                        </Label>
                        <Input
                          id="vol-nativeCityVillage"
                          placeholder="e.g. Mumbai, India"
                          value={volunteerForm.nativeCityVillage}
                          onChange={(e) =>
                            updateVolunteer({
                              nativeCityVillage: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-languages">
                          Languages you can speak? *
                        </Label>
                        <Input
                          id="vol-languages"
                          placeholder="e.g. English, Hindi, Tamil"
                          value={volunteerForm.languages}
                          onChange={(e) =>
                            updateVolunteer({ languages: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="vol-currentCompanyOrg">
                            Your Current Company / Organisation / Educational
                            Institution *
                          </Label>
                          <Input
                            id="vol-currentCompanyOrg"
                            placeholder="Company or institution name"
                            value={volunteerForm.currentCompanyOrg}
                            onChange={(e) =>
                              updateVolunteer({
                                currentCompanyOrg: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vol-designation">
                            Your designation in Current Organisation (if not
                            student)
                          </Label>
                          <Input
                            id="vol-designation"
                            placeholder="Optional"
                            value={volunteerForm.designation ?? ""}
                            onChange={(e) =>
                              updateVolunteer({ designation: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-linkedinProfile">
                          Your LinkedIn Profile Link *
                        </Label>
                        <Input
                          id="vol-linkedinProfile"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={volunteerForm.linkedinProfile}
                          onChange={(e) =>
                            updateVolunteer({ linkedinProfile: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-yearsOfExperience">
                          Your total number of years of experience in job or
                          business
                        </Label>
                        <Input
                          id="vol-yearsOfExperience"
                          placeholder="e.g. 5"
                          value={volunteerForm.yearsOfExperience ?? ""}
                          onChange={(e) =>
                            updateVolunteer({
                              yearsOfExperience: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Have you been a volunteer in the past? *</Label>
                        <RadioGroup
                          value={volunteerForm.hasVolunteeredBefore}
                          onValueChange={(v) =>
                            updateVolunteer({ hasVolunteeredBefore: v })
                          }
                          className="flex gap-6"
                        >
                          <label className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value="Yes" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value="No" />
                            <span>No</span>
                          </label>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-highestQualification">
                          Your Highest Educational Qualification *
                        </Label>
                        <Input
                          id="vol-highestQualification"
                          placeholder="e.g. B.Tech, MBA, PhD"
                          value={volunteerForm.highestQualification}
                          onChange={(e) =>
                            updateVolunteer({
                              highestQualification: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-howCanYouContribute">
                          How do you think you can contribute to Connect2Roots
                          Foundation? *
                        </Label>
                        <Textarea
                          id="vol-howCanYouContribute"
                          placeholder="Describe your skills and how you'd like to contribute..."
                          rows={4}
                          value={volunteerForm.howCanYouContribute}
                          onChange={(e) =>
                            updateVolunteer({
                              howCanYouContribute: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-preferredAreasMentoring">
                          Please mention your preferred areas for volunteering *
                        </Label>
                        <Textarea
                          id="vol-preferredAreasMentoring"
                          placeholder="e.g. Events, Teaching, Administration, Technology"
                          rows={2}
                          value={volunteerForm.preferredAreasMentoring}
                          onChange={(e) =>
                            updateVolunteer({
                              preferredAreasMentoring: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-hoursPerWeek">
                          Number of hours per week you are willing to contribute
                          for volunteering?
                        </Label>
                        <Input
                          id="vol-hoursPerWeek"
                          placeholder="e.g. 5-10"
                          value={volunteerForm.hoursPerWeek ?? ""}
                          onChange={(e) =>
                            updateVolunteer({ hoursPerWeek: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Your preferred Days for Volunteering? *</Label>
                        <Select
                          value={volunteerForm.preferredDays}
                          onValueChange={(v) =>
                            updateVolunteer({ preferredDays: v })
                          }
                          required
                        >
                          <SelectTrigger
                            id="vol-preferredDays"
                            className="w-full"
                          >
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Weekdays (Mon-Fri)">
                              Weekdays (Mon-Fri)
                            </SelectItem>
                            <SelectItem value="Weekends (Sat-Sun)">
                              Weekends (Sat-Sun)
                            </SelectItem>
                            <SelectItem value="Any day works fine">
                              Any day works fine
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Your preferred Timings for Volunteering? *
                        </Label>
                        <Select
                          value={volunteerForm.preferredTimings}
                          onValueChange={(v) =>
                            updateVolunteer({ preferredTimings: v })
                          }
                          required
                        >
                          <SelectTrigger
                            id="vol-preferredTimings"
                            className="w-full"
                          >
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Morning (9 am - 12 pm)">
                              Morning (9 am - 12 pm)
                            </SelectItem>
                            <SelectItem value="Afternoon (12 pm - 4 pm)">
                              Afternoon (12 pm - 4 pm)
                            </SelectItem>
                            <SelectItem value="Evening (4 pm - 8 pm)">
                              Evening (4 pm - 8 pm)
                            </SelectItem>
                            <SelectItem value="Any time works fine">
                              Any time works fine
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vol-identityNumber">
                          Your identity number (please mention document type as
                          well)
                        </Label>
                        <Input
                          id="vol-identityNumber"
                          placeholder="e.g. Aadhaar: XXXX XXXX XXXX"
                          value={volunteerForm.identityNumber ?? ""}
                          onChange={(e) =>
                            updateVolunteer({ identityNumber: e.target.value })
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="text-lg px-8 py-6"
                        disabled={volunteerMutation.isPending}
                      >
                        {volunteerMutation.isPending ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Heart className="mr-2 h-4 w-4" />
                            Submit Registration
                          </>
                        )}
                      </Button>
                    </form>
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
                  <p>
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
                  <p>
                    <strong className="text-foreground">Volunteer:</strong>{" "}
                    <a
                      href="mailto:volunteer@connect2roots.org"
                      className="text-c2r-primary hover:underline"
                    >
                      volunteer@connect2roots.org
                    </a>
                  </p>
                  <p>
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
            <p className="mb-8 text-lg text-muted-foreground">
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
                <SiLinkedin className="h-8 w-8" />
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
