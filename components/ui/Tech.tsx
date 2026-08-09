import { ReactNode } from "react";
import clsx from "clsx";

interface TechProps {
    children: ReactNode;
    className?: string;
}

export default function Tech({
    children,
    className,
}: TechProps) {
    return (
        <span
            className={clsx(
                `
                inline-flex
                items-center
                rounded-full
                px-3
                py-1.5

                border border-red-300/20
                bg-red-950/45
                backdrop-blur-xl

                text-sm
                font-medium
                text-red-50

                shadow-[0_10px_25px_rgba(127,29,29,0.18)]

                transition-all
                duration-300

                hover:border-red-200/35
                hover:bg-red-900/55
                hover:-translate-y-0.5
                `,
                className
            )}
        >
            {children}
        </span>
    );
}