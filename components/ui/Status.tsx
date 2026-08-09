import clsx from "clsx";

interface StatusProps {
    active?: boolean;
    children: string;
}

export default function Status({
    active = false,
    children,
}: StatusProps) {
    return (
        <span
            className={clsx(
                "text-sm font-semibold",
                active
                    ? "text-emerald-400"
                    : "text-neutral-400"
            )}
        >
            ● {children}
        </span>
    );
}