import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart } from "lucide-react";
import type { VolunteerFormData } from "@/hooks/useQueries";

export const INITIAL_VOLUNTEER_FORM: VolunteerFormData = {
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

type VolunteerRegistrationFormProps = {
  idPrefix?: string;
  form: VolunteerFormData;
  onChange: (updates: Partial<VolunteerFormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  submitLabel?: string;
  submitIcon?: React.ReactNode;
};

export function VolunteerRegistrationForm({
  idPrefix = "vol",
  form,
  onChange,
  onSubmit,
  isPending,
  submitLabel = "Submit Registration",
  submitIcon = <Heart className="mr-2 h-4 w-4" />,
}: VolunteerRegistrationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-email`}>Email *</Label>
          <Input
            id={`${idPrefix}-email`}
            type="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={(e) => onChange({ email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-fullName`}>Full Name *</Label>
          <Input
            id={`${idPrefix}-fullName`}
            placeholder="Your full name"
            value={form.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Gender *</Label>
        <RadioGroup
          value={form.gender}
          onValueChange={(v) => onChange({ gender: v })}
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
          <Label htmlFor={`${idPrefix}-mobileNo`}>Mobile No *</Label>
          <Input
            id={`${idPrefix}-mobileNo`}
            type="tel"
            placeholder="+1 234 567 8900"
            value={form.mobileNo}
            onChange={(e) => onChange({ mobileNo: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-dateOfBirth`}>Date of Birth *</Label>
          <Input
            id={`${idPrefix}-dateOfBirth`}
            type="date"
            value={form.dateOfBirth}
            onChange={(e) => onChange({ dateOfBirth: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-currentAddress`}>Current Address *</Label>
        <Textarea
          id={`${idPrefix}-currentAddress`}
          placeholder="Your current address"
          rows={2}
          value={form.currentAddress}
          onChange={(e) => onChange({ currentAddress: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-nativeCityVillage`}>
          Native City/Village (Your roots) *
        </Label>
        <Input
          id={`${idPrefix}-nativeCityVillage`}
          placeholder="e.g. Mumbai, India"
          value={form.nativeCityVillage}
          onChange={(e) => onChange({ nativeCityVillage: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-languages`}>
          Languages you can speak? *
        </Label>
        <Input
          id={`${idPrefix}-languages`}
          placeholder="e.g. English, Hindi, Tamil"
          value={form.languages}
          onChange={(e) => onChange({ languages: e.target.value })}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-currentCompanyOrg`}>
            Your Current Company / Organisation / Educational Institution *
          </Label>
          <Input
            id={`${idPrefix}-currentCompanyOrg`}
            placeholder="Company or institution name"
            value={form.currentCompanyOrg}
            onChange={(e) => onChange({ currentCompanyOrg: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-designation`}>
            Your designation in Current Organisation (if not student)
          </Label>
          <Input
            id={`${idPrefix}-designation`}
            placeholder="Optional"
            value={form.designation ?? ""}
            onChange={(e) => onChange({ designation: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-linkedinProfile`}>
          Your LinkedIn Profile Link *
        </Label>
        <Input
          id={`${idPrefix}-linkedinProfile`}
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={form.linkedinProfile}
          onChange={(e) => onChange({ linkedinProfile: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-yearsOfExperience`}>
          Your total number of years of experience in job or business
        </Label>
        <Input
          id={`${idPrefix}-yearsOfExperience`}
          placeholder="e.g. 5"
          value={form.yearsOfExperience ?? ""}
          onChange={(e) => onChange({ yearsOfExperience: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Have you been a volunteer in the past? *</Label>
        <RadioGroup
          value={form.hasVolunteeredBefore}
          onValueChange={(v) => onChange({ hasVolunteeredBefore: v })}
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
        <Label htmlFor={`${idPrefix}-highestQualification`}>
          Your Highest Educational Qualification *
        </Label>
        <Input
          id={`${idPrefix}-highestQualification`}
          placeholder="e.g. B.Tech, MBA, PhD"
          value={form.highestQualification}
          onChange={(e) => onChange({ highestQualification: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-howCanYouContribute`}>
          How do you think you can contribute to Connect2Roots Foundation? *
        </Label>
        <Textarea
          id={`${idPrefix}-howCanYouContribute`}
          placeholder="Describe your skills and how you'd like to contribute..."
          rows={4}
          value={form.howCanYouContribute}
          onChange={(e) => onChange({ howCanYouContribute: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-preferredAreasMentoring`}>
          Please mention your preferred areas for volunteering *
        </Label>
        <Textarea
          id={`${idPrefix}-preferredAreasMentoring`}
          placeholder="e.g. Events, Teaching, Administration, Technology"
          rows={2}
          value={form.preferredAreasMentoring}
          onChange={(e) =>
            onChange({ preferredAreasMentoring: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-hoursPerWeek`}>
          Number of hours per week you are willing to contribute for
          volunteering?
        </Label>
        <Input
          id={`${idPrefix}-hoursPerWeek`}
          placeholder="e.g. 5-10"
          value={form.hoursPerWeek ?? ""}
          onChange={(e) => onChange({ hoursPerWeek: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Your preferred Days for Volunteering? *</Label>
        <Select
          value={form.preferredDays}
          onValueChange={(v) => onChange({ preferredDays: v })}
          required
        >
          <SelectTrigger id={`${idPrefix}-preferredDays`} className="w-full">
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
        <Label>Your preferred Timings for Volunteering? *</Label>
        <Select
          value={form.preferredTimings}
          onValueChange={(v) => onChange({ preferredTimings: v })}
          required
        >
          <SelectTrigger id={`${idPrefix}-preferredTimings`} className="w-full">
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
        <Label htmlFor={`${idPrefix}-identityNumber`}>
          Your identity number (please mention document type as well)
        </Label>
        <Input
          id={`${idPrefix}-identityNumber`}
          placeholder="e.g. Aadhaar: XXXX XXXX XXXX"
          value={form.identityNumber ?? ""}
          onChange={(e) => onChange({ identityNumber: e.target.value })}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="text-lg px-8 py-6"
        disabled={isPending}
      >
        {isPending ? (
          "Submitting..."
        ) : (
          <>
            {submitIcon}
            {submitLabel}
          </>
        )}
      </Button>
    </form>
  );
}
