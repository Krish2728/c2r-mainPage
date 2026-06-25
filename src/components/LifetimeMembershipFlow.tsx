import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import {
  LeadershipCircleMembershipForm,
  INITIAL_LIFETIME_MEMBERSHIP_FORM,
} from "@/components/LeadershipCircleMembershipForm";
import { LifetimeMembershipPaymentStep } from "@/components/LifetimeMembershipPaymentStep";
import {
  useLifetimeMembershipForm,
  useCreateDonation,
  type LifetimeMembershipFormData,
} from "@/hooks/useQueries";
import { LIFETIME_MEMBERSHIP_AMOUNT_INR } from "@/data/leadershipCircleMembership";

function validateMembershipForm(form: LifetimeMembershipFormData): string | null {
  if (!form.industryExpertise.length && !form.industryOther.trim()) {
    return "Please select at least one industry / domain expertise.";
  }
  if (!form.yearsOfExperience) {
    return "Please select your years of professional experience.";
  }
  if (!form.supportNativeRegion) {
    return "Please indicate your interest in supporting initiatives in your native region.";
  }
  if (!form.contributionAreas.length && !form.contributionOther.trim()) {
    return "Please select at least one way you would like to contribute.";
  }
  if (!form.areasOfInterest.length && !form.interestOther.trim()) {
    return "Please select at least one area of interest.";
  }
  if (!form.additionalSupport.length) {
    return "Please select at least one additional support option.";
  }
  if (!form.professionalBio.trim()) {
    return "Please provide a short professional bio.";
  }
  if (!form.declarationAccepted) {
    return "Please confirm the membership declaration.";
  }
  if (!form.consentContact) {
    return "Please agree to be contacted by Connect2Roots Foundation.";
  }
  return null;
}

type Props = {
  idPrefix?: string;
  showCard?: boolean;
  intro?: React.ReactNode;
};

export function LifetimeMembershipFlow({
  idPrefix = "lc",
  showCard = true,
  intro,
}: Props) {
  const [form, setForm] = useState<LifetimeMembershipFormData>(
    INITIAL_LIFETIME_MEMBERSHIP_FORM,
  );
  const [step, setStep] = useState<"form" | "payment">("form");
  const membershipMutation = useLifetimeMembershipForm();
  const createDonation = useCreateDonation();

  const updateForm = (updates: Partial<LifetimeMembershipFormData>) =>
    setForm((prev) => ({ ...prev, ...updates }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateMembershipForm(form);
    if (error) {
      toast.error(error);
      return;
    }
    try {
      await membershipMutation.mutateAsync(form);
      toast.success("Application submitted! Please complete your payment below.");
      setStep("payment");
      setTimeout(() => {
        document
          .getElementById("membership-payment")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const handlePayment = async () => {
    try {
      const amountInPaise = BigInt(LIFETIME_MEMBERSHIP_AMOUNT_INR * 100);
      const result = await createDonation.mutateAsync({
        amount: amountInPaise,
        donorName: form.fullName,
        donorEmail: form.email,
      });
      window.location.href = result.checkoutUrl;
    } catch (err: unknown) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Failed to start payment. Please try again.",
      );
    }
  };

  const formContent =
    step === "form" ? (
      <>
        {intro}
        <LeadershipCircleMembershipForm
          idPrefix={idPrefix}
          form={form}
          onChange={updateForm}
          onSubmit={handleSubmit}
          isPending={membershipMutation.isPending}
        />
      </>
    ) : (
      <LifetimeMembershipPaymentStep
        fullName={form.fullName}
        email={form.email}
        onPay={handlePayment}
        isPaying={createDonation.isPending}
        onBack={() => setStep("form")}
      />
    );

  if (!showCard) return <div>{formContent}</div>;

  return (
    <Card className="overflow-hidden border border-border/60 shadow-lg">
      <div className="border-b border-border/60 bg-gradient-to-r from-c2r-primary/5 via-background to-c2r-secondary/5 px-6 py-5 md:px-8">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Heart className="h-5 w-5 text-c2r-accent" />
          Leadership Circle – Lifetime Membership
        </CardTitle>
        <CardDescription className="mt-2 text-base leading-relaxed">
          Connect2Roots Foundation — complete the form, then proceed to payment.
        </CardDescription>
      </div>
      <CardContent className="pt-8">{formContent}</CardContent>
    </Card>
  );
}

export { validateMembershipForm };
