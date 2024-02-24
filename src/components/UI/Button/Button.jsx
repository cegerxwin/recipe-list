import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.recipeModalButton}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
};
