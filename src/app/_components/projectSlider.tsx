"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import dende from "../../../public/projects/dende.png";
import centauro from "../../../public/projects/centauro.png";
import bodyshop from "../../../public/projects/bodyshop.png";
import cinemark from "../../../public/projects/cinemark.png";
import vitalfresh from "../../../public/projects/vitalfresh.png";
import agencia from "../../../public/projects/agencia.png";
import ic from "../../../public/projects/ic.png";
import arrow from "../../../public/arrow-right.png";

export function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      src: dende,
      type: "Agência",
      name: "Dendê",
      title: "Branding &\nDireção Criativa",
    },
    {
      src: centauro,
      type: "Projeto",
      name: "Centauro",
      title: "Campanha\nPublicitária",
    },
    {
      src: bodyshop,
      type: "Projeto",
      name: "The Body Shop",
      title: "Branding\nSensorial",
    },
    {
      src: cinemark,
      type: "Projeto",
      name: "Cinemark",
      title: "Conteúdo &\nExperiência",
    },
    {
      src: vitalfresh,
      type: "Projeto",
      name: "Vital Fresh",
      title: "Identidade\nVisual",
    },
    {
      src: agencia,
      type: "Agência",
      name: "PUC",
      title: "Comunicação\nCriativa",
    },
    {
      src: ic,
      type: "Iniciação",
      name: "Científica",
      title: "Pesquisa &\nEstratégia",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame: number;

    const move = () => {
      slider.scrollLeft += 0.5;

      // chegou na metade → volta para o começo
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="ml-4 flex flex-col gap-4 text-red-800">
      {/* TÍTULO */}
      <div className="flex items-center justify-between pr-4 tracking-tighter">
        <p className="font-bold uppercase">meus projetos</p>

        <hr className="hidden flex-1 border-t border-red-800 md:block" />

        <p className="text-sm font-semibold uppercase">ver todos --</p>
      </div>

      {/* CARROSSEL */}
      <section
        ref={sliderRef}
        className="
          flex
          gap-2
          overflow-x-auto
          py-3
          md:gap-4
          scrollbar-hide
        "
      >
        {/* PRIMEIRA SEQUÊNCIA */}
        {cards.map((card, index) => (
          <div
            key={`first-${index}`}
            className="
              flex
              h-96
              w-44
              shrink-0
              flex-col
              overflow-hidden
              rounded-sm
              border
              border-[#A31E22]
              shadow-md
              transition-transform
              duration-300
              hover:scale-[1.05]
              hover:shadow-xl
              md:w-56
            "
          >
            <div className="relative h-[65%]">
              <Image
                src={card.src}
                alt={card.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[35%] bg-[#f8f1ec] p-3 font-montserrat">
              <p className="font-semibold">{card.type}</p>

              <p className="font-semibold">{card.name}</p>

              <hr className="w-[50%] border-t border-red-800" />

              <p className="whitespace-pre-line pt-2 text-sm text-black">
                {card.title}
              </p>
              <div className="absolute right-4 bottom-5 h-6 w-6 shrink-0">
                <button>
                  <Image src={arrow} alt={card.name} fill />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* SEGUNDA SEQUÊNCIA */}
        {cards.map((card, index) => (
          <div
            key={`second-${index}`}
            className="
              flex
              h-96
              w-44
              shrink-0
              flex-col
              overflow-hidden
              rounded-sm
              border
              border-[#A31E22]
              shadow-md
              transition-transform
              duration-300
              hover:scale-[1.05]
              hover:shadow-xl
              md:w-56
            "
          >
            <div className="relative h-[65%]">
              <Image
                src={card.src}
                alt={card.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[35%] bg-[#f8f1ec] p-3 font-montserrat">
              <p className="font-semibold">{card.type}</p>

              <p className="font-semibold">{card.name}</p>

              <hr className="w-[50%] border-t border-red-800" />

              <p className="whitespace-pre-line pt-2 text-sm text-black">
                {card.title}
              </p>
              <div className="absolute right-3 bottom-5 h-6 w-6 shrink-0">
                <button>
                  <Image src={arrow} alt={card.name} fill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
