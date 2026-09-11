import { Link } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "Home", icon: "⚽" },
  { to: "/learn", label: "Learn", icon: "📘" },
  { to: "/board", label: "Board", icon: "▦" },
  { to: "/quiz", label: "Quiz", icon: "❓" },
  { to: "/progress", label: "Progress", icon: "📈" },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-card/95 backdrop-blur">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-1 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((t) => (
          <li key={t.to} className="flex-1">
            <Link
              to={t.to}
              activeOptions={{ exact: t.to === "/" }}
              className="flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[11px] font-medium text-muted-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              <span className="text-lg leading-none">{t.icon}</span>
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
