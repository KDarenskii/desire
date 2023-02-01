import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import "./styles.scss";

type TagButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const TagButton: React.FC<TagButtonProps> = ({ children, className, ...rest }) => {
    return (
        <button {...rest} className={cn("tag-button", className)}>
            {children}
        </button>
    );
};

export default TagButton;
