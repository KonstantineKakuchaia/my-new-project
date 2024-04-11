import SideBarForStays from "../sideBarForStays/SideBarForStays";
import HotelList from "./HotelList/HotelList";
import styles from "./StaysPage.module.css";
import { hotels } from "../../../data/Data";
import { useState } from "react";

function StaysPage(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  console.log(selectedCheckboxes);

  function handleSelecdetCheckboxes(event) {
    const name = event.target.name;
    const checked = event.target.checked;

    setSelectedCheckboxes({ ...selectedCheckboxes, [name]: checked });
  }

  const newHotelArr = hotels.filter((item) => {
    if (
      !selectedCheckboxes.checkbox1 &&
      !selectedCheckboxes.checkbox2 &&
      !selectedCheckboxes.checkbox3 &&
      !selectedCheckboxes.checkbox4 &&
      !selectedCheckboxes.checkbox5
    )
      return true;
    if (selectedCheckboxes.checkbox1 && item.rating === 1) {
      return true;
    } else if (selectedCheckboxes.checkbox2 && item.rating === 2) {
      return true;
    } else if (selectedCheckboxes.checkbox3 && item.rating === 3) {
      return true;
    } else if (selectedCheckboxes.checkbox4 && item.rating === 4) {
      return true;
    } else if (selectedCheckboxes.checkbox5 && item.rating === 5) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <section className={styles.container}>
      <SideBarForStays
        checked={selectedCheckboxes}
        onChange={handleSelecdetCheckboxes}
      />
      <div className={styles.hotelList}>
        {newHotelArr.map((item, index) => (
          <HotelList key={index} rating={item.rating} data={item} />
        ))}
      </div>
    </section>
  );
}

export default StaysPage;
