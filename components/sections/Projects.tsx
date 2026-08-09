import type { Ref } from "react";

import Direction from "../ui/Direction";
import Tech from "../ui/Tech";
import Status from "../ui/Status";
import Card from "../ui/Card";

interface ProjectsProps {
  onPrevious: () => void;
  ref?: Ref<HTMLElement>;
}

export default function Projects({ onPrevious, ref }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative w-screen min-h-screen overflow-hidden px-4 sm:px-8 lg:px-16 py-20"
      ref={ref}
    >
      <Direction direction="right" onClick={onPrevious} />

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-10 sm:mb-14 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Mes projets
        </h2>

        <div className="flex flex-col gap-16 sm:gap-24">

          {/* Académiques */}
          <div>

            <div className="mb-10 flex items-center gap-4">
              <h3 className="text-3xl font-bold text-white">
                Académiques
              </h3>

              <div className="h-px flex-1 bg-gradient-to-r from-red-500/60 to-transparent" />
            </div>

            <div className="space-y-10">

              <div>
                <h4 className="mb-3 text-lg font-semibold uppercase tracking-widest text-red-400">
                  Informatiques
                </h4>

                <div className="border-l border-white/10 pl-3 sm:pl-5 flex flex-wrap gap-4 sm:gap-8">
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="QUIZZIG">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Site permettant de faire des quizz en multijoueur
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>HTML/CSS</Tech>
                          <Tech>JS</Tech>
                          <Tech>PHP</Tech>
                          <Tech>SQL</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Avalam">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Site permettant de jouer au jeux avalam contre un bot
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>C</Tech>
                          <Tech>JS</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Dentalis">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Site réalisé pour un cabinet dentaire
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>React</Tech>
                          <Tech>Laravel</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold uppercase tracking-widest text-red-400">
                  Industriels
                </h4>

                <div className="border-l border-white/10 pl-3 sm:pl-5 flex flex-wrap gap-4 sm:gap-8">
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="CarRc">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Buggy télécommandé par smartphone capable de franchir des obstacles
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>
                          <Tech>HTML/CSS</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="SmartWalker">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Véhicule capable de suivre des lignes et d'adapter son comportement en fonction de la couleur de la ligne
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                </div>
              </div>

            </div>

          </div>

          {/* Personnels */}
          <div>

            <div className="mb-10 flex items-center gap-4">
              <h3 className="text-3xl font-bold text-white">
                Personnels
              </h3>

              <div className="h-px flex-1 bg-gradient-to-r from-red-500/60 to-transparent" />
            </div>

            <div className="space-y-10">

              <div>
                <h4 className="mb-3 text-lg font-semibold uppercase tracking-widest text-red-400">
                  Informatiques
                </h4>

                <div className="border-l border-white/10 pl-3 sm:pl-5 flex flex-wrap gap-4 sm:gap-8">
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Locadrone">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Site de location de drone
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>React</Tech>
                          <Tech>NodeJs</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status active>
                              Actif
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Site gestion de candidatures">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Site réalisés pour l'entreprise waigeo permettant de gérer les stagiaires
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>VueJs</Tech>
                          <Tech>NodeJs</Tech>
                          <Tech>SQL</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold uppercase tracking-widest text-red-400">
                  Industriels
                </h4>

                <div className="border-l border-white/10 pl-3 sm:pl-5 flex flex-wrap gap-4 sm:gap-8">

                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Réveil">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Conception d'un réveil qui sonne et projette de l'eau à l'heure souhaitée
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Automatisation d'éclairage">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Leds qui s'allument et s'étaignent en fonction d'un capteur de mouvement
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Jeux labyrinthe">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Jeux sur une matrice led consistant à trouver la sortie d'un labyrinthe
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  <Card className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px]" title="Serrure automatique">

                      {/* Description */}

                      <p className="leading-7 text-neutral-300">
                          Réalisation d'une serrure qui se déverouille avec un badge ou un mot de passe
                      </p>

                      {/* Technologies */}

                      <div className="mt-8 flex flex-wrap gap-3">

                          <Tech>Arduino</Tech>

                      </div>

                      {/* Statut */}

                      <div className="mt-8 flex justify-end">

                          <Status>
                              Terminé
                          </Status>

                      </div>

                  </Card>
                  
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
