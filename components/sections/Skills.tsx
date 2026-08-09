import Image from "next/image";
import type { Ref } from "react";

import Card from "../ui/Card";
import Direction from "../ui/Direction";

interface SkillsProps {
  onNext: () => void;
  onPrevious: () => void;
  ref?: Ref<HTMLElement>;
}

interface Technology {
  name: string;
  image: string;
}

const languages: Technology[] = [
  { name: "C", image: "/c.png" },
  { name: "Java", image: "/java.png" },
  { name: "JavaScript", image: "/js.png" },
  { name: "PHP", image: "/php.png" },
  { name: "Python", image: "/python.png" },
  { name: "SQL", image: "/sql.png" },
  { name: "HTML & CSS", image: "/html_css.png" },
  { name: "Bash", image: "/bash.png" },
];

const frameworks: Technology[] = [
  { name: "React", image: "/reactjs.png" },
  { name: "Vue.js", image: "/vuejs.png" },
  { name: "Node.js", image: "/nodejs.png" },
];

const tools: Technology[] = [
  { name: "GitHub", image: "/github.png" },
  { name: "VS Code", image: "/vscode.png" },
  { name: "Linux", image: "/linux.png" },
  { name: "Arduino IDE", image: "/arduino.png" },
  { name: "Fusion 360", image: "/fusion.png" },
  { name: "Notion", image: "/notion.png" },
];

function TechnologyGrid({ items }: { items: Technology[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="group/skill flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/10 px-2 py-3 transition-all duration-300 hover:border-red-400/30 hover:bg-red-500/[0.06]"
        >
          <div className="relative size-15 transition-transform duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:scale-105">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <span className="text-center text-xs font-medium text-neutral-300">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}



export default function Skills({ onNext, onPrevious, ref }: SkillsProps) {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-screen px-6 py-20 sm:px-10 lg:px-16 overflow-hidden"
      ref={ref}
    >
      <Direction direction="up" onClick={onPrevious} />
      <Direction direction="left" onClick={onNext} />

      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mt-3 mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Mes compétences
        </h2>

        <div className="flex flex-col gap-10">
          <Card title="Langages informatiques" className="h-full">
            <TechnologyGrid items={languages} />
          </Card>

          <Card title="Frameworks" className="h-full">
            <TechnologyGrid items={frameworks} />
          </Card>

          <Card title="Outils" className="h-full">
            <TechnologyGrid items={tools} />
          </Card>

          <Card title="Langues" className="h-full">
            <div className="space-y-3">
              {["Anglais", "Arabe"].map((language) => (
                <div
                  key={language}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-5 py-4"
                >
                  <span className="font-medium text-neutral-200">{language}</span>
                  <span className="size-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
