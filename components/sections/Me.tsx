import type { Ref } from "react";

import Direction from "../ui/Direction";
import Timeline from "../ui/Timeline";
import Card from "../ui/Card";

interface AboutProps {
  onNext: () => void;
  onPrevious: () => void;
  ref?: Ref<HTMLElement>;
}

export default function About({ onNext, onPrevious, ref }: AboutProps) {
  const items = [
    {
      date: "2022",
      title: "Bacalauréat",
      description: "Obtention du bacalauréat mention très bien, spécialité Mathématiques et Science de l'Ingénieur"
    },
    {
      date: "2022-2023",
      title: "CPGE MPSI",
      description:
        "Lycée Robespierre d'Arras. Deux années de classes préparatoires scientifiques.",
    },
    {
      date: "2023-Aujourd'hui",
      title: "IG2I - Centrale Lille",
      description:
        "Entrée en cycle ingénieur spécialisé en informatique et systèmes industriels.",
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-screen px-4 sm:px-8 lg:px-20 py-16 overflow-hidden"
      ref={ref}
    >
      <Direction direction="left" onClick={onPrevious} />
      <Direction direction="down" onClick={onNext} />

      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          À propos de moi
        </h2>

        {/* Introduction */}
        <div className="mb-20">

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-3xl">
            Étudiant en informatique et en industrie, je m’intéresse particulièrement à 
            la robotique et à l’intelligence artificielle. Deux domaines qui me passionnent. 
            Curieux et autonome, j’aime apprendre de nouvelles technologies en les mettant en pratique 
            à travers des projets personnels et académiques. Aujourd’hui, je cherche une alternance : 
            je souhaite pouvoir développer mes compétences techniques et les mettre en pratique au sein d’une 
            entreprise. Cela me permettra d’acquérir une expérience professionnelle concrète et de contribuer à des 
            projets informatiques ou industriels.
          </p>
        </div>

        {/* Frise */}
        <div className="mb-24">

          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
            Mon parcours
          </h3>

        <Timeline items={items} />

        </div>

        {/* Stages */}
        <div>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
            Mes expériences
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Carte 1 */}

            <Card title="Waigéo" collapsible>
              <div className="text-red-300 font-semibold">
                        Stage · Développement web
              </div>
              Au sein de Waigéo, j'ai conçu et développé une application web de génération de QR codes en utilisant des technologies modernes telles que **Nuxt.js**, **Tailwind CSS** et **Resend**. J'ai participé à la conception de l'interface utilisateur, au développement des fonctionnalités principales ainsi qu'à l'intégration de services tiers pour offrir une expérience fluide et performante. Cette expérience m'a permis de renforcer mes compétences en développement web, en intégration d'API, en résolution de problèmes techniques et en gestion de projet.
            </Card>

            {/* Carte 2 */}

            <Card title="BDM Digital Media" collapsible>

                    <div className="text-red-300 font-semibold">
                        Stage · Prospection
                    </div>


                    Au sein de BDM Digital Media, j'étais chargé de la prospection téléphonique afin d'identifier de nouveaux clients et de présenter les services de l'entreprise. Cette expérience m'a permis de développer mes compétences en communication, en négociation commerciale et en vente, tout en apprenant à gérer efficacement mon organisation quotidienne. J'ai également appris à atteindre des objectifs commerciaux, à assurer un suivi des prospects et à faire preuve de persévérance face aux refus.
            </Card>



          </div>

        </div>

      </div>
    </section>
  );
}
