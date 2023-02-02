import React from "react";
import Container from "../Container";
import Post from "../Post";
import SectionHeader from "../SectionHeader";

import "./styles.scss";

const Ideas: React.FC = () => {
    return (
        <section className="ideas">
            <Container>
                <SectionHeader 
                    className="ideas__header" 
                    title="More inspiration ideas in our blog" 
                    align={'center'}
                />
                <div className="ideas__wrapper">
                    <Post
                        title="Listicle actually selvage activated charcoal for the drinking vinegar"
                        category="Inrerior"
                        author="Ann Summers"
                        date="March 12, 2020"
                        src="/desire/img/ideas/1.jpg"
                    />
                    <Post
                        title="Red selfies edison bulb four dollar toast humblebrag"
                        category="Dining room interior"
                        author="Finnagan Morningstar"
                        date="September 28,2020"
                        src="/desire/img/ideas/2.jpg"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Ideas;
