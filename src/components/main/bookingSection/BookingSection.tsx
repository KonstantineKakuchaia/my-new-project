import DropDownBtn from "../../dropDownBtn/DropDownBtn";
import style from "./BookingSection.module.css";
import { locations } from "../../../data/Data";
import Button from "../../Button/Button";

function BookingSection() {
  return (
    <section className={style.container}>
      <h2>Ready To Book A Trip?</h2>
      <div className={style.itemCards}>
        <DropDownBtn
          placeholder={"Your starting location"}
          dropdownValue={locations}
        />
        <DropDownBtn
          placeholder={"Choose a tour offer"}
          dropdownValue={locations}
        />
        <DropDownBtn placeholder={"Choose date"} dropdownValue={locations} />
        <DropDownBtn placeholder={"Persons"} dropdownValue={locations} />
        <Button name="Book Now" width="1580px" height="98px" />
      </div>
    </section>
  );
}
export default BookingSection;
