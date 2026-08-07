import { useEffect, useMemo, useState } from "react";

const COLORS = [
  "var(--primary)",
  "var(--accent)",
  "var(--warning)",
  "var(--success)",
  "#ff71ce",
  "#01cdfe",
  "#05ffa1",
  "#b967ff",
];

const SHAPES = ["square", "circle", "strip"] as const;

export function Confetti({
  show,
  durationMs = 4000,
  pieceCount = 80,
}: {
  show: boolean;
  durationMs?: number;
  pieceCount?: number;
}) {
  const [active, setActive] = useState(show);

  useEffect(() => {
    if (show) {
      setActive(true);
      const timer = setTimeout(() => setActive(false), durationMs);
      return () => clearTimeout(timer);
    } else {
      setActive(false);
    }
  }, [show, durationMs]);

  const pieces = useMemo(
    () =>
      Array.from({ length: pieceCount }, (_, i) => {
        const shape = SHAPES[i % SHAPES.length];
        const size = 6 + Math.random() * 8;
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 1.5,
          color: COLORS[i % COLORS.length],
          size,
          shape,
          drift: (Math.random() - 0.5) * 120, // horizontal drift in px
          spin: Math.random() * 720 - 360, // 3D rotation angle
        };
      }),
    [pieceCount],
  );

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-5 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.shape === "strip" ? p.size * 2 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "strip" ? "2px" : "1px",
            transform: `translateX(0px) rotate(0deg)`,
            animation: `confetti-fall ${p.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay}s forwards`,
            //@ts-ignore - custom CSS variables for keyframe animations
            "--confetti-drift": `${p.drift}px`,
            "--confetti-spin": `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}