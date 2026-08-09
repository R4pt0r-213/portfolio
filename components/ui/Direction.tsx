import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface DirectionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "right" | "left" | "up" | "down";
}

export default function Direction({
  direction,
  className,
  "aria-label": ariaLabel,
  ...props
}: DirectionProps) {
  const positions = {
    right:
      "right-0 top-[50vh] -translate-y-1/2 translate-x-8 hover:translate-x-0 focus-visible:translate-x-0",

    left:
      "left-0 top-[50vh] -translate-x-8 -translate-y-1/2 hover:translate-x-0 focus-visible:translate-x-0",

    up:
      "left-1/2 top-0 -translate-x-1/2 -translate-y-8 hover:translate-y-0 focus-visible:translate-y-0",

    down:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-8 hover:translate-y-0 focus-visible:translate-y-0",
  };

  const shapes = {
    right: "h-24 w-12 rounded-l-[1.25rem] border-y border-l",

    left: "h-24 w-12 rounded-r-[1.25rem] border-y border-r",

    up: "h-12 w-24 rounded-b-[1.25rem] border-x border-b",

    down: "h-12 w-24 rounded-t-[1.25rem] border-x border-t",
  };

  const arrowRotations = {
    right: "rotate-0 group-hover:translate-x-0.5",

    left: "rotate-180 group-hover:-translate-x-0.5",

    up: "-rotate-90 group-hover:-translate-y-0.5",

    down: "rotate-90 group-hover:translate-y-0.5",
  };

  const ariaLabels = {
    right: "Aller à droite",

    left: "Aller à gauche",

    up: "Aller en haut",

    down: "Aller en bas",
  };

  return (
    <button
      aria-label={ariaLabel ?? ariaLabels[direction]}
      className={clsx(
        "group absolute z-50 hidden items-center justify-center overflow-hidden opacity-65 hover:opacity-100 focus-visible:opacity-100 md:flex",

        positions[direction],

        shapes[direction],

        "border-red-300/20 bg-red-950/45 text-red-50 backdrop-blur-xl",

        "shadow-[0_12px_40px_rgba(127,29,29,0.22)]",

        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",

        "hover:border-red-200/35 hover:bg-red-900/55 hover:shadow-[0_16px_50px_rgba(185,28,28,0.3)]",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",

        "active:scale-[0.97] motion-reduce:transition-none",

        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-red-100/15 via-red-500/[0.04] to-transparent"
      />

      <span className="relative flex size-8 items-center justify-center rounded-full border border-red-200/20 bg-red-100/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-300 group-hover:border-red-100/40 group-hover:bg-red-100/[0.14]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={clsx(
            "size-3.5 transition-transform duration-300",
            arrowRotations[direction]
          )}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        >
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-7 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-200/80 to-transparent opacity-70"
      />
    </button>
  );
}
