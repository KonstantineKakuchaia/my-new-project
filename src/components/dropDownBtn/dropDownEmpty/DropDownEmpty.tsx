import styles from "./DropDownEmpty.module.css";
import { useState } from "react";

function DropDownEmpty(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.DropDownCard}>
      <div className={showMenu ? styles.dropDownOpen : styles.dropDownClose}>
        <div className={styles.dropDownInput}>{props.name}</div>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className={showMenu ? styles.dropDownArrowUp : styles.dropDownArrow}
        ></span>
      </div>
      {showMenu && <div className={styles.dropDownMenu}>{props.content}</div>}
    </div>
  );
}

export default DropDownEmpty;
