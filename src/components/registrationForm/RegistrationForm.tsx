import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import style from "./RegistrationForm.module.css";
import Button from "../Button/Button";
import img1 from "../../images/ExploreEraBlack.png";
import img2 from "../../images/user_02.png";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    let error = "";
    switch (name) {
      case "email":
        error = !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
        break;
      case "password":
        error =
          value.length < 6 ? "Password must be at least 6 characters long" : "";
        break;
      case "confirmpassword":
        error = value !== formData.password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    // Update errors state
    setErrors({ ...errors, [name]: error });

    setFormData({ ...formData, [name]: value });
  }

  function submitData() {
    console.log(formData);

    for (const key in errors) {
      if (!errors[key]) {
        localStorage.setItem("userData", JSON.stringify(formData));
        // Redirect to login page upon successful registration
        props.history.push("/login");
        break; // Exit loop after successful registration
      }
    }
  }

  return (
    <>
      <div className={style.head}>
        <Link to="/">
          <img style={{ cursor: "pointer" }} src={img1} alt="" />
        </Link>

        <img src={img2} alt="" />
      </div>
      <section className={style.container}>
        <div className={style.loginWindow}>
          <p>First name</p>
          <input
            type="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />

          <p>Last name</p>
          <input
            type="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          <p>Email</p>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email === "Invalid email address" && (
              <p className={style.error}>Invalid email address</p>
            )}
          </div>
          <p className={style.warningPanel}>Password</p>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password ===
              "Password must be at least 6 characters long" && (
              <p className={style.error}>
                Password must be at least 6 characters long
              </p>
            )}
          </div>
          <p>Confirm the password</p>
          <div>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
            {errors.confirmpassword === "Passwords do not match" && (
              <p className={style.error}>Passwords do not match</p>
            )}
          </div>
          <Button
            type="button"
            onClick={submitData}
            name="Continue"
            width="450px"
            height="50px"
          />

          <div className={style.socMediaItems}>
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
            <div className={style.element}>Or continue with</div>
          </div>
          <div className={style.policy}>
            <p>
              By signing in or creating an account, you agree with our{" "}
              <span className={style.highlight}>Terms & conditions</span> and{" "}
              <span className={style.highlight}>Privacy policy</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationForm;
