import React from "react";
import { Link } from 'react-router-dom';

import "./styles.scss";

type MenuLinkProps = {
    text: string;
    to: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, text }) => {
    return <Link className="menu-link" to={to}>{text}</Link>
};

export default MenuLink;
