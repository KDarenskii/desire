import React from "react";
import logoSrc from "../../assets/img/icons/logo.png";
import cn from "classnames";

import "./styles.scss";
import SidebarButton from "./SidebarButton";

type SidebarProps = {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
    return (
        <aside className={cn('sidebar', { 'sidebar--active': isActive })}>
            <SidebarButton type={'close'} setIsActive={setIsActive} />
            <header className="sidebar__header">
                <img className="sidebar__logo" src={logoSrc} alt="Logo" />
                <h4 className="sidebar__title">Furniture for life</h4>
                <p className="sidebar__text">
                    Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry
                    +1 art party microdosing, put a bird on it brooklyn
                </p>
            </header>
            <img className="sidebar__photo" src="img/sidebar-photo.jpg" alt="Photo" />
        </aside>
    );
};

export default Sidebar;
