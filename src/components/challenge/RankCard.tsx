import { Crown, Medal, TrendingUp, Trophy, Users } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { student, useStats } from "@/lib/challenge-store";
import { cn } from "@/lib/utils";

const TOTAL_LEARNERS = 50000;
const BASE_RANK = 247;

const LEADERBOARD = [
  { name: "Ishita Rao", college: "BITS Pilani", days: 58, rank: 1 },
  { name: "Daniel Osei", college: "NIT Trichy", days: 55, rank: 2 },
  { name: "Mei Tanaka", college: "IIT Bombay", days: 54, rank: 3 },
];

const RANK_BADGES: Record<number, { bg: string; text: string; label: string }> = {
  1: { bg: "bg-amber-500/20 text-amber-500 border-amber-500/30", text: "🥇", label: "Gold" },
  2: { bg: "bg-slate-400/20 text-slate-300 border-slate-400/30", text: "🥈", label: "Silver" },
  3: { bg: "bg-amber-700/20 text-amber-600 border-amber-700/30", text: "🥉", label: "Bronze" },
};

export function RankCard() {
  const stats = useStats();
  const rank = Math.max(1, BASE_RANK - stats.completedCount * 7 - stats.streak * 3);
  
  const rawPercentile = (1 - rank / TOTAL_LEARNERS) * 100;
  const percentile = Math.min(100, Math.max(0.1, rawPercentile)).toFixed(1);
  const weeklyClimb = 12 + stats.completedCount * 2 + stats.streak;

  return (
    <div className="space-y-5">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl border border-primary/40 bg-primary/10 p-5 shadow-xs">
        <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-primary/10 blur-2xl" />
        <div className="relative flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <Crown className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-lg font-bold leading-snug text-foreground">
              You are ranked{" "}
              <span className="font-mono text-primary">#{rank.toLocaleString()}</span> among{" "}
              {TOTAL_LEARNERS.toLocaleString()} learners
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Top {percentile}% globally · {student.college} cohort
            </p>
          </div>
        </div>
        <Progress value={Number(percentile)} className="relative mt-4 h-1.5" />
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Global rank", value: `#${rank.toLocaleString()}`, icon: Medal },
          { label: "Weekly climb", value: `+${weeklyClimb}`, icon: TrendingUp },
          { label: "Cohort size", value: "50k", icon: Users },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-secondary/30 p-3 transition-colors hover:border-border/80 hover:bg-secondary/50"
          >
            <s.icon className="mb-2 size-4 text-primary" />
            <p className="font-mono text-base font-semibold text-foreground">{s.value}</p>
            <p className="text-[11px] leading-tight text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <ol className="space-y-2" aria-label="Global Leaderboard">
        {LEADERBOARD.map((l) => {
          const badge = RANK_BADGES[l.rank];
          return (
            <li
              key={l.rank}
              className="flex items-center gap-3 rounded-xl border border-border/80 bg-secondary/25 px-3 py-2 transition-all hover:bg-secondary/40"
            >
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-lg border font-mono text-xs font-semibold",
                  badge?.bg ?? "border-border bg-secondary text-muted-foreground"
                )}
                title={badge?.label ? `${badge.label} position` : `Rank ${l.rank}`}
              >
                {l.rank}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{l.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{l.college}</p>
              </div>
              <span className="shrink-0 font-mono text-xs font-medium text-primary">
                {l.days}d
              </span>
            </li>
          );
        })}

        {/* Current User Highlighting */}
        <li className="flex items-center gap-3 rounded-xl border border-primary/60 bg-primary/10 px-3 py-2 shadow-2xs">
          <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary font-mono text-[10px] font-bold text-primary-foreground">
            {rank > 999 ? `${Math.floor(rank / 1000)}k` : rank}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-semibold text-foreground">{student.name}</p>
              <span className="rounded-md bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                YOU
              </span>
            </div>
            <p className="truncate text-[11px] text-muted-foreground">{student.college}</p>
          </div>
          <span className="shrink-0 font-mono text-xs font-bold text-primary">
            {stats.completedCount}d
          </span>
        </li>
      </ol>
    </div>
  );
}