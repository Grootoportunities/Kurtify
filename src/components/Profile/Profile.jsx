import Posts from "./Posts/Posts";
import modules from "./Profile.module.css";
import UserBanner from "./UserBanner/UserBanner";

const Profile = (props) => {
  return (
    <div className={modules.profile}>
      <UserBanner />
      <p>
        <div className={modules.postMenu}>POSTS</div>
      </p>
      <Posts />
    </div>
  );
};

export default Profile;
