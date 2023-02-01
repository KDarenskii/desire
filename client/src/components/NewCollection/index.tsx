import React from "react";
import Collection from "../Collection";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

import "./styles.scss";

const NewCollection: React.FC = () => {
    return (
        <section className="new-collection">
            <Container type={"fluid"}>
                <SectionHeader
                    className="new-collection__header"
                    title="Furniture new collection"
                    subtitle="Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint"
                    hasUnderline={true}
                    align={"center"}
                    titleClassName="new-collection__title"
                    underlineClassName="new-collection__title-underline"
                />
                <Collection wrapperClassName="new-collection__wrapper" />
            </Container>
        </section>
    );
};

export default NewCollection;
