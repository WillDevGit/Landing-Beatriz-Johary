"use client";
import Image from "next/image";
import linkedln_logo from "../../../public/linkedin.png";
export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-around w-full gap-4 p-4 bg-red-700">
      <div>
        <h1 className=" font-bebas text-2xl tracking-wider uppercase">
          vamos conversar?
        </h1>
      </div>
      <div className="w-3xs">
        <p className="font-montserrat text-[12px] text-pretty">
          Adoro trocar ideias, conhecer histórias e transformar possibilidades
          em projetos.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p className="text-[12px]">cotrimbeatriz5@gmail.com</p>
        <div>
          <div>
            <Image src={linkedln_logo} alt="linkedln" />
          </div>
        </div>
      </div>

      <div className="text-[9px] md:border-none border-t border-white pt-2">
        <p>© 2026 Beatriz Johary.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
