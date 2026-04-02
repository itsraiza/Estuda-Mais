import { useState } from "react";
import Layout from "./Layout";

const PlanoDeEstudo = () => {
  const [goal, setGoal] = useState("");
  const [subjects, setSubjects] = useState("");
  const [time, setTime] = useState("");
  const [level, setLevel] = useState("");
  const [plan, setPlan] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 NOVO
  const [index, setIndex] = useState(0);

  const handleGerarPlano = async () => {
    setError("");
    setPlan("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/plano", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal,
          subjects,
          time,
          level,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Erro ao processar");
        setLoading(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let textoFinal = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        textoFinal += chunk;

        setPlan(textoFinal);
      }

      setIndex(0); // 🔥 começa do primeiro slide

    } catch (error) {
      console.error(error);
      setPlan("Erro ao gerar plano 😢");
    }

    setLoading(false);
  };

  const formatarPlano = (texto) => {
    const dias = texto.split("\n\n");

    return dias.map((dia) => {
      const linhas = dia.split("\n");

      return {
        titulo: linhas[0],
        tarefas: linhas.slice(1),
      };
    });
  };

  const diasFormatados = formatarPlano(plan);

  return (
    <Layout>
      <div className="flex justify-center items-center gap-20 text-white max-w-5xl mx-auto mt-20 xl:justify-between">



        <div className="hidden xl:flex xl:justify-center">
            <video autoPlay loop muted playsInline className="w-140">
              <source src="/plano_video.mp4" type="video/mp4" />
            </video>
        </div>

        {!plan && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Criar Plano de Estudos
            </h2>

            <input
              placeholder="Objetivo (ENEM, concurso...)"
              className="p-3 rounded bg-[#1A1A2E] border border-white/10"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />

            <input
              placeholder="Matérias (ex: matemática, português)"
              className="p-3 rounded bg-[#1A1A2E] border border-white/10"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
            />

            <input
              placeholder="Tempo por dia (ex: 2 horas)"
              className="p-3 rounded bg-[#1A1A2E] border border-white/10"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <input
              placeholder="Nível (iniciante, médio, avançado)"
              className="p-3 rounded bg-[#1A1A2E] border border-white/10"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />

            <button
              onClick={handleGerarPlano}
              disabled={loading}
              className="bg-[#9c42f4] p-3 rounded flex justify-center items-center gap-2 hover:bg-purple-700 transition disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Gerando...
                </>
              ) : (
                "Gerar Plano"
              )}
            </button>

          </div>
        )}

        {error && (
          <div className="mb-3 mt-5 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* 🔥 SLIDER */}
        {plan && diasFormatados.length > 0 && (
          <div className="mt-8">

            {/* indicador */}
            <p className="text-center text-gray-400 mb-4">
              Dia {index + 1} de {diasFormatados.length}
            </p>

            {/* slide */}
            <div className="bg-[#1A1A2E] border border-white/10 rounded-xl p-4 min-h-[250px]">

              <h3 className="text-purple-400 font-bold mb-2">
                {diasFormatados[index].titulo}
              </h3>

              <ul className="list-disc ml-5 text-gray-300">
                {diasFormatados[index].tarefas.map((tarefa, i) => (
                  <li key={i}>{tarefa}</li>
                ))}
              </ul>

            </div>

            {/* navegação */}
            <div className="flex justify-between mt-4">

              <button
                onClick={() => setIndex(index - 1)}
                disabled={index === 0}
                className="bg-gray-700 px-4 py-2 rounded disabled:opacity-30 cursor-pointer"
              >
                ←
              </button>

              <button
                onClick={() => setIndex(index + 1)}
                disabled={index === diasFormatados.length - 1}
                className="bg-gray-700 px-4 py-2 rounded disabled:opacity-30 cursor-pointer"
              >
                →
              </button>

            </div>

            {/* bolinhas */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {diasFormatados.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-purple-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* reset */}
            <button
              onClick={() => {
                setPlan("");
                setIndex(0);
              }}
              className="mt-6 w-full bg-[#9c42f4] p-3 rounded hover:bg-purple-700 cursor-pointer transition"
            >
              Gerar novo plano
            </button>

          </div>
        )}

      </div>
    </Layout>
  );
};

export default PlanoDeEstudo;