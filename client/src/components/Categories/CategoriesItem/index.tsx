import React from 'react'
import { Link } from 'react-router-dom';
import cn from "classnames";

import "./styles.scss";

type CategoriesProps = {
    count: number;
    text: string;
    to: string;
    className?: string;
}

const CategoriesItem: React.FC<CategoriesProps> = ({ className, count, text, to }) => {
    return (
        <li className={cn('categories-item', className)}>
            <Link className="categories-item__link" to={to}>{text} {`(${count})`}</Link>
        </li>
    )
}

export default CategoriesItem