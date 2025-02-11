import styles from "./CloseButton.module.scss";

const CloseButton = () => {
    return (
        <button className={styles["close-button"]} >
            ✕
        </button>
    );
};

export default CloseButton;
