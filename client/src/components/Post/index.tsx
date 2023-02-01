import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./styles.scss";
import ImageWithLoader from "../ImageWithLoader";

type PostProps = {
    title: string;
    date: string;
    category: string;
    author: string;
    src: string;
    text?: string;
    className?: string;
}

const Post: React.FC<PostProps> = ({ title, date, category, author, src, text, className }) => {
    return (
        <article className={cn('post', className)}>
            <div className="post__photo-box">
                <ImageWithLoader
                    src={src}
                    imageClassName="post__img"
                    alt="Post photo"
                    height={308}
                    width={540}
                />
            </div>
            <div className="post__info">
                <span className="post__date">{date}</span>
                <span className="post__line"> | </span>
                <Link className="post__author" to="#">by {author}</Link>
                <span className="post__line"> | </span>
                <Link className="post__category" to="#">{category}</Link>
            </div>
            <h4 className="post__title">
                <Link className="post__title-link" to="#">{title}</Link>
            </h4>
            {text}
        </article>
    );
};

export default Post;