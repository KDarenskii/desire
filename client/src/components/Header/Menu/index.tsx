import React from "react";
import cn from "classnames";
import MenuLink from "./MenuLink";

import "./styles.scss";

type MenuProps = {
    links: { text: string; to: string }[];
    type?: "radius";
    isActive: boolean;
};

const Menu: React.FC<MenuProps> = ({ links, type, isActive }) => {
    return (
        <nav className={cn("menu", { "menu--radius": type }, { 'menu--active': isActive })}>
            <ul className="menu__list">
                {links.map((link, index) => {
                    return (
                        <li key={index} className="menu__item">
                            <MenuLink to={link.to} text={link.text} />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
