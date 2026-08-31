"use client";
import Image from "next/image";
import menu from "../../../public/menu.png";
import { useState } from "react";

export function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <nav className="flex justify-between px-8 md:px-10 mx-auto items-center pt-4 gap-4 bg-[#F7ECE3] text-[#A31E22] uppercase ">
        <h1 className="font-bebas leading-6 text-3xl">
          Beatriz <br></br> Johary
        </h1>
        <div className="hidden md:flex gap-6 pt-4">
          <p className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-700 pb-4">
            Sobre
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-700 pb-4">
            Portifólio
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-700 pb-4">
            Experiência
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-700 pb-4">
            Contato
          </p>
        </div>
        <div className="hidden md:flex">
          <button className="bg-[#A5090D] cursor-pointer hover:bg-[#7f090d] text-white px-4 p-2 rounded-4xl">
            Vamos Conversar
          </button>
        </div>
        <div className="flex md:hidden text-[#A5090D] ">
          <button onClick={handleClickMenu}>
            <Image src={menu} alt="profile" priority />
          </button>
        </div>
      </nav>
      {isOpenMenu && (
        <div
          className={`w-full fixed inset-0 grid grid-rows-3 uppercase px-6 pt-2 bg-red-900  transition-all duration-300 ease-in-out
    ${isOpenMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
        >
          <div className="flex justify-between block font-medium">
            <h1 className="font-montserrat">
              Beatriz <br></br> Johary
            </h1>
            <p onClick={handleClickMenu} className="text-2xl font-medium ">
              X
            </p>
          </div>
          <div className="flex flex-col gap-6 font-medium">
            <div className="cursor-pointer">
              <div className="pb-2">Sobre</div>
              <hr className="mx-1 opacity-40" />
            </div>

            <div className="cursor-pointer">
              <div className="pb-2">Portifólio</div>
              <hr className="mx-1 opacity-40" />
            </div>
            <div className="cursor-pointer">
              <div className="pb-2">Experiência</div>
              <hr className="mx-1 opacity-40" />
            </div>
            <div className="cursor-pointer">
              <div className="pb-2">Contato</div>
              <hr className="mx-1 opacity-40" />
            </div>
          </div>
          <div className="border-2 border-white">
            <div>Redes Sociais</div>
          </div>
        </div>
      )}
    </>
  );
}
