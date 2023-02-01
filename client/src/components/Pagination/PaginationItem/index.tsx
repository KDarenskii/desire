import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import "./styles.scss";

type PaginationItemProps = {
    children: React.ReactNode;
    to: string;
    isActive?: boolean;
    className?: string;
};

const PaginationItem: React.FC<PaginationItemProps> = ({ children, to, className, isActive }) => {
    return (
        <li className="pagination-item">
            <Link className={cn('pagination-item__link', { 'pagination-item__link--active': isActive }, className)} to={to}>{children}</Link>
        </li>
    );
};

export default PaginationItem;
