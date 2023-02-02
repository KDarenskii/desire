import React from "react";
import cn from "classnames";

import "./styles.scss";

type MenuButtonProps = {
    isActive: boolean;
    toggle: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ toggle, isActive }) => {
    return (
        <div onClick={toggle} className={cn("menu-button", { "menu-button--active": isActive })}>
            <span></span>
        </div>
    );
};

export default MenuButton;
