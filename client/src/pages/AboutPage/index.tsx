import React from "react";
import About from "../../components/About";
import Collection from "../../components/Collection";
import Container from "../../components/Container";
import Inspiration from "../../components/Inspiration";
import Partners from "../../components/Partners";

import "./styles.scss";

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <About />
            <Inspiration />
            <Partners className="about-page__partners" />
            <Container type="fluid">
                <Collection className="about-page__collection" />
            </Container>
        </div>
    );
};

export default AboutPage;
