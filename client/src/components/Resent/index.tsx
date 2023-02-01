import React from "react";
import ShortPost from "../ShortPost";
import cn from "classnames";

import "./styles.scss";

type RecentProps = {
    className?: string;
};

const Recent: React.FC<RecentProps> = ({ className }) => {
    return (
        <section className={cn("resent", className)}>
            <h5 className="resent__title">Resent Posts</h5>
            <ul className="resent__list">
                <li className="resent__list-item">
                    <ShortPost
                        title="Cred selfies edison bulb four dollar toast humblebrag"
                        date="August 10, 2020"
                        author="Ann Summers"
                    />
                </li>
                <li className="resent__list-item">
                    <ShortPost
                        title="Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth"
                        date="September 30, 2020"
                        author="Ann Summers"
                    />
                </li>
                <li className="resent__list-item">
                    <ShortPost
                        title="Cred selfies edison bulb four dollar toast humblebrag"
                        date="May 2, 2020"
                        author="Ann Summers"
                    />
                </li>
            </ul>
        </section>
    );
};

export default Recent;
