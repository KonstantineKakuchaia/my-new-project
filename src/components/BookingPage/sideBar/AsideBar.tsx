import DropDownEmpty from "../../dropDownBtn/dropDownEmpty/DropDownEmpty";
import styles from "./AsideBar.module.css";
import PriceSlider from "./priceSlider/PriceSlider";
import TimeSlider from "./timeSlider/TimeSlider";
import DurationSlider from "./durationSlider/DurationSlider";
import { randomData } from "../../../data/Data";

function AsideBar(props) {
  return (
    <section className={styles.container}>
      <div className={styles.options}>
        <p>Cheapest</p>
        <p className={styles.quickest}>Quickest</p>
        <p>best</p>
      </div>
      <div className={styles.filterSecion}>
        <div className={styles.filters}>
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Stops"
            content={
              <ul>
                <li>
                  <input
                    type="checkbox"
                    onChange={props.onChange}
                    checked={props.checked.direct}
                    name="direct"
                  />
                  <p>Direct</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={props.onChange}
                    checked={props.checked.oneStop}
                    name="oneStop"
                  />
                  <p>One stop</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={props.onChange}
                    checked={props.checked.twoStop}
                    name="twoStop"
                  />
                  <p>Two stop</p>
                </li>
              </ul>
            }
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Times"
            content={
              <div>
                <TimeSlider
                  direction="Take off"
                  destination="Tbilisi"
                  setTimeRange={props.setTimeRange}
                />
                <TimeSlider
                  direction="Take off"
                  destination="Paris"
                  setTimeRange={props.setTimeRange}
                />
              </div>
            }
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Airlines"
            content={
              <ul>
                {randomData.map((item) => (
                  <li>{item.city}</li>
                ))}
              </ul>
            }
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Airports"
            content={
              <ul>
                {randomData.map((item) => (
                  <li>
                    {item.city}
                    {item.country}
                  </li>
                ))}
              </ul>
            }
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Duration"
            content={
              <DurationSlider setDurationRange={props.setDurationRange} />
            }
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Price"
            content={<PriceSlider setPriceRange={props.setPriceRange} />}
          />
          <DropDownEmpty
            width="20px"
            height="20px"
            name="Price Calculator"
            content={
              <ul>
                <li className={styles.paymentList}>
                  <span className={styles.cardSpan}>
                    <img src="./image/Handbag.png" alt="icon" />{" "}
                    <p>Payment method</p>
                  </span>
                  <input
                    type="text"
                    style={{ width: "350px", height: "50px" }}
                  />
                </li>
                <li className={styles.paymentList}>
                  <span className={styles.cardSpan}>
                    <img src="./image/Credit_Card_01.png" alt="icon" />{" "}
                    <p>Carry-on bag</p>
                  </span>
                  <input
                    type="text"
                    style={{ width: "350px", height: "50px" }}
                  />
                </li>
                <li className={styles.paymentList}>
                  <span className={styles.cardSpan}>
                    <img src="./image/Suitcase.png" alt="icon" />{" "}
                    <p>Checked bag</p>
                  </span>
                  <input
                    type="text"
                    style={{ width: "350px", height: "50px" }}
                  />
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default AsideBar;
