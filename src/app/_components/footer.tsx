"use client";
import Image from "next/image";
import linkedln_logo from "../../../public/linkedin.png";
import insta_logo from "../../../public/instagram.png";
import seta from "../../../public/arrow-white.png";

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-around w-full gap-4 p-4 bg-red-700">
      <div>
        <h1 className="text-white font-bebas text-2xl tracking-wider uppercase">
          vamos conversar?
        </h1>
      </div>
      <div className="w-3xs">
        <p className="font-montserrat text-[12px] text-white text-pretty">
          Adoro trocar ideias, conhecer histórias e transformar possibilidades
          em projetos.
        </p>
      </div>
      <div className="relative max-w-58 flex md:hidden items-center border-1 border-white rounded-4xl px-8 py-2">
        <button className="uppercase text-sm text-white overflow-hidden font-montserrat font-semibold">
          Tem um projeto?
        </button>
        <Image
          src={seta}
          alt="conversar"
          className="absolute h-6 w-6 right-3"
        />
      </div>
      <div className="flex items-center gap-6">
        <p className="font-montserrat text-white text-[12px]">
          cotrimbeatriz5@gmail.com
        </p>
        <div className="flex gap-2">
          <div className="border border-white p-2 rounded-full">
            <Image src={linkedln_logo} alt="linkedln" className="h-4 w-4" />
          </div>
          <div className="border border-white p-2 rounded-full">
            <Image src={insta_logo} alt="instagram" className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="text-[10px] font-montserrat  text-white md:border-none border-t border-white pt-2">
        <p>© 2026 Beatriz Johary.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
