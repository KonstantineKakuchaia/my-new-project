import Button from "../Button/Button";
import styles from "./BookingPage.module.css";
import FlyList from "./flyList/FlyList";
import { flyData } from "../../data/Data";
import { useState } from "react";
import AsideBar from "./sideBar/AsideBar";
import StaysPage from "./staysPage/StaysPage";

function BookingPage() {
  const [changeStyle, setChengeStyle] = useState(false);
  const [changePage, setchangePage] = useState({
    flights: true,
    stays: false,
  });

  function handlePageChangetoStay() {
    setchangePage({ ...changePage, stays: true, flights: false });
  }
  function handlePageChangetoflights() {
    setchangePage({ ...changePage, stays: false, flights: true });
  }
  console.log(changePage);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    direct: false,
    oneStop: false,
    twoStop: false,
  });

  const [priceRange, setPriceRange] = useState({
    minprice: 0,
    maxprice: 3000, // Set an initial maximum price
  });

  const [timeRange, setTimeRange] = useState({
    mintime: 12,
    maxtime: 24,
  });

  const [durationRange, setDurationRange] = useState({
    minhours: 7,
    maxhours: 30,
  });
  console.log(timeRange.mintime);
  console.log(timeRange.maxtime);
  // console.log(priceRange.minprice);
  // console.log(priceRange.maxprice);

  function handleCheckboxChange(event) {
    const name = event.target.name;
    const checked = event.target.checked;

    setSelectedCheckboxes((selectedCheckboxes) => ({
      ...selectedCheckboxes,
      [name]: checked,
    }));
  }

  const filteredFlyData = flyData.filter((item) => {
    // Check if the flight matches the selected checkbox criteria
    const isMatchCheckbox =
      (!selectedCheckboxes.direct || item.stop === 0) &&
      (!selectedCheckboxes.oneStop || item.stop === 1) &&
      (!selectedCheckboxes.twoStop || item.stop === 2);

    const isPriceInRange =
      item.price >= priceRange.minprice && item.price <= priceRange.maxprice;

    const isTimeInRange =
      item.takeoff >= timeRange.mintime && item.takeoff <= timeRange.maxtime;

    const flightDuration = item.traveltime;
    const isDurationInRange =
      flightDuration >= durationRange.minhours &&
      flightDuration <= durationRange.maxhours;
    if (
      isMatchCheckbox &&
      isPriceInRange &&
      isTimeInRange &&
      isDurationInRange
    ) {
      return true;
    }

    return false;
  });

  return (
    <section className={styles.container}>
      <ul className={styles.navList}>
        <li onClick={handlePageChangetoflights}>Flights</li>
        <li onClick={handlePageChangetoStay}>Stays</li>
        <li>Car rentals</li>
        <li>Cruises</li>
        <li>Attractions</li>
      </ul>
      <div className={styles.travelFilter}>
        <div>
          <p>One-way</p>
          <span></span>
        </div>
        <div>
          <p>1 Adult</p>
          <span></span>
        </div>
        <div>
          <p>Economy</p>
          <span></span>
        </div>
      </div>
      <div className={styles.optionFilter}>
        <div>
          <input type="text" placeholder="From:" />

          <img src="./image/Plus.png" alt="" />
        </div>
        <div>
          <input type="text" placeholder="To:" />

          <img src="./image/Plus.png" alt="" />
        </div>
        <div>
          <input type="text" placeholder="Callendar" />

          <img src="./image/Plus.png" alt="" />
        </div>

        <Button name="search" width="230px" height="70px" />
      </div>

      {changePage.flights ? (
        <div className={styles.mainInfo}>
          <AsideBar
            setDurationRange={setDurationRange}
            setTimeRange={setTimeRange}
            setPriceRange={setPriceRange}
            onChange={handleCheckboxChange}
            checked={selectedCheckboxes.direct}
          />
          <div className={styles.flyListSide}>
            <div className={changeStyle ? styles.flyItemOpen : styles.flyItem}>
              {filteredFlyData.map((item, index) => (
                <FlyList value={item} key={index} />
              ))}
            </div>
            <Button
              onClick={() => setChengeStyle(!changeStyle)}
              name="Show more result"
              width="750px"
              height="70px"
            />
          </div>
        </div>
      ) : (
        <StaysPage />
      )}
    </section>
  );
}

export default BookingPage;
