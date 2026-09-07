"use client";
import Image from "next/image";
import menu from "../../../public/menu.png";
import close from "../../../public/close.png";
import linkedln_logo from "../../../public/linkedin.png";
import insta_logo from "../../../public/instagram.png";
import seta from "../../../public/arrow-white.png";
import { useEffect, useState } from "react";

export function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);

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
          className={`fixed flex flex-col inset-0 z-50 overflow-hidden uppercase px-6 pt-5 bg-red-900 transition-all duration-300 ease-in-out
    ${isOpenMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} text-white `}
        >
          <button onClick={handleClickMenu} className="absolute right-8 top-6">
            <Image src={close} alt="Fechar" />
          </button>
          <div className="flex justify-between block font-medium ">
            <h1 className="font-bebas leading-6 text-3xl">
              Beatriz <br></br> Johary
            </h1>
          </div>
          <div className="flex flex-col gap-6 text-2xl mt-16 font-montserrat">
            <div className="cursor-pointer">
              <div className="flex items-center">
                <p className="opacity-60">01</p>
                <hr className="block w-10 border-t mx-3 opacity-60" />
              </div>

              <div className="pb-2">Sobre</div>
            </div>

            <div className="cursor-pointer">
              <div className="flex items-center">
                <p className="opacity-60">02</p>
                <hr className="block w-10 border-t mx-3 opacity-60" />
              </div>

              <div className="pb-2">Portifólio</div>
            </div>

            <div className="cursor-pointer">
              <div className="flex items-center">
                <p className="opacity-60">03</p>
                <hr className="block w-10 border-t mx-3 opacity-60" />
              </div>

              <div className="pb-2">Experiência</div>
            </div>
            <div className="cursor-pointer">
              <div className="flex items-center">
                <p className="opacity-60">04</p>
                <hr className="block w-10 border-t mx-3 opacity-60" />
              </div>
              <div className="pb-2">Contato</div>
            </div>
          </div>
          <hr className="my-6 opacity-60" />
          <div className="">
            <div className="flex items-center gap-18">
              <button className="text-sm font-semibold font-montserrat uppercase">
                Vamos conversar ?
              </button>
              <Image src={seta} alt="instagram" className="h-6 w-6" />
            </div>
            <div className="flex gap-6 pt-4">
              <div className="border border-white p-2 rounded-full">
                <Image src={linkedln_logo} alt="linkedln" className="h-4 w-4" />
              </div>
              <div className="border border-white p-2 rounded-full">
                <Image src={insta_logo} alt="instagram" className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
