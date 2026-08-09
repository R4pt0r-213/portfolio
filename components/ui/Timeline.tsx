import { ReactNode } from "react";
import clsx from "clsx";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Ligne verticale */}
      <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-red-500/80 via-red-400/50 to-transparent" />

      <div className="space-y-8 sm:space-y-14">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 sm:gap-8"
          >
            {/* Point */}
            <div
              className={clsx(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "border border-red-300/25",
                "bg-red-950/55 backdrop-blur-xl",
                "shadow-[0_12px_30px_rgba(127,29,29,0.25)]"
              )}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100/15 via-red-500/[0.04] to-transparent" />

              <span className="relative">
                {item.icon ?? (
                  <div className="h-2.5 w-2.5 rounded-full bg-red-100" />
                )}
              </span>
            </div>

            {/* Carte */}
            <div
              className={clsx(
                "group relative min-w-0 flex-1 overflow-hidden rounded-3xl",
                "border border-red-300/20",
                "bg-red-950/45",
                "backdrop-blur-xl",
                "p-5 sm:p-7",
                "shadow-[0_12px_40px_rgba(127,29,29,0.22)]",
                "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-1",
                "hover:border-red-200/35",
                "hover:bg-red-900/55",
                "hover:shadow-[0_16px_50px_rgba(185,28,28,0.30)]"
              )}
            >
              {/* Reflet */}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-red-100/15 via-red-500/[0.04] to-transparent"
              />

              {/* Contenu */}
              <div className="relative">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-red-200">
                  {item.date}
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-red-50">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-red-100/80">
                  {item.description}
                </p>
              </div>

              {/* Trait lumineux */}
              <span
                aria-hidden
                className="absolute bottom-0 left-1/2 h-px w-16 sm:w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-200/80 to-transparent opacity-70"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}