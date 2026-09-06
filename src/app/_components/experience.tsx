"use client";

export function Experience() {
  return (
    <section className="text-red-700 my-6 mx-4 ">
      <div>
        <div className="flex gap-2 items-center justify-between uppercase font-bold tracking-tighter">
          <p>experiência</p>
          <hr className="block flex-1 border-t mx-2 border-red-800" />
        </div>
        {/* cards experiencia */}
      </div>
      <div className="flex gap-1 border">
        <div className="px-2 border border-amber-300 py-2">
          <div className="h-2 w-2 bg-[#A00307] rounded-[100%] "></div>
        </div>
        <div className="flex flex-col gap-2 py-2 text-black text-[12px]">
          <div>
            <p className="text-[#A00307] font-semibold text-[10px]">
              2024 - ATUAL
            </p>
            <p className="font-bold">Estágiaria de comunicação Bayer Brasil</p>
            <p>
              Criação de conteúdo, campanhas internas, endomarketing e apoio em
              projetos estratégicos
            </p>
          </div>
          <div>
            <p className="text-[#A00307] font-semibold text-[10px]">
              2023 - 2024
            </p>
            <p className="font-bold">
              Assistente de comunicação Agência Criativa
            </p>
            <p>
              Apoio em campanhas, social media, planejamento e produção de
              conteúdo.
            </p>
          </div>
          <div>
            <p className="text-[#A00307] font-semibold text-[10px]">
              2022 - 2024
            </p>
            <p className="font-bold">Direção de Arte Júnior Agência Boutique</p>
            <p>
              Criação de peças, KV`s conceitos visuais e desdobramentos para
              mídias digitais e offline.
            </p>
          </div>
          <div>
            <p className="text-[#A00307] font-semibold  text-[10px]">
              2021 - 2022
            </p>
            <p className="font-bold">Projeto de extensão PUC-SP</p>
            <p>
              Desenvolvimento de campanhas institucionais e projetos para
              impacto social.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
