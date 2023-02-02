import React from "react";

export const useSidebar = () => {
    const [isActive, setIsActive] = React.useState(false);
    const setIsSidebarActive = (status: boolean) => {
        document.body.classList.toggle('lock');
        setIsActive(status);
    }
    return { isSidebarActive: isActive, setIsSidebarActive };
}