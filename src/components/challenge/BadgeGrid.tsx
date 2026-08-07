import {
  CheckCircle2,
  Flame,
  GitCommitHorizontal,
  Hammer,
  Lock,
  Megaphone,
  NotebookPen,
  Rocket,
  Trophy,
} from "lucide-react";

import { AnimatedNumber } from "@/components/challenge/AnimatedNumber";
import { Progress } from "@/components/ui/progress";
import { achievements, useStats } from "@/lib/challenge-store";
import { cn } from "@/lib/utils";

const ICONS = { GitCommitHorizontal, Flame, Hammer, Megaphone, NotebookPen, Rocket } as const;

export function BadgeGrid() {
  const stats = useStats();

  return (
    <div className="grid gap-3.5 sm:grid-cols-2">
      {achievements.map((badge) => {
        const p = stats.badgeProgress.find((b) => b.id === badge.id);
        const value = p?.value ?? 0;
        const unlocked = p?.unlocked ?? false;
        const Icon = ICONS[badge.icon as keyof typeof ICONS] ?? Trophy;
        const progressPercentage = Math.min(100, Math.round((value / badge.target) * 100));

        return (
          <div
            key={badge.id}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-xl border p-4 transition-all duration-200 hover:shadow-md",
              unlocked
                ? "border-primary/40 bg-primary/10 hover:border-primary/60 hover:bg-primary/15"
                : "border-border bg-secondary/30 hover:border-border/80 hover:bg-secondary/50",
            )}
          >
            {/* Top row: Icon + Details */}
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "relative grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:scale-105",
                  unlocked
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 animate-pop-in"
                    : "bg-secondary/80 text-muted-foreground border border-border/50",
                )}
              >
                <Icon className="size-5" />
                {!unlocked && (
                  <span className="absolute -bottom-1 -right-1 grid size-4.5 place-items-center rounded-full bg-background border border-border text-muted-foreground shadow-sm">
                    <Lock className="size-2.5" />
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold tracking-tight">{badge.name}</p>
                  {unlocked && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
                      <CheckCircle2 className="size-3" />
                      unlocked
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
              </div>
            </div>

            {/* Bottom Progress Bar for locked items */}
            {!unlocked && (
              <div className="mt-3.5 pt-1">
                <div className="mb-1 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span>
                    <AnimatedNumber value={value} /> / {badge.target}
                  </span>
                  <span className="font-semibold text-foreground/80">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-1.5" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}