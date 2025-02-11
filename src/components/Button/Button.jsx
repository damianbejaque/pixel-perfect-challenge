import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ text, variant, isHovered, disabled }) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${isHovered ? styles.hovered : ""} ${disabled ? styles.disabled : ""}`}
            disabled={disabled}
        >
            {variant === "icon" && <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>}
            <span>{text}</span>
        </button >
    );
};
Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    isHovered: PropTypes.bool,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    isHovered: false
};

export default Button;
