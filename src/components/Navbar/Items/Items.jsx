import { NavLink } from "react-router-dom";
import modules from "./Items.module.css";

const ItemLinks = (props) => {
  return (
    <div className={modules.item}>
      <img className={modules.itemPic} src={props.link} />
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? modules.active : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Items = (props) => {
  let itemsData = [
    {
      id: 1,
      link: "https://www.freeiconspng.com/uploads/profile-user-outline-vector-icon--social-icons--icons-download-26.png",
      path: "/profile",
      name: "Profile",
    },
    {
      id: 2,
      link: "https://www.svgrepo.com/download/70038/message.svg",
      path: "/messages",
      name: "Message",
    },
  ];

  return (
    <div className={modules.items}>
      <ItemLinks
        link={itemsData[0].link}
        path={itemsData[0].path}
        name={itemsData[0].name}
      />
      <ItemLinks
        link={itemsData[1].link}
        path={itemsData[1].path}
        name={itemsData[1].name}
      />
    </div>
  );
};

export default Items;
