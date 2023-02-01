import React from "react";
import Container from "../Container";
import cn from "classnames";

import "./styles.scss";

type PartnersProps = {
    className?: string;
};

const Partners: React.FC<PartnersProps> = ({ className }) => {
    return (
        <div className={cn("partners", className)}>
            <Container>
                <div className="partners__wrapper">
                    <img className="partners__img" src="img/partners/1.svg" alt="img" />
                    <img className="partners__img" src="img/partners/2.svg" alt="img" />
                    <img className="partners__img" src="img/partners/1.svg" alt="img" />
                    <img className="partners__img" src="img/partners/2.svg" alt="img" />
                    <img className="partners__img" src="img/partners/1.svg" alt="img" />
                </div>
            </Container>
        </div>
    );
};

export default Partners;
