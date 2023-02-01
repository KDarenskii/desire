import React from "react";
import CategoriesItem from "./CategoriesItem";
import cn from "classnames";

import "./styles.scss";

type CategoriesProps = {
    className?: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
    return (
        <section className={cn('categories', className)}>
            <h5 className="categories__title">Categories</h5>
            <ul className="categories__list">
                <CategoriesItem className="categories__list-item" to="#" text="Dining room" count={1} />
                <CategoriesItem className="categories__list-item" to="#" text="Office furniture" count={12} />
                <CategoriesItem className="categories__list-item" to="#" text="Simple interior design" count={2} />
                <CategoriesItem className="categories__list-item" to="#" text="Design" count={4} />
                <CategoriesItem className="categories__list-item" to="#" text="Bedroom Furniture" count={1} />
            </ul>
        </section>
    );
};

export default Categories;
