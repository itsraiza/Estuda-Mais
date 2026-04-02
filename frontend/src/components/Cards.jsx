import { Link } from "react-router-dom";

const Cards = ({ title, description, icon, link }) => {
  return (
    <>
      <div
        className="bg-[#262626]/60 backdrop-blur-[20px] p-6 rounded-4xl border border-violet-400/10 hover:border-violet-500/30 hover:scale-105 transition-all duration-500 group relative overflow-hidden cursor-pointer"
      >
        {/* Ícone */}
        <div
          className="w-10 h-10 flex items-center justify-center 
                      bg-[#262626] 
                      rounded-lg text-purple-400 mb-4"
        >
          {icon}
        </div>

        {/* Título */}
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Botão */}
        <Link to={link}
         className="text-purple-400 text-sm hover:underline cursor-pointer">
          SAIBA MAIS →
        </Link>
      </div>
    </>
  );
};

export default Cards;
