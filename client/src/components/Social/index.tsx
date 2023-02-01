import React from "react";

import "./styles.scss";

const Social: React.FC = () => {
    return (
        <ul className="social">
            <li className="social__item">
                <a className="social__item-link social__item-link--facebook" href="#">
                    Facebook
                </a>
            </li>
            <li className="social__item">
                <a className="social__item-link social__item-link--instagram" href="#">
                    Instagram
                </a>
            </li>
            <li className="social__item">
                <a className="social__item-link social__item-link--pinterest" href="#">
                    Pinterest
                </a>
            </li>
            <li className="social__item">
                <a className="social__item-link social__item-link--whatsapp" href="#">
                    WhatsApp
                </a>
            </li>
            <li className="social__item">
                <a className="social__item-link social__item-link--youtube" href="#">
                    Youtube
                </a>
            </li>
        </ul>
    );
};

export default Social;
