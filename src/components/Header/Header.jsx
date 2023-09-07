import Authorization from "./Authorization/Authorization";
import modules from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={modules.header}>
      <Authorization />
    </header>
  );
};

export default Header;
