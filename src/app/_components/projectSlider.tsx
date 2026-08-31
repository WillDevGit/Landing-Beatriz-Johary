"use client";
export function ProjectSlider() {
  return (
    <section className="flex flex-col gap-4 text-red-800">
      <section className="flex items-center justify-between tracking-tighter">
        <p className="font-bold md:text-2xl uppercase">meus projetos</p>
        <hr className="hidden md:block flex-1 border-t border-red-800" />
        <p className="uppercase text-[12px] font-extrabold">ver todos --</p>
      </section>
      <section className="flex gap-2 overflow-x-auto max-w-full">
        <div className="w-24 h-44 shrink-0 bg-black">CARD1</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD2</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD3</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD4</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD4</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD4</div>
      </section>
    </section>
  );
}
