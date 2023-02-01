import React from "react";
import ContactForm from "../ContactForm";
import Container from "../Container";
import Email from "../Email";
import SectionHeader from "../SectionHeader";
import ShortSocial from "../ShortSocial";

import "./styles.scss";

const ContactUs: React.FC = () => {
    return (
        <section className="contact-us">
            <Container>
                <SectionHeader titleClassName="contact-us__title" title="Contact us" hasUnderline={true} underlineClassName="contact-us__underline" />
                <div className="contact-us__info">
                    <ShortSocial />
                    <p className="contact-us__text">
                        Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee
                        street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny
                        pack normcore. Lo-fi pop-up banjo portland, echo park hammock
                    </p>
                    <div className="contact-us__location">
                        <div className="contact-us__item">
                            <a className="contact-us__item-link" href="tel:4158297934">(415) 829-7934</a>
                        </div>
                        <div className="contact-us__item">
                            <a className="contact-us__item-link" href="#">725 Green St</a>
                        </div>
                        <div className="contact-us__item">
                            <a className="contact-us__item-link" href="#">San Francisco, California(CA), 94133</a>
                        </div>
                    </div>
                    <Email text="ouremailaddress@email.com" />
                    <ContactForm className="contact-us__form" />
                </div>
            </Container>
        </section>
    );
};

export default ContactUs;