import React from "react";

export const useMenu = () => {
    
    const [isActive, setIsActive] = React.useState(false);

    const toggle = () => setIsActive(prev => !prev);

    return { isMenuActive: isActive, toggleMenu: toggle, setIsMenuActive: setIsActive };
};
