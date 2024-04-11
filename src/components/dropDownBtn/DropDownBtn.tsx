import { useState, useEffect } from "react";
import style from "./DropDownBtn.module.css";

function DropDownBtn(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [val, setVal] = useState("");
  const [chosenVal, setChosenVal] = useState(null);

  useEffect(() => {
    if (chosenVal !== null) {
      const newVal =
        props.dropdownValue[chosenVal].city +
        " " +
        props.dropdownValue[chosenVal].country;
      setVal(newVal);
    }
  }, [chosenVal, props.dropdownValue]);

  function chooseVal(index) {
    setChosenVal(index);
    setShowMenu(false);
  }

  return (
    <div className={style.DropDownCard}>
      <div className={showMenu ? style.dropDownOpen : style.dropDownClose}>
        <input
          value={val}
          className={style.dropDownInput}
          type="text"
          placeholder={props.placeholder}
        />
        <span
          onClick={() => setShowMenu(!showMenu)}
          className={!showMenu ? style.dropDownArrow : style.dropDownArrowUp}
        ></span>
      </div>
      {showMenu && (
        <div className={style.dropDownMenu}>
          <ul>
            {props.dropdownValue.map((item, index) => (
              <li
                onClick={() => {
                  chooseVal(index);
                }}
                key={index}
              >
                {item.city},{item.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownBtn;
