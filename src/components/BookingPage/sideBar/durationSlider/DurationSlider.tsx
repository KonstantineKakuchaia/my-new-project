import React, { useState } from "react";
import styles from "./DurationSlider.module.css";

function DurationSlider(props) {
  const [startHours, setStarHours] = useState(7);
  const [endHours, setEndHours] = useState(30);

  const handleStartHourChange = (event) => {
    setStarHours(parseInt(event.target.value));
    props.setDurationRange({ minhours: startHours, maxhours: endHours });
  };

  const handleEndHourChange = (event) => {
    setEndHours(parseInt(event.target.value));
    props.setDurationRange({ minhours: startHours, maxhours: endHours });
  };

  return (
    <section className={styles.priceRangeWindow}>
      <div>
        <div className={styles.priceRange}>
          <span>{startHours}day</span>
          <span>{endHours}day</span>
        </div>
      </div>
      <div className={styles.priceSlider}>
        <input
          type="range"
          min="7"
          max="16"
          value={startHours}
          onChange={handleStartHourChange}
          className={styles.slider}
        />
        <input
          type="range"
          min="16"
          max="30"
          value={endHours}
          onChange={handleEndHourChange}
          className={styles.slider}
        />
      </div>
    </section>
  );
}

export default DurationSlider;
