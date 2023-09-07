import modules from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={modules.logo}>
      <img
        className={modules.logoPic}
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
      />
      <div className={modules.logoName}>Kurtify</div>
    </div>
  );
};

export default Logo;
