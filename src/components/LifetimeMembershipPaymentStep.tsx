import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, CreditCard, ArrowRight } from "lucide-react";
import { MdAllInclusive, MdVerifiedUser } from "react-icons/md";
import {
  LIFETIME_MEMBERSHIP_AMOUNT,
  membershipNote,
} from "@/data/lifetimeMembershipBenefits";
import { LIFETIME_MEMBERSHIP_AMOUNT_INR } from "@/data/leadershipCircleMembership";

type Props = {
  fullName: string;
  email: string;
  onPay: () => void;
  isPaying: boolean;
  onBack?: () => void;
};

export function LifetimeMembershipPaymentStep({
  fullName,
  email,
  onPay,
  isPaying,
  onBack,
}: Props) {
  return (
    <Card
      id="membership-payment"
      className="scroll-mt-24 overflow-hidden border-c2r-primary/25 shadow-lg"
    >
      <div className="c2r-gradient-accent px-6 py-8 text-center text-white md:px-10">
        <MdAllInclusive className="mx-auto mb-3 h-9 w-9 opacity-90" />
        <p className="text-xs font-medium uppercase tracking-wider text-white/80">
          Leadership Circle — Lifetime Membership
        </p>
        <p className="mt-1 text-4xl font-bold tracking-tight">
          {LIFETIME_MEMBERSHIP_AMOUNT}
        </p>
        <p className="mt-2 text-sm text-white/90">One-time contribution</p>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <CreditCard className="h-5 w-5 text-c2r-accent" />
          Complete Your Membership Payment
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          Your application has been received. Please complete the one-time
          membership contribution to activate your Leadership Circle membership.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border border-border/60 bg-muted/40 p-4 text-sm">
          <p>
            <span className="font-medium text-foreground">Applicant:</span>{" "}
            {fullName}
          </p>
          <p className="mt-1">
            <span className="font-medium text-foreground">Email:</span>{" "}
            {email}
          </p>
          <p className="mt-1">
            <span className="font-medium text-foreground">Amount:</span>{" "}
            {LIFETIME_MEMBERSHIP_AMOUNT} (₹
            {LIFETIME_MEMBERSHIP_AMOUNT_INR.toLocaleString("en-IN")})
          </p>
        </div>

        <div className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-muted/40 p-4">
          <MdVerifiedUser className="mt-0.5 h-4 w-4 shrink-0 text-c2r-primary" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Connect2Roots Foundation is a registered Section 8 nonprofit. Your
            contribution supports youth empowerment, mentorship, and community
            development programs.
          </p>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          {membershipNote}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {onBack && (
            <Button
              type="button"
              variant="outline"
              className="sm:flex-1"
              onClick={onBack}
              disabled={isPaying}
            >
              Edit Application
            </Button>
          )}
          <Button
            type="button"
            size="lg"
            className="sm:flex-[2] text-lg"
            onClick={onPay}
            disabled={isPaying}
          >
            {isPaying ? (
              "Redirecting to payment..."
            ) : (
              <>
                <Shield className="mr-2 h-5 w-5" />
                Proceed to Secure Payment
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
