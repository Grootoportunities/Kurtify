import modules from "./Posts.module.css";

const Post = (props) => {
  return (
    <div className={modules.post}>
      <img className={modules.ava} src={props.ava} />
      <div className={modules.name}>{props.name}</div>
      <div className={modules.postInfo}>{props.data}</div>
    </div>
  );
};

const Posts = (props) => {
  let postsData = [
    { data: "Здарова бандиты" },
    { data: "Шас я вас захуярю нахуй" },
    { data: "Люблю тебя" },
  ];

  let namesData = [{ name: "Daniil Lameika" }, { name: "Anastasia Lameika" }];

  let avaData = [
    {
      ava: "https://www.okino.ua/media/var/cache/1f/38/1f384035ed52a0da3e42f52ba443ac58.jpg",
    },
    {
      ava: "https://sun9-79.userapi.com/impg/cqvCRt-EzV2e2sgDTRu_RYmchn8W_srzZYjMgg/DERMVFw9NtY.jpg?size=953x1080&quality=95&sign=117ac4dadddd2160a424d994f3551217&type=album",
    },
  ];

  return (
    <div className={modules.posts}>
      <Post
        ava={avaData[0].ava}
        name={namesData[0].name}
        data={postsData[0].data}
      />
      <div className={modules.buttons}>
        <button className={modules.likeButton}>
          <img
            className={modules.likePic}
            src="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png"
          ></img>
        </button>
        <span className={modules.likesCounter}>15</span>
        <button className={modules.repostButton}>
          <img
            className={modules.repostPic}
            src="https://www.svgrepo.com/show/334212/repost.svg"
          ></img>
        </button>
        <span className={modules.repostsCounter}>9</span>
      </div>
      <Post
        ava={avaData[1].ava}
        name={namesData[1].name}
        data={postsData[2].data}
      />
      <Post
        ava={avaData[0].ava}
        name={namesData[0].name}
        data={postsData[1].data}
      />
    </div>
  );
};

export default Posts;
