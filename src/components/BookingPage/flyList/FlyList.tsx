import styles from "./FlyList.module.css";

function FlyList(props) {
  return (
    <section className={styles.container}>
      <div className={styles.company}>
        <img src="./image/image 7.png" alt="logo" />
        <p>Georgian Airlines</p>
      </div>
      <div>
        <div className={styles.flyTime}>
          <p>Take off</p>
          <p>Landing</p>
        </div>
        <div className={styles.flyTimeVisual}>
          <p>12:00</p>
          <div className={styles.line}>
            {props.value.stop === 1 ? (
              <span className={styles.oneMark}></span>
            ) : props.value.stop === 2 ? (
              <>
                <span className={styles.twoMark}></span>
                <span className={styles.threeMark}></span>
              </>
            ) : null}
          </div>
          <p>19:00</p>
          <p>{props.value.traveltime} Hours</p>
        </div>
      </div>
      <div className={styles.priceSection}>
        <div className={styles.price}>
          <p>Price</p> <p>{props.value.price} $</p>
        </div>
        <button className={styles.btn}>View Deal</button>
      </div>
    </section>
  );
}

export default FlyList;
