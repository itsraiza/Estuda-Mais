import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* LOGO / NOME */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer">
          Estuda+
        </h2>
        

        {/* LINKS */}
        <div className="flex gap-6 items-center text-white text-sm">
          <a href="/" className="hover:text-fuchsia-400 transition">
            Home
          </a>
          <a href="/plano" className="hover:text-fuchsia-400 transition">
            Plano de Estudo
          </a>
          <a href="/agente" className="hover:text-fuchsia-400 transition">
            Sala de Estudos
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Estuda+. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
