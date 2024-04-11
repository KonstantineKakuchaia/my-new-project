import React, { useState } from "react";
import styles from "./TimeSlider.module.css";

function TimeSlider(props) {
  const [startTime, setStartTime] = useState(12);
  const [endTime, setEndTime] = useState(24);

  const handleStartTimeChange = (event) => {
    setStartTime(parseInt(event.target.value));
    props.setTimeRange({ mintime: startTime, maxtime: endTime });
  };

  const handleEndTimeChange = (event) => {
    setEndTime(parseInt(event.target.value));
    props.setTimeRange({ mintime: startTime, maxtime: endTime });
  };

  return (
    <section className={styles.priceRangeWindow}>
      <div>
        <p>
          {props.direction} - {props.destination}
        </p>
        <div className={styles.priceRange}>
          <span>{startTime}:00</span>
          <span>{endTime}:00</span>
        </div>
      </div>
      <div className={styles.priceSlider}>
        <input
          type="range"
          min="12"
          max="18"
          value={startTime}
          onChange={handleStartTimeChange}
          className={styles.slider}
        />
        <input
          type="range"
          min="18"
          max="24"
          value={endTime}
          onChange={handleEndTimeChange}
          className={styles.slider}
        />
      </div>
    </section>
  );
}

export default TimeSlider;
