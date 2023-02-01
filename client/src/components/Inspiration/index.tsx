import React from "react";
import SectionHeader from "../SectionHeader";
import InspirationItem from "./InspirationItem";

import "./styles.scss";

const Inspiration: React.FC = () => {
    return (
        <section className="inspiration">
        <div className="inspiration__wrapper">
            <img className="inspiration__img" src="img/inspiration/chair.png" alt="img" />
            <div className="inspiration__content">
                <SectionHeader 
                    title="Our Inspiration in details"
                    subtitle="Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar."
                    hasUnderline={true}
                    className="inspiration__header"
                    titleClassName="inspiration__title"
                />
                <ul className="inspiration__list">
                    <InspirationItem title="Design and technical drawings" width="80" />
                    <InspirationItem title="Measurments" width="70" />
                    <InspirationItem title="Furniture functionality analysis" width="75" />
                    <InspirationItem title="Interior visualization" width="40" />
                </ul>
            </div>

        </div>
    </section>
    )
};

export default Inspiration;
