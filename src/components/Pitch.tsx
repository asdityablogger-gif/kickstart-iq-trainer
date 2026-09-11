import type { Marker } from "@/data/formations";

type Props = {
  markers: Marker[];
  className?: string;
};

export function Pitch({ markers, className }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl pitch-surface ${className ?? ""}`}
      style={{ aspectRatio: "3 / 4" }}
    >
      <svg
        viewBox="0 0 100 133"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="oklch(0.98 0 0 / 0.45)" strokeWidth="0.5" fill="none">
          <rect x="3" y="3" width="94" height="127" rx="1" />
          <line x1="3" y1="66.5" x2="97" y2="66.5" />
          <circle cx="50" cy="66.5" r="13" />
          <rect x="25" y="3" width="50" height="20" />
          <rect x="37" y="3" width="26" height="8" />
          <rect x="25" y="110" width="50" height="20" />
          <rect x="37" y="122" width="26" height="8" />
        </g>
      </svg>

      {markers.map((m, i) => {
        if (m.team === "ball") {
          return (
            <span
              key={i}
              className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-black/40"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            />
          );
        }
        const away = m.team === "away";
        return (
          <span
            key={i}
            className={`marker absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[9px] font-bold shadow-md ${
              away ? "marker-away" : "marker-home"
            }`}
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              animationDelay: `${i * 40}ms`,
            }}
          >
            {m.label}
          </span>
        );
      })}
    </div>
  );
}
