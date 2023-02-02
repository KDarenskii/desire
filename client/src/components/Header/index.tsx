import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE, BLOG_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE } from "../../constants/routesPathnames";
import Container from "../Container";
import Sidebar from "../Sidebar";
import SidebarButton from "../Sidebar/SidebarButton";
import Menu from "./Menu";
import logoSrc from "../../assets/img/icons/logo.png";
import MenuButton from "./Menu/MenuButton";
import { useMenu } from "../../hooks/useMenu";
import { useSidebar } from "../../hooks/useSidebar";

import "./styles.scss";

const Header: React.FC = () => {

    const { isMenuActive, toggleMenu, setIsMenuActive } = useMenu();
    const { isSidebarActive, setIsSidebarActive } = useSidebar();

    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <MenuButton isActive={isMenuActive} toggle={toggleMenu} />
                    <Menu
                        toggle={toggleMenu}
                        isActive={isMenuActive}
                        links={[
                            { text: "About", to: ABOUT_ROUTE },
                            { text: "Gallery", to: GALLERY_ROUTE },
                        ]}
                    />
                    <Link className="header__logo" to={HOME_ROUTE} onClick={() => setIsMenuActive(false)}>
                        <img className="header__logo" src={logoSrc} alt="logo" />
                    </Link>
                    <Menu
                        toggle={toggleMenu}
                        isActive={isMenuActive}
                        type={"radius"}
                        links={[
                            { text: "Blog", to: BLOG_ROUTE },
                            { text: "Contact", to: CONTACT_ROUTE },
                        ]}
                    />
                    <Sidebar setIsActive={setIsSidebarActive} isActive={isSidebarActive} />
                    <SidebarButton setIsActive={setIsSidebarActive} type={"open"} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
