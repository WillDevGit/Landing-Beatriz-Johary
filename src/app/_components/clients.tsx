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

const clients = [
  { src: Bayer_logo, alt: "Bayer" },
  { src: cocacola_logo, alt: "Coca-Cola" },
  { src: natura_logo, alt: "Natura" },
  { src: oboticario_logo, alt: "O Boticário" },
  { src: itau_logo, alt: "Itaú" },
  { src: sebrae_logo, alt: "Sebrae" },
  { src: redbull_logo, alt: "Red Bull" },
  { src: globo_logo, alt: "Globo" },
];

export function Clients() {
  return (
    <section className="mx-4 font-montserrat text-[#A00307]">
      <div className="flex items-center gap-2 uppercase font-bold tracking-tighter">
        <p className="whitespace-nowrap">Colaborações</p>

        <hr className="flex-1 border-t border-red-800" />
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 pt-6">
        {clients.map((client) => (
          <div
            key={client.alt}
            className="relative w-full aspect-square"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image
              src={client.src}
              alt={client.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
