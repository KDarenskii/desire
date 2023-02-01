import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";

import "./styles.scss";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = ({ className, ...rest }) => {
    return <textarea {...rest} className={cn("textarea", className)}></textarea>;
};

export default Textarea;
