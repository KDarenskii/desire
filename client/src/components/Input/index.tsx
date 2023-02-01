import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

import "./styles.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
    return <input {...rest} className={cn("input", className)} />;
};

export default Input;
