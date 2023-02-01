import React from "react";

import "./styles.scss";

type MenuButtonProps = {
    toggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ toggle }) => {
    return (
        <div onClick={toggle} className="menu-button">
            <span></span>
        </div>
    );
};

export default MenuButton;
