import {
  ArrowLeft,
  ArrowRight,
  Binary,
  Brain,
  CheckCircle2,
  Layers,
  Loader2,
  Rocket,
  Smartphone,
  Sparkle,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { challenge, student, useChallenge } from "@/lib/challenge-store";
import { cn } from "@/lib/utils";

const ICONS = { Layers, Brain, Binary, Smartphone } as const;

const GOAL_PRESETS = [
  "Ship 60 public builds and land a summer internship",
  "Become interview-ready with 60 days of DSA proof",
  "Launch my first AI product before campus placements",
];

export function Onboarding() {
  const { hydrated, state, completeOnboarding } = useChallenge();
  const [step, setStep] = useState(0);
  const [track, setTrack] = useState<string | null>(null);
  const [goal, setGoal] = useState("");
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (!hydrated || state.onboarded) return;
    const t = window.setTimeout(() => setStep(1), 1900);
    return () => window.clearTimeout(t);
  }, [hydrated, state.onboarded]);

  useEffect(() => {
    if (step !== 3) return;
    setGenerating(true);
    const t = window.setTimeout(() => setGenerating(false), 1800);
    return () => window.clearTimeout(t);
  }, [step]);

  if (!hydrated || state.onboarded) return null;

  const finish = () => completeOnboarding(track ?? student.track ?? challenge.tracks[0]?.id, goal || GOAL_PRESETS[0]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-md">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 animate-grid-drift" />
      <div className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col justify-center px-5 py-10">
        {step > 0 && (
          <div className="mb-8 flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-all duration-500",
                  step >= s ? "bg-primary shadow-xs shadow-primary/30" : "bg-secondary",
                )}
              />
            ))}
          </div>
        )}

        {/* Step 0: Welcome Splash */}
        {step === 0 && (
          <div className="text-center animate-blur-in">
            <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-primary/15 text-primary shadow-lg shadow-primary/10 animate-float">
              <Sparkle className="size-9" />
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to <span className="shimmer-text">ABTalks</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
              Sixty days. One build a day. Public proof every time.
            </p>
            <div className="mx-auto mt-8 h-1.5 w-40 overflow-hidden rounded-full bg-secondary">
              <span className="block h-full w-1/3 rounded-full bg-primary animate-float" />
            </div>
          </div>
        )}

        {/* Step 1: Track Selection */}
        {step === 1 && (
          <div className="animate-blur-in">
            <p className="font-mono text-xs font-semibold text-primary tracking-wider">STEP 1 / 3</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Choose your coding track</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This shapes your daily briefs. You can switch tracks anytime.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {challenge.tracks.map((t) => {
                const Icon = ICONS[t.icon as keyof typeof ICONS] ?? Target;
                const selected = track === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTrack(t.id)}
                    aria-pressed={selected}
                    className={cn(
                      "group relative rounded-2xl border p-4 text-left transition-all duration-200 card-hover",
                      selected
                        ? "border-primary bg-primary/10 ring-2 ring-primary/20 shadow-sm"
                        : "border-border bg-secondary/30 hover:border-border/80 hover:bg-secondary/50",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-105">
                        <Icon className="size-5" />
                      </span>
                      {selected && <CheckCircle2 className="size-5 text-primary animate-pop-in shrink-0" />}
                    </div>
                    <p className="mt-3 font-semibold text-foreground">{t.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t.tagline}</p>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <Button size="lg" disabled={!track} onClick={() => setStep(2)} className="gap-2">
                Continue <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Goal Input */}
        {step === 2 && (
          <div className="animate-blur-in">
            <p className="font-mono text-xs font-semibold text-primary tracking-wider">STEP 2 / 3</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Set your 60-day goal</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              One clear objective you will read every morning.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (goal.trim()) setStep(3);
              }}
            >
              <Input
                className="mt-6 h-12 text-base px-4"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Ship 60 public builds and land an internship"
                aria-label="Your 60 day goal"
                autoFocus
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {GOAL_PRESETS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-left text-xs transition-colors",
                      goal === g
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <Button type="button" variant="ghost" size="lg" onClick={() => setStep(1)} className="gap-2">
                  <ArrowLeft className="size-4" /> Back
                </Button>
                <Button type="submit" size="lg" disabled={!goal.trim()} className="gap-2">
                  Generate my journey <ArrowRight className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Confirmation / Generation */}
        {step === 3 && (
          <div className="animate-blur-in text-center">
            <p className="font-mono text-xs font-semibold text-primary tracking-wider">STEP 3 / 3</p>
            <div className="mx-auto mt-6 grid size-20 place-items-center rounded-3xl bg-primary/15 text-primary shadow-lg shadow-primary/10 animate-float">
              {generating ? <Loader2 className="size-9 animate-spin" /> : <Rocket className="size-9 animate-pop-in" />}
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              {generating ? "Generating your journey…" : "Your journey is ready"}
            </h2>
            <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
              {[
                `${challenge.totalDays} daily briefs on the ${
                  challenge.tracks.find((t) => t.id === track)?.name ?? "Full-Stack"
                } track`,
                "Momentum scoring + streak flame tracking",
                "Achievement badges and global ranking",
              ].map((line, i) => (
                <li
                  key={line}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm animate-rise shadow-2xs"
                  style={{ animationDelay: `${i * 180}ms` }}
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span className="text-foreground/90">{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-muted-foreground truncate max-w-md mx-auto">
              goal: &quot;{goal}&quot;
            </p>
            <Button size="lg" className="mt-7 w-full sm:w-auto px-8 gap-2" disabled={generating} onClick={finish}>
              {generating ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Preparing dashboard...
                </>
              ) : (
                <>
                  Enter ABTalks <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </div>
        )}

        {step > 0 && step < 3 && (
          <button
            onClick={finish}
            className="mx-auto mt-8 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground underline-offset-4 hover:underline"
          >
            skip onboarding
          </button>
        )}
      </div>
    </div>
  );
}