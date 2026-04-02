import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="max-sm:hidden">
        <ul className="text-white flex gap-6 underline-offset-8">
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
    </>
  );
};

export default Nav;
