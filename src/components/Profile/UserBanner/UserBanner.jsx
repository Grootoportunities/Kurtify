import SocialNetworks from "./SocialNetworks/SocialNetworks";
import modules from "./UserBanner.module.css";

const UserBanner = (props) => {
  return (
    <div>
      <div
        className={modules.banner}
        style={{
          backgroundImage:
            "url('https://cloudmakers.ru/wp-content/uploads/2018/08/13.jpg')",
          height: "50vh",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1000px",
          height: "340px",
          marginTop: "100px",
          marginLeft: "150px",
        }}
      >
        <img
          className={modules.ava}
          src="https://www.okino.ua/media/var/cache/1f/38/1f384035ed52a0da3e42f52ba443ac58.jpg"
        ></img>
        <div className={modules.info}>
          <div className={modules.profileName}>Daniil Lameika</div>
          <div className={modules.country}>Belarus</div>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
