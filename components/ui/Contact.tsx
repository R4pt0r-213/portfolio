import clsx from "clsx";
import type { Ref } from "react";

interface ContactProps {
  className?: string;
  ref:Ref<HTMLDivElement>
}

type ContactIcon = "linkedin" | "email" | "phone" | "location" | "github";

function Icon({ name }: { name: ContactIcon }) {
  const paths = {
    linkedin: (
      <>
        <path d="M7 9v8M7 6.5v.01M11 17v-4.5a3.5 3.5 0 0 1 7 0V17M11 9v8" />
      </>
    ),
    email: <path d="m4 7 8 6 8-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
    phone: <path d="M7.5 3h-2A2.5 2.5 0 0 0 3 5.5C3 14.06 9.94 21 18.5 21a2.5 2.5 0 0 0 2.5-2.5v-2l-4.5-1.5-1.1 2.2a12.2 12.2 0 0 1-8.6-8.6L9 7.5 7.5 3Z" />,
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    github: <path d="M15 22v-3.9c.04-1-.35-1.75-.8-2.2 2.65-.3 5.43-1.3 5.43-5.9A4.6 4.6 0 0 0 18.4 6.8a4.3 4.3 0 0 0-.12-3.18s-.97-.32-3.28 1.22a11.4 11.4 0 0 0-6 0C6.69 3.3 5.72 3.62 5.72 3.62A4.3 4.3 0 0 0 5.6 6.8 4.6 4.6 0 0 0 4.37 10c0 4.58 2.78 5.6 5.43 5.9-.34.3-.65.83-.76 1.6-.68.3-2.4.82-3.46-.99 0 0-.63-1.14-1.82-1.22M9 22v-3.9" />,
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      {paths[name]}
    </svg>
  );
}

export default function Contact({ className, ref }: ContactProps) {
  const contacts = [
    {
      label: "LinkedIn",
      value: "Voir mon profil",
      href: "https://www.linkedin.com/in/naji-hassain",
      icon: "linkedin" as const,
      external: true,
    },
    {
      label: "E-mail",
      value: "n4j1.h@proton.me",
      href: "mailto:naji.hassain@gmail.com",
      icon: "email" as const,
    },
    {
      label: "Téléphone",
      value: "+33 7 83 97 80 35",
      href: "tel:+33612345678",
      icon: "phone" as const,
    },
    {
      label: "Ville",
      value: "Bruay-la-Buissière, France",
      href: "https://www.google.com/maps/search/?api=1&query=bruay",
      icon: "location" as const,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/NajiHassain",
      href: "https://github.com/r4pt0r-213",
      icon: "github" as const,
      external: true,
    },
  ];

  return (
    <div ref={ref}
      className={clsx(
        "fixed left-1/2 -translate-x-1/2 overflow-hidden rounded-3xl duration-150",
        "border border-white/20 bg-white/10 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        className
      )}
    >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative z-10 p-8">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-white">
              Contact
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-red-400/30 to-transparent" />
          </div>

          <div className="divide-y divide-white/10">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
                className="group flex items-center gap-4 py-4 transition-colors"
              >
                <span className="flex size-10 items-center justify-center rounded-xl border border-red-400/15 bg-red-500/10 text-red-300 transition-all duration-300 group-hover:border-red-300/35 group-hover:bg-red-500/15">
                  <Icon name={contact.icon} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    {contact.label}
                  </p>

                  <p className="mt-1 truncate text-neutral-200 group-hover:text-white">
                    {contact.value}
                  </p>
                </div>

                <span className="text-xl text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
    </div>
  );
}
