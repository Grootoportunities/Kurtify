import modules from "./Profile.module.css";
import UserBanner from "./UserBanner/UserBanner";

const Profile = (props) => {
  return (
    <div className={modules.profile}>
      <UserBanner />
    </div>
  );
};

export default Profile;
