import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, CheckCircle2, Video } from "lucide-react";
import { getImageUrl } from "@/lib/images";

const API_BASE = (
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  ""
)
  .trim()
  .replace(/\/$/, "");
const COURSE_ACCESS_KEY = "c2r_free_course_access";

export default function FreeCoursesAuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Prefer hash (#signup / #signin) so direct links work on static hosts that don't rewrite URLs with query strings
    const hash = window.location.hash.replace(/^#/, "");
    if (hash === "signin" || hash === "signup") {
      setMode(hash);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const m = params.get("mode");
    if (m === "signin" || m === "signup") setMode(m);
  }, []);

  const grantAccess = () => {
    localStorage.setItem(COURSE_ACCESS_KEY, "true");
    navigate({ to: "/resources" });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!API_BASE) {
      setError("Sign up is not available right now. Please try again later.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/course-signups`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          age: age.trim() ? parseInt(age, 10) : null,
          mobile_number: mobile.trim() || null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.message || "Sign up failed. Please try again.");
        return;
      }
      grantAccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!API_BASE) {
      setError("Sign in is not available right now. Please try again later.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/api/course-signups/check?email=${encodeURIComponent(email.trim())}`,
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.message || "Unable to verify. Please try again.");
        return;
      }
      if (data.exists) {
        grantAccess();
      } else {
        setError("No account found with this email. Please sign up first.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const signUpValid =
    mode === "signup" ? name.trim() && emailValid : emailValid;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left panel - visual (main page style gradient) */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[50%] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getImageUrl("/assets/generated/mentorship-workshop.dim_800x600.jpg")})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-black/80" />
        <div className="relative z-10 flex flex-col justify-between p-10 text-white w-full">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">Connect2Roots</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Free courses & resources
            </h2>
            <p className="text-white/90 text-sm max-w-sm">
              Sign up or sign in to access our learning videos and career
              resources from Connect2Roots Academy.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90 mb-2">
              Find us on
            </p>
            <a
              href="https://www.youtube.com/@connect2rootsacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-white/90 font-medium underline underline-offset-2"
            >
              <Video className="h-5 w-5" />
              YouTube – Connect2Roots Academy
            </a>
          </div>
        </div>
      </div>

      {/* Right panel - form (main page colors) */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 bg-muted/30 min-h-screen">
        <div className="w-full max-w-md mx-auto">
          <h1 className="heading-descender-safe text-3xl font-bold text-foreground mb-1">
            Welcome
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Sign up or log in to access free courses
          </p>

          <div className="flex rounded-xl bg-background border border-border p-1.5 shadow-sm mb-8">
            <button
              type="button"
              onClick={() => {
                setMode("signup");
                setError("");
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-colors ${
                mode === "signup"
                  ? "bg-gradient-to-r from-c2r-primary to-c2r-secondary text-white shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              Sign up
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("signin");
                setError("");
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-colors ${
                mode === "signin"
                  ? "bg-gradient-to-r from-c2r-primary to-c2r-secondary text-white shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <LogIn className="h-4 w-4" />
              Log in
            </button>
          </div>

          <form
            onSubmit={mode === "signup" ? handleSignUp : handleSignIn}
            className="space-y-5"
          >
            {mode === "signup" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fc-name" className="text-foreground">
                    Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="fc-name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={mode === "signup"}
                      disabled={loading}
                      className="h-11 rounded-lg border-border bg-background focus-visible:ring-c2r-primary/50"
                    />
                    {name.trim().length > 0 && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-c2r-primary" />
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fc-age" className="text-foreground">
                    Age
                  </Label>
                  <Input
                    id="fc-age"
                    type="number"
                    min={1}
                    max={120}
                    placeholder="e.g. 25"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    disabled={loading}
                    className="h-11 rounded-lg border-border bg-background focus-visible:ring-c2r-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fc-mobile" className="text-foreground">
                    Mobile Number
                  </Label>
                  <Input
                    id="fc-mobile"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    disabled={loading}
                    className="h-11 rounded-lg border-border bg-background focus-visible:ring-c2r-primary/50"
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="fc-email" className="text-foreground">
                Email (Authentication)
              </Label>
              <div className="relative">
                <Input
                  id="fc-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="h-11 rounded-lg border-border bg-background focus-visible:ring-c2r-primary/50"
                />
                {emailValid && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-c2r-primary" />
                )}
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading || !signUpValid}
              className="w-full h-12 rounded-lg bg-gradient-to-r from-c2r-primary to-c2r-secondary hover:opacity-90 text-white font-semibold text-base shadow-md"
            >
              {loading
                ? "Please wait…"
                : mode === "signup"
                  ? "Sign up"
                  : "Log in"}
            </Button>
          </form>

          <p className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate({ to: "/resources" })}
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
            >
              ← Back to Resources
            </button>
          </p>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm font-semibold text-foreground mb-2">
              Find us on
            </p>
            <a
              href="https://www.youtube.com/@connect2rootsacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-c2r-primary hover:underline font-medium text-sm"
            >
              <Video className="h-4 w-4" />
              YouTube – Connect2Roots Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
