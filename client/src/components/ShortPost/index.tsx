import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./styles.scss";

type ShortPostProps = {
    title: string;
    date: string;
    author: string;
    className?: string;
};

const ShortPost: React.FC<ShortPostProps> = ({ title, date, author, className }) => {
    return (
        <article className={cn("short-post", className)}>
            <h5 className="short-post__title">
                <Link className="short-post__title-link" to="#">
                    {title}
                </Link>
            </h5>
            <span className="short-post__date">{date}</span>
            <span> | </span>
            <Link className="short-post__author" to="#">
                by {author}
            </Link>
        </article>
    );
};

export default ShortPost;
