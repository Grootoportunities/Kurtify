import { NavLink } from "react-router-dom";
import modules from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={modules.nav}>
      <div className={modules.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
