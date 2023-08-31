import modules from "./SidebarToggle.module.css";

const SideBarToggle = (props) => {
  return (
    <div className={modules.sidebartoggle}>
      <img
        className={modules.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
      ></img>
      <div className = {modules.companyname}>
        Kurtify
      </div>
    </div>
  );
};

export default SideBarToggle;
