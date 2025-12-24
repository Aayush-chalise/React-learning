import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onBtnClicked }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((name) => (
        <button
          onClick={(event) => onBtnClicked(name, event)}
          key={name}
          className={styles.button}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
