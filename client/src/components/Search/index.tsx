import React from "react";
import cn from "classnames";

import "./styles.scss";

type SearchProps = {
    className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
    return <input className={cn("search", className)} name="search" type="text" placeholder="Search" />;
};

export default Search;
