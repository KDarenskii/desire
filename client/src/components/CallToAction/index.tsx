import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

import "./styles.scss";

const CallToAction: React.FC = () => {
    return (
        <section className="call-to-action">
            <Container>
                <SectionHeader
                    title="Aesthetic ethical drinking"
                    subtitle="Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint"
                    hasUnderline={true}
                    className="call-to-action__content"
                    titleClassName="call-to-action__title"
                    subtitleClassName="call-to-action__subtitle"
                />
            </Container>
        </section>
    );
};

export default CallToAction;
