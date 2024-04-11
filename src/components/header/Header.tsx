import { useState } from "react";
import image1 from "../../images/ExploreEra.png";
import image2 from "../../images/ExploreEraBlack.png";
import image3 from "../../images/User_01.png";
import image4 from "../../images/user_02.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  const [loginDropDown, setLoginDropDown] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  });

  return (
    <nav className={styles.container}>
      <div className={changeColor ? styles.itemlistScroll : styles.itemList}>
        <Link to="/">
          <img src={changeColor ? image2 : image1} alt="logo" />
        </Link>

        <ul>
          <li>
            <a
              style={changeColor ? { color: "black" } : { color: "white" }}
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={changeColor ? { color: "black" } : { color: "white" }}
              href="/"
            >
              About us
            </a>
          </li>
          <li>
            <a
              style={changeColor ? { color: "black" } : { color: "white" }}
              href="/"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              style={changeColor ? { color: "black" } : { color: "white" }}
              href="/"
            >
              Our services
            </a>
          </li>
          <li>
            <a
              style={changeColor ? { color: "black" } : { color: "white" }}
              href="/"
            >
              Our offers
            </a>
          </li>

          <button onClick={() => setLoginDropDown(!loginDropDown)}>
            <img src={changeColor ? image4 : image3} alt="icon" />
          </button>
        </ul>
      </div>

      {loginDropDown && (
        <div className={styles.loginDropDown}>
          {!props.loginPage ? (
            <div>
              <Link to="/login">
                <button>Sign in</button>
              </Link>
              <Link to="/registration">
                <button>Sign up</button>
              </Link>
            </div>
          ) : (
            <Link to="/registration">
              <button>Sign out</button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
