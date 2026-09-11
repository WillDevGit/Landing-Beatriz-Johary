"use client";
import Image from "next/image";
import profile from "../../../public/hero-profile.png";
import arrow from "../../../public/seta.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7ECE3]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-end md:gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 pt-10 text-[#A00307] md:col-span-5 md:gap-8 md:pb-6 md:pt-14 lg:pb-8 lg:pt-16">
            <h1
              data-aos="zoom-in-right"
              className="font-bebas uppercase leading-[0.85] tracking-wide text-[clamp(4.0rem,20vw,7.75rem)] md:text-[clamp(4.5rem,10vw,7.5rem)] lg:text-[clamp(6.5rem,10vw,7.0rem)]"
            >
              Estratégico <br />
              <span className="font-montserrat text-6xl lg:text-7xl font-semibold">
                &
              </span>{" "}
              Criativo
            </h1>

            <div className="font-montserrat text-base font-semibold lowercase leading-snug sm:text-lg md:text-xl lg:text-2xl">
              <p data-aos="zoom-in-right">ideias que geram conexão,</p>
              <p data-aos="zoom-in-right">marcas que ficam na memória</p>
            </div>

            <div
              className="flex items-center gap-3 pb-2 font-montserrat text-xs font-bold uppercase tracking-wide sm:text-sm md:pb-0"
              data-aos="zoom-in-right"
            >
              <button type="button">Conhecer Trabalhos</button>
              <Image
                src={arrow}
                alt=""
                aria-hidden
                className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
              />
            </div>
          </div>

          <div className="relative mt-2 sm:mt-0 sm:-mx-6 md:col-span-7 md:mx-0 md:flex md:justify-end lg:-mr-2">
            <Image
              src={profile}
              alt="Beatriz Johary"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain object-bottom md:w-full md:max-w-none lg:max-h-[min(82vh,680px)]"
              data-aos="fade-left"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
            />
            <p
              className="pointer-events-none absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 text-[10px] font-montserrat font-medium uppercase tracking-[0.25em] text-[#A00307] lg:block xl:right-6"
              style={{ writingMode: "vertical-rl" }}
              aria-hidden
              data-aos="fade-left"
            >
              + publicidades com propósito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
