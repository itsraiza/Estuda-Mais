import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Nav from "./Nav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0F0F1A]/80 backdrop-blur-md border border-white/10 rounded-2xl sticky top-4 p-3 max-w-6xl mx-auto shadow-md">
        <div className="flex justify-between items-center px-6">
          <a href="/">
            <h1 className="text-2xl font-bold cursor-pointer bg-linear-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Estuda+
            </h1>
          </a>
          <Nav />

          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <IoIosMenu size={24} color="white" cursor="pointer" />
          </button>

          {menuOpen && (
            <div className="sm:hidden absolute right-0 top-full bg-[#0F0F1A]/80 p-4  shadow-md w-[50%] h-[50vh] rounded-2xl">
              <nav>
                <ul className="text-white flex flex-col justify-between items-center gap-10 p-4 underline-offset-8">
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        `hover:text-fuchsia-400 ${isActive ? "underline text-fuchsia-400" : ""}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/plano"}
                      className={({ isActive }) =>
                        `hover:text-fuchsia-400 ${isActive ? "underline text-fuchsia-400" : ""}`
                      }
                    >
                      Plano de Estudo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/estudo"}
                      className={({ isActive }) =>
                        `hover:text-fuchsia-400 ${isActive ? "underline text-fuchsia-400" : ""}`
                      }
                    >
                      Sala de Estudos
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
