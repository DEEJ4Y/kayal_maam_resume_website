import styles from "./Toggler.module.css";

const Toggler = (props) => {
  return (
    <div
      style={props.style ? props.style : {}}
      onMouseEnter={props.onMouseEnter ? props.onMouseEnter : () => {}}
      onClick={props.onClick ? props.onClick : () => {}}
      className={styles["toggler"]}
      data-aos={props.dataAos}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? props.size : "24"}
        height={props.size ? props.size : "24"}
        fill="#000"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
};

export default Toggler;
