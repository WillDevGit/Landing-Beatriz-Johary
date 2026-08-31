"use client";
import Image from "next/image";
import Bayer_logo from "../../../public/brands/bayer_brand.png";
import cocacola_logo from "../../../public/brands/cocacola_brand.png";
import itau_logo from "../../../public/brands/itau_brand.png";
import redbull_logo from "../../../public/brands/redbull_brand.png";
import sebrae_logo from "../../../public/brands/sebrae_brand.png";
import oboticario_logo from "../../../public/brands/oboticario_brand.png";
import natura_logo from "../../../public/brands/natura_brand.png";
import globo_logo from "../../../public/brands/globo_brand.png";

export function Clients() {
  return (
    <section className="text-red-700 font-montserrat">
      <div className="flex gap-2 items-center justify-between uppercase font-bold tracking-tighter">
        <p>Colaborações</p>
        <hr className="block flex-1 border-t mx-2 border-red-800" />
      </div>

      <div className="grid grid-cols-4  gap-y-4 pt-2">
        <div className="relative w-[50px] h-[50px]">
          <Image src={Bayer_logo} alt="Bayer" fill className="object-contain" />
        </div>
        <div className="relative w-[60px] h-[50px]">
          <Image
            src={cocacola_logo}
            alt="coca cola"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[60px] h-[50px]">
          <Image
            src={natura_logo}
            alt="natura"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[60px] h-[50px]">
          <Image
            src={oboticario_logo}
            fill
            alt="oBoticario"
            className="object-contain"
          />
        </div>
        <div className="relative w-[50px] h-[60px]">
          <Image src={itau_logo} alt="itau" fill className="object-contain" />
        </div>

        <div className="relative w-[50px] h-[60px]">
          <Image
            src={sebrae_logo}
            alt="sebrae"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[70px] h-[60px]">
          <Image
            src={redbull_logo}
            alt="red bull"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[60px] h-[60px]">
          <Image src={globo_logo} alt="globo" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
