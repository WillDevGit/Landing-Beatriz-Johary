"use client";
import Image from "next/image";
import profile from "../../../public/hero-profile.png";
import arrow from "../../../public/seta.png";

export function Hero() {
  return (
    <section className=" flex flex-col gap-4 md:flex-row justify-between px-6 md:px-8 pt-2 bg-[#F7ECE3] ">
      <div className="flex flex-col justify-center gap-4 text-[#A00307] pt-8 uppercase">
        <h1 className="text-[#A00307] font-bebas text-[84px] tracking-tight leading-18">
          Estratégico <br></br>
          <span className="font-montserrat font-semibold">&</span> Criativo
        </h1>
        <div className="font-montserrat font-semibold lowercase md:text-3xl">
          <p>ideias que geram conexão,</p>
          <p>marcas que ficam na memória</p>
        </div>
        <div className="flex font-montserrat gap-2 lowercase font-bold">
          <button>Conhecer Trabalhos</button>
          <Image src={arrow} alt="Ir para trabalhos" />
        </div>
      </div>
      <div className="w-full flex justify-end ">
        <Image
          src={profile}
          alt="profile"
          width={1536}
          height={1024}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
