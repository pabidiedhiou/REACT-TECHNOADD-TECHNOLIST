import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "lienactive" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "lienactive" : undefined)}
          >
            Add Techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "lienactive" : undefined)}
          >
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
