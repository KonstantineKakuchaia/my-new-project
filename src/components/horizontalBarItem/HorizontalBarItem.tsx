import style from "./HorizontalBarItem.module.css";

function HorizontalBarItem(props) {
  return (
    <div className={style.itemCard}>
      <img src={props.url} alt="ServicesItem" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
export default HorizontalBarItem;
