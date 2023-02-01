import React from "react";
import ModalVideo from "react-modal-video";
import playIconSrc from "../../../assets/img/icons/play-icon.svg";

import "./styles.scss";

const AboutVideo: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} onClose={() => setIsOpen(false)} videoId="ySoA_O3iwMM" />
            <div className="about-video" onClick={() => setIsOpen(true)}>
                <img className="about-video__play-icon" src={playIconSrc} alt="Play" />
            </div>
        </>
    );
};

export default AboutVideo;
