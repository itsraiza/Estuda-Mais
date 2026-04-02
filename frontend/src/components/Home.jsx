import { Link, Links } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className="text-white">
        {/* HERO */}
        <section className="flex justify-center items-center gap-16 max-w-6xl mx-auto m-10 px-4 lg:mt-24">
          {/* TEXTO */}
          <div className="flex flex-col gap-6 max-w-md">
            <h1 className="text-5xl font-bold leading-tight">
              SUA{" "}
              <span className="bg-purple-400 bg-clip-text text-transparent">
                APROVAÇÃO
              </span>{" "}
                EM ALTA VELOCIDADE.
            </h1>

            <p className="text-gray-300 text-lg">
              Domine qualquer conteúdo com uma plataforma que aprende como você
              estuda. Personalização radical impulsionada por IA para
              transformar seu desempenho
            </p>

            <div className="flex gap-4 relative ">
              <Link to="/plano">
                <button className=" px-8 py-4 bg-[#9c42f4] font-bold text-black rounded-xl hover:shadow-[0_0_20px_rgba(216,115,255,0.4)] transition-all duration-300 cursor-pointer">
                  Começar Agora
                </button>
              </Link>

              <a href="#saibamais">
                <button className="px-6 py-3 text-purple-400 border border-[#484848]/30 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Saiba Mais
                </button>
              </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="max-lg:hidden flex justify-center">
            <video autoPlay loop muted playsInline className="w-175">
              <source src="/robo_home.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* CARDS */}
        <section id="saibamais" className="py-32 px-8 bg-[#131313]">
          <div className="text-center mb-24 ">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              TECNOLOGIA PARA <span className="text-purple-400">VENCER</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto ">
              Ferramentas de elite desenhadas para quem não aceita nada menos
              que o topo da lista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Cards
              icon="💡"
              title="Planos Personalizados"
              description="Crie um plano de estudos sob medida com base no seu objetivo, nível e tempo disponível."
              link={"/plano"}
            />

            <Cards
              icon="⚡"
              title="Explicações Simples"
              description="Entenda qualquer assunto com explicações claras, exemplos práticos e linguagem simples, sem complicação."
              link={"/estudo"}
            />

            <Cards
              icon="🧠"
              title="Questões de Prática"
              description="Resolva questões no nível de provas reais e receba correção com explicações para aprender de verdade."
              link={"/estudo"}
            />
          </div>
        </section>

        <section className="py-32 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-primary-dim/20">
              <div className="absolute inset-0 bg-linear-to-br from-[#9c42f4]/10 to-[#d873ff]/10"></div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black font-headline mb-8 leading-tight">
                  PRONTO PARA <span className="text-purple-400">EVOLUIR</span>?
                </h2>
                <p className="text-xl text-[#ababab] max-w-2xl mx-auto mb-12">
                  Junte-se à nova era da educação. Plataforma gratuita para você
                  estudar os principais temas do Enem e de Concursos.
                </p>
                <Link to={"/plano"}>
                  <button className="px-12 py-6 bg-white text-black font-black font-headline text-xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
                    COMEÇAR AGORA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
