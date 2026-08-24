"use client";
export function ProjectSlider() {
  return (
    <section className="text-red-800">
      <section className="flex items-center justify-between  gap-4 mx-4">
        <p className="font-bold text-2xl">meus projetos</p>
        <hr className="flex-1 border-t border-red-800" />
        <p className="uppercase">ver todos --</p>
      </section>
      <section className="flex gap-2 mx-4 overflow-x-auto max-w-full">
        <div className="w-24 h-44 shrink-0 bg-black">CARD1</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD2</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD3</div>
        <div className="w-24 h-44 shrink-0 bg-black">CARD4</div>
      </section>
    </section>
  );
}
