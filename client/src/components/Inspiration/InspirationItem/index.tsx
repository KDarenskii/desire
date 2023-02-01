import React from "react";

import "./styles.scss";

type InspirationProps = {
    title: string;
    width: string;
}

const InspirationItem: React.FC<InspirationProps> = ({ title, width }) => {
    return (
        <li className="inspiration-item">
            <div className="inspiration-item__header">
                <h5 className="inspiration-item__title">{title}</h5>
                <div className="inspiration-item__percent">{width}%</div>
            </div>
            <div className="inspiration-item__line" style={{ width: `${width}%` }}></div>
        </li>
    );
};

export default InspirationItem;
