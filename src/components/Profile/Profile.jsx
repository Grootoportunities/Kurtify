import modules from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={modules.profile}>
      <p>
        <img src="https://cloudmakers.ru/wp-content/uploads/2018/08/13.jpg" className = {modules.banner}></img>
      </p>
    </div>
  );
};

export default Profile;
