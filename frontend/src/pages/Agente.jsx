import { useEffect, useRef, useState } from "react";
import Layout from "./Layout";

const Agente = () => {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modo, setModo] = useState("chat");
  const [questoesGeradas, setQuestoesGeradas] = useState("");
  const [error, setError] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const handleEnviar = async (tipo = "chat") => {
    if (!mensagem) {
     setError("Digite algo antes de enviar");
     return;
    }

    let typeToSend = tipo;

    if (modo === "correcao" && tipo === "chat") {
      typeToSend = "correction";
    }

    const userMessage = {
      role: "user",
      content: mensagem,
    };

    const aiMessage = {
      role: "ai",
      content: "",
    };

    setMensagem("");
    setLoading(true);
    
    setMensagens((prev) => [...prev, userMessage, aiMessage]);
    
    setError("");

    try {
      const response = await fetch("http://localhost:3000/estudo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: typeToSend,
          message: userMessage.content,
          questoes: questoesGeradas, // 🔥 ENVIA PRO BACK
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

      let texto = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        texto += chunk;

        // 🔥 salva as questões quando gerar treino
        if (typeToSend === "questions") {
          setQuestoesGeradas(texto);
        }

        setMensagens((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].content = texto;
          return updated;
        });
      }

      if (typeToSend === "correction") {
        setModo("chat");
        setQuestoesGeradas(""); // 🔥 limpa depois de corrigir
      }

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleTreino = async () => {
    if (!mensagem) {
     setError("Digite algo antes de enviar");
     return;
    }

    setModo("correcao");
    setQuestoesGeradas(""); // 🔥 limpa antes de gerar novas
    await handleEnviar("questions");
  };

  return (
    <Layout>
      <div className="h-screen bg-black text-white flex justify-center overflow-hidden">

        <div className="w-full max-w-3xl flex flex-col">

          {/* HEADER */}
          <div className="p-4 border-b border-gray-800 text-center font-bold">
            Sala de Estudos 📚
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">

            {mensagens.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-purple-600"
                      : "bg-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">
                    {msg.content || (loading && msg.role === "ai" ? "..." : "")}
                  </p>
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* INPUT + BOTÕES */}
          <div className="p-4 border-t border-gray-800">

            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEnviar("chat");
              }}
              placeholder={
                modo === "correcao"
                  ? "Digite suas respostas (ex: 1-A 2-B...) e pressione Enter"
                  : "Digite sua dúvida ou tema..."
              }
              className="w-full mb-3 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
              required
            />

            <div className="flex gap-3 justify-center flex-wrap">

              <button
                onClick={() => handleEnviar("chat")}
                className="bg-[#9c42f4] px-4 py-2 rounded-xl hover:bg-purple-700 transition cursor-pointer"
              >
                Explicar
              </button>

              <button
                onClick={() => handleEnviar("summary")}
                className="bg-[#9c42f4] px-4 py-2 rounded-xl hover:bg-purple-700 transition cursor-pointer"
              >
                Resumir
              </button>

              <button
                onClick={handleTreino}
                className="bg-[#9c42f4] px-4 py-2 rounded-xl hover:bg-purple-700 transition cursor-pointer"
              >
                🧠 Treinar (10 questões)
              </button>

              {modo === "correcao" && (
                <button
                  onClick={() => handleEnviar("chat")}
                  className="bg-[#9c42f4] px-4 py-2 rounded-xl hover:bg-purple-700 transition"
                >
                  Corrigir respostas
                </button>
              )}


            </div>
              {error && (
                <div className="mb-3 mt-5 text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Agente;