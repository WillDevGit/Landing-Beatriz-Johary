"use client";

export function Experience() {
  const experiences = [
    {
      periodo: "2024 - ATUAL",
      cargo: "Estágiaria de comunicação Bayer Brasil",
      desc: " Criação de conteúdo, campanhas internas, endomarketing e apoio em projetos estratégicos",
    },
    {
      periodo: "2023 - 2024",
      cargo: "Assistente de comunicação Agência Criativa",
      desc: "Apoio em campanhas, social media, planejamento e produção de conteúdo.",
    },
    {
      periodo: "2022 - 2024",
      cargo: "Direção de Arte Júnior Agência Boutique",
      desc: "Criação de peças, KV`s conceitos visuais e desdobramentos para mídias digitais e offline.",
    },
    {
      periodo: "2021 - 2022",
      cargo: "Projeto de extensão PUC-SP",
      desc: "Desenvolvimento de campanhas institucionais e projetos para impacto social.",
    },
  ];

  return (
    <section className="text-[#A00307] my-6 mx-4 ">
      <div>
        <div className="flex gap-2 items-center justify-between uppercase font-bold tracking-tighter">
          <p>experiência</p>
          <hr className="block flex-1 border-t mx-2 border-red-800" />
        </div>
      </div>
      {/* cards experiencia */}
      <ol className="ml-2 border-l-2 border-red-800">
        {" "}
        {experiences.map((exp) => (
          <li key={exp.cargo} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-red-800" />
            <p className="mb-1 text-sm font-bold text-red-800">{exp.periodo}</p>
            <p className="font-bold text-red-900">{exp.cargo}</p>
            <p className="mt-1 text-sm text-gray-700">{exp.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
