import styles from "./Container.module.css";
// 1
// It is a container for whole code.
const Container = ({ children }) => {
  return <div className={styles.cont}>{children}</div>;
};
export default Container;
