import { NavLink } from "react-router-dom";
import modules from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={modules.dialog + " " + modules.active}>
      <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={modules.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Daniil" },
    { id: 2, name: "Anastasia" },
  ];

  let messagesData = [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Люблю тебя ^~^" },
  ];

  return (
    <div className={modules.dialogs}>
      <div className={modules.dialogItems}>
        <div className={modules.dialogItem}>
          <NavLink
            to="/messages/*"
            className={({ isActive }) =>
              isActive ? modules.active : undefined
            }
          >
            Daniil
          </NavLink>
        </div>
        <div className={modules.dialogItem}>Anastasia</div>
      </div>
      <div className={modules.messages}>
        <div className={modules.messageItem}>Привет!</div>
        <div className={modules.messageItem}>Люблю тебя ^~^</div>
      </div>
    </div>
  );
};

export default Dialogs;
