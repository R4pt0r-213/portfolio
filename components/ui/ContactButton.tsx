import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  action: () => void;
}

export default function ContactButton({
  action
}: buttonProps) {
  return (
    <button
        onClick={action}
        aria-label="Contact"
        className="
            group
            fixed
            bottom-2
            right-2
            lg:bottom-0
            lg:right-0
            z-50

            flex
            size-12
            lg:translate-x-7
            lg:translate-y-7
            items-center
            justify-center

            rounded-2xl
            lg:rounded-none
            lg:rounded-tl-2xl
            border
            border-red-300/20
            bg-red-950/45
            text-red-50
            backdrop-blur-xl

            shadow-[0_12px_40px_rgba(127,29,29,0.22)]

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            lg:hover:translate-x-0
            lg:hover:translate-y-0
            lg:hover:border-red-200/35
            lg:hover:bg-red-900/55
            lg:hover:shadow-[0_16px_50px_rgba(185,28,28,0.3)]

            focus-visible:translate-x-0
            focus-visible:translate-y-0
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-red-300/70

            active:scale-[0.97]
        "
        >
        {/* Reflet */}
        <span
            aria-hidden="true"
            className="
            pointer-events-none
            absolute
            inset-0
            rounded-tl-2xl
            bg-gradient-to-br
            from-red-100/15
            via-red-500/[0.04]
            to-transparent
            "
        />

        {/* Icône */}
        <span
            className="
            relative
            flex
            size-8
            items-center
            justify-center
            rounded-full
            border
            border-red-200/20
            bg-red-100/[0.08]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
            transition-all
            duration-300
            group-hover:border-red-100/40
            group-hover:bg-red-100/[0.14]
            "
        >
            <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
            </svg>
        </span>

        {/* Petite ligne lumineuse */}
        <span
            aria-hidden="true"
            className="
            absolute
            bottom-1
            right-1
            h-px
            w-7
            rotate-45
            bg-gradient-to-r
            from-transparent
            via-red-200/80
            to-transparent
            opacity-70
            "
        />
        </button>
  );
}