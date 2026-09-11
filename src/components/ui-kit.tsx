import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Screen({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="page-enter mx-auto min-h-screen w-full max-w-md px-4 pb-28 pt-6">
      {title && (
        <header className="mb-5">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border/70 bg-card p-4 shadow-sm ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card px-3 py-4 text-center shadow-sm">
      <div className="text-xl font-extrabold text-primary">{value}</div>
      <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  disabled?: boolean;
};

const variants = {
  primary: "bg-primary text-primary-foreground active:brightness-95",
  secondary: "bg-secondary text-secondary-foreground active:brightness-95",
  ghost: "border border-border bg-card text-foreground active:bg-muted",
  danger: "bg-destructive text-destructive-foreground active:brightness-95",
};

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-4 text-sm font-bold transition disabled:opacity-50 ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  children,
  variant = "primary",
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  params?: Record<string, string>;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      params={params as never}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-4 text-sm font-bold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-primary transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
      />
    </div>
  );
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
    >
      ← {label}
    </Link>
  );
}

export function EmptyState({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/60 px-4 py-10 text-center">
      <div className="text-3xl">{icon}</div>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
