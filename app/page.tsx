"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import About from "@/components/sections/Me";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/ui/Contact";
import ContactButton from "@/components/ui/ContactButton";

export default function Home() {
  const [turnRight, setTurnRight] = useState(false);
  const [comeDown, setComeDown] = useState(false);
  const [mainHeight, setMainHeight] = useState<number>();
  const [topRowHeight, setTopRowHeight] = useState<number>();
  const [contact, setContact] = useState(false);
  const shortcut = turnRight || comeDown;

  const heroSection = useRef<HTMLElement>(null);
  const meSection = useRef<HTMLElement>(null);
  const projectsSection = useRef<HTMLElement>(null);
  const skillsSection = useRef<HTMLElement>(null);
  const topRow = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeSection = comeDown
      ? turnRight
        ? skillsSection.current
        : projectsSection.current
      : turnRight
        ? meSection.current
        : heroSection.current;

    if (!activeSection) return;

    const observer = new ResizeObserver(() => {
      setMainHeight(activeSection.getBoundingClientRect().height);
    });

    observer.observe(activeSection);

    return () => observer.disconnect();
  }, [turnRight, comeDown]);

  useEffect(() => {
    if (!contact) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contact]);

  useEffect(() => {
    const row = topRow.current;

    if (!row) return;

    const observer = new ResizeObserver(() => {
      setTopRowHeight(row.getBoundingClientRect().height);
    });

    observer.observe(row);

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="portfolio-viewport relative w-screen transition-[height] duration-700 ease-in-out"
      style={
        {
          "--active-section-height": mainHeight ? `${mainHeight}px` : "100vh",
        } as CSSProperties
      }
    >
      <div
        className="portfolio-canvas transition-transform duration-700 ease-in-out"
        style={
          {
            "--desktop-transform": `
            translateX(${turnRight ? "-100vw" : "0"})
            translateY(${comeDown ? `-${topRowHeight ?? 0}px` : "0"})
          `,
          } as CSSProperties
        }
      >
        <div ref={topRow} className="portfolio-row">
          <div className="portfolio-slide">
            <Hero contact={()=>setContact(true)} goToProject={()=>setComeDown(true)} ref={heroSection} onNext={() => setTurnRight(true)} />
          </div>
          <div className="portfolio-slide">
            <About
              ref={meSection}
              onNext={() => setComeDown(true)}
              onPrevious={() => setTurnRight(false)}
            />
          </div>
        </div>

        <div className="portfolio-row">
          <div className="portfolio-slide">
            <Projects
              ref={projectsSection}
              onPrevious={() => setTurnRight(true)}
            />
          </div>
          <div className="portfolio-slide">
            <Skills
              ref={skillsSection}
              onNext={() => setTurnRight(false)}
              onPrevious={() => setComeDown(false)}
            />
          </div>
        </div>
      </div>
      {shortcut && <ContactButton action={() => setContact(true)} />}
      <Contact ref={contactRef} className={contact ? "top-1/2 -translate-y-1/2" : "top-full"} />
    </main>
  );
}
