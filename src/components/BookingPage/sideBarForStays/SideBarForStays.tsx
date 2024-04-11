import CheckBoxes from "./CheckBoxes/CheckBoxes";
import styles from "./SideBarForStays.module.css";
import { inputData } from "../../../data/Data";

function SideBarForStays(props) {
  return (
    <div className={styles.container}>
      <h3>Filter by:</h3>
      <div className={styles.starsHotel}>
        <ul>
          <li>
            <input
              type="checkbox"
              name="checkbox5"
              checked={props.checked.checkbox5}
              onChange={props.onChange}
            />
            <p>5 star</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="checkbox4"
              checked={props.checked.checkbox4}
              onChange={props.onChange}
            />
            <p>4 star</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="checkbox3"
              checked={props.checked.checkbox3}
              onChange={props.onChange}
            />
            <p>3 star</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="checkbox2"
              checked={props.checked.checkbox2}
              onChange={props.onChange}
            />
            <p>2 star</p>
          </li>
          <li>
            <input
              type="checkbox"
              name="checkbox1"
              checked={props.checked.checkbox1}
              onChange={props.onChange}
            />
            <p>1 star</p>
          </li>
        </ul>
      </div>
      {inputData.map((item, index) => (
        <>
          <p style={{ margin: "0px", padding: "20px 30px", fontSize: "24px" }}>
            {item.info}
          </p>
          <CheckBoxes data={item} />
        </>
      ))}
    </div>
  );
}
export default SideBarForStays;
