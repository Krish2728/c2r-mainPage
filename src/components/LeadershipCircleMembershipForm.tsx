import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MultiSelectDropdown } from "@/components/MultiSelectDropdown";
import { ArrowRight } from "lucide-react";
import type { LifetimeMembershipFormData } from "@/hooks/useQueries";
import {
  INDUSTRY_OPTIONS,
  EXPERIENCE_OPTIONS,
  NATIVE_REGION_OPTIONS,
  CONTRIBUTION_OPTIONS,
  INTEREST_OPTIONS,
  ADDITIONAL_SUPPORT_OPTIONS,
} from "@/data/leadershipCircleMembership";

export const INITIAL_LIFETIME_MEMBERSHIP_FORM: LifetimeMembershipFormData = {
  fullName: "",
  designation: "",
  organization: "",
  mobileNo: "",
  email: "",
  linkedinProfile: "",
  currentCityState: "",
  industryExpertise: [],
  industryOther: "",
  yearsOfExperience: "",
  nativeVillageTown: "",
  districtState: "",
  supportNativeRegion: "",
  contributionAreas: [],
  contributionOther: "",
  areasOfInterest: [],
  interestOther: "",
  additionalSupport: [],
  professionalBio: "",
  declarationAccepted: false,
  consentContact: false,
};

type Props = {
  idPrefix?: string;
  form: LifetimeMembershipFormData;
  onChange: (updates: Partial<LifetimeMembershipFormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  submitLabel?: string;
};

function SectionHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="border-b border-border/60 pb-3">
      <h3 className="text-lg font-semibold text-foreground">
        {number}. {title}
      </h3>
    </div>
  );
}

function CheckboxField({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/50 px-3 py-2.5 hover:bg-muted/40"
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
        className="mt-0.5"
      />
      <span className="text-sm leading-snug text-foreground">{label}</span>
    </label>
  );
}

