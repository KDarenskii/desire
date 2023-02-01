import React from "react";
import cn from "classnames";

import "./styles.scss";

type ProcessItemProps = {
    title: string;
    text: string;
    stage: "consultation" | "production" | "measurements" | "delivery";
    src: string;
};

const ProcessItem: React.FC<ProcessItemProps> = ({ title, text, stage, src }) => {
    return (
        <article className={cn('process-item', 'process-item--' + stage)}>
            <header className="process-item__header">
                <img className="process-item__img" src={src} alt="img" />
                <h5 className="process-item__title">{title}</h5>
            </header>
            <p className="process-item__text">{text}</p>
        </article>
    );
};

export default ProcessItem;
