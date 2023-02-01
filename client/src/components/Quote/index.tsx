import React from "react";
import cn from "classnames";

import "./styles.scss";

type QuoteProps = {
    text: string;
    author: string;
    className?: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author, className }) => {
    return (
        <blockquote className={cn("quote", className)}>
            <p className="quote__text">{`“${text}”`}</p>
            <p className="quote__author">{author}</p>
        </blockquote>
    );
};

export default Quote;
