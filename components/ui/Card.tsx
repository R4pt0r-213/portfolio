"use client";

import { ReactNode, useEffect, useState } from "react";
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
        <span className="text-red-200 text-xl transition-transform duration-300 group-open:rotate-180 md:hidden">
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
  const [isMobile, setIsMobile] = useState(false);

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

  /*
   * Détection mobile
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobile();

    mediaQuery.addEventListener("change", updateMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  /*
   * Si collapsible est false :
   * carte normale partout.
   */
  if (!collapsible) {
    return (
      <div className={cardClassName}>
        {/* Reflet */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

        {/* Lueur rouge */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 p-5 sm:p-8">
          {title && <CardTitle>{title}</CardTitle>}
          {children}
        </div>
      </div>
    );
  }

  /*
   * Sur desktop :
   * carte toujours ouverte.
   */
  if (!isMobile) {
    return (
      <div className={cardClassName}>
        {/* Reflet */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

        {/* Lueur rouge */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

        <div className="relative z-10 p-5 sm:p-8">
          {title && <CardTitle>{title}</CardTitle>}
          {children}
        </div>
      </div>
    );
  }

  /*
   * Mobile :
   * accordéon.
   */
  return (
    <details className={cardClassName}>
      {/* Reflet */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

      {/* Lueur rouge */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-500" />

      <summary className="relative z-10 cursor-pointer list-none p-5">
        {title && <CardTitle collapsible>{title}</CardTitle>}
      </summary>

      <div className="relative z-10 px-5 pb-5">
        {children}
      </div>
    </details>
  );
}
