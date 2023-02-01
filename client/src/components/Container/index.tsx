import React from "react";
import cn from "classnames";

import "./styles.scss";

type ContainerProps = {
    children: React.ReactNode;
    type?: "fluid";
};

const Container: React.FC<ContainerProps> = ({ children, type }) => {
    return (
        <div className={cn("container", { "container--fluid": type })}>
            {children}
        </div>
    );
};

export default Container;
