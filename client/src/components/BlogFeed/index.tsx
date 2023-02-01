import React from "react";
import Post from "../Post";
import Quote from "../Quote";
import arrowIconSrc from "../../assets/img/icons/arrow-right.svg";
import Pagination from "../Pagination";
import PaginationItem from "../Pagination/PaginationItem";

import "./styles.scss";

const BlogFeed: React.FC = () => {
    return (
        <div className="blog-feed">
            <Post
                className="blog-feed__post"
                author="Ann Summers"
                category="Bedroom Furniture"
                title="Red selfies edison bulb four dollar toast humblebrag for the furniture"
                text="Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
                date="August 15, 2020"
                src="img/posts/1.jpg"
            />
            <Quote
                className="blog-feed__post blog-feed__quote"
                text="Simplicity is not the goal. It is the by-product of a good idea and modest expectations"
                author="Paul Rand"
            />
            <Post
                className="blog-feed__post"
                author="Lux Morningstar"
                category="Design"
                title="Authentic kogi shabby chic"
                date="August 12, 2020"
                src="img/posts/2.jpg"
            />
            <Post
                className="blog-feed__post"
                author="Ann Summers"
                category="Table Furniture"
                title="Semiotics fixie four dollar toast, next level woke"
                text="Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
                date="August 18, 2020"
                src="img/posts/1.jpg"
            />
            <Pagination>
                <PaginationItem to="#">
                    <img className="blog-feed__pagination-arrow blog-feed__pagination-arrow--left" src={arrowIconSrc} alt="Arrow Left" />
                </PaginationItem>
                <PaginationItem to="#" isActive={true}>1</PaginationItem>
                <PaginationItem to="#">2</PaginationItem>
                <PaginationItem to="#">
                    <img className="blog-feed__pagination-arrow" src={arrowIconSrc} alt="Arrow Right" />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default BlogFeed;