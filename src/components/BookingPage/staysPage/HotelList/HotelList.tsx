import React from "react";
import styles from "./HotelList.module.css";
import { Link } from "react-router-dom";

const HotelList = (props) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<img key={i} src="./image/Star 5.png" alt="star" />);
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      <img className={styles.hotelImg} src={props.data.img} alt="hotel" />
      <div className={styles.contentFlex}>
        <div className={styles.content}>
          <div>
            <h2>{props.data.hotel}</h2>
            <h3>{props.data.country}</h3>
            <h4>{props.data.address}</h4>
          </div>
          <div className={styles.priceSide}>
            <p>Rating:</p>
            <span>{renderStars()}</span>
            <p>Price</p>
            <p>{props.data.price}</p>
          </div>
        </div>
        <Link to="/chosen">
          <button className={styles.hottelListbutton}>Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default HotelList;
