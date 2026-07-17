export function NavBar() {
  return (
    <nav className="font-anton w-screen items-center flex justify-between px-10 pt-2 gap-4 bg-[#EEE6DF] text-red-800 uppercase">
      <h1 className="font-bold">
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
      <div className="flex md:hidden text-[#A5090D]">
        <button>menu</button>
      </div>
    </nav>
  );
}
