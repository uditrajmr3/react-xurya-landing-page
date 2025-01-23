import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "footer"]),
  onClick: PropTypes.func,
  children: PropTypes.any,
};

function Button({ type, onClick, children }) {
  return (
    <button onClick={onClick} className={getButtonStyles(type)}>
      {children}
    </button>
  );
}

function getButtonStyles(type) {
  switch (type) {
    case "primary":
      return styles.buttonPrimary;
    case "secondary":
      return styles.buttonSecondary;
    case "footer":
      return styles.buttonFooter;
    default:
      throw new Error("Unknown type");
  }
}

export default Button;
