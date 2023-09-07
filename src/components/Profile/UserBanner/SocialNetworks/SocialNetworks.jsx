import { NavLink } from "react-router-dom";
import modules from "./SocialNetworks.module.css";

const Items = (props) => {
  return (
    <div className={modules.item}>
      <NavLink to={props.link}>
        <img className={modules.networkPic} src={props.src} />
      </NavLink>
    </div>
  );
};

const SocialNetworks = (props) => {
  let linksItems = [
    {
      id: 1,
      link: "https://vk.com/thewatersrisingpastmyeyes",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png",
    },
    {
      id: 2,
      link: "https://www.youtube.com",
      src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      id: 3,
      link: "https://www.instagram.com/daniellbili/",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    },
    {
      id: 4,
      link: "https://www.tiktok.com",
      src: "https://w7.pngwing.com/pngs/814/840/png-transparent-tiktok-tiktok-logo-tiktok-icon-thumbnail.png",
    }
  ];

  return (
    <div className={modules.socialnetworks}>
      <Items link={linksItems[0].link} src={linksItems[0].src} />
      <Items link={linksItems[1].link} src={linksItems[1].src} />
      <Items link={linksItems[2].link} src={linksItems[2].src} />
      <Items link={linksItems[3].link} src={linksItems[3].src} />
    </div>
  );
};

export default SocialNetworks;
