import React from "react";

export const useMenu = () => {
    
    const [isActive, setIsActive] = React.useState(false);

    const toggle = () => {
        document.body.classList.toggle('lock');
        setIsActive(prev => !prev);
    }
    return { isActive, toggle, setIsActive };
};
