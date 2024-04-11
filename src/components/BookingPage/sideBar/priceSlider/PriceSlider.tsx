import React, { useState } from "react";
import styles from "./PriceSlider.module.css";

function PriceSlider(props) {
  const [startPrice, setStartPrice] = useState(700);
  const [endPrice, setEndPrice] = useState(3000);

  const handleStartPriceChange = (event) => {
    setStartPrice(parseInt(event.target.value));
    props.setPriceRange({ minprice: startPrice, maxprice: endPrice });
  };

  const handleEndPriceChange = (event) => {
    const newEndPrice = parseInt(event.target.value);
    setEndPrice(newEndPrice);
    props.setPriceRange({ minprice: startPrice, maxprice: endPrice });
  };

  return (
    <section className={styles.priceRangeWindow}>
      <div>
        <div className={styles.priceRange}>
          <span>{startPrice}$</span>
          <span>{endPrice}$</span>
        </div>
      </div>
      <div className={styles.priceSlider}>
        <input
          type="range"
          min="0"
          max="1500"
          value={startPrice}
          onChange={handleStartPriceChange}
          className={styles.slider}
        />
        <input
          type="range"
          min="1500"
          max="3000"
          value={endPrice}
          onChange={handleEndPriceChange}
          className={styles.slider}
        />
      </div>
    </section>
  );
}

export default PriceSlider;
