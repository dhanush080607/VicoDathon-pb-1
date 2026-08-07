import { Link } from "@tanstack/react-router";
import { Check, Lock } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { challenge, useChallenge, useStats } from "@/lib/challenge-store";
import { cn } from "@/lib/utils";

export function ProgressTracker() {
  const { hydrated } = useChallenge();
  const stats = useStats();
  const currentDay = challenge.currentDay;
  const completed = new Set(stats.completedDays);

  if (!hydrated) {
    return (
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-10">
        {Array.from({ length: challenge.totalDays || 60 }, (_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-lg bg-secondary/80"
          />
        ))}
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={150}>
      <div>
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-10">
          {Array.from({ length: challenge.totalDays }, (_, i) => i + 1).map(
            (day) => {
              const isCompleted = completed.has(day);
              const isCurrent = day === currentDay;
              const isLocked = day > currentDay;
              const isMissed = day < currentDay && !isCompleted;

              const statusText = isCompleted
                ? "Completed"
                : isCurrent
                ? "Today's Brief"
                : isMissed
                ? "Missed"
                : "Locked";

              if (isLocked) {
                return (
                  <Tooltip key={day}>
                    <TooltipTrigger asChild>
                      <div
                        tabIndex={0}
                        aria-label={`Day ${day} locked`}
                        className="grid aspect-square cursor-not-allowed place-items-center rounded-lg border border-border/60 bg-secondary/40 font-mono text-[11px] text-muted-foreground/50 transition-colors hover:bg-secondary/60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Lock className="size-3" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs font-mono">
                      Day {day} · Locked
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return (
                <Tooltip key={day}>
                  <TooltipTrigger asChild>
                    <Link
                      to="/day/$dayId"
                      params={{ dayId: String(day) }}
                      aria-label={`Day ${day} ${statusText}`}
                      className={cn(
                        "grid aspect-square place-items-center rounded-lg border font-mono text-[11px] font-medium transition-all duration-150 hover:scale-105 hover:z-10 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary",
                        isCompleted &&
                          "border-primary bg-primary text-primary-foreground shadow-xs shadow-primary/20",
                        isCurrent &&
                          !isCompleted &&
                          "border-primary bg-primary/15 text-primary animate-pulse-ring font-bold",
                        isMissed &&
                          "border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/20"
                      )}
                    >
                      {isCompleted ? <Check className="size-3.5 stroke-[2.5]" /> : day}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs font-mono">
                    Day {day} · {statusText}
                  </TooltipContent>
                </Tooltip>
              );
            }
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-3 rounded-xs border border-primary bg-primary" />
            completed
          </span>
          <span className="flex items-center gap-2">
            <span className="size-3 rounded-xs border border-primary/50 bg-primary/20" />
            today
          </span>
          <span className="flex items-center gap-2">
            <span className="size-3 rounded-xs border border-destructive/40 bg-destructive/15" />
            missed
          </span>
          <span className="flex items-center gap-2">
            <span className="size-3 rounded-xs border border-border/60 bg-secondary/50" />
            locked
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
}