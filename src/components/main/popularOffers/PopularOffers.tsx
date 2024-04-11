import { useState, useRef } from "react";
import { PopularTours } from ".././../../data/Data";
import style from "./PopularOffers.module.css";

const ItemWidth = 400;

function PopularOffers() {
  const [scroll, setScroll] = useState(0);

  function handleMovement(scrollAmount) {
    const newScroll = scroll + scrollAmount;
    setScroll(newScroll);
    Gref.current.scrollLeft += scrollAmount;
  }

  const Gref = useRef<HTMLDivElement>(null);

  return (
    <section className={style.container}>
      <h2>Popular Tour Offers</h2>

      <div className={style.actionBtns}>
        <button onClick={() => handleMovement(-ItemWidth)}>
          <i className={style.arrowLeft} />
        </button>
        <button onClick={() => handleMovement(ItemWidth)}>
          <i className={style.arrowRight} />
        </button>
      </div>

      <div ref={Gref} className={style.scrollWindow}>
        <div className={style.contentBox}>
          {PopularTours.map((item) => (
            <div>
              <img src={item.url} alt="" />
              <h3>{item.title}</h3>
              <p>{item.period}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularOffers;
