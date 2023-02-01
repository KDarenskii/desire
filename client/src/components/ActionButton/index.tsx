import React, { ButtonHTMLAttributes } from 'react';
import cn from "classnames";

import "./styles.scss";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton: React.FC<ActionButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={cn('action-button', className)}>{children}</button>
  )
}

export default ActionButton