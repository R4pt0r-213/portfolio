import type { Ref } from "react";

import Direction from "../ui/Direction";
import Button from "../ui/Button";
import Contact from "../ui/Contact";

interface HeroProps {
  onNext: () => void;
  ref?: Ref<HTMLElement>;
  goToProject: ()=>void;
  contact : ()=>void;
}

export default function Hero({ onNext, goToProject, contact, ref }: HeroProps) {

  return (
    <>
    
    <section
      id="home"
      className="relative h-screen flex items-center justify-center w-screen overflow-hidden"
      ref={ref}
    >
      <div className="text-center">


        <h2 className="text-3xl sm:text-4xl mt-4">
          Naji Hassain
        </h2>

        <p className="mt-6 text-base sm:text-xl px-4">
          Etudiant ingénieur • Informatique • Industriel
        </p>

        <p className="mt-6 text-base sm:text-xl px-4">
            IG2I - Centrale Lille
        </p>

        <div className="mt-10 hidden lg:flex justify-center">
          <div className="flex w-40 justify-end">
            <Button onClick={goToProject} className="rounded-e-none group w-4 hover:w-40 overflow-hidden transition-all duration-500">
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Projets
              </span>
            </Button>
          </div>
          <div className="flex w-40 justify-start">
            <Button onClick={contact} className="rounded-s-none group w-4 hover:w-40 overflow-hidden transition-all duration-500">
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Contact
              </span>
            </Button>
          </div>

        </div>
        <Direction direction="right" onClick={onNext}/>

      </div>
    </section>
    </>

  );
}
