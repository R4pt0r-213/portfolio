import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  collapsible?: boolean;
}

function CardTitle({
  children,
  collapsible = false,
}: {
  children: string;
  collapsible?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="text-xl font-semibold tracking-tight text-white">
        {children}
      </h3>

      <span className="h-px flex-1 bg-gradient-to-r from-red-400/30 to-transparent" />

      {collapsible && (
        <span className="text-red-200 transition-transform duration-300 md:hidden group-open:rotate-180">
          ↓
        </span>
      )}
    </div>
  );
}

export default function Card({
  children,
  className,
  title,
  collapsible = false,
}: CardProps) {
  const cardClassName = clsx(
    `
    group
    relative
    overflow-hidden
    rounded-3xl

    border border-white/20
    bg-white/10
    backdrop-blur-xl

    shadow-[0_8px_32px_rgba(0,0,0,0.12)]

    transition-all
    duration-500

    md:hover:-translate-y-2
    md:hover:border-red-500/30
    md:hover:shadow-[0_20px_60px_rgba(220,38,38,0.18)]
    `,
    className
  );

  // Version accordéon
  if (collapsible) {
    return (
      <details className={cardClassName}>
        {/* Reflet */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

        {/* Lueur rouge */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

        <summary className="relative z-10 cursor-pointer list-none p-6 md:cursor-default md:p-8">
          {title && (
            <CardTitle collapsible>
              {title}
            </CardTitle>
          )}
        </summary>

        <div className="relative z-10 px-6 pb-6 md:px-8 md:pb-8">
          {children}
        </div>
      </details>
    );
  }

  // Version normale
  return (
    <div className={cardClassName}>
      {/* Reflet */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

      {/* Lueur rouge */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Contenu */}
      <div className="relative z-10 p-5 sm:p-8">
        {title && <CardTitle>{title}</CardTitle>}
        {children}
      </div>
    </div>
  );
}