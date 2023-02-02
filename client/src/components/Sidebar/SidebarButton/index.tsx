import React from "react";
import sidebarButtonSrc from "../../../assets/img/icons/sidebar-button.svg";
import closeIconSrc from "../../../assets/img/icons/close-icon.svg";

import "./styles.scss";

type SidebarButtonProps = {
    type: 'open' | 'close';
    setIsActive: (status: boolean) => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ type, setIsActive }) => {
    return (
        <>
            {type === 'open' && (
                <button onClick={() => setIsActive(true)} className="sidebar-button">
                    <img className="sidebar-button__img" src={sidebarButtonSrc} alt="Sidebar Button" />
                </button>
            )}
            {type === 'close' && (
                <button onClick={() => setIsActive(false)} className="sidebar__close">
                    <img className="sidebar__close-img" src={closeIconSrc} alt="Close" />
                </button>
            )}
        </>
    );
};

export default SidebarButton;
