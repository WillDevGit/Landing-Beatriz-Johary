"use client";
import Image from "next/image";

export function Aboutme() {
  return (
    <section className="flex bg-red-700 mx-4 p-6 rounded-2xl">
      <section>foto</section>
      <article>
        <div className="flex flex-col gap-2 text-balance">
          <div>
            <h1 className="uppercase">Meu nome é</h1>
            <h1 className="uppercase font-bold">Beatriz Johary,</h1>
          </div>
          <p>mas você pode me chamar de bia</p>
          <p>
            Sou estudande de Publicidade & Propaganda na PUC-SP e uma eterna
            apaixonada por comunicação estética e por tudo que envolve cultura &
            pessoas.
          </p>
          <p>
            Atualmente, sou estagiária de comunicação na Bayer Brasil e nas
            horas vagas sou fã de criar ideias, pensar em estagiárias criativas,
            entender comportamento e transformar conceitos em ideias palpáveis.
          </p>
        </div>
      </article>
      <section>sobre mim</section>
    </section>
  );
}
