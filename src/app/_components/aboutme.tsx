"use client";
import Image from "next/image";

export function Aboutme() {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-[#A00307] mx-4 p-6 rounded-2xl shadow-xl/30">
        <section className="hidden md:inline-block">foto</section>

        <article>
          <div className="flex flex-col gap-6 text-balance font-montserrat">
            <div>
              <section className="uppercase font-extralight tracking-[0.9em] text-[0.7em] opacity-90">
                sobre mim
              </section>
            </div>
            <div>
              <h1 className="uppercase text-2xl">Meu nome é</h1>
              <h1 className="uppercase text-2xl font-bold italic">
                Beatriz Johary,
              </h1>
            </div>
            <div className="flex flex-col text-[14px] text-pretty tracking-wide opacity-90 gap-6">
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
            <div className="w-fit border border-white rounded-2xl p-3">
              <button className="">Conhecer mais sobre mim</button>
            </div>
          </div>
        </article>
        <section className="md:inline-block hidden">sobre mim</section>
      </section>
    </>
  );
}
