import styles from "./FirmFacts.module.scss";
import FirmFactCard from "../FirmFactCard/FirmFactCard";
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";

const FirmFacts = () => {
    return (
        <div className={styles.container}>
            <CloseButton />
            <h1 className={styles.title}>Firm Facts</h1>
            <hr className={styles.line} />
            <div className={styles["grid-container"]}>
                <FirmFactCard variant="default" className={styles["div1"]}>
                    <Button text="This is a two line button that terminates with..." variant="icon" />
                </FirmFactCard>
                <FirmFactCard variant="default" >
                    <Button text="This is a two line button that terminates with..." variant="icon" />
                </FirmFactCard>
                <FirmFactCard variant="default" >
                    <Button text="This is a two line button that terminates with..." variant="default" />
                </FirmFactCard>
                <FirmFactCard variant="default" >
                    <Button text="This is a two line button that terminates with..." variant="icon" />
                </FirmFactCard>
                <FirmFactCard variant="default" >
                    <Button text="This is a two line button that terminates with..." variant="icon" />
                </FirmFactCard>
                <FirmFactCard variant="default" >
                    <Button text="This is a two line button that terminates with..." variant="icon" disabled />
                </FirmFactCard>
                <FirmFactCard variant="border" >
                    <Button text="This is a two line button that terminates with..." variant="icon" />
                </FirmFactCard>

            </div>
        </div>
    );
};
export default FirmFacts;
