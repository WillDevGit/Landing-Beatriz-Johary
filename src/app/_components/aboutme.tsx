"use client";

import Image from "next/image";
import sobremim from "../../../public/sobremim.png";
import perfil from "../../../public/perfil.png";

export function Aboutme() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7ECE3] pb-2 text-white">
      <div
        className="
          relative grid grid-cols-1
          md:grid-cols-12
          bg-[#A00307]
          mx-1 md:mx-3
          p-6 md:p-0 md:pt-4
          rounded-2xl
          shadow-lg
        "
      >
        {/* PERFIL */}
        <div
          className="
            relative hidden
            md:flex md:items-end
            md:col-span-3
            lg:col-span-3
          "
        >
          <Image
            src={perfil}
            alt="perfil"
            width={986}
            height={1595}
            className="
              h-auto w-full
              object-contain object-bottom
              md:max-w-none
              lg:max-h-[min(75vh,620px)]
            "
            sizes="(max-width: 1024px) 25vw, 25vw"
            priority
          />
        </div>

        {/* TEXTO */}
        <article
          className="
            md:col-span-6
            lg:col-span-4
            md:flex md:items-center
            px-0 md:px-6 lg:px-4
            py-6 md:py-8 lg:py-10
          "
        >
          <div
            className="
              flex flex-col
              gap-4
              lg:gap-7
              text-balance
              font-montserrat
            "
          >
            {/* TÍTULO MOBILE */}
            <div className="md:hidden">
              <section
                className="
                  uppercase
                  font-extralight
                  tracking-[0.9em]
                  text-[0.7em]
                  opacity-90
                "
              >
                sobre mim
              </section>
            </div>

            {/* NOME */}
            <div>
              <h1 className="uppercase text-2xl lg:text-3xl">Meu nome é</h1>

              <h1 className="uppercase text-2xl lg:text-3xl font-bold italic">
                Beatriz Johary,
              </h1>
            </div>

            {/* DESCRIÇÃO */}
            <div
              className="
                flex flex-col
                text-sm
                xl:text-lg
                text-pretty
                md:text-justify
                tracking-wide
                opacity-90
                gap-5
                lg:gap-6
              "
            >
              <p>mas você pode me chamar de Bia.</p>

              <p>
                Sou estudande de Publicidade & Propaganda na PUC-SP e uma eterna
                apaixonada por comunicação estética e por tudo que envolve
                cultura & pessoas.
              </p>

              <p>
                Atualmente, sou estagiária de comunicação na Bayer Brasil e nas
                horas vagas sou fã de criar ideias, pensar em estagiárias
                criativas, entender comportamento e transformar conceitos em
                ideias palpáveis.
              </p>
            </div>

            {/* BOTÃO MOBILE */}
            <div
              className="
                w-fit
                md:hidden
                border border-white
                rounded-2xl
                p-3
              "
            >
              <button>Conhecer mais sobre mim</button>
            </div>
          </div>
        </article>

        {/* IMAGEM DIREITA */}
        <div
          className="
    relative hidden
    sm:flex sm:items-center sm:justify-center
    sm:col-span-5
    md:items-end md:justify-end
    md:col-span-3
    lg:col-span-5
  "
        >
          <Image
            src={sobremim}
            alt="sobre mim"
            width={1315}
            height={1196}
            className="
      h-auto
      w-full
      object-contain
      object-center
      md:object-bottom
      md:max-w-none
      lg:max-h-[min(75vh,580px)]
      lg:p-20
    "
            sizes="(max-width: 1024px) 25vw, 42vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
