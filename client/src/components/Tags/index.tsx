import React from "react";
import TagButton from "../TagButton";
import cn from "classnames";

import "./styles.scss";

type TagsProps = {
    className?: string;
};

const Tags: React.FC<TagsProps> = ({ className }) => {
    return (
        <section className={cn("tags", className)}>
            <h5 className="tags__title">Tags</h5>
            <div className="tags__wrapper">
                <TagButton>Dining room furniture</TagButton>
                <TagButton>Chair</TagButton>
                <TagButton>Table</TagButton>
                <TagButton>Bedroom</TagButton>
                <TagButton>Office Furniture</TagButton>
            </div>
        </section>
    );
};

export default Tags;
