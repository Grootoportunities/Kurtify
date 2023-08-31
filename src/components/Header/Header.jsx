import modules from "./Header.module.css";
import LoginButton from "./LoginButton/LoginButton";

const Header = (props) => {
  return (
    <header className={modules.header}>
      <LoginButton />
    </header>
  );
};

export default Header;
