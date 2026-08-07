import { ArrowDown, Check, Copy, ExternalLink, Github, Globe, Rocket } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export const SUBMISSION = {
  repo: "github.com/yourname/abtalks-challenge",
  live: "https://abtalks-challenge.vercel.app",
};

const STEPS = [
  {
    icon: Github,
    title: "GitHub Repository",
    body: "Push your challenge code with clean, conventional commits.",
    value: SUBMISSION.repo,
    url: `https://${SUBMISSION.repo}`,
  },
  {
    icon: Rocket,
    title: "Vercel Deployment",
    body: "Import the repo into Vercel — build runs on every push.",
    value: "vercel.com/new · framework auto-detected",
    url: "https://vercel.com/new",
  },
  {
    icon: Globe,
    title: "Live URL",
    body: "Share the deployed link as your submission proof.",
    value: SUBMISSION.live,
    url: SUBMISSION.live,
  },
];

export function ExportFlow() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      toast.error("Copy failed — select the text manually");
    }
  };

  return (
    <div className="space-y-3">
      {STEPS.map((step, i) => (
        <div key={step.title} className="relative">
          <div className="group relative flex items-start gap-3.5 rounded-xl border border-border bg-secondary/25 p-4 transition-all duration-200 hover:border-border/80 hover:bg-secondary/40 hover:shadow-sm">
            {/* Step number badge */}
            <span className="absolute -top-2.5 -left-2.5 grid size-6 place-items-center rounded-full bg-background border border-border text-[11px] font-mono font-bold text-muted-foreground shadow-xs">
              {i + 1}
            </span>

            {/* Icon container */}
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary transition-transform duration-200 group-hover:scale-105">
              <step.icon className="size-5" />
            </span>

            {/* Content area */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold tracking-tight">{step.title}</p>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{step.body}</p>

              {/* Value / Link Display */}
              <div className="mt-2 flex items-center gap-2">
                <a
                  href={step.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex max-w-full items-center gap-1.5 truncate font-mono text-[11px] font-medium text-primary hover:underline"
                >
                  <span className="truncate">{step.value}</span>
                  <ExternalLink className="size-3 shrink-0 opacity-70 transition-opacity group-hover/link:opacity-100" />
                </a>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 transition-colors hover:bg-background/80"
              aria-label={`Copy ${step.title}`}
              onClick={() => copy(step.value, i)}
            >
              {copiedIndex === i ? (
                <Check className="size-4 text-success animate-pop-in" />
              ) : (
                <Copy className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              )}
            </Button>
          </div>

          {/* Flow Connector Arrow */}
          {i < STEPS.length - 1 && (
            <div className="flex justify-center py-1.5 text-muted-foreground/60">
              <ArrowDown className="size-4 animate-float" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}