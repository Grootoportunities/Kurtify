import modules from "./MenuLink.module.css";

const MenuLink = (props) => {
  return (
    <div className={modules.menulink}>
      <img className={modules.menupic} src={props.src}></img>
      <a className={modules.item} href={props.href}>
        {props.name}
      </a>
    </div>
  );
};

export default MenuLink;
