import { BlogsData } from "../../../data/Data";
import style from "./Blogs.module.css";

function Blogs() {
  return (
    <section className={style.container}>
      <h2>Blogs</h2>
      <div className={style.BlogsItemBar}>
        {BlogsData.map((item) => (
          <div>
            <img src={item.url} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}{" "}
      </div>
    </section>
  );
}

export default Blogs;
