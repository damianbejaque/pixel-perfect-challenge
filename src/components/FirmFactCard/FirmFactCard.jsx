import PropTypes from "prop-types";
import styles from "./FirmFactCard.module.scss";
import React, { useState } from "react";

const FirmFactCard = ({ variant, className = "", children }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles.card} ${styles[variant]} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isHovered })
            )}
        </div>
    );
};
FirmFactCard.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default FirmFactCard;
