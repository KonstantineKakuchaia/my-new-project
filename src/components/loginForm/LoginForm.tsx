import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";

function LoginForm(props) {
  const [popUp, setPopUp] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const history = useHistory(); // Access the history object

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function userLogin() {
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (
      storedData.email === loginData.email &&
      storedData.password === loginData.password
    ) {
      props.onLoginSuccess();
      history.push("/booking"); // Redirect to the booking page
      console.log("Successfully logged in");
    } else {
      setErrors({
        ...errors,
        email: "Username is not correct",
        password: "Password is not correct",
      });
    }
  }

  return (
    <>
      <div className={styles.head}></div>
      <section className={styles.container}>
        <div className={styles.loginWindow}>
          <p>Email</p>
          <div>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <p>Password</p>
          <div>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <Button
            type="button"
            onClick={userLogin}
            name="LogIn"
            width="440px"
            height="50px"
          />
          <div className={styles.socMediaItems}>
            <span>
              <img src="./image/image 18.png" alt="" />
            </span>
            <span>
              <img src="./image/image 19.png" alt="" />
            </span>
            <span>
              <img src="./image/image 20.png" alt="" />
            </span>
            <span>
              <img src="./image/image 22.png" alt="" />
            </span>
            <div className={styles.element}>Or continue with</div>
          </div>
          <div className={styles.policy}>
            {popUp && (
              <div className={styles.popUpInput}>
                <div className={styles.collections}>
                  <h2>Terms and conditions</h2>
                  <p>
                    Before you use our website or services, please carefully
                    read the following Terms and Conditions. By accessing or
                    using our platform, you agree to comply with and be bound by
                    these terms. If you do not agree with any part of these
                    terms, please do not use our services. Your privacy is
                    important to us. Please review our Privacy Policy to
                    understand how we collect, use, and disclose information
                    about you. By using our services, you consent to our privacy
                    practices.
                  </p>
                  <h2>Privacy policy</h2>
                  <p>
                    We may collect personal information, such as your name,
                    email address, and other details, when you register an
                    account, make a purchase, or interact with our services. We
                    also automatically collect certain information, such as IP
                    addresses, browser type, and usage patterns, through cookies
                    and similar technologies. Our website may contain links to
                    third-party websites or services.
                  </p>
                </div>
                <button
                  onClick={() => setPopUp(!popUp)}
                  className={styles.popUpBtn}
                >
                  Agree
                </button>
              </div>
            )}
            <p>
              By signing in or creating an account, you agree with our{" "}
              <span
                onClick={() => setPopUp(!popUp)}
                className={styles.highlight}
              >
                Terms & conditions
              </span>{" "}
              and{" "}
              <span
                onClick={() => setPopUp(!popUp)}
                className={styles.highlight}
              >
                Privacy policy
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
