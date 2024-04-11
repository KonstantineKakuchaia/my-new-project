import style from "./Footer.module.css";

function Footer() {
  return (
    <section className={style.container}>
      <div className={style.socMedia}>
        <img src="./image/ExploreEra (2).png" alt="logo" />
        <p>Travel agency which helps you to plan your perfect holidays</p>
        <h3>Follow us</h3>
        <span>
          <img src="./image/Vector.png" alt="socmedia link" />
          <img src="./image/Vector (1).png" alt="socmedia link" />
          <img src="./image/Vector (2).png" alt="socmedia link" />
        </span>
      </div>
      <div className={style.links}>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Our services</a>
          </li>
          <li>
            <a href="/">Our offers</a>
          </li>
        </ul>
      </div>
      <div className={style.contactList}>
        <h3>Contact us</h3>
        <p>exploreera@gmail.com</p>
        <p>555111222</p>
        <h3>Subscribe news</h3>
        <span>
          <input type="text" placeholder="Email" />
          <img src="./image/send.png" alt="send btn" />
        </span>
      </div>
    </section>
  );
}

export default Footer;
