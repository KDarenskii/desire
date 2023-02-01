import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import ProcessItem from "./ProcessItem";

import "./styles.scss";

const Process: React.FC = () => {
    return (
        <section className="process">
            <Container>
                <SectionHeader 
                    title={'How it works'} 
                    className="process__header" 
                    align={'center'}
                />
                <div className="process__wrapper">
                    <ProcessItem
                        title="Designer Consultation"
                        text="Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche"
                        src="img/process/tool.svg"
                        stage="consultation"
                    />
                    <ProcessItem
                        title="Production"
                        text="Everyday carry actually neutra authentic kogi shabby chic"
                        src="img/process/sofa.svg"
                        stage="production"
                    />
                    <div className="process__line"></div>
                    <ProcessItem
                        title="Measurements"
                        text="Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche"
                        src="img/process/tape.png"
                        stage="measurements"
                    />
                    <ProcessItem
                        title="Delivery and Assembley"
                        text="Fanny pack church-key cornhole, banh mi thundercats gochujang keytar"
                        src="img/process/boxes.svg"
                        stage="delivery"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Process;
