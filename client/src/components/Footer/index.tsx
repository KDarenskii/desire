import React from "react";
import ActionButton from "../ActionButton";
import Container from "../Container";
import Email from "../Email";
import Input from "../Input";
import Social from "../Social";

import "./styles.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__body">
                <Container>
                    <div className="footer__wrapper">
                        <div className="footer__contact">
                            <div className="footer__contact-title">Contact Us</div>
                            <p className="footer__contact-text">
                                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably
                                occupy
                            </p>
                            <Email text="ouremailaddress@email.com" />
                            <form className="footer__form">
                                <Input
                                    className="footer__form-input"
                                    type="email"
                                    placeholder="Subscribe by email"
                                    required
                                />
                                <ActionButton className="footer__form-btn" type="submit">
                                    Send
                                </ActionButton>
                            </form>
                        </div>
                        <Social />
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Delivery
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    FAQ
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    Help
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">
                                    More About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            <div className="footer__copyright">
                <Container>674 Gonzales Drive. Washington, PA 15301</Container>
            </div>
        </footer>
    );
};

export default Footer;
