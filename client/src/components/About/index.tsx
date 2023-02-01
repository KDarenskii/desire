import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import AboutVideo from "./AboutVideo";

import "./styles.scss";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about__intro">
                <Container>
                    <h2 className="about__intro-title">About Us</h2>
                </Container>
            </div>

            <div className="about__content">
                <Container>
                    <SectionHeader 
                        title="Balance in the simple through an informed marriage of design, functional and craft" 
                        hasUnderline={true}
                        className="about__content-header"
                        titleClassName="about__content-title"
                    />
                    <div className="about__content-info">
                        <p className="about__content-text">
                            Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin
                            coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper
                            mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave
                            literally post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art.
                            Enamel pin vaporware wayfarers, organic succulents hella sustainable cardigan.
                        </p>
                        <p className="about__content-text">
                            Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday
                            carry +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly
                            single-origin coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral
                            intelligentsia leggings raw denim kombucha tote bag messenger bag chambray vape coloring
                            book scenester. Activated charcoal wayfarers church-key tote bag synth brunch. Retro
                            cornhole
                        </p>
                    </div>
                </Container>
            </div>

            <AboutVideo />

        </section>
    );
};

export default About;
