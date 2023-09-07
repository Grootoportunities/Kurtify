import Items from "./Items/Items";
import modules from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={modules.nav}>
      <Items/>
    </nav>
  );
};

export default Navbar;
