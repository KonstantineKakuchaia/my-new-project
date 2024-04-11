import styles from "./ChosenHotelMain.module.css";

function ChosenHotelMain() {
  return (
    <section className={styles.container}>
      <div className={styles.mainHead}>
        <div>
          <h2>New Zealand Resort</h2>
          <p>54 Street, Auckland, New Zealand</p>
        </div>
        <div>
          <p>Rating</p>
          <img src="./image/Frame 217.png" alt="" />
          <img src="./image/Frame 131.png" alt="" />
        </div>
      </div>
      <div className={styles.collection}>
        <img className={styles.mineImg} src="./image/image 177.png" alt="" />
        <div className={styles.secColection}>
          <img src="./image/image 115.png" alt="" />{" "}
          <img src="./image/image 117.png" alt="" />
        </div>
      </div>
      <div className={styles.thirdColection}>
        <img src="./image/image 113.png" alt="" />
        <img src="./image/image 114.png" alt="" />
        <img src="./image/image 112.png" alt="" />
        <img src="./image/image 111.png" alt="" />
      </div>
      <div className={styles.btnSection}>
        <div>
          <button className={styles.priceBtn}>Price: 400$ </button>
          <button className={styles.priceBtn}>Total price: 3200$</button>
        </div>

        <button className={styles.bookBtn}>Book now</button>
      </div>
      <p className={styles.info}>
        Near beach, with private beach area and private pool. Property has
        terrace, kitchen, 1 master bedroom, 2 bathrooms, living room, backyard,
        kids play space and private billiard room, where refined leisure and
        competitive spirit converge seamlessly. Experience a retreat like no
        other, where every corner exudes elegance, making your stay a harmonious
        blend of indulgence and relaxation.
      </p>
    </section>
  );
}

export default ChosenHotelMain;
