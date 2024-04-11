import styles from "./CheckBoxes.module.css";

function CheckBoxes(props) {
  return (
    <section className={styles.container}>
      <ul>
        <li>
          <input type="checkbox" name="checkbox1" />
          <p>{props.data.info1}</p>
        </li>
        <li>
          <input type="checkbox" name="checkbox2" />
          <p>{props.data.info2}</p>
        </li>
        <li>
          <input type="checkbox" name="checkbox3" />
          <p>{props.data.info3}</p>
        </li>
        <li>
          <input type="checkbox" name="checkbox4" />
          <p>{props.data.info4}</p>
        </li>
        <li>
          <input type="checkbox" name="checkbox5" />
          <p>{props.data.info5}</p>
        </li>
      </ul>
    </section>
  );
}
export default CheckBoxes;
