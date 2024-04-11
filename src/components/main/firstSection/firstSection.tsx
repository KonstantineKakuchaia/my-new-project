import style from "./firstSection.module.css";
import Button from "../../Button/Button";

function FirstSection() {
  return (
    <section className={style.container}>
      <div>
        <h2>Visit Mountains In</h2>
        <h1>ITALY</h1>
        <Button name="See offer" />
      </div>
    </section>
  );
}

export default FirstSection;
