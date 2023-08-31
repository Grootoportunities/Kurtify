import MenuLink from "./MenuLink/MenuLink";
import modules from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={modules.nav}>
      <MenuLink
        src="https://www.freeiconspng.com/uploads/profile-user-outline-vector-icon--social-icons--icons-download-26.png"
        href="/profile"
        name="Profile"
      />
      <MenuLink
        src="https://img.icons8.com/?size=512&id=118377&format=png"
        href="/messages"
        name="Message"
      />
    </nav>
  );
};

export default Navbar;