export function LeadershipCircleMembershipForm({
  idPrefix = "lc",
  form,
  onChange,
  onSubmit,
  isPending,
  submitLabel = "Continue to Payment",
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <SectionHeading number={1} title="Personal Information" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`${idPrefix}-fullName`}>Full Name *</Label>
          <Input
            id={`${idPrefix}-fullName`}
            value={form.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-designation`}>Current Designation *</Label>
          <Input
            id={`${idPrefix}-designation`}
            value={form.designation}
            onChange={(e) => onChange({ designation: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-organization`}>Organization *</Label>
          <Input
            id={`${idPrefix}-organization`}
            value={form.organization}
            onChange={(e) => onChange({ organization: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-mobileNo`}>Mobile Number *</Label>
          <Input
            id={`${idPrefix}-mobileNo`}
            type="tel"
            value={form.mobileNo}
            onChange={(e) => onChange({ mobileNo: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-email`}>Email Address *</Label>
          <Input
            id={`${idPrefix}-email`}
            type="email"
            value={form.email}
            onChange={(e) => onChange({ email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-linkedin`}>LinkedIn Profile *</Label>
          <Input
            id={`${idPrefix}-linkedin`}
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={form.linkedinProfile}
            onChange={(e) => onChange({ linkedinProfile: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`${idPrefix}-city`}>Current City & State *</Label>
          <Input
            id={`${idPrefix}-city`}
            value={form.currentCityState}
            onChange={(e) => onChange({ currentCityState: e.target.value })}
            required
          />
        </div>
      </div>

      <SectionHeading number={2} title="Professional Profile" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-industry`}>
            Industry / Domain Expertise (select all applicable) *
          </Label>
          <MultiSelectDropdown
            id={`${idPrefix}-industry`}
            options={INDUSTRY_OPTIONS}
            value={form.industryExpertise}
            onChange={(industryExpertise) => onChange({ industryExpertise })}
            placeholder="Select industry / domain expertise..."
            searchPlaceholder="Search industries..."
            required={!form.industryOther.trim()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-ind-other`}>Other</Label>
          <Input
            id={`${idPrefix}-ind-other`}
            value={form.industryOther}
            onChange={(e) => onChange({ industryOther: e.target.value })}
            placeholder="Specify other industry / domain"
          />
        </div>
        <div className="space-y-2">
          <Label>Years of Professional Experience *</Label>
          <RadioGroup
            value={form.yearsOfExperience}
            onValueChange={(v) => onChange({ yearsOfExperience: v })}
            className="grid gap-2 sm:grid-cols-2"
          >
            {EXPERIENCE_OPTIONS.map((opt) => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border/50 px-3 py-2.5 hover:bg-muted/40"
              >
                <RadioGroupItem value={opt} id={`${idPrefix}-exp-${opt}`} />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      <SectionHeading number={3} title="Your Connection to Community" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-native`}>Native Village/Town *</Label>
          <Input
            id={`${idPrefix}-native`}
            value={form.nativeVillageTown}
            onChange={(e) => onChange({ nativeVillageTown: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-district`}>District & State *</Label>
          <Input
            id={`${idPrefix}-district`}
            value={form.districtState}
            onChange={(e) => onChange({ districtState: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label>
            Would you be interested in supporting initiatives in your native
            region? *
          </Label>
          <RadioGroup
            value={form.supportNativeRegion}
            onValueChange={(v) => onChange({ supportNativeRegion: v })}
            className="flex flex-wrap gap-4"
          >
            {NATIVE_REGION_OPTIONS.map((opt) => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2"
              >
                <RadioGroupItem value={opt} id={`${idPrefix}-native-${opt}`} />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      <SectionHeading number={4} title="How Would You Like to Contribute?" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-contribution`}>Select all that apply *</Label>
          <MultiSelectDropdown
            id={`${idPrefix}-contribution`}
            options={CONTRIBUTION_OPTIONS}
            value={form.contributionAreas}
            onChange={(contributionAreas) => onChange({ contributionAreas })}
            placeholder="Select contribution areas..."
            searchPlaceholder="Search contribution options..."
            required={!form.contributionOther.trim()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-contrib-other`}>Other</Label>
          <Input
            id={`${idPrefix}-contrib-other`}
            value={form.contributionOther}
            onChange={(e) => onChange({ contributionOther: e.target.value })}
          />
        </div>
      </div>

      <SectionHeading number={5} title="Areas of Interest" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-interests`}>
            Which causes are closest to your heart? *
          </Label>
          <MultiSelectDropdown
            id={`${idPrefix}-interests`}
            options={INTEREST_OPTIONS}
            value={form.areasOfInterest}
            onChange={(areasOfInterest) => onChange({ areasOfInterest })}
            placeholder="Select areas of interest..."
            searchPlaceholder="Search causes..."
            required={!form.interestOther.trim()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-int-other`}>Other</Label>
          <Input
            id={`${idPrefix}-int-other`}
            value={form.interestOther}
            onChange={(e) => onChange({ interestOther: e.target.value })}
          />
        </div>
      </div>

      <SectionHeading number={6} title="Additional Support" />
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-additional`}>Are you willing to: *</Label>
        <MultiSelectDropdown
          id={`${idPrefix}-additional`}
          options={ADDITIONAL_SUPPORT_OPTIONS}
          value={form.additionalSupport}
          onChange={(additionalSupport) => onChange({ additionalSupport })}
          placeholder="Select ways you can support..."
          searchPlaceholder="Search support options..."
          required
        />
      </div>

      <SectionHeading number={7} title="Brief Profile" />
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-bio`}>
          Please share a short professional bio (40–50 words) *
        </Label>
        <Textarea
          id={`${idPrefix}-bio`}
          rows={4}
          value={form.professionalBio}
          onChange={(e) => onChange({ professionalBio: e.target.value })}
          required
          placeholder="Share your professional journey, expertise, and what drives your commitment to community impact..."
        />
        <p className="text-xs text-muted-foreground">
          {form.professionalBio.trim().split(/\s+/).filter(Boolean).length}{" "}
          words · aim for 40–50
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-border/60 bg-muted/30 p-5">
        <h3 className="font-semibold text-foreground">Declaration</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I wish to become a member of the Connect2Roots Leadership Circle and
          support the Foundation&apos;s mission of empowering youth,
          strengthening communities, and enabling sustainable development.
        </p>
        <CheckboxField
          id={`${idPrefix}-declaration`}
          label="I confirm the above declaration and wish to proceed with my Leadership Circle membership application."
          checked={form.declarationAccepted}
          onCheckedChange={(on) => onChange({ declarationAccepted: on })}
        />
        <CheckboxField
          id={`${idPrefix}-consent`}
          label="I agree to be contacted by Connect2Roots Foundation regarding its programs and initiatives."
          checked={form.consentContact}
          onCheckedChange={(on) => onChange({ consentContact: on })}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg sm:w-auto"
        disabled={isPending}
      >
        {isPending ? (
          "Submitting..."
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
