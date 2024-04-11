import HorizontalBarItem from "../../horizontalBarItem/HorizontalBarItem";
import styles from "./Services.module.css";
import { ServicesData } from "../../../data/Data";
import { useState } from "react";

function Services() {
  const [popUp, setPopUp] = useState(false);

  return (
    <section className={styles.container}>
      <h2>Discover Our Services</h2>
      <p>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation bookings, and customized
        itineraries to individual preferences.
      </p>
      <p onClick={() => setPopUp(!popUp)} className={styles.popUp}>
        see all...
      </p>
      {popUp && (
        <div className={styles.popUpInput}>
          <button onClick={() => setPopUp(!popUp)}>X</button>
          <div className={styles.collections}>
            <img src="./image/image 5 (1).png" alt="" />
            <img src="./image/image 5 (2).png" alt="" />
            <img src="./image/image 5.png" alt="" />
            <img src="./image/image 5 (3).png" alt="" />
            <img src="./image/image 5 (1).png" alt="" />
            <img src="./image/image 5 (2).png" alt="" />
            <img src="./image/image 5.png" alt="" />
            <img src="./image/image 5 (3).png" alt="" />
            <img src="./image/image 5 (1).png" alt="" />
            <img src="./image/image 5 (2).png" alt="" />
            <img src="./image/image 5.png" alt="" />
            <img src="./image/image 5 (3).png" alt="" />
          </div>
        </div>
      )}

      <div className={styles.cardList}>
        {ServicesData.map((item) => (
          <HorizontalBarItem
            title={item.title}
            text={item.text}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
