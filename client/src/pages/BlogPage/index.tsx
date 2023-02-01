import React from "react";
import BlogFeed from "../../components/BlogFeed";
import BlogSidebar from "../../components/BlogSidebar";
import Container from "../../components/Container";
import Search from "../../components/Search";

import "./styles.scss";

const BlogPage: React.FC = () => {
    return (
        <Container>
            <div className="blog-page">
                <Search className="blog-page__search" />
                <div className="blog-page__wrapper">
                    <BlogFeed />
                    <BlogSidebar />
                </div>
            </div>
        </Container>
    );
};

export default BlogPage;
