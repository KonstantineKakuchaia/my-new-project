import style from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={style.btn}
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
