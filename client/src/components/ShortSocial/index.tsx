import React from "react";
import { Link } from "react-router-dom";
import facebookIconSrc from "../../assets/img/icons/social/facebook.svg";
import instagramIconSrc from "../../assets/img/icons/social/instagram.svg";
import pinterestIconSrc from "../../assets/img/icons/social/pinterest.svg";
import whatsappIconSrc from "../../assets/img/icons/social/whatsapp.svg";
import twitterIconSrc from "../../assets/img/icons/social/twitter.svg";

import "./styles.scss";

const ShortSocial: React.FC = () => {
    return (
        <ul className="short-social">
            <li className="short-social__item">
                <Link className="short-social__item-link" to="#">
                    <img src={facebookIconSrc} alt="Facebook" className="short-social__item-img" />
                </Link>
            </li>
            <li className="short-social__item">
                <Link className="short-social__item-link" to="#">
                    <img src={instagramIconSrc} alt="Instagram" className="short-social__item-img" />
                </Link>
            </li>
            <li className="short-social__item">
                <Link className="short-social__item-link" to="#">
                    <img src={pinterestIconSrc} alt="Pinterest" className="short-social__item-img" />
                </Link>
            </li>
            <li className="short-social__item">
                <Link className="short-social__item-link" to="#">
                    <img src={whatsappIconSrc} alt="WhatsApp" className="short-social__item-img" />
                </Link>
            </li>
            <li className="short-social__item">
                <Link className="short-social__item-link" to="#">
                    <img src={twitterIconSrc} alt="Twitter" className="short-social__item-img" />
                </Link>
            </li>
        </ul>
    );
};

export default ShortSocial;
