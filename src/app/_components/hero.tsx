import Image from "next/image";
import profile from "../../../public/hero-retrato.png";

export function Hero() {
  return (
    <section className="min-h-screen min-w-screen flex justify-between px-8 pt-2 bg-[#EEE6DF] ">
      <div className="text-[#A5090D] pt-8">
        <h1 className="text-[#A5090D] font-bold text-7xl">
          Estratégico <br></br> & Criativo
        </h1>
        <p>ideias que geram conexão,</p>
        <p>marcas que ficam na memória</p>
        <button>Conhecer Trabalhos</button>
      </div>
      {/* <div className="border-blue-700 border-2">
        <Image
          className="border-red-700 border-2"
          src={profile}
          alt="profile"
          priority
        />
      </div> */}
    </section>
  );
}
