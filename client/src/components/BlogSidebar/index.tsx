import React from "react";
import Categories from "../Categories";
import Recent from "../Resent";
import Search from "../Search";
import ShortSocial from "../ShortSocial";
import Tags from "../Tags";

import "./styles.scss";

const BlogSidebar: React.FC = () => {
    return (
        <aside className="blog-sidebar">
            <Search className="blog-sidebar__search" />
            <Categories className="blog-sidebar__categories" />
            <Recent className="blog-sidebar__resent" />
            <Tags className="blog-sidebar__tags" />
            <ShortSocial />
        </aside>
    );
};

export default BlogSidebar;
