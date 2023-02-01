import React from "react";
import cn from "classnames";

import "./styles.scss";

type PaginationProps = {
    children: React.ReactNode;
    className?: string;
};

const Pagination: React.FC<PaginationProps> = ({ children, className }) => {
    return <ul className={cn("pagination", className)}>{children}</ul>;
};

export default Pagination;
