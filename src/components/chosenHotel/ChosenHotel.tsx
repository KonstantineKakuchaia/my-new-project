import styles from "./ChosenHotel.module.css";
import ChosenHotelMain from "./chosenHotelMain/ChosenHotelMain";
import ChosenHotelSideBar from "./chosenHotelSideBar/ChosenHotelSideBar";

function ChosenHotel() {
  return (
    <section className={styles.container}>
      <ChosenHotelSideBar />
      <ChosenHotelMain />
    </section>
  );
}

export default ChosenHotel;
